'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Basvuru() {
  // Buraya kendi Google Form linklerinizi ekleyebilirsiniz
  const bireyselFormUrl = "https://formlinki.com";
  const delegasyonFormUrl = "https://formlinki.com";

  return (
    <main style={{ margin: 0, padding: 0, boxSizing: 'border-box', backgroundColor: '#0c233c', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      
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
                style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
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
              backgroundColor: '#d4af37', 
              border: '1px solid #d4af37', 
              color: '#0c233c', 
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
      <header style={{ padding: '80px 50px 40px 50px', textAlign: 'center', backgroundColor: '#0a1d32' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontSize: '0.9rem', letterSpacing: '3px', color: '#d4af37', marginBottom: '15px' }}>GELECEĞİ ŞEKİLLENDİR</h3>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>Çalıştay Başvurusu</h1>
          <p style={{ fontSize: '1.2rem', color: '#b0b0b0', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Katılım türünü seçerek başvuru formuna ulaşabilirsiniz.
          </p>
        </motion.div>
      </header>

      {/* Başvuru Türü Kartları */}
      <section style={{ maxWidth: '1000px', margin: '60px auto 120px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        
        {/* Bireysel Başvuru Kartı */}
        <motion.div 
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          style={{ 
            backgroundColor: 'rgba(18, 48, 80, 0.4)', 
            border: '2px solid rgba(212, 175, 55, 0.4)', 
            borderRadius: '12px', 
            padding: '45px', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}
        >
          <div>
            <div style={{ width: '80px', height: '80px', margin: '0 auto 25px auto', border: '2px solid rgba(212, 175, 55, 0.4)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>Bireysel Başvuru</h2>
            <p style={{ color: '#b0b0b0', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '35px' }}>
              Çalıştaya bireysel olarak katılmak isteyen delegeler için. Kendi adına başvurabilirsin.
            </p>
          </div>

          <a href={bireyselFormUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: '#d4af37', color: '#0c233c' }}
              whileTap={{ scale: 0.97 }}
              style={{ 
                width: '100%',
                backgroundColor: 'transparent', 
                border: '2px solid #d4af37', 
                color: '#d4af37', 
                padding: '14px 25px', 
                borderRadius: '6px', 
                fontWeight: 'bold', 
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.2s'
              }}
            >
              <span>BAŞVUR</span>
              <span>→</span>
            </motion.button>
          </a>
        </motion.div>

        {/* Delegasyon Başvuru Kartı */}
        <motion.div 
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          style={{ 
            backgroundColor: 'rgba(18, 48, 80, 0.4)', 
            border: '2px solid rgba(212, 175, 55, 0.4)', 
            borderRadius: '12px', 
            padding: '45px', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}
        >
          <div>
            <div style={{ width: '80px', height: '80px', margin: '0 auto 25px auto', border: '2px solid rgba(212, 175, 55, 0.4)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>Delegasyon Başvuru</h2>
            <p style={{ color: '#b0b0b0', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '35px' }}>
              Okulunuzu ya da kurumunuzu temsilen grup halinde katılmak isteyen delegasyonlar için.
            </p>
          </div>

          <a href={delegasyonFormUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: '#d4af37', color: '#0c233c' }}
              whileTap={{ scale: 0.97 }}
              style={{ 
                width: '100%',
                backgroundColor: 'transparent', 
                border: '2px solid #d4af37', 
                color: '#d4af37', 
                padding: '14px 25px', 
                borderRadius: '6px', 
                fontWeight: 'bold', 
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.2s'
              }}
            >
              <span>BAŞVUR</span>
              <span>→</span>
            </motion.button>
          </a>
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
                <span>Mekan Bilgisi Paylaşıldığında Duyurulucaktır.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#b0b0b0', fontSize: '0.95rem' }}>
                <span style={{ wordBreak: 'break-all' }}>novalecal27@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>Sosyal Medya</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem' }}>@novelailhamcalistayi</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', color: '#888888', fontSize: '0.85rem' }}>
          <div>© 2027 Novela İlham Çalıştayı – Tüm hakları saklıdır.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
            <span style={{ color: '#00bfff', fontWeight: '600' }}>Built by</span>
            <a href="https://instagram.com/ccenkyaman" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <span style={{ color: '#ffcc00', fontWeight: '600' }}>ccenkyaman</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}