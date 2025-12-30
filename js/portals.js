const jobPortals = {
  "Germania": {
    "Nord": {
      "Ristorazione": [
        { name: "IHG Careers Nord", url: "https://careers.ihg.com/it-it/locations/germany/" },
        { name: "Hotelcareer Nord", url: "https://www.hotelcareer.com/" },
        { name: "Gastrojobs.de", url: "https://www.gastrojobs.de/" },
        { name: "EnglishJobs.de Restaurant", url: "https://englishjobs.de/jobs/restaurant" }
      ],
      "Edilizia": [
        { name: "EnglishJobs.de Construction", url: "https://englishjobs.de/jobs/construction" },
        { name: "Make it in Germany - Bau", url: "https://www.make-it-in-germany.com/en/working-in-germany/job-listings" },
        { name: "Indeed Construction", url: "https://www.indeed.com/q-germany-construction-jobs.html" },
        { name: "LinkedIn Construction", url: "https://www.linkedin.com/jobs/search/?keywords=construction&location=Germany" }
      ],
      "Logistica": [
        { name: "DHL Careers", url: "https://careers.dhl.com/global/en/search-results" },
        { name: "Kuehne + Nagel", url: "https://jobs.kuehne-nagel.com/global/en" },
        { name: "Amazon Warehouse Jobs", url: "https://www.amazon.jobs/content/en/teams/fulfillment-and-operations/germany" }
      ],
      "Turismo": [
        { name: "Hotelcareer Tourism", url: "https://www.hotelcareer.com/jobs/hospitality-catering-germany" },
        { name: "IHG Hotels Nord", url: "https://careers.ihg.com/en/locations/germany/?keywords=germany" },
        { name: "Hosco Receptionist Nord", url: "https://www.hosco.com/en/jobs/in/germany/receptionist" }
      ],
      "Commercio": [
        { name: "Indeed Hamburg (Handel)", url: "https://de.indeed.com/jobs?q=Einzelhandel&l=Hamburg&radius=15" },
        { name: "StepStone Bremen (Handel)", url: "https://www.stepstone.de/jobs/Einzelhandel/in-Bremen?radius=15" }
      ]
    },
    "Sud": {
      "Ristorazione": [
        { name: "Hotelcareer Sud", url: "https://www.hotelcareer.com/" },
        { name: "Gastrojobs.de Sud", url: "https://www.gastrojobs.de/" },
        { name: "Rysto Ristorazione", url: "https://www.rysto.com/it/c/deutschland" }
      ],
      "Edilizia": [
        { name: "BAU.JOBS Sud", url: "https://www.bau.jobs/" },
        { name: "BAUGEWERBE.JOBS", url: "https://www.baugewerbe.jobs/" },
        { name: "Bau-Stellen.de", url: "https://www.bau-stellen.de/" },
        { name: "Baustellen.JOBS", url: "https://www.baustellen.jobs/" }
      ],
      "Logistica": [
        { name: "DHL Sud", url: "https://careers.dhl.com/global/en/search-results" },
        { name: "Amazon Warehouse Sud", url: "https://www.amazon.jobs/content/en/teams/fulfillment-and-operations/germany" },
        { name: "BMW Group Logistics", url: "https://www.bmwgroup.jobs/de/en/job-fields/logistics.html" },
        { name: "Rhenus Career", url: "https://www.rhenus.group/career/" }
      ],
      "Turismo": [
        { name: "Hotelcareer Tourism Sud", url: "https://www.hotelcareer.com/jobs/hospitality-catering-germany" },
        { name: "Turijobs Munich", url: "https://www.turijobs.com/en/jobs/munich" },
        { name: "Hosco Sud", url: "https://www.hosco.com/en/jobs/in/germany/receptionist" }
      ],
      "Tecnologia": [
        { name: "Indeed München (IT)", url: "https://de.indeed.com/jobs?q=IT&l=M%C3%BCnchen&radius=15" },
        { name: "StepStone Stuttgart (Engineering)", url: "https://www.stepstone.de/jobs/Ingenieurwesen/in-Stuttgart?radius=15" }
      ],
      "Automotive": [
        { name: "Indeed München (Automotive)", url: "https://de.indeed.com/jobs?q=Automotive&l=M%C3%BCnchen&radius=15" },
        { name: "StepStone Stuttgart (Automotive)", url: "https://www.stepstone.de/jobs/Automotive/in-Stuttgart?radius=15" }
      ]
    },
    "Centro": {
      "Finanza": [
        { name: "Indeed Frankfurt (Finanzen)", url: "https://de.indeed.com/jobs?q=Finanzen&l=Frankfurt&radius=15" },
        { name: "StepStone Frankfurt (Banking)", url: "https://www.stepstone.de/jobs/Banken/in-Frankfurt-am-Main?radius=15" }
      ],
      "Logistica": [
        { name: "Indeed Köln (Logistik)", url: "https://de.indeed.com/jobs?q=Logistik&l=K%C3%B6ln&radius=15" },
        { name: "StepStone Düsseldorf (Logistik)", url: "https://www.stepstone.de/jobs/Logistik/in-D%C3%BCsseldorf?radius=15" }
      ]
    }
  },
  "Austria": {
    "Nord / Centro": {
      "Finanza": [
        { name: "Indeed Wien (Finanzen)", url: "https://at.indeed.com/jobs?q=Finanzen&l=Wien&radius=15" },
        { name: "StepStone Wien (International)", url: "https://www.stepstone.at/jobs/International/in-Wien?radius=15" }
      ],
      "Tecnologia": [
        { name: "Indeed Linz (IT)", url: "https://at.indeed.com/jobs?q=IT&l=Linz&radius=15" },
        { name: "StepStone Linz (Technik)", url: "https://www.stepstone.at/jobs/Technik/in-Linz?radius=15" }
      ]
    },
    "Ovest / Sud": {
      "Turismo": [
        { name: "Indeed Salzburg (Tourismus)", url: "https://at.indeed.com/jobs?q=Tourismus&l=Salzburg&radius=15" },
        { name: "StepStone Graz (Service)", url: "https://www.stepstone.at/jobs/Service/in-Graz?radius=15" }
      ],
      "Tecnologia": [
        { name: "Indeed Graz (IT)", url: "https://at.indeed.com/q-it-l-graz-jobs.html" },
        { name: "StepStone Graz (Technik)", url: "https://www.stepstone.at/jobs/technik/in-graz" }
      ]
    }
  },
  "Olanda": {
    "Nord": {
      "Energia": [
        { name: "Indeed Groningen (Energie)", url: "https://www.indeed.nl/jobs?q=Energie&l=Groningen&radius=15" }
      ]
    },
    "Centro": {
      "Tecnologia": [
        { name: "Indeed Amsterdam (Tech)", url: "https://www.indeed.nl/jobs?q=Tech&l=Amsterdam&radius=15" },
        { name: "Indeed Utrecht (IT)", url: "https://www.indeed.nl/jobs?q=IT&l=Utrecht&radius=15" }
      ],
      "Turismo": [
        { name: "Indeed Amsterdam (Toerisme)", url: "https://www.indeed.nl/jobs?q=Toerisme&l=Amsterdam&radius=15" }
      ]
    },
    "Sud": {
      "Logistica": [
        { name: "Indeed Rotterdam (Logistiek)", url: "https://www.indeed.nl/jobs?q=Logistiek&l=Rotterdam&radius=15" }
      ],
      "Tecnologia": [
        { name: "Indeed Eindhoven (High Tech)", url: "https://www.indeed.nl/jobs?q=High+Tech&l=Eindhoven&radius=15" }
      ]
    }
  },
  "Belgio": {
    "Nord (Fiandre)": {
      "Finanza": [
        { name: "Indeed Bruxelles (Finance)", url: "https://be.indeed.com/jobs?q=Finance&l=Bruxelles&radius=15" }
      ],
      "Logistica": [
        { name: "Indeed Antwerpen (Logistiek)", url: "https://be.indeed.com/jobs?q=Logistiek&l=Antwerpen&radius=15" }
      ]
    },
    "Sud (Vallonia)": {
      "Logistica": [
        { name: "Indeed Liège (Logistique)", url: "https://be.indeed.com/jobs?q=Logistique&l=Li%C3%A8ge&radius=15" }
      ]
    }
  },
  "Svizzera": {
    "Nord": {
      "Finanza": [
        { name: "Indeed Zürich (Finanzen)", url: "https://ch.indeed.com/jobs?q=Finanzen&l=Z%C3%BCrich&radius=15" }
      ],
      "Farmaceutico": [
        { name: "Indeed Basel (Pharma)", url: "https://ch.indeed.com/jobs?q=Pharma&l=Basel&radius=15" }
      ]
    },
    "Centro": {
      "Finanza": [
        { name: "Indeed Zug (Finance)", url: "https://ch.indeed.com/jobs?q=Finance&l=Zug&radius=15" }
      ]
    },
    "Sud": {
      "Finanza": [
        { name: "Indeed Genève (Finance)", url: "https://ch.indeed.com/jobs?q=Finance&l=Gen%C3%A8ve&radius=15" },
        { name: "Indeed Lugano (Finanza)", url: "https://ch.indeed.com/jobs?q=Finanza&l=Lugano&radius=15" }
      ]
    }
  }
};

