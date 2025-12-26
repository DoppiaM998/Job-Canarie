// Portali di lavoro per ogni paese, settore e zona
// Ogni zona copre un raggio di ~15km con ricerche mirate
const jobPortals = {
  "Germania": {
    "Nord": {
      "Ristorazione": [
        { name: "Indeed Hamburg (Gastronomie)", url: "https://de.indeed.com/jobs?q=Gastronomie&l=Hamburg&radius=15" },
        { name: "StepStone Bremen (Gastronomie)", url: "https://www.stepstone.de/jobs/Gastronomie/in-Bremen?radius=15" }
      ],
      "Logistica": [
        { name: "Indeed Hamburg (Logistik)", url: "https://de.indeed.com/jobs?q=Logistik&l=Hamburg&radius=15" },
        { name: "StepStone Bremen (Logistik)", url: "https://www.stepstone.de/jobs/Logistik/in-Bremen?radius=15" }
      ],
      "Commercio": [
        { name: "Indeed Hamburg (Handel)", url: "https://de.indeed.com/jobs?q=Einzelhandel&l=Hamburg&radius=15" },
        { name: "StepStone Bremen (Handel)", url: "https://www.stepstone.de/jobs/Einzelhandel/in-Bremen?radius=15" }
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
    },
    "Sud": {
      "Tecnologia": [
        { name: "Indeed München (IT)", url: "https://de.indeed.com/jobs?q=IT&l=M%C3%BCnchen&radius=15" },
        { name: "StepStone Stuttgart (Engineering)", url: "https://www.stepstone.de/jobs/Ingenieurwesen/in-Stuttgart?radius=15" }
      ],
      "Automotive": [
        { name: "Indeed München (Automotive)", url: "https://de.indeed.com/jobs?q=Automotive&l=M%C3%BCnchen&radius=15" },
        { name: "StepStone Stuttgart (Automotive)", url: "https://www.stepstone.de/jobs/Automotive/in-Stuttgart?radius=15" }
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
        { name: "Indeed Graz (IT)", url: "https://at.indeed.com/jobs?q=IT&l=Graz&radius=15" },
        { name: "StepStone Graz (Technik)", url: "https://www.stepstone.at/jobs/Technik/in-Graz?radius=15" }
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

// Funzione per ottenere i portali di lavoro per un paese, settore e zona
function getJobPortals(country, sector, zone) {
  if (jobPortals[country] && jobPortals[country][zone] && jobPortals[country][zone][sector]) {
    return jobPortals[country][zone][sector];
  }
  
  // Portali generici come fallback basati sulla zona e settore
  const cityMap = {
    "Germania": { "Nord": "Hamburg", "Centro": "Frankfurt", "Sud": "Munich" },
    "Portogallo": { "Nord": "Porto", "Centro": "Lisbon", "Sud": "Faro" },
    "Olanda": { "Nord": "Groningen", "Centro": "Amsterdam", "Sud": "Rotterdam" },
    "Belgio": { "Nord (Fiandre)": "Brussels", "Sud (Vallonia)": "Liege" },
    "Austria": { "Nord / Centro": "Vienna", "Ovest / Sud": "Salzburg" },
    "Svezia": { "Nord": "Umea", "Centro": "Stockholm", "Sud": "Gothenburg" },
    "Svizzera": { "Nord": "Zurich", "Centro": "Zug", "Sud": "Geneva" }
  };

  const city = (cityMap[country] && cityMap[country][zone]) || country;
  
  // Dominio per nazione
  const domains = {
    "Germania": "de",
    "Austria": "at",
    "Olanda": "nl",
    "Belgio": "be",
    "Svizzera": "ch",
    "Portogallo": "pt",
    "Svezia": "se"
  };
  const dom = domains[country] || "com";

  return [
    { name: `LinkedIn Jobs (${city})`, url: `https://www.linkedin.com/jobs/search/?keywords=${sector}&location=${city}` },
    { name: `Indeed (${city})`, url: `https://${dom === "nl" ? "www.indeed.nl" : "de.indeed.com"}/jobs?q=${sector}&l=${city}&radius=15` }
  ];
}
