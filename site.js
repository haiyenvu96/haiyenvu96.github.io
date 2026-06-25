const profile = {
  name: "Thi Hai Yen VU",
  role: "Machine Learning PhD Candidate",
  status: "Actively seeking research and applied ML opportunities",
  headline:
    "Machine learning practitioner (current PhD Candidate) with 4+ years across industry and research, taking models from raw, messy data through to deployed services. My work spans graph and neuro-symbolic learning, learning from partially-labelled data, NLP, and mineral prospectivity mapping.",
  intro:
    "Published at ACM SAC 2025 and ECML PKDD 2026, with applied open-science contributions through ECMWF Code4Earth and earlier research engineering and NLP industry experience.",
  // backgroundHeading:
  //   "le grounded in machine learning, structured data, and open-science collaboration",
  background: [
    "I am currently a PhD candidate in Machine Learning at Universite d'Orleans in collaboration with BRGM, where I develop knowledge-guided machine learning for mineral potential mapping by integrating geological expert knowledge with semi-supervised learning, self-supervised learning, clustering, graph models, and neural networks.",
    "I am interested in roles where research, practical implementation, and interdisciplinary collaboration matter at the same time.",
  ],
  
  opportunities: [
    "Research Scientist",
    "Data Scientist",
    "Applied Scientist",
    "Applied ML Engineer",
    "AI Engineer",
  ],
  facts: [
    {
      title: "Current base",
      text: "Based in Orleans, France, and currently pursuing a PhD in Machine Learning in collaboration with BRGM.",
    },
    {
      title: "Publications",
      text: "Published at ACM SAC 2025 and ECML PKDD 2026 on graph learning and positive-unlabeled learning with knowledge-structured data.",
    },
    {
      title: "Teaching and talks",
      text: "Teaching mission at Universite d'Orleans and research presentations across seminars, workshops, and academic events.",
    },
    {
      title: "Languages and tools",
      text: "Vietnamese, English, and French, with hands-on work in Python, Java, C++, PyTorch, TensorFlow/Keras, scikit-learn, and NetworkX.",
    },
  ],
  strengths: [
    {
      title: "Knowledge-guided ML",
      text: "I work on machine learning systems that combine expert knowledge with structured data, graph learning, and neural models.",
    },
    {
      title: "Research-to-code range",
      text: "I move comfortably between literature review, experimental design, implementation, evaluation, and scientific communication.",
    },
    {
      title: "Applied collaboration",
      text: "I have worked across academic labs, open-science challenge environments, and industry NLP settings with a focus on useful outcomes.",
    },
    {
      title: "Scientific communication",
      text: "I teach, present research, and translate technical work for interdisciplinary collaborators and broader academic audiences.",
    },
  ],
  // papersHeading:
  //   "Selected publications in positive-unlabeled learning and mineral prospectivity mapping",
  papers: [
    {
      title: "Positive-Unlabeled Learning with Knowledge-Structured Data",
      authors: "Thi Hai Yen VU, Vincent NGUYEN, Christel VRAIN, Hugo BREUILLARD, and Thi Bich Hanh DAO",
      venue: "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases - ECML PKDD 2026",
      year: "2026",
      image: "assets/ECML2026.png",
      imageAlt: "Preview image for Positive-Unlabeled Learning with Knowledge-Structured Data",
      summary:
        "Positive-Unlabeled (PU) learning focuses on scenarios whereonly positive and unlabeled examples are available and has become a cru-cial area in machine learning. However, its application to data enrichedwith structured or symbolic knowledge remains unstudied. Existing PUlearning methods often rely on the assumption of irreducibility betweennegative and positive distributions, but this assumption has not beenstudied in settings where the data is governed by logical rules or relationalconstraints. In this work, we formalize PU learning for knowledge-drivendata and introduce a novel approach that leverages a neuro-symbolicframework to address PU learning problem in such data settings. Wefurther propose NeuralAdjust, a method that uses neural networks todynamically reweight logical rules. This helps mitigate violations of theirreducibility condition induced by relational conflicts. Our experimen-tal results demonstrate robust performance across diverse datasets andknowledge structures, surpassing previous state-of-the-art graph-basedmethods for PU learning.",
      link: "",
      linkLabel: "Read paper",
    },
    {
      title: "Features Leverage in Graph Models for Mineral Prospectivity Mapping",
      authors: "Thi Hai Yen VU, Thi Bich Hanh DAO, Vincent NGUYEN, Christel VRAIN, and Hugo BREUILLARD",
      venue: "Proceedings of the 40th ACM/SIGAPP Symposium on Applied Computing",
      year: "2025",
      image: "assets/SAC2025.png",
      imageAlt: "Preview image for Features Leverage in Graph Models for Mineral Prospectivity Mapping",
      summary:
        "Mineral Prospectivity Mapping (MPM), the process of identifying areas with high potential for mineral deposits, can be divided into two main categories: knowledge-driven and data-driven. Knowledge-driven techniques rely on expert opinion on geological data, while data-driven techniques employ ML models to predict the probabilities of mineral occurrences based on known geological datasets. Recently, with the advancement of machine learning (ML) methods, data-driven MPM has gained significant improvements. Notably, graph-based approaches overcome the disadvantages of previously used approaches (pixel-based, image-based) and have demonstrated better performances. However, the graph construction in current methods is based solely on spatial distances between pixels, regardless of their geological attributes. In this paper, we introduce a novel graph construction approach that combines spatial distances with other distances obtained from feature mining. Our experiments show that this combination outperforms existing graphs, and can be considered as a promising approach to integrate feature mining into data-driven models in MPM.",
      link: "https://doi.org/10.1145/3672608.3707885",
      linkLabel: "View DOI",
    },
  ],
  // newsHeading: "Recent updates, awards, presentations, and teaching activity",
  news: [
    {
      date: "June 18, 2026",
      segments: [
        { text: "I gave an oral presentation " },
        { text: "Positive-unlabeled learning with knowledge integration. Application to mineral prospectivity mapping", href: "assets/Workshop_program.pdf" },
        { text: " at Journee des Doctorants MIPTIS 2026", href: "https://miptis2026.sciencesconf.org/program?lang=fr" },
        { text: " in Orleans, France. "  }, 
      ],
    },
    {
      date: "May 2026",
      segments: [
        { text: "My paper, " },
        { text: "Positive-Unlabeled Learning with Knowledge-Structured Data", href: "" },
        { text: ", was accepted for publication at the "},
        { text: "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases - ECML PKDD 2026." , href: "https://ecmlpkdd.org/2026/" },
      ],
    },
    {
      date: "October 5, 2025",
      segments: [
        { text: "I took part in "},
        { text: "La Fete de la sciences", href: "https://www.univ-orleans.fr/fr/univ/agenda-actualites/fete-de-la-science-2025" },
        { text: " at CNRS in Orleans, France." },
      ],
    },
    {
      date: "June 11-12, 2025",
      segments: [
        { text: "I gave an oral presentation at the Seminaire de l'equipe Contraintes et Apprentissage in Orleans, France." },
      ],
    },
    {
      date: "April 23-24, 2025",
      segments: [
        { text: "I gave an oral presentation at the "},
        { text: "Workshop MaDiTraCe: machine learning applied to critical raw material traceability", href: "assets/Workshop_program.pdf" },
        { text: " in Orleans, France." },
      ],
    },
    {
      date: "March 31-April 4, 2025",
      segments: [
        { text: "I gave an oral presentation at " },
        { text: "The 40th ACM/SIGAPP Symposium on Applied Computing", href: "https://www.sigapp.org/sac/sac2025/" },
        { text: " in Catania, Italy." },
      ],
    },
    {
      date: "February 27, 2025",
      segments: [
        { text: "I gave an oral presentation at the Groupe IA pour les jeunes chercheurs at BRGM in Orleans, France." },
      ],
    },
    {
      date: "Academic year 2024-2025",
      segments: [
        { text: "I taught "},
        { text: "L1 Programming and Algorithms", href: "https://www.univ-orleans.fr/upload/public/media/fichier/2020-06/info_l1_s1-s2.pdf" },
        { text: " in semester 1 (16-hour TP) and " },
        { text: "L1 Discrete Mathematics", href: "" },
        { text: " in semester 2 (18-hour TD and 12-hour TP) as part of my mission complementaire du doctorant contractuel." },
      ],
    },
    {
      date: "January 14, 2025",
      segments: [
        { text: "I gave an oral presentation at the Webinaire Arethuse in Orleans, France." },
      ],
    },
    {
      date: "November 29, 2024",
      segments: [
        { text: 'I presented a poster at the BRGM scientific program seminar "Donnees numeriques" in Orleans, France.' },
      ],
    },
    {
      date: "November 2024",
      segments: [
        { text: "My paper, " },
        { text: "Features Leverage in Graph Models for Mineral Prospectivity Mapping", href: "https://dl.acm.org/doi/10.1145/3672608.3707885" },
        { text: " was accepted for publication at The 40th ACM/SIGAPP Symposium On Applied Computing." },
      ],
    },
    {
      date: "October 6, 2024",
      segments: [
        { text: "I took part in "},
        { text: "La Fete de la sciences", href: "https://www.univ-orleans.fr/fr/univ/agenda-actualites/fete-de-la-science-2024" },
        { text: " at CNRS in Orleans, France." },
      ],
    },
    {
      date: "August 31, 2024",
      segments: [
        { text: "I gave an oral presentation at Journee ANR IA.iO in Orleans, France." },
      ],
    },
    {
      date: "July 15-20, 2024",
      segments: [
        { text: "I participated in the "},
        { text: "Eastern European Machine Learning Summer School ", href: "https://www.eeml.eu/previous-editions/eeml2024" },
        { text: "in Novi Sad, Serbia, and gave a poster presentation." }
      ],
    },
    {
      date: "June 17-21, 2024",
      segments: [
        { text: "I participated in the "},
        { text: "Nordic Probabilistic AI School (Nordic ProbAI) ", href: "https://github.com/probabilisticai/nordic-probai-2024" },
        { text: "in Copenhagen, Denmark." }
      ],
    },
    {
      date: "June 10-11, 2024",
      segments: [
        { text: "I gave a presentation at the Seminaire de l'equipe Contraintes et Apprentissage in Orleans, France." },
      ],
    },
    {
      date: "May 29-30, 2024",
      segments: [
        { text: "I presented a poster at the "},
        { text: "sixieme edition of the Symposium MaDICS", href: "https://www.madics.fr/event/symposium-madics-6/" },
        { text: "  in Blois, France." },
      ],
    },
    {
      date: "January 15-19, 2024",
      segments: [
        { text: "I attended the GSON (Graduate School Orleans Numerique) course on SIG RASTER and 3D lidar data processing in Orleans, France." },
      ],
    },
    {
      date: "October 19-20, 2023",
      segments: [
        { text: "I participated in the Journees Informatique de la Region Centre-Val de Loire 2023 in Tours, France." },
      ],
    },
  ],
  // highlightsHeading:
  //   "Experience across doctoral research, open science, teaching, academic software, and industry NLP",
  highlights: [
    {
      label: "Doctoral research",
      title: "PhD Candidate in Machine Learning at Universite d'Orleans / BRGM",
      text: "Since October 2023, I have developed knowledge-guided machine learning methods for mineral potential mapping, including semi/self-supervised learning, clustering, graph models, neural networks, and neuro-symbolic positive-unlabeled learning.",
    },
    {
      label: "Open science",
      title: "ECMWF Code4Earth research challenges",
      text: "In 2024 and 2025, I contributed to applied open-science ML challenges linking research prototypes with practical climate and Earth-system workflows, including knowledge-graph tooling and DSS request-cost estimation.",
      links: [
        {
          label: "KGB-TruthGuiding 2024",
          href: "https://codeforearth.ecmwf.int/project/kgb-truthguiding/",
        },
        {
          label: "MLCosting 2025",
          href: "https://codeforearth.ecmwf.int/project/mlcosting/",
        },
      ],
    },
    {
      label: "Teaching and outreach",
      title: "Universite d'Orleans teaching mission and research presentations",
      text: "In academic year 2024-2025, I taught L1 Programming and Algorithms (16-hour TP) and L1 Discrete Mathematics (18-hour TD and 12-hour TP), alongside research presentations across seminars, workshops, webinars, posters, and academic events including ANR IA.iO, BRGM, ARETHUSE, and the Young Researchers AI Group in BRGM.",
    },
    {
      label: "Research engineering",
      title: "LIGM Lab / Gustave Eiffel University",
      text: "I contributed to Unitex/GramLab by extending both the C++ engine and Java IDE, and I built a word-lattice dataset plus a PyTorch model for lattice-structured NLP data.",
    },
    {
      label: "Industry NLP",
      title: "SYSTRAN NLP Research Internship",
      text: "I developed contextualized paraphrase generation with tag-specific Transformer models and used the generated data to augment multilingual OpenNMT systems for English-French, English-German, and English-Vietnamese translation.",
    },
  ],
  contact: {
    copy:
      "I am open to research, data science, and applied machine learning roles where structured problem solving, and practical implementation all matter.",
    actions: [
      {
        label: "Email",
        href: "mailto:haiyen96.hp@gmail.com",
        variant: "primary",
      },
      {
        label: "CV",
        href: "assets/CV_Hai_Yen_2026.pdf",
        variant: "secondary",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/haiyen96/",
        variant: "secondary",
      },
      {
        label: "GitHub",
        href: "https://github.com/haiyenvu96",
        variant: "secondary",
      },
    ],
    note: "For publication links, project demos, or a Google Scholar profile, extend the papers and contact actions in this file.",
  },
};

