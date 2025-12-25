// Portali di lavoro per ogni paese, settore e zona
// Ogni zona copre un raggio di ~15km con ricerche mirate
const jobPortals = {
  "Germania": {
    "Nord": {
      "Ristorazione": [
        { name: "Indeed Hamburg (Ristorazione)", url: "https://de.indeed.com/jobs?q=Gastronomie&l=Hamburg&radius=15" },
        { name: "StepStone Bremen (Gastronomie)", url: "https://www.stepstone.de/jobs/Gastronomie/in-Bremen?radius=15" },
        { name: "LinkedIn Nord-Deutschland Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Gastronomie&location=Hamburg" }
      ],
      "Edilizia": [
        { name: "Indeed Kiel (Bauwesen)", url: "https://de.indeed.com/jobs?q=Bauwesen&l=Kiel&radius=15" },
        { name: "Bauen.de Jobs Nord", url: "https://www.bauen.de/jobs-norddeutschland" },
        { name: "Arbeitsagentur Bau Jobs (Hamburg)", url: "https://www.arbeitsagentur.de/jobsuche/suche?was=Bau&wo=Hamburg&umkreis=15" }
      ],
      "Logistica": [
        { name: "Indeed Rostock (Logistik)", url: "https://de.indeed.com/jobs?q=Logistik&l=Rostock&radius=15" },
        { name: "Logistik-Jobs.de (Hamburg Area)", url: "https://www.logistik-jobs.de/hamburg" }
      ]
    },
    "Centro": {
      "Sanitario": [
        { name: "Indeed Berlin (Pflege)", url: "https://de.indeed.com/jobs?q=Pflege&l=Berlin&radius=15" },
        { name: "Medi-Jobs Frankfurt", url: "https://www.medi-jobs.de/jobs-frankfurt" }
      ],
      "Logistica": [
        { name: "Indeed Leipzig (Logistik)", url: "https://de.indeed.com/jobs?q=Logistik&l=Leipzig&radius=15" },
        { name: "StepStone Kassel (Logistik)", url: "https://www.stepstone.de/jobs/Logistik/in-Kassel?radius=15" }
      ]
    },
    "Sud": {
      "Ristorazione": [
        { name: "Indeed München (Gastronomie)", url: "https://de.indeed.com/jobs?q=Gastronomie&l=M%C3%BCnchen&radius=15" },
        { name: "Hotelcareer.de Bayern", url: "https://www.hotelcareer.de/jobs/bayern" }
      ],
      "Sanitario": [
        { name: "Indeed Stuttgart (Pflege)", url: "https://de.indeed.com/jobs?q=Pflege&l=Stuttgart&radius=15" },
        { name: "Kliniken.de Jobs Süd", url: "https://www.kliniken.de/jobs-sueddeutschland" }
      ]
    }
  },
  "Portogallo": {
    "Nord": {
      "Turismo": [
        { name: "Indeed Porto (Turismo)", url: "https://pt.indeed.com/jobs?q=Turismo&l=Porto&radius=15" },
        { name: "Net-Empregos Porto", url: "https://www.net-empregos.com/pesquisa-empregos.asp?chaves=Turismo&cidade=Porto" }
      ],
      "Ristorazione": [
        { name: "Indeed Braga (Restauração)", url: "https://pt.indeed.com/jobs?q=Restaura%C3%A7%C3%A3o&l=Braga&radius=15" },
        { name: "LinkedIn Porto Gastro Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Restaurante&location=Porto" }
      ]
    }
  },
  "Olanda": {
    "Centro": {
      "Logistica": [
        { name: "Indeed Utrecht (Logistiek)", url: "https://www.indeed.nl/jobs?q=Logistiek&l=Utrecht&radius=15" },
        { name: "YoungCapital Logistiek Amsterdam", url: "https://www.youngcapital.nl/vacatures/logistiek/amsterdam" }
      ]
    }
  },
  "Austria": {
    "Centro": {
      "Turismo": [
        { name: "Indeed Wien (Tourismus)", url: "https://at.indeed.com/jobs?q=Tourismus&l=Wien&radius=15" },
        { name: "Hogastjob.com Österreich", url: "https://www.hogastjob.com/jobs-oesterreich" }
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
    "Germania": { "Nord": "Hamburg", "Centro": "Berlin", "Sud": "Munich" },
    "Portogallo": { "Nord": "Porto", "Centro": "Lisbon", "Sud": "Faro" },
    "Olanda": { "Nord": "Groningen", "Centro": "Amsterdam", "Sud": "Eindhoven" },
    "Belgio": { "Nord": "Antwerp", "Centro": "Brussels", "Sud": "Charleroi" },
    "Austria": { "Nord": "Linz", "Centro": "Vienna", "Sud": "Graz" },
    "Svezia": { "Nord": "Umea", "Centro": "Stockholm", "Sud": "Gothenburg" },
    "Svizzera": { "Nord": "Zurich", "Centro": "Bern", "Sud": "Geneva" }
  };

  const city = (cityMap[country] && cityMap[country][zone]) || country;
  
  return [
    { name: `LinkedIn Jobs (${city})`, url: `https://www.linkedin.com/jobs/search/?keywords=${sector}&location=${city}` },
    { name: `Indeed (${city})`, url: `https://www.indeed.com/jobs?q=${sector}&l=${city}&radius=15` }
  ];
}
