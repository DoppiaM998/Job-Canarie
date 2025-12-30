const jobPortals = {
  "Germania": {
    "Nord": {
      "Logistica": [
        { name: "Magazziniere DHL (Amburgo)", salary: "€2.400 - €2.800/mese", url: "https://careers.dhl.com/global/en/search-results?keywords=warehouse&location=Hamburg" },
        { name: "Operatore Logistico Amazon (Brema)", salary: "€14,50/ora", url: "https://www.amazon.jobs/en/jobs/2543210/warehouse-associate-bremen" },
        { name: "Mulettista Kühne+Nagel", salary: "€2.600/mese + Bonus", url: "https://jobs.kuehne-nagel.com/global/en/search-results?keywords=forklift&location=Germany" }
      ],
      "Turismo": [
        { name: "Receptionist Hotel 4* (Amburgo)", salary: "€2.500/mese", url: "https://www.hotelcareer.com/jobs/receptionist-hamburg" },
        { name: "Traduttore/Interprete Tecnico", salary: "€3.500/mese", url: "https://englishjobs.de/jobs/translator" },
        { name: "Direttore d'Albergo (Kiel)", salary: "€5.500/mese", url: "https://www.hotelcareer.com/jobs/hotel-manager-germany" }
      ],
      "Ristorazione": [
        { name: "Chef de Partie (Ristorante Italiano)", salary: "€3.000/mese + Alloggio", url: "https://www.gastrojobs.de/jobs/chef-de-partie" },
        { name: "Maître D'Hotel (Amburgo)", salary: "€3.200/mese", url: "https://www.hotelcareer.com/jobs/maitre-d-hotel" },
        { name: "Cameriere/a di Sala (Bistrò)", salary: "€2.100/mese + Mance", url: "https://www.gastrojobs.de/jobs/waiter" }
      ],
      "Sanitario": [
        { name: "Infermiere Professionale (Ospedale)", salary: "€3.800/mese", url: "https://www.make-it-in-germany.com/en/working-in-germany/job-listings?tx_solr%5Bq%5D=nurse" },
        { name: "Medico Anestesista (Clinica)", salary: "€8.500/mese", url: "https://www.aerzteblatt.de/jobs/anesthesiology" },
        { name: "Radiologo (Centro Diagnostico)", salary: "€7.500/mese", url: "https://www.aerzteblatt.de/jobs/radiology" }
      ],
      "Edilizia": [
        { name: "Carpentiere Legno/Metallo", salary: "€18,00/ora", url: "https://www.bau.jobs/jobs/carpenter" },
        { name: "Elettricista Industriale", salary: "€3.200/mese", url: "https://www.bau.jobs/jobs/electrician" },
        { name: "Muratore Specializzato", salary: "€3.000/mese", url: "https://www.bau.jobs/jobs/mason" }
      ]
    },
    "Sud": {
      "Logistica": [
        { name: "BMW Logistics Planner (Monaco)", salary: "€4.200/mese", url: "https://www.bmwgroup.jobs/de/en/job-fields/logistics.html" },
        { name: "Responsabile Magazzino (Stoccarda)", salary: "€3.800/mese", url: "https://de.indeed.com/jobs?q=Warehouse+Manager&l=Stuttgart" },
        { name: "Addetto Logistica Aeroportuale", salary: "€2.900/mese", url: "https://www.munich-airport.com/jobs-career-261230" }
      ],
      "Sanitario": [
        { name: "Cardiologo (Monaco di Baviera)", salary: "€9.000/mese", url: "https://www.aerzteblatt.de/jobs/cardiology" },
        { name: "Infermiere Terapia Intensiva", salary: "€4.200/mese", url: "https://www.make-it-in-germany.com/en/working-in-germany/job-listings" },
        { name: "Tecnico Radiologo (Stoccarda)", salary: "€3.500/mese", url: "https://www.stepstone.de/jobs/Radiologie/in-Stuttgart" }
      ],
      "Turismo": [
        { name: "Front Office Manager (Alpi)", salary: "€3.800/mese + Alloggio", url: "https://www.hotelcareer.com/jobs/front-office-manager" },
        { name: "Sommelier (Hotel 5* Lusso)", salary: "€3.500/mese", url: "https://www.hotelcareer.com/jobs/sommelier" },
        { name: "Direttore Commerciale Hotel", salary: "€6.500/mese", url: "https://www.hotelcareer.com/jobs/hotel-sales-manager" }
      ],
      "Ristorazione": [
        { name: "Executive Chef (Baviera)", salary: "€6.000/mese", url: "https://www.gastrojobs.de/jobs/executive-chef" },
        { name: "Sous Chef (Stoccarda)", salary: "€4.500/mese", url: "https://www.hotelcareer.com/jobs/sous-chef" },
        { name: "Chef de Rang (Michelin Star)", salary: "€2.800/mese + Mance", url: "https://www.gastrojobs.de/jobs/chef-de-rang" }
      ]
    }
  },
  "Austria": {
    "Nord / Centro": {
      "Turismo": [
        { name: "Receptionist Hotel 5* (Vienna)", salary: "€2.450/mese", url: "https://www.rollingpin.at/jobs/vienna/receptionist" },
        { name: "Guest Relation Manager", salary: "€2.800/mese", url: "https://www.hotelcareer.at/jobs/guest-relation-manager" },
        { name: "Front Office Agent", salary: "€2.200/mese", url: "https://www.indeed.at/q-front-office-l-wien-jobs.html" }
      ],
      "Ristorazione": [
        { name: "Chef de Rang (Vienna)", salary: "€2.300/mese + Mance", url: "https://www.gastrojobs.at/jobs/waiter" },
        { name: "Sous Chef Ristorante Gourmet", salary: "€3.200/mese", url: "https://www.rollingpin.at/jobs/chef" },
        { name: "Pasticcere (Konditorei)", salary: "€2.100/mese", url: "https://www.hokify.at/jobs/konditor" }
      ],
      "Sanitario": [
        { name: "Infermiere Specializzato (AKH)", salary: "€3.500/mese", url: "https://www.karriere.at/jobs/krankenschwester" },
        { name: "Medico di Base", salary: "€6.500/mese", url: "https://www.docfinder.at/jobs" }
      ]
    },
    "Ovest / Sud": {
      "Turismo": [
        { name: "Hotel Manager (Salisburgo)", salary: "€4.800/mese", url: "https://www.hotelcareer.at/jobs/hotel-manager" },
        { name: "Receptionist Stagionale (Alpi)", salary: "€2.600/mese + Vitto/Alloggio", url: "https://www.rollingpin.at/jobs/seasonal" }
      ],
      "Logistica": [
        { name: "Operatore Logistico (Graz)", salary: "€2.300/mese", url: "https://www.indeed.at/q-logistik-l-graz-jobs.html" }
      ]
    }
  },
  "Olanda": {
    "Centro": {
      "Logistica": [
        { name: "Warehouse Worker (Amsterdam)", salary: "€2.550/mese", url: "https://www.indeed.nl/jobs?q=warehouse&l=Amsterdam" },
        { name: "Mulettista (Utrecht)", salary: "€16,00/ora", url: "https://www.randstad.nl/vacatures/logistiek" },
        { name: "Driver Delivery", salary: "€2.200/mese", url: "https://www.postnl.nl/over-postnl/werken-bij-postnl/" }
      ],
      "Turismo": [
        { name: "Receptionist Hotel (Amsterdam)", salary: "€2.300/mese", url: "https://www.hoteljob.nl/vacatures/receptionist" },
        { name: "Hotel Director (Amsterdam)", salary: "€6.000/mese", url: "https://www.indeed.nl/q-hotel-manager-jobs.html" }
      ],
      "Sanitario": [
        { name: "Infermiere Registrato (BIG)", salary: "€3.800/mese", url: "https://www.werkenbijvumc.nl/vacatures" },
        { name: "Radiologo Specialist", salary: "€7.000/mese", url: "https://www.medicalpharma.nl/vacatures" }
      ]
    }
  },
  "Svizzera": {
    "Nord": {
      "Finanza": [
        { name: "Senior Analyst (Zurigo)", salary: "CHF 8.500/mese", url: "https://www.jobs.ch/en/vacancies/?term=finance&location=Zurich" },
        { name: "Wealth Manager", salary: "CHF 10.000/mese", url: "https://www.efinancialcareers.ch/jobs-Switzerland-Zurich.br01201" }
      ],
      "Sanitario": [
        { name: "Infermiere (Basilea)", salary: "CHF 6.200/mese", url: "https://www.jobs.ch/en/vacancies/?term=nurse&location=Basel" },
        { name: "Medico Specialista", salary: "CHF 15.000/mese", url: "https://www.fmh.ch/dienstleistungen/stellenmarkt.html" }
      ],
      "Turismo": [
        { name: "Front Office Manager (Lucerna)", salary: "CHF 5.500/mese", url: "https://www.hoteljob-schweiz.ch/jobs/reception" }
      ]
    }
  },
  "Svezia": {
    "Centro": {
      "Tecnologia": [
        { name: "Software Engineer (Stoccolma)", salary: "45.000 - 65.000 SEK/mese", url: "https://www.linkedin.com/jobs/software-engineer-jobs-stockholm/" },
        { name: "IT Consultant", salary: "50.000 SEK/mese", url: "https://www.indeed.se/q-it-l-stockholm-jobs.html" }
      ],
      "Sanitario": [
        { name: "Nurse (Registered)", salary: "38.000 SEK/mese", url: "https://www.socialstyrelsen.se/en/apply-and-register/licence-to-practise/" }
      ]
    }
  },
  "Portogallo": {
    "Sud": {
      "Turismo": [
        { name: "Receptionist Hotel 5* (Algarve)", salary: "€1.400/mese + Alloggio", url: "https://www.net-empregos.com/pesquisa-emprego.asp?chaves=recepcionista&cidade=Algarve" },
        { name: "Hotel Manager (Faro)", salary: "€2.800/mese", url: "https://www.turijobs.pt/emprego-hotelaria-turismo-portugal" }
      ],
      "Customer Service": [
        { name: "Italian Speaker CS (Lisbona)", salary: "€1.200/mese + Bonus", url: "https://www.teleperformance.com/en-us/jobs/search-jobs/?country=Portugal" }
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
      de: "Empfang Hotelmanager Übersetzer",
      nl: "receptionist hotelmanager vertaler",
      fr: "réceptionniste directeur d'hôtel traducteur",
      en: "receptionist hotel manager translator"
    },
    "Ristorazione": {
      keywords: "chef waiter server maitre cook pastry chef",
      it: "Chef Cameriere Maitre Cuoco",
      de: "Koch Kellner Gastronomie",
      nl: "kok ober gastronomie",
      en: "chef waiter restaurant"
    },
    "Sanitario": {
      keywords: "doctor nurse radiologist anesthesiologist physician surgeon",
      it: "Medico Infermiere Radiologo Anestesista",
      de: "Arzt Krankenschwester Radiologe Anästhesist",
      nl: "arts verpleegkundige radioloog",
      en: "doctor nurse radiologist"
    },
    "Logistica": {
      keywords: "warehouse logistics driver forklift operator courier",
      it: "Magazziniere Logistica Autista",
      de: "Lager Logistik Fahrer",
      nl: "magazijn logistiek chauffeur",
      en: "warehouse logistics driver"
    },
    "Edilizia": {
      keywords: "construction builder carpenter electrician plumber mason",
      it: "Edilizia Muratore Elettricista",
      de: "Bau Bauarbeiter Elektriker",
      en: "construction builder electrician"
    }
  };

  const cityMap = {
    "Germania": { "Nord": "Hamburg", "Centro": "Frankfurt", "Sud": "Munich" },
    "Austria": { "Nord / Centro": "Vienna", "Ovest / Sud": "Salzburg" },
    "Olanda": { "Nord": "Groningen", "Centro": "Amsterdam", "Sud": "Rotterdam" },
    "Svizzera": { "Nord": "Zurich", "Centro": "Bern", "Sud": "Geneva" },
    "Belgio": { "Nord (Fiandre)": "Antwerp", "Sud (Vallonia)": "Liege" },
    "Svezia": { "Nord": "Kiruna", "Centro": "Stockholm", "Sud": "Malmo" },
    "Portogallo": { "Nord": "Porto", "Centro": "Lisbon", "Sud": "Faro" }
  };

  const city = (cityMap[country] && cityMap[country][zone]) || country;
  const config = { 
    "Germania": "de", "Austria": "at", "Olanda": "nl", 
    "Svizzera": "ch", "Belgio": "be", "Svezia": "se", 
    "Portogallo": "pt" 
  };
  
  const dom = config[country] || "com";
  const mapping = sectorMapping[sector] || { keywords: sector, en: sector };
  const searchKeywords = mapping[dom] || mapping.en || mapping.keywords;
  
  return [
    { name: `${sector} - Specific Jobs (${city})`, salary: "Vedi Annuncio", url: `https://www.indeed.${dom === 'de' ? 'de' : dom === 'at' ? 'at' : dom}/jobs?q=${encodeURIComponent(searchKeywords)}&l=${encodeURIComponent(city)}` },
    { name: `Direct Hiring: ${city}`, salary: "Top Salary", url: `https://www.google.com/search?q=jobs+${encodeURIComponent(searchKeywords)}+in+${encodeURIComponent(city)}+salary+per+month` },
    { name: `StepStone: ${sector}`, salary: "Professional", url: `https://www.stepstone.${dom === 'at' ? 'at' : 'de'}/jobs/${encodeURIComponent(searchKeywords)}/in-${encodeURIComponent(city)}` },
    { name: `LinkedIn: ${sector} ${city}`, salary: "Benefits", url: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(searchKeywords)}&location=${encodeURIComponent(city)}` }
  ];
}
