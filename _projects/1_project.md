---
layout: page
title: COVID-19 Drug Efficiency Estimation
description: Weakly-supervised hit discovery with confidence scoring using RxRx19a HTS data.
img: assets/img/rna.jpg
importance: 2
category: academic
related_publications: true
---

During my M.Sc. in Bioinformatics at Sharif University of Technology, my research in the [Robust and Interpretable Machine Learning (RIML) Lab](https://www.linkedin.com/company/robust-and-interpretable-machine-learning-lab/posts/?feedView=all) focused on evaluating potential prophylactic treatments against SARS-CoV-2. We utilized the [RxRx19a](https://www.rxrx.ai/rxrx19a) dataset from Recursion Pharmaceuticals, which contains high-throughput, five-channel fluorescent microscopy images of cells treated with various FDA/EMA-approved drugs.

The primary goal of this project was to extract cellular morphological features at the single-cell level and aggregate them to estimate the antiviral efficacy (hit score) of different drug-dose combinations.

<div class="row justify-content-center">
    <div class="col-6 col-md-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nucleus.jpg" title="Nucleus" class="img-fluid rounded z-depth-1" %}
    </div>

    <div class="col-6 col-md-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rna.jpg" title="RNA" class="img-fluid rounded z-depth-1" %}
    </div>

    <div class="col-6 col-md-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/golgi.jpg" title="Golgi apparatus" class="img-fluid rounded z-depth-1" %}
    </div>

    <div class="col-6 col-md-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/actin.jpg" title="Actin cytoskeleton" class="img-fluid rounded z-depth-1" %}
    </div>

    <div class="col-6 col-md-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/endo.jpg" title="Endoplasmic reticulum" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Representative five-channel fluorescence microscopy images showing the nucleus, RNA, Golgi apparatus, actin cytoskeleton, and endoplasmic reticulum.
</div>

### The Challenge: Out-of-Distribution (OOD) Phenotypes

A major hurdle in current drug discovery methods is that neural networks often identify promising hits that later fail in preclinical trials. In the context of the RxRx19a dataset, models were trained solely on healthy (negative control) and infected (positive control) cells, as their true efficacy score is given and trivia (healthy is 1 and infected is 0). 

Consequently, when predicting the efficacy of a treatment, the morphological features of the drugged cells were completely Out-of-Distribution (OOD) because the model had never seen them during training. This lack of exposure meant that previous algorithms couldn't be fully trusted and falsely flagged many toxic or ineffective treatments as positive hits. 

### A Novel Solution: Confidence-Based Estimation

To solve this, we developed a first-in-field, weakly-supervised hit prediction pipeline that calculates both a disease score and a confidence score for its predictions. 

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/miccai.jpg" title="Model Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Our pipeline: Image preprocessing (illumination correction and cell segmentation), feature embedding, data transformation (simulating drug effects), and the confident hit prediction network.
</div>

Instead of blindly trusting the model's judgment on unknown samples, our approach acknowledges its uncertainty. We introduced a unique data augmentation step using a mixup methodology, creating a transformed sample via a convex combination of positive and negative controls, and adding orthogonal noise to simulate both drug efficacy and side effects. 

During training, the model receives "hints" about the disease score. If the model relies heavily on these hints (indicating high uncertainty regarding OOD samples), it outputs a lower confidence score. 

### Results & Impact

By applying this confidence mechanism to both CellProfiler features and deep neural network embeddings (ResNet18), we significantly improved the reliability of hit discovery.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/results.jpg" title="Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
a) Replicate reproducibility test. The blue distributions are the null distribution. The red vertical line indicates the upper 95% of the null distribution. b) Stability test of disease scores with respect to the percentage of missing data. We can see our proposed method (orange) is more stable against missing data, while the RxRx19a origin algorithm fluctuates adversely after missing more than 15% of data. c) Disease score distributions of our weakly supervised confident hit predictions for negative and positive controls. We observed that the model properly predicts unseen inactive ultraviolet-irradiated SARS-CoV-2 scores in a zero-shot learning process. d) Calibration of Confidence scores. We bucketize disease scores into 10 bins, and calculate median of confidence score in each bin. This plot show model uncertainty and high entropy for disease score between [0.3, 0.7].
</div>

* **Higher Consensus:** The mean Jaccard similarity between the top 10 discovered drugs across different representation spaces increased from 0.13 to 0.20 when utilizing our confidence score.
* **Enhanced Stability:** Our model proved to be highly stable against missing data compared to the original, unstable algorithms used in RxRx19a.
* **Zero-Shot Robustness:** The pipeline accurately identified unseen, inactive ultraviolet-irradiated SARS-CoV-2 samples as healthy, proving its robustness in a zero-shot learning setup.

This research highlights the importance of mitigating shortcut learning and reducing reliance on spurious correlations in safety-critical medical AI {% cite mirzaie2023miccai %}.
