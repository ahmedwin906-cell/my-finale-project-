export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Jardins Partagés</h3>
            <p style={{ color: 'inherit', opacity: 0.85, maxWidth: '38ch' }}>
              Association de jardinage urbain à Alger. On cultive des légumes,
              des liens et un peu de patience, un carré de terre à la fois.
            </p>
          </div>
          <div>
            <h3>Navigation</h3>
            <ul>
              <li><a href="/a-propos">À propos</a></li>
              <li><a href="/ateliers">Ateliers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Nous trouver</h3>
            <ul>
              <li>Jardin El Hamma, Alger</li>
              <li>contact@jardins-partages.dz</li>
              <li>+213 00 00 00 00</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Association Les Jardins Partagés — projet vitrine à but pédagogique
        </div>
      </div>
    </footer>
  )
}
