'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Komiteler() {
  const committees = [
    {
      name: 'Teoloji ve Felsefe',
      slug: 'teoloji-ve-felsefe',
      category: 'Akademik Komite',
      description: 'İnanç, varoluş, etik ve evrensel felsefi akımlar üzerine derinlemesine tartışmaların yürütüldüğü komite.',
      details: '20 - 25 Delege'
    },
    {
      name: 'Sosyoloji',
      slug: 'sosyoloji',
      category: 'Akademik Komite',
      description: 'Toplumsal yapılar, değişimler, kültürel dinamikler ve modern toplumun getirdiği olguların incelendiği alan.',
      details: '20 - 25 Delege'
    },
    {
      name: 'Psikoloji',
      slug: 'psikoloji',
      category: 'Akademik Komite',
      description: 'İnsan zihni, davranış kalıpları, bilişsel süreçler ve bireysel/kitle psikolojisi üzerine odaklanan oturumlar.',
      details: '20 - 25 Delege'
    },
    {
      name: 'Siyaset',
      slug: 'siyaset',
      category: 'Akademik Komite',
      description: 'Politik sistemler, güç dengeleri, kamu politikaları ve ideolojiler ekseninde tartışma ortamı.',
      details: '20 - 25 Delege'
    },
    {
      name: 'Kriminoloji',
      slug: 'kriminoloji',
      category: 'Akademik Komite',
      description: 'Suç olgusu, suç psikolojisi, adli sistemler ve toplumsal sapma dinamiklerinin masaya yatırıldığı komite.',
      details: '20 - 25 Delege'
    },
    {
      name: 'Uluslararası İlişkiler',
      slug: 'uluslararasi-iliskiler',
      category: 'Akademik Komite',
      description: 'Küresel diplomasi, devletler arası ilişkiler, uluslararası krizler ve dış politika stratejileri.',
      details: '20 - 25 Delege'
    },
    {
      name: 'Hukuk',
      slug: 'hukuk',
      category: 'Akademik Komite',
      description: 'Evrensel adalet, yasama süreçleri, uluslararası hukuk kuralları ve hak temelli tartışmalar.',
      details: '20 - 25 Delege'
    },
    {
      name: 'Tarih',
      slug: 'tarih',
      category: 'Akademik Komite',
      description: 'Geçmişin dönüm noktaları, tarihi kırılmalar, uygarlıkların gelişimi ve günümüze yansımaları.',
      details: '20 - 25 Delege'
    },
    {
      name: 'Sanat',
      slug: 'sanat',
      category: 'Akademik Komite',
      description: 'Estetik kuramları, sanat tarihi, yaratıcı endüstriler ve kültürel mirasın ifade biçimleri.',
      details: '20 - 25 Delege'
    },
    {
      name: 'JCC',
      slug: 'jcc',
      category: 'Özel Komite',
      description: 'Kriz senaryoları ve stratejik hamlelerin anlık olarak yürütüldüğü dinamik ortak kabine simülasyonu.',
      details: '20 - 25 Delege'
    }
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
                style={{ color: item.name === 'Komiteler' ? '#00bfff' : '#fff', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = item.name === 'Komiteler' ? '#00bfff' : '#fff')}
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
          <h3 style={{ fontSize: '0.9rem', letterSpacing: '3px', color: '#d4af37', marginBottom: '15px' }}>AKADEMİK ÇEŞİTLİLİK</h3>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>Komiteler</h1>
          <p style={{ fontSize: '1.2rem', color: '#b0b0b0', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Farklı disiplinleri aynı organizasyonda buluşturan yapımızla; katılımcılarımıza yalnızca kendi alanlarında değil, farklı düşünce sistemleriyle de etkileşim kurabilecekleri çok yönlü bir öğrenme ortamı sunuyoruz. Her komite 20 ila 25 delegeden oluşmaktadır.
          </p>
        </motion.div>
      </header>

      {/* Komite Kartları Alanı */}
      <section style={{ padding: '60px 80px 100px 80px', backgroundColor: '#0c233c', minHeight: '400px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {committees.map((committee, index) => (
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
                padding: '35px 25px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ display: 'inline-block', fontSize: '0.85rem', color: '#00bfff', backgroundColor: 'rgba(0, 191, 255, 0.1)', padding: '4px 12px', borderRadius: '20px', marginBottom: '12px', fontWeight: '500' }}>
                  {committee.category}
                </span>

                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '15px', fontWeight: 'bold' }}>{committee.name}</h3>
                <p style={{ fontSize: '0.95rem', color: '#b0b0b0', marginBottom: '20px', lineHeight: '1.5' }}>{committee.description}</p>
              </div>

              <div style={{ width: '100%' }}>
                <div style={{ fontSize: '0.85rem', color: '#d4af37', marginBottom: '15px', fontWeight: '600', letterSpacing: '1px' }}>
                  {committee.details}
                </div>
                <Link 
                  href={`/komiteler/${committee.slug}`}
                  style={{ display: 'inline-block', width: '100%', padding: '10px 0', borderRadius: '8px', border: '1px solid #d4af37', color: '#d4af37', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 'bold', backgroundColor: 'transparent', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d4af37';
                    e.currentTarget.style.color = '#0c233c';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#d4af37';
                  }}
                >
                  Keşfet
                </Link>
              </div>
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
                { name: 'Sponsorlar', href: '/sponsorlar' },
                { name: 'Komiteler', href: '/komiteler' },
                { name: 'İletişim', href: '/iletisim' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#b0b0b0')}
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