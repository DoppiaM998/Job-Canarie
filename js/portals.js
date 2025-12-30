const jobPortals = {
  "Germania": {
    "Nord": {
      "Logistica": [
        { name: "Magazziniere DHL (Amburgo)", salary: "€2.400 - €2.800/mese", url: "https://careers.dhl.com/global/en/search-results?keywords=warehouse&location=Hamburg" },
        { name: "Operatore Logistico Amazon (Brema)", salary: "€14,50/ora", url: "https://www.amazon.jobs/en/jobs/2543210/warehouse-associate-bremen" },
        { name: "Mulettista Kühne+Nagel", salary: "€2.600/mese + Bonus", url: "https://jobs.kuehne-nagel.com/global/en/search-results?keywords=forklift&location=Germany" },
        { name: "Corriere Espresso Hermes", salary: "€2.300/mese", url: "https://www.hermesworld.com/de/karriere/" }
      ],
      "Turismo": [
        { name: "Receptionist Hotel 4* (Amburgo)", salary: "€2.500/mese", url: "https://www.hotelcareer.com/jobs/receptionist-hamburg" },
        { name: "Traduttore/Interprete Tecnico", salary: "€3.500/mese", url: "https://englishjobs.de/jobs/translator" },
        { name: "Direttore d'Albergo (Kiel)", salary: "€5.500/mese", url: "https://www.hotelcareer.com/jobs/hotel-manager-germany" },
        { name: "Guest Relation Specialist", salary: "€2.800/mese", url: "https://careers.ihg.com/" }
      ],
      "Ristorazione": [
        { name: "Chef de Partie (Ristorante Italiano)", salary: "€3.000/mese + Alloggio", url: "https://www.gastrojobs.de/jobs/chef-de-partie" },
        { name: "Maître D'Hotel (Amburgo)", salary: "€3.200/mese", url: "https://www.hotelcareer.com/jobs/maitre-d-hotel" },
        { name: "Cameriere/a di Sala (Bistrò)", salary: "€2.100/mese + Mance", url: "https://www.gastrojobs.de/jobs/waiter" },
        { name: "Pasticcere Specializzato", salary: "€2.900/mese", url: "https://www.hotelcareer.com/jobs/pastry-chef" }
      ],
      "Sanitario": [
        { name: "Infermiere Professionale (Ospedale)", salary: "€3.800/mese", url: "https://www.make-it-in-germany.com/en/working-in-germany/job-listings?tx_solr%5Bq%5D=nurse" },
        { name: "Medico Anestesista (Clinica)", salary: "€8.500/mese", url: "https://www.aerzteblatt.de/jobs/anesthesiology" },
        { name: "Radiologo (Centro Diagnostico)", salary: "€7.500/mese", url: "https://www.aerzteblatt.de/jobs/radiology" },
        { name: "Fisioterapista (Amburgo)", salary: "€3.200/mese", url: "https://www.indeed.com/q-physiotherapist-l-hamburg-jobs.html" }
      ],
      "Edilizia": [
        { name: "Carpentiere Legno/Metallo", salary: "€18,00/ora", url: "https://www.bau.jobs/jobs/carpenter" },
        { name: "Elettricista Industriale", salary: "€3.200/mese", url: "https://www.bau.jobs/jobs/electrician" },
        { name: "Muratore Specializzato", salary: "€3.000/mese", url: "https://www.bau.jobs/jobs/mason" },
        { name: "Capocantiere (Edilizia Civile)", salary: "€4.500/mese", url: "https://www.bau.jobs/jobs/foreman" }
      ]
    },
    "Sud": {
      "Logistica": [
        { name: "BMW Logistics Planner (Monaco)", salary: "€4.200/mese", url: "https://www.bmwgroup.jobs/de/en/job-fields/logistics.html" },
        { name: "Responsabile Magazzino (Stoccarda)", salary: "€3.800/mese", url: "https://de.indeed.com/jobs?q=Warehouse+Manager&l=Stuttgart" },
        { name: "Addetto Logistica Aeroportuale", salary: "€2.900/mese", url: "https://www.munich-airport.com/jobs-career-261230" },
        { name: "Driver Patente C/E", salary: "€3.500/mese", url: "https://www.lkw-fahrer-gesucht.com/" }
      ],
      "Sanitario": [
        { name: "Cardiologo (Monaco di Baviera)", salary: "€9.000/mese", url: "https://www.aerzteblatt.de/jobs/cardiology" },
        { name: "Infermiere Terapia Intensiva", salary: "€4.200/mese", url: "https://www.make-it-in-germany.com/en/working-in-germany/job-listings" },
        { name: "Tecnico Radiologo (Stoccarda)", salary: "€3.500/mese", url: "https://www.stepstone.de/jobs/Radiologie/in-Stuttgart" },
        { name: "Ostetrica/o (Clinica Privata)", salary: "€3.600/mese", url: "https://www.indeed.com/q-midwife-jobs.html" }
      ],
      "Turismo": [
        { name: "Front Office Manager (Alpi)", salary: "€3.800/mese + Alloggio", url: "https://www.hotelcareer.com/jobs/front-office-manager" },
        { name: "Sommelier (Hotel 5* Lusso)", salary: "€3.500/mese", url: "https://www.hotelcareer.com/jobs/sommelier" },
        { name: "Direttore Commerciale Hotel", salary: "€6.500/mese", url: "https://www.hotelcareer.com/jobs/hotel-sales-manager" },
        { name: "Traduttore Simultaneo (Eventi)", salary: "€4.000/mese", url: "https://www.stepstone.de/jobs/Dolmetscher/in-Muenchen" }
      ],
      "Ristorazione": [
        { name: "Executive Chef (Baviera)", salary: "€6.000/mese", url: "https://www.gastrojobs.de/jobs/executive-chef" },
        { name: "Sous Chef (Stoccarda)", salary: "€4.500/mese", url: "https://www.hotelcareer.com/jobs/sous-chef" },
        { name: "Chef de Rang (Michelin Star)", salary: "€2.800/mese + Mance", url: "https://www.gastrojobs.de/jobs/chef-de-rang" },
        { name: "Pasticcere Capo", salary: "€3.800/mese", url: "https://www.hotelcareer.com/jobs/head-pastry-chef" }
      ]
    }
  }
};

