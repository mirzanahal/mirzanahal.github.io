---
layout: page
title: Asynchronous Graph Neural Networks
description: Extending GNN expressivity beyond the classical 1-WL limit using Asynchronous Message Passing.
img: assets/img/gnn-problem.png
importance: 1
category: proof of concepts
related_publications: false
---

During the summer of 2022, I conducted research at the Vikas Lab at Aalto University (Espoo, Finland) under supervision of Prof. [Vikas K. Garg](https://scholar.google.com/citations?user=JFT_m9kAAAAJ&hl=en). Our work focused on exploring the theoretical foundations of Graph Neural Networks (GNNs), specifically investigating how altering the timing of message-passing mechanism could fundamentally increase a network's expressivity.

### The Problem: Limitations of Standard GNNs

Graph Neural Networks traditionally rely on synchronous Message Passing (MP), where all nodes in a graph update their hidden states simultaneously based on their neighbors' messages. While effective, this approach has strict theoretical limitations:
* **The 1-WL Limit:** The expressiveness of a standard GNN—its ability to map different graph structures to different embeddings—is strictly limited to the 1-Weisfeiler-Lehman test for identifying graph isomorphisms. Even with an infinite number of layers, there are distinct, non-isomorphic graph structures that standard GNNs will map to the exact same embedding.
* **Information Bottlenecks:** Finding the optimal number of layers is a constant trade-off between *underreaching* (not gathering enough neighborhood context) and *over-smoothing/over-squashing* (aggregating too much information into a single node, causing distinct nodes to become indistinguishable).

<div class="row justify-content-center">
    <div class="col-md-10 mt-3 mt-md-0">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/gnn-problem.png" 
            title="Limitations of Synchronous Message Passing in GNNs" 
            class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    <b>Figure 1.</b> <b>Information trees in synchronous message passing GNNs.</b> 
    The left and right graphs are non-isomorphic, yet their node information trees remain identical at each layer. Consequently, nodes with identical hidden representations receive the same update messages, ultimately leading to indistinguishable graph embeddings. This illustrates a fundamental limitation in the expressivity of conventional synchronous message passing GNNs.
</div>

### The Solution: Asynchronous Message Passing (AMP)

To create more powerful GNNs, we explored **Asynchronous Message Passing (AMP)**. Instead of updating all nodes simultaneously, AMP updates nodes sequentially based on a calculated order. 

<div class="row justify-content-center">
    <div class="col-md-10 mt-3 mt-md-0">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/gnn-solution.png" 
            title="Asynchronous Message Passing Improves Expressivity" 
            class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    <b>Figure 2.</b> <b>Asynchronous message passing (AMP) improves graph expressivity.</b> 
    In AMP, node representations are updated sequentially according to a predefined ordering. This induces different update messages for nodes in the two non-isomorphic graphs, enabling the model to distinguish structures that remain indistinguishable under standard synchronous message passing. The example demonstrates how AMP can achieve greater expressive power than conventional GNN architectures.
</div>

This subtle shift in dynamics yields significant theoretical advantages:
* **Breaking Symmetry:** AMP can successfully distinguish nodes that have similar neighborhood states by leveraging information trees based on the precise *time* of updating.
* **Beyond 1-WL Expressivity:** We gathered evidence demonstrating that AMP can embed non-isomorphic graphs into *different* embeddings—a feat synchronous message passing cannot achieve, effectively pushing the model's expressivity beyond the 1-WL limit.
* **Easier Information Flow:** In an asynchronous setup, nodes can reach information from further away in the graph much more easily, resulting in a more relaxed state of over-smoothing and over-squashing.
