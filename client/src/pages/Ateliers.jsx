const seasons = [
  {
    tag: 'Printemps',
    image: '/images/card-balcony-herbs.jpg',
    items: [
      { title: 'Semis en godets', date: 'Mars – 2 sessions' },
      { title: 'Préparer les buttes de culture', date: 'Avril' },
    ],
  },
  {
    tag: 'Été',
    image: '/images/card-waterwise.jpg',
    items: [
      { title: 'Paillage et arrosage économe', date: 'Juin' },
      { title: 'Récolte et conservation', date: 'Juillet – Août' },
    ],
  },
  {
    tag: 'Automne',
    image: '/images/card-citrus-pots.jpg',
    items: [
      { title: 'Récupération des graines', date: 'Septembre' },
      { title: 'Compostage des feuilles mortes', date: 'Novembre' },
    ],
  },
  {
    tag: 'Hiver',
    image: '/images/card-vertical-garden.jpg',
    items: [
      { title: 'Taille des arbustes', date: 'Décembre' },
      { title: 'Planification de la saison suivante', date: 'Janvier – 2 sessions' },
    ],
  },
]

export default function Ateliers() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Calendrier</span>
          <h2>Les ateliers, saison par saison</h2>
          <p>
            Tous les ateliers sont gratuits et ouverts aux membres comme aux
            curieux·ses. Inscription conseillée via le formulaire de contact.
          </p>
        </div>

        <div className="photo-frame page-hero-frame">
          <img
            className="page-hero-photo"
            src="/images/card-community.jpg"
            alt="Atelier dans un jardin partagé à Alger"
          />
        </div>

        <div className="season-list">
          {seasons.map((s) => (
            <div className="season-row" key={s.tag}>
              <div className="season-tag">{s.tag}</div>
              <div className="photo-frame">
                <img className="season-photo" src={s.image} alt={s.tag} />
              </div>
              <div>
                {s.items.map((it) => (
                  <div className="workshop-item" key={it.title}>
                    <span>{it.title}</span>
                    <span className="workshop-date">{it.date}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
