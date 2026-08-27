const news = [
  {
    date: '12 Août 2026',
    title: 'Une nouvelle parcelle ouverte au jardin',
    excerpt:
      "Grâce à l'accord de la mairie, une quatrième zone du terrain a été défrichée et divisée en 6 nouvelles parcelles. Les inscriptions sont ouvertes lors du prochain atelier du samedi.",
  },
  {
    date: '2 Juillet 2026',
    title: "Partenariat avec l'école primaire du quartier",
    excerpt:
      "Deux classes de CM1 viendront chaque mois découvrir le jardin et participer à un mini-atelier de plantation. Un beau moyen de transmettre aux plus jeunes.",
  },
  {
    date: '18 Mai 2026',
    title: 'Belle récolte à la vente de printemps',
    excerpt:
      "La vente annuelle a permis de récolter de quoi acheter de nouveaux outils pour l'ensemble des membres. Merci à tou·tes les bénévoles présent·es ce jour-là.",
  },
  {
    date: '3 Avril 2026',
    title: "Recherche de bénévoles pour l'été",
    excerpt:
      "L'arrosage estival demande plus de mains. Si tu es disponible ne serait-ce qu'une heure par semaine, passe un samedi matin ou écris-nous via le formulaire de contact.",
  },
]

export default function Actus() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Actualités</span>
          <h2>Ce qui se passe au jardin</h2>
          <p>Les dernières nouvelles de l'association, partagées par les bénévoles.</p>
        </div>

        <div className="season-list">
          {news.map((n) => (
            <div className="season-row" key={n.title}>
              <div className="season-tag">{n.date}</div>
              <div>
                <h3 style={{ marginBottom: '0.3em' }}>{n.title}</h3>
                <p style={{ marginBottom: 0 }}>{n.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
<img
  src="/images/card-citrus-pots.jpg"
  alt="Citrons en pots sur une terrasse"
/>