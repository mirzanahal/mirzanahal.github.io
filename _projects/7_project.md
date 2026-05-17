---
layout: page
title: Precision Genomics at PardisGene
description: Automated pipelines for precision oncology and rare disease diagnostics.
img: assets/img/pardis-logo.png
importance: 1
category: work
---

Before beginning my Ph.D., I worked as a Bioinformatician at [PardisGene](https://pardisgene.com) (supervised by Prof. Sharifi Zarchi), where I worked on applied clinical genomics. My work here was deeply rewarding as it directly impacted patient care, focusing on two major domains: Precision Oncology and Rare Disease Diagnostics.

### Precision Oncology: Automating Variant Discovery

Every tumor is genetically unique, and identifying the specific mutations driving a cancer is the first step toward personalized treatment. I developed an automated, end-to-end bioinformatics pipeline to analyze short-read Whole-Exome Sequencing (WES) data from Next-Generation Sequencing (NGS) of paired healthy and tumor tissues. 

The pipeline was engineered to identify a comprehensive suite of disease-causing variants:
* **Single Nucleotide Variants (SNVs)**
* **Copy Number Alterations (CNAs)**
* **Microsatellite Instability (MSI)**
* **Fusions** (specifically those detectable within exonic regions)

To make this clinically actionable, the pipeline cross-referenced the discovered variants against FDA-approved benchmarks to suggest the most effective, targeted medications for that specific tumor profile. 

**Tech Stack:** We built this robust, scalable workflow utilizing the **Broad Institute's GATK** (Genome Analysis Toolkit) and managed the pipeline orchestration using **Cromwell**.


### Rare Disease Diagnostics: Solving Genetic Mysteries

Beyond oncology, I also worked on diagnosing rare genetic disorders by analyzing the exomes of parents to explain the unexplained clinical phenotypes of their children. This involved hunting for dominant and recessive alterations, specifically SNVs, that passed from parent to child.

**Case Study: Wilson Disease Phenotype** One notable case involved a child presenting with severe, unexplained symptoms. Through our exome analysis pipeline, we identified a rare mutation on the ***ATP7B* gene**. This gene is responsible for providing instructions for making a protein called copper-transporting ATPase 2. The mutation disrupted this protein's function, leading to toxic copper buildup in the body, a hallmark phenotype of Wilson disease. Pinpointing this exact genetic cause provided the family with a definitive diagnosis and opened the door for targeted clinical management.
