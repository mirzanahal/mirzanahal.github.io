---
layout: page
title: Snuffy for Whole Slide Images
description: Biologically-inspired localized attention masks for gigapixel pathology.
img: assets/img/snuffy_thumbnail.jpg
importance: 3
category: academic
related_publications: true
---

As part of my research at the Rohban Lab, we developed **Snuffy**, an efficient Whole Slide Image (WSI) classifier published at ECCV 2024. Analyzing WSIs is notoriously difficult because a single slide can contain billions of pixels. 

Traditional Multiple Instance Learning (MIL) methods often sub-sample the image or treat tissue patches as completely independent entities, ignoring the spatial structure. Snuffy solves this by using spatial convolutions to merge patches, drastically reducing the sequence length while retaining 100% of the tissue data.

My primary contribution to this project was bridging the gap between tumor biology and transformer mathematics—specifically, designing the new attention mask and formulating its theoretical proof.


---
layout: page
title: Snuffy for Whole Slide Images
description: Universal approximation sparse transformers for gigapixel pathology.
img: assets/img/snuffy_sp.jpg
importance: 1
category: work
related_publications: true
---

As part of my research at the Rohban Lab, we developed **Snuffy**, an efficient Whole Slide Image (WSI) classifier published at ECCV 2024. Analyzing WSIs is notoriously difficult because a single slide can contain billions of pixels, requiring architectures that can efficiently process massive sequences of tissue patches without losing critical diagnostic data.

My primary contribution to this project was bridging the gap between tumor biology and transformer mathematics—specifically, designing the Snuffy sparsity patterns and formulating the theoretical proof that guarantees the model functions as a universal approximator.


### The Biological Concept: The Tumor Microenvironment

Present sparsity patterns are predominantly designed with a focus on NLP tasks, often relying on strict locality windowed patterns. However, in the domain of WSIs, this NLP-centric approach falls short. 

Biologically, a tumor's behavior and the detection of cancer depend heavily on the broader tissue microenvironment. Pathologists frequently depend on the identification of non-related tissue embedded within other tissues as a pivotal biomarker for cancer detection. Crucially, this remains true even in instances where the tissue itself does not exhibit overt signs of malignancy. Therefore, to accurately model WSIs, the attention mechanism must be able to capture these critical, non-local insights rather than being artificially restricted to immediate neighbors.

### The Solution: Snuffy Sparsity Patterns

Inspired by the inherent characteristics of WSI analysis, we proposed the **Snuffy sparsity patterns**. Instead of standard local windows, the Snuffy sparsity concept comprises three targeted key elements:

1. **Class-related Global Attentions (Λ_top):** These are crucial for the final classification task. We leverage our max-pooling component to identify these top patches; after several iterations, the scores converge and these patches remain constant across layers.
2. **Random Global Attentions (Λ_lr):** We incorporate random patches into the design to integrate insights from the broader tissue microenvironment, enhancing the capture of critical information across the slide.
3. **Diagonal Attentions (k):** This ensures that even if contextual attention embeddings are not computed within the self-attention framework for a specific patch, the patch's original embedding remains preserved in the output.



### The Proof: Universal Approximation 

My core theoretical contribution was demonstrating that our sparse transformer serves as a **universal approximator** for sequence-to-sequence functions. 

To satisfy the necessary mathematical criteria, we had to demonstrate the existence of a Hamiltonian path in the graph corresponding to the union of our Snuffy sparsity patterns. Drawing on graph theory (specifically, that a graph where the maximum independent set is less than or equal to its chromatic number has a Hamiltonian cycle), we proved that covering half of the patches in all layers satisfies these properties and leads to the formation of a Hamiltonian path.

I modeled this observation as a generalized version of the **coupon collector problem**, where the goal is to collect half of the "coupons" (patches) in a uniform group setting. 

Ultimately, the proof establishes that our transformer does not necessitate Ω̃(n) layers as suggested in previous studies. Instead, it requires only **O(n log 2 / λ_r)** layers to ensure universal approximation with high probability, achieving the most stringent probabilistic limit of the layer count to date.

<div class="row justify-content-center">
    <div class="col-md-10 mt-3 mt-md-0">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/snuffy_pip.png" 
            title="Overview of the proposed method" 
            class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    <b>Figure 1.</b> <b>Overview of the proposed method.</b> 
   a) The WSIs are segmented into 256 × 256 patches at 20X magnification, followed by embedding extraction via a pre-trained ViT. Subsequently, these embeddings are inputted into the Snuffy for patch and WSI classification. (b) The connectivity matrix illustrates the Snuffy attention spar- sity patterns, with Class-related Global Attentions, highlighted in darker colors either vertical or horizontal (the darker the more important), Diagonal Attentions depicted with pink, and Random Global Attentions shown in the lightest pink.
</div>
 
### Impact and Results

<div class="row justify-content-center">
    <div class="col-md-10 mt-3 mt-md-0">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/snuffy_fig3.png" 
            title="Qualitative view of ROIs recognized by Suffy through its Patch Classification" 
            class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    <b>Figure 2.</b> <b>Qualitative view of ROIs recognized by Suffy through its Patch Classification.</b> 
   (a) An example WSI from the test set of the CAMELYON16 dataset. (b) ROIs are identified by Snuffy with black lines delineating the ground truth ROIs.
</div>

By combining this biologically grounded attention mask with Snuffy's architecture, we achieved:
* **State-of-the-Art Accuracy:** Superior performance on major computational pathology benchmarks like TCGA-BRCA and TCGA-LUNG.
* **Biological Interpretability:** Attention maps that actually correlate with localized, meaningful tissue structures rather than scattered noise {% cite jafarinia2024snuffy %}.

<div class="row justify-content-center">
    <div class="col-md-10 mt-3 mt-md-0">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/snuffy_fig1.png" 
            title="Performance (AUC) vs. efficiency (size and time) trade off on CAMELYON16" 
            class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    <b>Figure 3.</b> Performance (AUC) vs. efficiency (size and time) trade off on CAMELYON16.</b> 
</div>
