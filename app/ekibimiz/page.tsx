'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Ekibimiz() {
  const [activeTab, setActiveTab] = useState('Tümü');

  const categories = [
    'Tümü', 
    'Genel Koordinatör', 
    'Organizasyon', 
    'Halkla İlişkiler', 
    'Akademi', 
    'Saha', 
    'Finans', 
    'Tasarım',
    'Basın',
    'İnsan Kaynakları',
    'Güvenlik'
  ];

  const teamMembers = [
    {
      name: 'Amine Ruveyda Tatar',
      role: 'Genel Koordinatör',
      category: 'Genel Koordinatör',
      school: 'İstanbul Ticaret Odası Marmara Anadolu İmamhatip Lisesi',
      grade: '9. Sınıf',
      image: '/team/amine.jpg',
      instagram: 'https://instagram.com/ruv13yda'
    },
    {
      name: 'Rojin Özbey',
      role: 'Genel Koordinatör',
      category: 'Genel Koordinatör',
      school: 'İbni Sina Anadolu Lisesi',
      grade: '11. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/guness_ozby'
    },
    {
      name: 'Muhammed Selim Alptekin',
      role: 'Organizasyon Başkanı',
      category: 'Organizasyon',
      school: '⁠Ahmet Keleşoğlu Fen Lisesi ',
      grade: '10. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/selim_alpteknn'
    },
    {
      name: 'Zeynep Tosun',
      role: 'Organizasyon Başkanı',
      category: 'Organizasyon',
      school: 'Kadıköy Anadolu İmamhatip Lİsesi',
      grade: '9. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/zeyneo.zsy'
    },
    {
      name: 'Yağmur Öztürk',
      role: 'Halkla İlişkiler Başkanı',
      category: 'Halkla İlişkiler',
      school: 'Vefa Poyraz Anadolu Lisesi',
      grade: '11. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/yagmurrrrr_ozturk284'
    },
    {
      name: 'Sevgi Nizam',
      role: 'Halkla İlişkiler Başkanı',
      category: 'Halkla İlişkiler',
      school: 'Erenköy Kız Lisesi',
      grade: '11. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/sevgiinizam_'
    },
    {
      name: 'Nice Özcan',
      role: 'Akademi Başkanı',
      category: 'Akademi',
      school: 'Yüksel İlhan Alanyalı Fen Lisesi',
      grade: '10. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/niceozcan'
    },
    {
      name: 'Ömer Ali Korkmaz',
      role: 'Akademi Başkanı',
      category: 'Akademi',
      school: 'Beylikdüzü Sosyal Bilimler Lisesi',
      grade: '9. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/korkmazomer82'
    },
    {
      name: 'Ali Ekrem Dönmez',
      role: 'Saha Başkanı',
      category: 'Saha',
      school: 'Ömerçam Anadolu İmamhatip Lisesi ',
      grade: '10. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/a.ekrem_donmez'
    },
    {
      name: 'Yiğit Kaan Hatipoğlu',
      role: 'Saha Başkanı',
      category: 'Saha',
      school: 'Ömerçam Anadolu İmamhatip Lisesi',
      grade: '10. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/hatipoglu_yigit'
    },
    {
      name: 'Duru Kurt',
      role: 'Finans Başkanı',
      category: 'Finans',
      school: 'İstanbul Atatürk Fen Lisesi',
      grade: '9. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/duruww1919'
    },
    {
      name: 'Eylül Saral',
      role: 'Finans Başkanı',
      category: 'Finans',
      school: 'Behçet Kemal Çağlar Anadolu Lisesi',
      grade: '12. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/09eylulsaral'
    },
    {
      name: 'Enes Akcan',
      role: 'Tasarım Başkanı',
      category: 'Tasarım',
      school: 'Örnek Okul Adı',
      grade: '10. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/enes.the.nigdeli'
    },
    {
      name: 'Akif Efe Altunsoy',
      role: 'Tasarım Başkanı',
      category: 'Tasarım',
      school: 'Ömerçam Anadolu İmamhatip Lisesi',
      grade: '10. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/akif.efe61'
    },
    {
      name: 'Devrim Büyükozkan',
      role: 'Basın Başkanı',
      category: 'Basın',
      school: 'Burhan Felek Anadolu Lisesi',
      grade: '11    . Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/devrimbuyukozkan'
    },
    {
      name: 'Elifnaz Kömür',
      role: 'İnsan Kaynakları Başkanı',
      category: 'İnsan Kaynakları',
      school: 'Mehmet Niyazi Altuğ Anadolu ',
      grade: '11    . Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/xxx'
    },
    {
      name: 'Egehan Baydili',
      role: 'Güvenlik Başkanı',
      category: 'Güvenlik',
      school: 'Örnek Okul Adı',
      grade: '10. Sınıf',
      image: '/team/placeholder.png',
      instagram: 'https://instagram.com/egehbydll'
    }
  ];

  const filteredMembers = activeTab === 'Tümü' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeTab);

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
                style={{ color: item.name === 'Ekibimiz' ? '#00bfff' : '#fff', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = item.name === 'Ekibimiz' ? '#00bfff' : '#fff')}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Başvur Butonu Link ile sarmalandı */}
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
          <h3 style={{ fontSize: '0.9rem', letterSpacing: '3px', color: '#d4af37', marginBottom: '15px' }}>BİZİ TANIYIN</h3>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>Ekibimiz</h1>
          <p style={{ fontSize: '1.2rem', color: '#b0b0b0', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Novela İlham Çalıştayı’nı hayata geçiren, vizyoner ve dinamik kadromuzla tanışın.
          </p>
        </motion.div>
      </header>

      {/* Kategori Filtreleme Butonları */}
      <section style={{ padding: '40px 20px', backgroundColor: '#0c233c', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto' }}>
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveTab(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '10px 18px',
              borderRadius: '30px',
              border: activeTab === category ? '1px solid #00bfff' : '1px solid rgba(212, 175, 55, 0.4)',
              backgroundColor: activeTab === category ? '#00bfff' : 'rgba(12, 35, 60, 0.8)',
              color: activeTab === category ? '#0c233c' : '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.3s'
            }}
          >
            {category}
          </motion.button>
        ))}
      </section>

      {/* Ekip Kartları Grid Alanı */}
      <section style={{ padding: '40px 80px 100px 80px', backgroundColor: '#0c233c', minHeight: '400px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {filteredMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{
                backgroundColor: 'rgba(18, 48, 80, 0.6)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '15px',
                overflow: 'hidden',
                textAlign: 'center',
                padding: '25px 20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Dikey Dikdörtgen Fotoğraf Alanı */}
              <div style={{ width: '100%', height: '260px', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.4)', overflow: 'hidden', marginBottom: '20px', backgroundColor: '#0a1d32', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                <span style={{ fontSize: '3rem', color: '#d4af37', fontWeight: 'bold', position: 'absolute', zIndex: 1 }}>
                  {member.name.charAt(0)}
                </span>

                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 2 }} 
                  onError={(e)=>{
                    e.currentTarget.style.display = 'none';
                  }} 
                />
              </div>

              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '5px', fontWeight: 'bold' }}>{member.name}</h3>
              <p style={{ fontSize: '0.95rem', color: '#00bfff', marginBottom: '8px', fontWeight: '500' }}>{member.role}</p>
              
              {/* Okul ve Sınıf Bilgileri */}
              <p style={{ fontSize: '0.85rem', color: '#d4af37', marginBottom: '3px' }}>{member.school}</p>
              <p style={{ fontSize: '0.85rem', color: '#b0b0b0', marginBottom: '15px' }}>{member.grade}</p>

              {/* Sosyal Medya İkonu */}
              {member.instagram !== '#' && (
                <a 
                  href={member.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#b0b0b0', textDecoration: 'none', fontSize: '0.9rem', padding: '6px 14px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.05)', transition: 'color 0.2s', marginTop: 'auto' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#b0b0b0')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#team-ig-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="team-ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
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
                  <span>Profil</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
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
                    style={{ color: link.name === 'Ekibimiz' ? '#00bfff' : '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = link.name === 'Ekibimiz' ? '#00bfff' : '#b0b0b0')}
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