function createTag(label) {
  const span = document.createElement("span");
  span.className = "tag";
  span.textContent = label;
  return span;
}

function createButton(action) {
  const link = document.createElement("a");
  link.className = action.variant === "primary" ? "button" : "button-secondary";
  if (action.href) {
    link.href = action.href;
  } else {
    link.href = "#contact";
    link.classList.add("is-disabled");
    link.setAttribute("aria-disabled", "true");
  }
  link.textContent = action.label;
  if (action.href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
}

function createFactCard(item) {
  const article = document.createElement("article");
  article.className = "quick-fact";
  article.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
  return article;
}

function createStrengthCard(item) {
  const article = document.createElement("article");
  article.className = "strength-card";
  article.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
  return article;
}

function createNewsItem(item) {
  const li = document.createElement("li");
  li.className = "news-item";

  const date = document.createElement("strong");
  date.className = "news-date";
  date.textContent = `[${item.date}] `;
  li.appendChild(date);

  item.segments.forEach((segment) => {
    if (segment.href) {
      const link = document.createElement("a");
      link.className = "news-link";
      link.href = segment.href;
      if (segment.href.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      link.textContent = segment.text;
      li.appendChild(link);
      return;
    }

    li.appendChild(document.createTextNode(segment.text));
  });

  return li;
}

function createHighlightCard(item) {
  const article = document.createElement("article");
  article.className = "timeline-card";
  article.innerHTML = `<p class="card-label">${item.label}</p><h3>${item.title}</h3><p>${item.text}</p>`;
  if (item.links && item.links.length) {
    const links = document.createElement("div");
    links.className = "card-links";
    item.links.forEach((itemLink) => {
      const link = document.createElement("a");
      link.className = "card-link";
      link.href = itemLink.href;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = itemLink.label;
      links.appendChild(link);
    });
    article.appendChild(links);
  }
  return article;
}

function createPaperCard(item) {
  const article = document.createElement("article");
  article.className = "paper-card";
  if (item.image) {
    const media = document.createElement("div");
    media.className = "paper-media";
    const image = document.createElement("img");
    image.className = "paper-image";
    image.src = item.image;
    image.alt = item.imageAlt || item.title;
    image.loading = "lazy";
    media.appendChild(image);
    article.appendChild(media);
  }
  const content = document.createElement("div");
  content.className = "paper-body";
  content.innerHTML = `
    <h3>${item.title}</h3>
    ${item.authors ? `<p class="paper-authors">${item.authors}</p>` : ""}
    ${item.venue ? `<p class="paper-venue">${item.venue}</p>` : ""}
    ${item.year ? `<p class="paper-year">${item.year}</p>` : ""}
    <p>${item.summary}</p>
  `;
  if (item.link) {
    const link = document.createElement("a");
    link.className = "paper-link";
    link.href = item.link;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = item.linkLabel || "Read paper";
    content.appendChild(link);
  }
  article.appendChild(content);
  return article;
}

document.title = `${profile.name} | ${profile.role}`;
document.getElementById("brand-name").textContent = profile.name;
document.getElementById("hero-status").textContent = profile.status;
document.getElementById("hero-name").textContent = profile.name;
document.getElementById("hero-role").textContent = profile.role;
document.getElementById("hero-headline").textContent = profile.headline;
document.getElementById("intro-copy").textContent = profile.intro;
document.getElementById("background-heading").textContent = profile.backgroundHeading || "";
document.getElementById("news-heading").textContent = profile.newsHeading || "";
document.getElementById("papers-heading").textContent = profile.papersHeading || "";
document.getElementById("highlights-heading").textContent = profile.highlightsHeading || "";
document.getElementById("contact-copy").textContent = profile.contact.copy || "";
document.getElementById("contact-note").textContent = profile.contact.note || "";
document.getElementById("footer-name").textContent = profile.name;
document.getElementById("footer-year").textContent = new Date().getFullYear();

const backgroundCopy = document.getElementById("background-copy");
profile.background.forEach((paragraph) => {
  const p = document.createElement("p");
  p.textContent = paragraph;
  backgroundCopy.appendChild(p);
});

const opportunityTags = document.getElementById("opportunity-tags");
profile.opportunities.forEach((item) => opportunityTags.appendChild(createTag(item)));

const facts = document.getElementById("quick-facts");
profile.facts.forEach((item) => facts.appendChild(createFactCard(item)));

const newsList = document.getElementById("news-list");
profile.news.forEach((item) => newsList.appendChild(createNewsItem(item)));

const strengthCards = document.getElementById("strength-cards");
profile.strengths.forEach((item) => strengthCards.appendChild(createStrengthCard(item)));

const paperCards = document.getElementById("paper-cards");
profile.papers.forEach((item) => paperCards.appendChild(createPaperCard(item)));

const highlightCards = document.getElementById("highlight-cards");
profile.highlights.forEach((item) => highlightCards.appendChild(createHighlightCard(item)));

const heroActions = document.getElementById("hero-actions");
heroActions.appendChild(
  createButton({ label: "Get in touch", href: "#contact", variant: "primary" }),
);
heroActions.appendChild(
  createButton({ label: "View papers", href: "#papers", variant: "secondary" }),
);

const contactActions = document.getElementById("contact-actions");
profile.contact.actions.forEach((item) => contactActions.appendChild(createButton(item)));
