// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-weakly-supervised-drug-efficiency-estimation-with-confidence-score-application-to-covid-19-drug-discovery-has-been-accepted-to-miccai-2023",
          title: 'Our paper, Weakly-Supervised Drug Efficiency Estimation with Confidence Score: Application to COVID-19 Drug...',
          description: "",
          section: "News",},{id: "news-i-am-attending-miccai-2023-in-vancouver",
          title: 'I am attending MICCAI 2023 in Vancouver.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-our-paper-snuffy-efficient-whole-slide-image-classifier-has-been-accepted-to-eccv-2024",
          title: 'Our paper, Snuffy: Efficient Whole Slide Image Classifier, has been accepted to ECCV...',
          description: "",
          section: "News",},{id: "news-we-are-organizing-the-workshop-on-spurious-correlation-and-shortcut-learning-at-iclr-2025",
          title: 'We are organizing the Workshop on Spurious Correlation and Shortcut Learning at ICLR...',
          description: "",
          section: "News",},{id: "news-our-paper-implicit-regularization-of-sgd-reduces-shortcut-learning-is-accepted-to-iclr-2026",
          title: 'Our paper, Implicit Regularization of SGD reduces Shortcut Learning, is accepted to ICLR...',
          description: "",
          section: "News",},{id: "projects-covid-19-drug-efficiency-estimation",
          title: 'COVID-19 Drug Efficiency Estimation',
          description: "Weakly-supervised hit discovery with confidence scoring using RxRx19a HTS data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-implicit-regularization-amp-shortcut-learning",
          title: 'Implicit Regularization &amp;amp; Shortcut Learning',
          description: "Mitigating spurious correlations by tuning optimization inductive biases.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-snuffy-for-whole-slide-images",
          title: 'Snuffy for Whole Slide Images',
          description: "Biologically-inspired attention masks for gigapixel pathology.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-asynchronous-graph-neural-networks",
          title: 'Asynchronous Graph Neural Networks',
          description: "Extending GNN expressivity beyond the classical 1-WL limit using Asynchronous Message Passing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-decidualization-amp-emt-similarities",
          title: 'Decidualization &amp;amp; EMT Similarities',
          description: "Investigating shared genomic pathways between pregnancy-induced immune tolerance and cancer metastasis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-precision-genomics-at-pardisgene",
          title: 'Precision Genomics at PardisGene',
          description: "Automated pipelines for precision oncology and rare disease diagnostics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-data-science-at-tapsi",
          title: 'Data Science at Tapsi',
          description: "Fraud detection and campaign optimization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "teachings-bioinformatics-algorithms",
          title: 'Bioinformatics Algorithms',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%72%7A%61%6E%61%68%61%6C@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nahal-mirzaie", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=7IaTpQQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