function getJobPortals(country, sector, zone) {
  if (jobPortals[country] && jobPortals[country][zone] && jobPortals[country][zone][sector]) {
    return jobPortals[country][zone][sector];
  }

  const sectorTranslations = {
    "it": {
      "Ristorazione": "Ristorazione Gastronomia",
      "Turismo": "Turismo Hotel",
      "Logistica": "Logistica Magazzino",
      "Edilizia": "Edilizia Costruzioni",
      "Pulizie e Igienizzazione": "Pulizie Igienizzazione",
      "Sanitario": "Sanitario Infermiere",
      "Customer Service": "Customer Service Assistenza"
    },
    "de": {
      "Ristorazione": "Gastronomie Restaurant",
      "Turismo": "Tourismus Hotel",
      "Logistica": "Logistik Lager",
      "Edilizia": "Baugewerbe Konstruktion",
      "Pulizie e Igienizzazione": "Reinigung Gebaeudereinigung",
      "Sanitario": "Pflege Gesundheit",
      "Customer Service": "Kundenservice"
    }
  };

  const cityMap = {
    "Germania": { "Nord": "Hamburg", "Centro": "Frankfurt", "Sud": "Munich" },
    "Austria": { "Nord / Centro": "Vienna", "Ovest / Sud": "Salzburg" },
    "Olanda": { "Nord": "Groningen", "Centro": "Amsterdam", "Sud": "Rotterdam" }
  };

  const city = (cityMap[country] && cityMap[country][zone]) || country;
  const config = { "Germania": "de", "Austria": "at", "Olanda": "nl" };
  const dom = config[country] || "de";
  const lang = (country === "Olanda") ? "nl" : "de";
  const searchTerm = (sectorTranslations[lang] && sectorTranslations[lang][sector]) || sector;
  
  return [
    { name: `Indeed (${city})`, url: `https://${dom === "nl" ? "www.indeed.nl" : "de.indeed.com"}/jobs?q=${encodeURIComponent(searchTerm)}&l=${encodeURIComponent(city)}` },
    { name: `Google Jobs (${city})`, url: `https://www.google.com/search?q=jobs+${encodeURIComponent(searchTerm)}+in+${encodeURIComponent(city)}` }
  ];
}