function getJobPortals(country, sector, zone) {
  // Se abbiamo annunci specifici nel database
  if (jobPortals[country] && jobPortals[country][zone] && jobPortals[country][zone][sector]) {
    return jobPortals[country][zone][sector];
  }

  // Fallback dinamico con termini di ricerca specifici migliorati
  const sectorMapping = {
    "Turismo": {
      keywords: "receptionist director translator front office hotel manager",
      it: "Receptionist Direttore Traduttore",
      de: "Empfang Hotelmanager Übersetzer"
    },
    "Ristorazione": {
      keywords: "chef waiter server maitre cook pastry chef",
      it: "Chef Cameriere Maitre Cuoco",
      de: "Koch Kellner Gastronomie"
    },
    "Sanitario": {
      keywords: "doctor nurse radiologist anesthesiologist physician surgeon",
      it: "Medico Infermiere Radiologo Anestesista",
      de: "Arzt Krankenschwester Radiologe Anästhesist"
    },
    "Logistica": {
      keywords: "warehouse logistics driver forklift operator courier",
      it: "Magazziniere Logistica Autista",
      de: "Lager Logistik Fahrer"
    },
    "Edilizia": {
      keywords: "construction builder carpenter electrician plumber mason",
      it: "Edilizia Muratore Elettricista",
      de: "Bau Bauarbeiter Elektriker"
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
  const mapping = sectorMapping[sector] || { keywords: sector, de: sector, it: sector };
  const searchTerm = mapping.de || mapping.keywords;
  
  return [
    { name: `${sector} - Posizioni Aperte (${city})`, salary: "Vedi Annuncio", url: `https://${dom === "nl" ? "www.indeed.nl" : "de.indeed.com"}/jobs?q=${encodeURIComponent(mapping.keywords)}&l=${encodeURIComponent(city)}` },
    { name: `Ricerca Diretta: ${sector}`, salary: "Retribuzione Alta", url: `https://www.google.com/search?q=jobs+${encodeURIComponent(mapping.keywords)}+${encodeURIComponent(city)}+salary` },
    { name: `StepStone: ${sector} (${city})`, salary: "Contratto Diretto", url: `https://www.stepstone.de/jobs/${encodeURIComponent(searchTerm)}/in-${encodeURIComponent(city)}` },
    { name: `LinkedIn Jobs: ${sector}`, salary: "Benefit Inclusi", url: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(mapping.keywords)}&location=${encodeURIComponent(city)}` }
  ];
}
