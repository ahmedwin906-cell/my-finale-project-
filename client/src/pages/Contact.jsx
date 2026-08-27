import { useState } from 'react'

const API_URL = 'http://localhost:5000/api/contact'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'ok' | 'err'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Réponse serveur invalide')
      setStatus('ok')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('err')
    }
  }

  return (
    <section className="section">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Une question, une envie de rejoindre le jardin ?</h2>
          <p>
            Écrivez-nous, on répond en général sous 48h. Vous pouvez aussi
            passer directement un samedi matin, le jardin est ouvert de 9h à 12h.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            Jardin El Hamma, Alger<br />
            contact@jardins-partages.dz
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Nom</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi...' : 'Envoyer le message'}
          </button>

          {status === 'ok' && <p className="form-status ok">Message envoyé, merci ! On revient vers vous bientôt.</p>}
          {status === 'err' && <p className="form-status err">Le serveur ne répond pas. Vérifiez qu'il tourne bien sur le port 5000.</p>}
        </form>
      </div>
    </section>
  )
}
