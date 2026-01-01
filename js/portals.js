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
      ]
    },
    "Sud": {
      "Sanitario": [
        { name: "Cardiologo (Monaco di Baviera)", salary: "€9.000/mese", url: "https://www.aerzteblatt.de/jobs/cardiology" },
        { name: "Infermiere Terapia Intensiva", salary: "€4.200/mese", url: "https://www.make-it-in-germany.com/en/working-in-germany/job-listings" },
        { name: "Tecnico Radiologo (Stoccarda)", salary: "€3.500/mese", url: "https://www.stepstone.de/jobs/Radiologie/in-Stuttgart" }
      ]
    }
  },
  "Austria": {
    "Nord / Centro": {
      "Turismo": [
        { name: "Receptionist Hotel 5* (Vienna)", salary: "€2.450/mese", url: "https://www.rollingpin.at/jobs/vienna/receptionist" },
        { name: "Guest Relation Manager", salary: "€2.800/mese", url: "https://www.hotelcareer.at/jobs/guest-relation-manager" },
        { name: "Front Office Agent (Wien)", salary: "€2.200/mese", url: "https://www.indeed.at/q-front-office-l-wien-jobs.html" }
      ],
      "Ristorazione": [
        { name: "Chef de Rang (Vienna)", salary: "€2.300/mese + Mance", url: "https://www.gastrojobs.at/jobs/waiter" },
        { name: "Sous Chef Ristorante Gourmet", salary: "€3.200/mese", url: "https://www.rollingpin.at/jobs/chef" },
        { name: "Pasticcere (Konditorei)", salary: "€2.100/mese", url: "https://www.hokify.at/jobs/konditor" }
      ],
      "Sanitario": [
        { name: "Infermiere Specializzato (AKH)", salary: "€3.500/mese", url: "https://www.karriere.at/jobs/krankenschwester" },
        { name: "Medico di Base (Salisburgo)", salary: "€6.500/mese", url: "https://www.docfinder.at/jobs" }
      ]
    }
  },
  "Olanda": {
    "Nord": {
      "Turismo": [
        { name: "Hotel Professionals NL", salary: "€2.400 - €3.100/mese", url: "https://www.hotelprofessionals.nl/en/hotel-jobs" },
        { name: "Hozpitality NL", salary: "€2.300/mese", url: "https://nl.hozpitality.com/hospitality-jobs/" },
        { name: "Kom Werken in de Horeca", salary: "€2.200 - €2.800/mese", url: "https://www.komwerkenindehoreca.nl/" }
      ],
      "Ristorazione": [
        { name: "Indeed Hospitality NL", salary: "€2.100 - €3.500/mese", url: "https://www.indeed.com/q-hospitality-jobs-Netherlands.html" },
        { name: "EnglishJobs Restaurant NL", salary: "€2.200/mese + Alloggio", url: "https://englishjobs.de/jobs/restaurant" },
        { name: "Bakeca Estero Olanda", salary: "€2.000 - €2.600/mese", url: "https://estero.bakeca.it/dettaglio/offerte-di-lavoro-estero/ristorazione-in-olanda-posizioni-aperte-in-cucina-e-sala-3xdr223840736" }
      ],
      "Edilizia": [
        { name: "Construction Jobs NL", salary: "€2.800 - €4.200/mese", url: "https://englishjobsearch.nl/jobs/construction" },
        { name: "Bowers Construction", salary: "€3.000/mese", url: "https://bowers.nl/construction-jobs-in-the-netherlands/" },
        { name: "Oranjegroep Construction", salary: "€2.900/mese", url: "https://www.oranjegroep.com/construction" }
      ],
      "Sanitario": [
        { name: "MediCarrera Healthcare", salary: "€4.500 - €7.500/mese", url: "https://medicarrera.com/jobs-netherlands/" },
        { name: "Care Force Medical", salary: "€5.000+/mese", url: "https://www.care-force.com/" },
        { name: "Glassdoor Healthcare NL", salary: "€4.000/mese", url: "https://www.glassdoor.com/Job/netherlands-healthcare-jobs-SRCH_IL.0%2C11_IN178_KO12%2C22.htm" }
      ]
    },
    "Sud": {
      "Turismo": [
        { name: "Hotel Professionals NL", salary: "€2.400 - €3.100/mese", url: "https://www.hotelprofessionals.nl/en/hotel-jobs" },
        { name: "Hozpitality NL", salary: "€2.300/mese", url: "https://nl.hozpitality.com/hospitality-jobs/" }
      ],
      "Ristorazione": [
        { name: "Indeed Hospitality NL", salary: "€2.100 - €3.500/mese", url: "https://www.indeed.com/q-hospitality-jobs-Netherlands.html" },
        { name: "Bakeca Estero Olanda", salary: "€2.000 - €2.600/mese", url: "https://estero.bakeca.it/dettaglio/offerte-di-lavoro-estero/ristorazione-in-olanda-posizioni-aperte-in-cucina-e-sala-3xdr223840736" }
      ],
      "Edilizia": [
        { name: "Concreeto Construction", salary: "€2.800 - €3.800/mese", url: "https://concreeto.nl/en/vacancies/construction" },
        { name: "Glassdoor Construction NL", salary: "€3.200/mese", url: "https://www.glassdoor.it/Job/netherlands-construction-jobs-SRCH_IL.0%2C11_IN178_KO12%2C24.htm" }
      ],
      "Sanitario": [
        { name: "MediCarrera Healthcare", salary: "€4.500 - €7.500/mese", url: "https://medicarrera.com/jobs-netherlands/" },
        { name: "Care Force Medical", salary: "€5.000+/mese", url: "https://www.care-force.com/" }
      ]
    }
  },
  "Svizzera": {
    "Nord": {
      "Turismo": [
        { name: "Jobs.ch Hospitality", salary: "CHF 4.500 - 6.500/mese", url: "https://www.jobs.ch/en/" },
        { name: "Swizjob.ch Turismo", salary: "CHF 4.200/mese", url: "https://swizjob.ch/it/home-it/" },
        { name: "SwissHospitalityJobs", salary: "CHF 5.000/mese", url: "https://www.swisshospitalityjobs.com/" }
      ],
      "Ristorazione": [
        { name: "Jobs.ch Gastronomia", salary: "CHF 4.000 - 5.500/mese", url: "https://www.jobs.ch/en/" },
        { name: "Swizjob.ch Ristorazione", salary: "CHF 4.200/mese", url: "https://swizjob.ch/it/home-it/" },
        { name: "Carriera.ch Gastronomia", salary: "CHF 4.500/mese", url: "https://www.carriera.ch/offerte/annunci-offerte-lavoro_gastronomia_210_0.html" }
      ],
      "Edilizia": [
        { name: "Jobs.ch Edilizia", salary: "CHF 5.500 - 7.500/mese", url: "https://www.jobs.ch/en/" },
        { name: "Swizjob.ch Costruzioni", salary: "CHF 5.800/mese", url: "https://swizjob.ch/it/home-it/" },
        { name: "Jobs.esperto.ch Edilizia", salary: "CHF 6.000/mese", url: "https://jobs.esperto.ch/" }
      ],
      "Sanitario": [
        { name: "Jobs.ch Sanità", salary: "CHF 6.500 - 9.500/mese", url: "https://www.jobs.ch/en/" },
        { name: "Swizjob.ch Salute", salary: "CHF 7.000/mese", url: "https://swizjob.ch/it/home-it/" },
        { name: "Jobs.esperto.ch Sanitario", salary: "CHF 7.500/mese", url: "https://jobs.esperto.ch/" }
      ]
    },
    "Sud": {
      "Turismo": [
        { name: "Jobs.ch Hospitality", salary: "CHF 4.500 - 6.500/mese", url: "https://www.jobs.ch/en/" },
        { name: "Lavoro Ticino Turismo", salary: "CHF 4.000/mese", url: "https://lavoro.cdt.ch/" }
      ],
      "Ristorazione": [
        { name: "Swizjob.ch Ristorazione", salary: "CHF 4.200/mese", url: "https://swizjob.ch/it/home-it/" },
        { name: "Tioffrolavoro Gastro", salary: "CHF 4.100/mese", url: "https://www.tioffrolavoro.com/" }
      ],
      "Edilizia": [
        { name: "Jobs.ch Edilizia", salary: "CHF 5.500 - 7.500/mese", url: "https://www.jobs.ch/en/" },
        { name: "Jobs.esperto.ch Edilizia", salary: "CHF 6.000/mese", url: "https://jobs.esperto.ch/" }
      ],
      "Sanitario": [
        { name: "Jobs.ch Sanità", salary: "CHF 6.500 - 9.500/mese", url: "https://www.jobs.ch/en/" },
        { name: "Swizjob.ch Salute", salary: "CHF 7.000/mese", url: "https://swizjob.ch/it/home-it/" }
      ]
    }
  },
  "Belgio": {
    "Nord": {
      "Turismo": [
        { name: "LinkedIn Hotel Antwerp", salary: "€2.400 - €3.200/mese", url: "https://be.linkedin.com/jobs/jobs-in-antwerp" },
        { name: "Bakeago Leuven Jobs", salary: "€2.300/mese", url: "https://www.bakeago.com/annunci-offerte-lavoro-all-estero/leuven" },
        { name: "Accent Jobs Belgium", salary: "€2.500/mese", url: "https://accentjobs.be/en/employees/specializations" }
      ],
      "Ristorazione": [
        { name: "Rysto Belgium Gastronomy", salary: "€2.100 - €3.000/mese", url: "https://www.rysto.com/it/c/belgio" },
        { name: "LinkedIn Restaurant Gent", salary: "€2.200/mese", url: "https://www.linkedin.com/jobs/search/?location=Gent%2C%20Belgium" }
      ],
      "Edilizia": [
        { name: "Accent Jobs Construction", salary: "€2.800 - €3.800/mese", url: "https://accentjobs.be/en/employees/specializations" },
        { name: "LinkedIn Construction Gent", salary: "€2.700/mese", url: "https://www.linkedin.com/jobs/search/?location=Gent%2C%20Belgium" }
      ],
      "Logistica": [
        { name: "Aurawoo Logistics BE", salary: "€2.400 - €3.100/mese", url: "https://www.aurawoo.com/job-industry/unskilled-workers/belgium/" },
        { name: "Accent Jobs Logistics", salary: "€2.500/mese", url: "https://accentjobs.be/en/employees/specializations" }
      ]
    },
    "Sud": {
      "Turismo": [
        { name: "Bakeago Brussels Jobs", salary: "€2.500 - €3.500/mese", url: "https://www.bakeago.com/annunci-offerte-lavoro-all-estero/brussels" },
        { name: "LinkedIn Hotel Belgium", salary: "€2.400/mese", url: "https://www.linkedin.com/jobs/search/?keywords=hotel&location=Belgium" }
      ],
      "Ristorazione": [
        { name: "Rysto Brussels Cuisine", salary: "€2.200 - €3.100/mese", url: "https://www.rysto.com/it/c/belgio" },
        { name: "Bakeago Brussels Gastro", salary: "€2.300/mese", url: "https://www.bakeago.com/annunci-offerte-lavoro-all-estero/brussels" }
      ],
      "Edilizia": [
        { name: "Bakeca Estero Maintenance", salary: "€2.600 - €3.400/mese", url: "https://estero.bakeca.it/dettaglio/offerte-di-lavoro-estero/tecnico-manutentore-in-belgio-32um287513582" },
        { name: "Accent Jobs Construction", salary: "€2.800/mese", url: "https://accentjobs.be/en/employees/specializations" }
      ],
      "Sanitario": [
        { name: "LinkedIn Nurse Belgium", salary: "€3.500 - €5.500/mese", url: "https://www.linkedin.com/jobs/search/?keywords=nurse&location=Belgium" },
        { name: "MediNation Healthcare", salary: "€3.800+/mese", url: "https://medination.be/en/job-offers/category/logistics-and-facilities" }
      ]
    }
  },

  "Svezia": {
    "Centro": {
      "Tecnologia": [
        { name: "Software Engineer (Stoccolma)", salary: "45.000 - 65.000 SEK/mese", url: "https://www.linkedin.com/jobs/software-engineer-jobs-stockholm/" },
        { name: "IT Consultant (Goteborg)", salary: "50.000 SEK/mese", url: "https://www.indeed.se/q-it-l-stockholm-jobs.html" }
      ],
      "Sanitario": [
        { name: "Nurse (Registered) Stockholm", salary: "38.000 SEK/mese", url: "https://www.socialstyrelsen.se/en/apply-and-register/licence-to-practise/" }
      ]
    }
  },
  "Portogallo": {
    "Nord": {
      "Turismo": [
        { name: "EnglishJobs Hotel District", salary: "€1.400 - €1.800/mese", url: "https://englishjobs.pt/jobs/hospitality" },
        { name: "Turijobs Porto", salary: "€1.300/mese", url: "https://www.turijobs.pt/emprego-hotelaria-turismo-porto" },
        { name: "PHC Hotels Recruitment", salary: "€1.500/mese", url: "https://www.phchotels.pt/en/recruitment/" }
      ],
      "Ristorazione": [
        { name: "Bolsa de Empregabilidade", salary: "€1.200 - €1.600/mese", url: "https://bolsadeempregabilidade.pt/" },
        { name: "Glassdoor Hospitality PT", salary: "€1.250/mese", url: "https://www.glassdoor.com/Job/portugal-hospitality-jobs-SRCH_IL.0,8_IN195_KO9,20.htm" }
      ],
      "Edilizia": [
        { name: "EnglishJobs Construction", salary: "€1.800 - €2.500/mese", url: "https://englishjobs.pt/jobs/construction" },
        { name: "Timing.pt Technical", salary: "€1.700/mese", url: "https://timing.pt/" }
      ],
      "Sanitario": [
        { name: "LinkedIn Healthcare PT", salary: "€2.500 - €4.500/mese", url: "https://www.linkedin.com/jobs/search/?location=Portugal" }
      ]
    },
    "Sud": {
      "Turismo": [
        { name: "JobsInPortugal Algarve", salary: "€1.400 - €1.900/mese", url: "https://jobsinportugal.net/" },
        { name: "PHC Hotels Recruitment", salary: "€1.500/mese", url: "https://www.phchotels.pt/en/recruitment/" }
      ],
      "Ristorazione": [
        { name: "Glassdoor Hospitality PT", salary: "€1.250/mese", url: "https://www.glassdoor.com/Job/portugal-hospitality-jobs-SRCH_IL.0,8_IN195_KO9,20.htm" },
        { name: "Bolsa de Empregabilidade", salary: "€1.200 - €1.600/mese", url: "https://bolsadeempregabilidade.pt/" }
      ],
      "Edilizia": [
        { name: "Timing.pt Algarve", salary: "€1.800/mese", url: "https://timing.pt/" },
        { name: "EnglishJobs Construction", salary: "€1.800 - €2.500/mese", url: "https://englishjobs.pt/jobs/construction" }
      ],
      "Pulizie": [
        { name: "Glassdoor Cleaner PT", salary: "€1.100 - €1.400/mese", url: "https://www.glassdoor.com/Job/portugal-cleaner-jobs-SRCH_IL.0,8_IN195_KO9,16.htm" }
      ]
    }
  }
};

