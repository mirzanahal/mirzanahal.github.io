---
layout: page
title: Implicit Regularization & Shortcut Learning
description: Mitigating spurious correlations by tuning optimization inductive biases.
img: assets/img/publication_preview/implicit.jpg
importance: 1
category: work
related_publications: true
---

In safety-critical domains like healthcare, biomedical data often contains complex, unknown, or hard-to-eliminate biases. When machine learning models train on this data, they frequently rely on "shortcuts"—spurious features that are strongly correlated with the target label in the training distribution but remain unstable across different environments. 

Learning these shortcuts severely impedes the model's ability to identify invariant, core features. As a result, a model might achieve high overall accuracy on average, but fail catastrophically on out-of-distribution or minority samples where the spurious correlation does not hold. 

My PhD thesis focuses on modifying the *inductive biases* of models to prioritize robust, fair performance across all subpopulations. Specifically, I explore how optimization hyperparameters, like batch size and learning rate, govern a model's reliance on these shortcuts.



### The Optimizer's Role: SGD vs. Gradient Descent

Gradient-based optimizers are often treated as black boxes that converge to a max-margin solution, but they play a fundamental role in what a model actually chooses to learn. Even when fully informative invariant features exist, models often favor spurious features because they artificially increase the margin, accelerating the reduction of empirical loss during optimization.

Our research uncovers a striking phenomenon: **Stochastic Gradient Descent (SGD) systematically suppresses dependence on spurious features, while full-batch Gradient Descent (GD) does not confer this benefit and may actually exacerbate shortcut reliance**. 

This happens due to the *implicit regularization* inherent to the optimizers. While GD penalizes the squared norm of the full-batch gradient (favoring flatter minima), SGD additionally penalizes the variance of gradients across mini-batches.

<div class="row justify-content-center">
    <div class="col-md-10 mt-3 mt-md-0">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/implicit_fig1.png" 
            title="Implicit Regularization of GD and SGD" 
            class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    <b>Figure 1.</b> <b>Implicit regularization of GD and SGD on a four-point dataset with FIIF.</b> 
    <b>(a)</b> Four-point dataset with a fully informative invariant feature (FIIF). The data lie in two dimensions: an invariant feature ($y$) and a spurious feature ($z$). Majority samples are shown in saturated colors. The invariant solution $w_{\mathrm{INV}}$ achieves perfect classification. Similarly, the solutions minimizing $C(w)$, $C_{\mathrm{GD}}(w)$, and $C_{\mathrm{SGD}}(w)$, denoted by $w^\star$, $w^\star_{\mathrm{GD}}$, and $w^\star_{\mathrm{SGD}}$, respectively, also achieve perfect accuracy, but with larger margins with respect to majority samples. 
    <b>(b)</b> Comparison of the minima of $C(w)$, $C_{\mathrm{GD}}(w)$, and $C_{\mathrm{SGD}}(w)$, together with schematic trajectories illustrating the optimization flows of SGD (blue) and GD (red). 
    <b>(c,d)</b> Implicit regularization landscapes of GD and SGD, where darker regions indicate lower values. Notably, SGD imposes a weaker penalty on solutions with smaller $w_z$, thereby favoring parameters that rely less on the spurious feature.
</div>

### The Power of Small Batch Sizes & Large Learning Rates

We established both theoretically (using a four-point data generation model) and empirically across deep neural networks that the robustness gains from SGD are directly tied to hyperparameters: the effect intensifies with **smaller batch sizes** and **larger learning rates**. 

<div class="row justify-content-center">
    <div class="col-md-10 mt-3 mt-md-0">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/implicit_fig2.png" 
            title="Joint Effect of Learning Rate and Batch Size" 
            class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    <b>Figure 2.</b> <b>Joint effect of learning rate and batch size on WGA and ACC.</b> 
    Across all datasets, smaller batch sizes consistently achieve higher worst-group accuracy (WGA) when in-distribution generalization is maintained, indicating improved robustness to spurious correlations. Extremely small or large learning rates can lead to optimization failure and poor in-distribution generalization, in which case robustness comparisons become unreliable. These results highlight the importance of the learning-rate-to-batch-size ratio in shaping SGD’s implicit regularization and its effect on robustness.
</div>

By viewing each mini-batch as a sampled "domain" from the training distribution, smaller batch sizes naturally increase the variability in subpopulation composition. Suppressing gradient variance under these highly fluctuating conditions forces the model to abandon shortcuts and rely on stable, invariant features, significantly improving Worst-Group Accuracy (WGA). 

Furthermore, we found that training with small batch sizes provides a much stronger inductive bias when paired with explicit debiasing methods (like DFR, AFR, and EVaLS), yielding WGA improvements of 25-37% on complex datasets with multi-level spurious correlations.

This perspective reveals that robustness can emerge naturally from the inductive biases of standard optimizers, reducing the need for exhaustive hyperparameter searches in explicit shortcut-mitigation frameworks {% cite mirzaie2026implicit %}.
