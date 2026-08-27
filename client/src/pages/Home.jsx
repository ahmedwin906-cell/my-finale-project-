import { Link } from 'react-router-dom'
import SeasonWheel from '../components/SeasonWheel'

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div>
          <span className="eyebrow">Association loi 1901 – Alger</span>
          <h1>Un carré de terre, un jardin partagé, une communauté.</h1>
          <p className="lead">
            Les Jardins Partagés rassemblent des habitant·es du quartier autour
            de parcelles cultivées en commun. Compostage, échange de graines et
            ateliers gratuits toute l'année.
          </p>
          <div className="hero-actions">
            <Link to="/ateliers" className="btn btn-primary">Voir les ateliers</Link>
            <Link to="/contact" className="btn btn-outline">Nous rejoindre</Link>
          </div>
        </div>

         <SeasonWheel />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">En images</span>
            <h2>Le jardin, de la terrasse à la cour</h2>
          </div>
          <div className="card video-card">
            <video
              className="home-video"
              src="/videos/jardins-partages.mp4"
              controls
              playsInline
              poster="/images/hero-algiers-rooftop.jpg"
            />
            <h3>Jardins Partagés</h3>
            <p>Un carré de terre à Alger — apprendre, manger local, créer du lien.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Pourquoi nous rejoindre</span>
            <h2>Trois bonnes raisons de mettre les mains dans la terre</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <img src="/images/card-balcony-herbs.jpg" alt="Herbes aromatiques sur un balcon à Alger" />
              <h3>Apprendre en faisant</h3>
              <p>Des ateliers pratiques encadrés par des jardinier·ères bénévoles, sans prérequis.</p>
            </div>
            <div className="card">
              <img src="/images/card-rooftop-vegetables.jpg" alt="Légumes cultivés sur un toit" />
              <h3>Manger local</h3>
              <p>Les récoltes sont partagées entre les membres actifs de chaque parcelle.</p>
            </div>
            <div className="card">
              <img src="/images/card-community.jpg" alt="Jardin partagé dans une cour d'immeuble à Alger" />
              <h3>Créer du lien</h3>
              <p>Le jardin est un espace ouvert de rencontre entre voisin·es de tous âges.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
