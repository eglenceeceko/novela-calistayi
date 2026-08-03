'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Iletisim() {
  const contacts = [
    { name: 'Amine Ruveyda Tatar', role: 'GENEL KOORDİNATÖR', email: 'amineruveydatatar@gmail.com', phone: '+90 (500) 000 00 01', img: '/amine.jpg' },
    { name: 'Rojin Özbey', role: 'GENEL KOORDİNATÖR', email: 'rojinozbey@gmail.com', phone: '+90 (500) 000 00 02', img: '/rojin.jpg' },
    { name: 'Muhammed Selim Alptekin', role: 'ORGANİZASYON BAŞKANI', email: 'muhammedselimalptekin@gmail.com', phone: '+90 (500) 000 00 03', img: '/selim.jpg' },
    { name: 'Zeynep Tosun', role: 'ORGANİZASYON BAŞKANI', email: 'zeyneptosun@gmail.com', phone: '+90 (500) 000 00 04', img: '/zeynep.jpg' }
  ];

  return (
    <main style={{ margin: 0, padding: 0, boxSizing: 'border-box', backgroundColor: '#0c233c', color: '#fff', overflowX: 'hidden' }}>
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '15px 50px', 
          backgroundColor: '#0c233c', 
          color: '#d4af37', 
          position: 'sticky', 
          top: 0, 
          zIndex: 1000,
          borderBottom: '1px solid #d4af37' 
        }}
      >
        <div style={{ width: '40px', height: '40px' }}>
          <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', gap: '50px', margin: 0, padding: 0 }}>
          {[
            { name: 'Anasayfa', href: '/' },
            { name: 'Hakkımızda', href: '/hakkimizda' },
            { name: 'Ekibimiz', href: '/ekibimiz' },
            { name: 'Sponsorlar', href: '/sponsorlar' },
            { name: 'Komiteler', href: '/komiteler' },
            { name: 'İletişim', href: '/iletisim' }
          ].map((item) => (
            <motion.li 
              key={item.name} 
              whileHover={{ scale: 1.1 }}
              style={{ cursor: 'pointer', fontWeight: '500' }}
            >
              <Link 
                href={item.href} 
                style={{ color: item.name === 'İletişim' ? '#00bfff' : '#fff', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = item.name === 'İletişim' ? '#00bfff' : '#fff')}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        <Link href="/basvuru" style={{ textDecoration: 'none' }}>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#d4af37', color: '#0c233c' }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: 'transparent', 
              border: '1px solid #d4af37', 
              color: '#d4af37', 
              padding: '10px 30px', 
              cursor: 'pointer',
              fontWeight: 'bold',
              borderRadius: '4px',
              transition: 'background-color 0.2s, color 0.2s'
            }}
          >
            Başvur
          </motion.button>
        </Link>
      </motion.nav>

      {/* Hero / Üst Başlık */}
      <header style={{ padding: '80px 50px 60px 50px', textAlign: 'center', backgroundColor: '#0a1d32' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontSize: '0.9rem', letterSpacing: '3px', color: '#d4af37', marginBottom: '15px' }}>BİZE ULAŞIN</h3>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>İletişim</h1>
          <p style={{ fontSize: '1.2rem', color: '#b0b0b0', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Sorularınız, önerileriniz veya iş birliği talepleriniz için bizimle her zaman iletişime geçebilirsiniz.
          </p>
        </motion.div>
      </header>

      {/* Ana Bölüm: Sol Taraf Yetkili Kartları, Sağ Taraf Genel Bilgiler */}
      <section style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'start' }}>
        
        {/* Sol Taraf: Çerçeveli Yetkili Kartları */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {contacts.map((person, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 + index * 0.1 }}
              style={{ 
                backgroundColor: '#ffffff', 
                color: '#0c233c', 
                border: '2px solid rgba(212, 175, 55, 0.6)', 
                borderRadius: '8px', 
                padding: '35px', 
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
            >
              {/* Fotoğraf Çerçevesi */}
              <div style={{ width: '100px', height: '100px', margin: '0 auto 20px auto', border: '2px solid #0c233c', borderRadius: '6px', overflow: 'hidden', backgroundColor: '#eaeaea' }}>
                <img 
                  src={person.img} 
                  alt={person.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e)=>{(e.target as HTMLElement).style.display = 'none';}} 
                />
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0c233c', marginBottom: '8px' }}>{person.name}</h3>
              <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0c233c', letterSpacing: '1px', marginBottom: '25px' }}>{person.role}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                
                {/* E-posta */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0c233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href={`mailto:${person.email}`} style={{ color: '#0c233c', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>{person.email}</a>
                </div>

                {/* Telefon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0c233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href={`tel:${person.phone}`} style={{ color: '#0c233c', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>{person.phone}</a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Sağ Taraf: Genel İletişim Bilgileri */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '25px', position: 'sticky', top: '100px' }}
        >
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px', color: '#fff' }}>İletişim Bilgileri</h2>
            <p style={{ color: '#b0b0b0', lineHeight: '1.6', fontSize: '1rem' }}>
              Novela İlham Çalıştayı ekibine aşağıdaki kanallardan ulaşabilir, merak ettiğiniz tüm detayları öğrenebilirsiniz.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
            
            {/* E-posta Kartı */}
            <div style={{ backgroundColor: 'rgba(18, 48, 80, 0.5)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '20px 25px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#d4af37', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>E-Posta</h4>
                <a href="mailto:novalecal27@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', wordBreak: 'break-all' }}>novalecal27@gmail.com</a>
              </div>
            </div>

            {/* Konum Kartı */}
            <div style={{ backgroundColor: 'rgba(18, 48, 80, 0.5)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '20px 25px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#d4af37', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Konum</h4>
                <p style={{ color: '#fff', fontSize: '1rem', margin: 0 }}>Mekan Bilgisi Paylaşıldığında Duyurulucaktır.</p>
              </div>
            </div>

            {/* Sosyal Medya Kartı */}
            <div style={{ backgroundColor: 'rgba(18, 48, 80, 0.5)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '20px 25px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#contact-ig-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="contact-ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#d4af37', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Sosyal Medya</h4>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>@novelailhamcalistayi</a>
              </div>
            </div>

          </div>
        </motion.div>

      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#061826', color: '#fff', padding: '70px 80px 30px 80px', borderTop: '1px solid #1a365d' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.2fr 1.2fr', gap: '40px', maxWidth: '1200px', margin: '0 auto', marginBottom: '50px', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ width: '45px', height: '45px', border: '2px solid #d4af37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', color: '#d4af37', fontWeight: 'bold', fontSize: '0.8rem' }}>
                N
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', lineHeight: '1.3', letterSpacing: '0.5px' }}>
                NOVELA İLHAM<br />ÇALIŞTAYI
              </h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#b0b0b0', lineHeight: '1.6' }}>
              Genç düşünürler için eleştirel tartışma, kavramsal düşünme ve akademik gelişimi merkeze alan bir düşünce platformu.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>Hızlı İletişim</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Hakkımızda', href: '/hakkimizda' },
                { name: 'Ekibimiz', href: '/ekibimiz' },
                { name: 'Komiteler', href: '/komiteler' },
                { name: 'İletişim', href: '/iletisim' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    style={{ color: link.name === 'İletişim' ? '#00bfff' : '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = link.name === 'İletişim' ? '#00bfff' : '#b0b0b0')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>İletişim</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#b0b0b0', fontSize: '0.95rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Mekan Bilgisi Paylaşıldığında Duyurulucaktır.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#b0b0b0', fontSize: '0.95rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span style={{ wordBreak: 'break-all' }}>novalecal27@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>Sosyal Medya</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a 
                href="#" 
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#b0b0b0')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#social-ig-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="social-ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>@novelailhamcalistayi</span>
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', color: '#888888', fontSize: '0.85rem' }}>
          <div>© 2027 Novela İlham Çalıştayı – Tüm hakları saklıdır.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
            <span style={{ color: '#00bfff', fontWeight: '600', fontFamily: 'inherit' }}>Built by</span>
            <a href="https://instagram.com/ccenkyaman" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#footer-ig-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}>
                <defs>
                  <linearGradient id="footer-ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span style={{ color: '#ffcc00', fontWeight: '600', fontFamily: 'inherit' }}>ccenkyaman</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}