function getJobPortals(country, sector, zone) {
  if (jobPortals[country] && jobPortals[country][zone] && jobPortals[country][zone][sector]) {
    return jobPortals[country][zone][sector];
  }

  const sectorMapping = {
    "Turismo": { keywords: "receptionist hotel manager", it: "Receptionist Hotel", en: "Receptionist Hotel" },
    "Ristorazione": { keywords: "chef cook waiter", it: "Cuoco Cameriere", en: "Chef Waiter" },
    "Sanitario": { keywords: "nurse doctor", it: "Infermiere Medico", en: "Nurse Doctor" },
    "Logistica": { keywords: "warehouse driver", it: "Magazziniere Autista", en: "Warehouse Driver" },
    "Edilizia": { keywords: "construction builder", it: "Edilizia Muratore", en: "Construction Builder" }
  };

  const cityMap = {
    "Germania": { "Nord": "Hamburg", "Centro": "Frankfurt", "Sud": "Munich" },
    "Austria": { "Nord / Centro": "Vienna", "Ovest / Sud": "Salzburg" },
    "Olanda": { "Nord": "Amsterdam", "Sud": "Rotterdam" },
    "Svizzera": { "Nord": "Zurich", "Sud": "Geneva" },
    "Portogallo": { "Sud": "Faro", "Centro": "Lisbon" },
    "Svezia": { "Centro": "Stockholm" }
  };

  const city = (cityMap[country] && cityMap[country][zone]) || country;
  const config = { "Germania": "de", "Austria": "at", "Olanda": "nl", "Svizzera": "ch", "Portogallo": "pt", "Svezia": "se" };
  const dom = config[country] || "com";
  const mapping = sectorMapping[sector] || { keywords: sector, en: sector };
  const searchKeywords = mapping.en || mapping.keywords;
  
  return [
    { name: `${sector} - Specific Jobs (${city})`, salary: "€2.200 - €4.500/mese", url: `https://www.indeed.${dom === 'de' ? 'de' : dom === 'at' ? 'at' : dom}/jobs?q=${encodeURIComponent(searchKeywords)}&l=${encodeURIComponent(city)}` },
    { name: `Direct Hiring: ${city}`, salary: "Top Salary", url: `https://www.google.com/search?q=jobs+${encodeURIComponent(searchKeywords)}+in+${encodeURIComponent(city)}+salary` },
    { name: `StepStone: ${sector}`, salary: "Professional", url: `https://www.stepstone.${dom === 'at' ? 'at' : 'de'}/jobs/${encodeURIComponent(searchKeywords)}/in-${encodeURIComponent(city)}` },
    { name: `LinkedIn: ${sector} ${city}`, salary: "Benefits", url: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(searchKeywords)}&location=${encodeURIComponent(city)}` }
  ];
}
