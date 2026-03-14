import React from 'react';
import { MessageCircle, ArrowRight, Shield, Zap, Heart } from 'lucide-react';
import heroImg from './assets/hero.png';
import service1Img from './assets/service_1.png';
import service2Img from './assets/service_2.png';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content animate-fade-in">
          <h1>Bun venit la BIBI Community</h1>
          <p>
            Locul unde pasiunea întâlnește acțiunea. Explorează, conectează-te și crește alături de noi în cel mai vibrant hub creativ.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#explore" className="btn btn-primary">
              Explorează <ArrowRight size={20} />
            </a>
            <a
              href="https://wa.me/your-group-link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Grup WhatsApp <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="explore" className="sections container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Serviciile Noastre</h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Oferim soluții premium adaptate nevoilor tale, folosind tehnologii de ultimă oră și o viziune artistică unică.
          </p>
        </div>

        <div className="section-grid">
          {/* Card 1 */}
          <div className="card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <img src={service1Img} alt="Serviciu Premium" className="card-image" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Shield className="text-indigo-400" size={24} color="#818cf8" />
              <h3>Design Premium</h3>
            </div>
            <p>
              Interfețe uluitoare create pentru a oferi cea mai bună experiență utilizatorului, îmbinând estetica modernă cu funcționalitatea.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img src={service2Img} alt="Performanță" className="card-image" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Zap className="text-pink-400" size={24} color="#f472b6" />
              <h3>Viteză & Performanță</h3>
            </div>
            <p>
              Optimizăm fiecare detaliu pentru ca proiectul tău să ruleze impecabil pe orice dispozitiv, la viteze fulgerătoare.
            </p>
          </div>

          {/* Card 3 (Using Hero for variety) */}
          <div className="card animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img src={heroImg} alt="Comunitate" className="card-image" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Heart className="text-red-400" size={24} color="#f87171" />
              <h3>Comunitate Unită</h3>
            </div>
            <p>
              Alătură-te sutelor de membri care colaborează zilnic pentru a crea ceva extraordinar. Te așteptăm în echipa noastră!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-24 text-center">
        <div className="card" style={{ maxWidth: '42rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ești Gata Să Începem?</h2>
          <p style={{ marginBottom: '2.5rem' }}>
            Nu rata ocazia de a face parte din universul BIBI. Conectează-te acum!
          </p>
          <a
            href="https://wa.me/your-link"
            className="btn btn-whatsapp"
            style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}
          >
            Contactează-ne pe WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 BIBI Landing Page. Toate drepturile rezervate.</p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
