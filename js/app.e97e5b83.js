const resumeData = {
  name: 'Lachkar Abdelghafor',
  role: 'Développeur Full Stack',
  summary: "Développeur web et mobile avec une expérience solide en Symfony, Angular, Android et intégration d’APIs bancaires. Orienté performance, stabilité et développement de solutions robustes pour le web et les terminaux de paiement.",
  contacts: [
    { label: 'Téléphone', value: '06 74 43 76 65', href: 'tel:+212674437665' },
    { label: 'Email', value: 'lachkar.dev@gmail.com', href: 'mailto:lachkar.dev@gmail.com' },
    { label: 'Adresse', value: 'Riad alkawtar, Mohmadia' },
    { label: 'Langues', value: 'Arabe · Français · Anglais' }
  ],
  experience: [
    {
      date: 'Depuis janvier 2023',
      title: 'Développeur Android',
      company: 'Youzcard Technology - Casablanca',
      bullets: [
        "Développement d'applications mobiles de paiement sur terminaux électroniques.",
        "Intégration d’APIs bancaires et protocoles pour TPE.",
        'Tests et optimisation des applications pour garantir performance et stabilité.'
      ]
    },
    {
      date: 'Septembre 2021 - Décembre 2022',
      title: 'Développeur Informatique',
      company: 'DataFlex - Rabat',
      bullets: [
        "Développement d'une API web avec ASP.NET Core MVC.",
        "Implémentation front-end avec Angular pour des interfaces réactives.",
        'Optimisation des bases de données et des requêtes SQL.'
      ]
    },
    {
      date: 'Février 2017 - Juin 2020',
      title: 'Développeur Symfony & Angular',
      company: 'CDI CONCEPT - Salé',
      bullets: [
        "Développement d'applications web : création et maintenance d'applications web complexes.",
        'Utilisation de Symfony pour le backend et Angular pour le frontend.',
        'Participation à la conception de solutions robustes et évolutives.'
      ]
    }
  ],
  education: [
    {
      date: '2021 - 2022',
      title: 'Licence Professionnelle Universitaire',
      school: "Développement d'application web et mobiles",
      bullets: ['Faculté des Sciences Ibn Tofail - Kénitra']
    },
    {
      date: '2012 - 2014',
      title: 'Diplôme de Technicien Spécialisé',
      school: 'Développement Informatique',
      bullets: ['ISTA - Sala Al Jadida']
    },
    {
      date: '2011 - 2012',
      title: 'Baccalauréat',
      school: 'Science de la Vie et de Terre',
      bullets: ['Lycée Mohammed VI - Sala Al Jadida']
    }
  ],
  skills: [
    {
      title: 'Langages de programmation',
      items: ['PHP (Symfony)', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'Kotlin', 'Java']
    },
    {
      title: 'Frameworks & Technologies',
      items: ['Symfony', 'Angular', 'API RESTful', 'Doctrine', 'Twig', 'Bootstrap']
    },
    {
      title: 'Outils de développement',
      items: ['Git', 'Composer', 'NPM', 'Webpack']
    },
    {
      title: 'Bases de données',
      items: ['MySQL', 'PostgreSQL', 'SQL Server']
    }
  ],
  interests: ['Lecture', 'Football']
};

function renderTimeline(items) {
  return `
    <div class="timeline">
      ${items.map(item => `
        <div class="timeline-item">
          <div class="meta">${item.date}</div>
          <h3 class="item-title">${item.title}</h3>
          <div class="item-subtitle">${item.company || item.school}</div>
          <ul>
            ${(item.bullets || []).map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

function renderSkills(groups) {
  return groups.map(group => `
    <div class="skill-group">
      <h3>${group.title}</h3>
      <div class="chips">
        ${group.items.map(item => `<span class="chip">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderContacts(contacts) {
  return contacts.map(contact => `
    <div class="contact-card">
      <span class="contact-label">${contact.label}</span>
      ${contact.href
        ? `<a class="contact-value" href="${contact.href}">${contact.value}</a>`
        : `<span class="contact-value">${contact.value}</span>`}
    </div>
  `).join('');
}

const app = document.getElementById('app');
app.innerHTML = `
  <div class="container">
    <section class="hero">
      <div class="hero-left">
        <div class="badge">Curriculum Vitae</div>
        <h1>${resumeData.name}</h1>
        <div class="role">${resumeData.role}</div>
        <p class="summary">${resumeData.summary}</p>
      </div>
      <div class="hero-right">
        ${renderContacts(resumeData.contacts)}
      </div>
    </section>

    <section class="main-grid">
      <div>
        <article class="card">
          <h2 class="section-title">Expérience professionnelle</h2>
          ${renderTimeline(resumeData.experience)}
        </article>

        <article class="card" style="margin-top:24px;">
          <h2 class="section-title">Formation</h2>
          ${renderTimeline(resumeData.education)}
        </article>
      </div>

      <div>
        <article class="card">
          <h2 class="section-title">Compétences</h2>
          ${renderSkills(resumeData.skills)}
        </article>

        <article class="card" style="margin-top:24px;">
          <h2 class="section-title">Centres d’intérêt</h2>
          <div class="chips">
            ${resumeData.interests.map(item => `<span class="chip">${item}</span>`).join('')}
          </div>
        </article>
      </div>
    </section>

    <p class="footer-note">Version web mise à jour à partir du CV PDF.</p>
  </div>
`;
