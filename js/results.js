const countryImages = {
  'Germania': 'assets/countries/germania.jpg',
  'Austria': 'assets/countries/austria.jpg',
  'Olanda': 'assets/countries/olanda.jpg',
  'Belgio': 'assets/countries/belgio.jpg',
  'Portogallo': 'assets/countries/portogallo.jpg',
  'Svezia': 'assets/countries/svezia.jpg',
  'Svizzera': 'assets/countries/svizzera.jpg',
  'Norvegia': 'assets/countries/norvegia.jpg',
  'default': 'assets/countries/default.jpg'
};

document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const country = params.get('country');
  const sector = params.get('sector');
  const zone = params.get('zone');

  displayCountryBanner(country);
  const results = filterJobs(country, sector, zone);
  displayResults(results, country, sector, zone);
});

function displayCountryBanner(country) {
  const bannerContainer = document.getElementById('country-banner');
  const bannerImage = document.getElementById('country-image');
  
  if (country) {
    const imagePath = countryImages[country] || countryImages['default'];
    bannerImage.src = imagePath;
    bannerImage.alt = country;
    bannerContainer.style.display = 'block';
  } else {
    bannerContainer.style.display = 'none';
  }
}

function displayResults(results, country, sector, zone) {
  const resultsContainer = document.getElementById('results');
  
  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
        <p data-i18n="proposals_for_you">Ecco alcune proposte per te:</p>
        ${displayJobPortals(country, sector, zone)}
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = results.map(job => `
    <div class="result-card">
      <h4>${job.title}</h4>
      <p><strong>Paese:</strong> ${job.country}</p>
      <p><strong>Zona:</strong> ${job.zone}</p>
      <p><strong>Settore:</strong> <span class="badge">${job.sector}</span></p>
      <p>${job.description}</p>
      <div class="salary-info"><strong style="color: #667eea;">${job.salary}</strong></div>
      <button onclick="openCVModal('#')" class="btn" data-i18n="apply_here">Candidati qui</button>
    </div>
  `).join('');

  // Aggiungi sezione portali di lavoro consigliati
  const portalsSection = document.createElement('div');
  portalsSection.style.gridColumn = '1/-1';
  portalsSection.innerHTML = `
    <hr style="margin: 40px 0; border: none; border-top: 1px solid #ddd;">
    <h3 data-i18n="job_portals" style="color: #667eea; margin-bottom: 20px;">Portali di Lavoro Consigliati (Area ~15km)</h3>
    ${displayJobPortals(country, sector, zone)}
  `;
  
  resultsContainer.parentElement.appendChild(portalsSection);
  loadLanguage(localStorage.getItem("lang") || "it");
}

function displayJobPortals(country, sector, zone) {
  if (!country || !sector || !zone) {
    return '<p>Seleziona un paese, un settore e una zona per vedere i portali di lavoro consigliati.</p>';
  }

  const portals = getJobPortals(country, sector, zone);
  
  return `
    <div class="portals-grid">
      ${portals.map(portal => `
        <div class="portal-card">
          <div>
            <h4>${portal.name}</h4>
            ${portal.salary ? `<div class="salary-info">${portal.salary}</div>` : ''}
          </div>
          <button onclick="openCVModal('${portal.url}')" class="btn" data-i18n="apply_here">Candidati qui</button>
        </div>
      `).join('')}
    </div>
  `;
}
