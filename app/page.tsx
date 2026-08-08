'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ gün: 0, saat: 0, dakika: 0, saniye: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hedefTarih = new Date('2027-04-24T08:00:00');
    
    const updateTimer = () => {
      const fark = hedefTarih.getTime() - new Date().getTime();
      if (fark > 0) {
        setTimeLeft({
          gün: Math.floor(fark / (1000 * 60 * 60 * 24)),
          saat: Math.floor((fark / (1000 * 60 * 60)) % 24),
          dakika: Math.floor((fark / 1000 / 60) % 60),
          saniye: Math.floor((fark / 1000) % 60),
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Ekibimiz', href: '/ekibimiz' },
    { name: 'Sponsorlar', href: '/sponsorlar' },
    { name: 'Komiteler', href: '/komiteler' },
    { name: 'İletişim', href: '/iletisim' }
  ];

  return (
    <main style={{ margin: 0, padding: 0, boxSizing: 'border-box', backgroundColor: '#0a2e24', overflowX: 'hidden' }}>
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '15px 30px', 
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

        {/* Masaüstü Menü */}
        <ul className="desktop-menu" style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0, padding: 0 }}>
          {navLinks.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }} style={{ cursor: 'pointer', fontWeight: '500' }}>
              <Link href={item.href} style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.2s' }}>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div className="desktop-btn">
            <Link href="/basvuru" style={{ textDecoration: 'none' }}>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#d4af37', color: '#0c233c' }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  backgroundColor: 'transparent', 
                  border: '1px solid #d4af37', 
                  color: '#d4af37', 
                  padding: '8px 20px', 
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  borderRadius: '4px'
                }}
              >
                Başvur
              </motion.button>
            </Link>
          </div>

          {/* Hamburger İkonu */}
          <div 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between', 
              width: '28px', 
              height: '21px', 
              cursor: 'pointer', 
              zIndex: 1100 
            }}
            className="hamburger-icon"
          >
            <span style={{ width: '100%', height: '3px', backgroundColor: '#d4af37', borderRadius: '2px', transition: '0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ width: '100%', height: '3px', backgroundColor: '#d4af37', borderRadius: '2px', opacity: menuOpen ? '0' : '1', transition: '0.3s' }}></span>
            <span style={{ width: '100%', height: '3px', backgroundColor: '#d4af37', borderRadius: '2px', transition: '0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </div>
        </div>
      </motion.nav>

      {/* Mobil Açılır Menü Paneli */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ 
              position: 'fixed', 
              top: '70px', 
              left: 0, 
              width: '100%', 
              backgroundColor: '#0c233c', 
              borderBottom: '1px solid #d4af37', 
              padding: '20px 0', 
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
              {navLinks.map((item) => (
                <li key={item.name} onClick={() => setMenuOpen(false)}>
                  <Link href={item.href} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '500' }}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: '10px' }} onClick={() => setMenuOpen(false)}>
                <Link href="/basvuru" style={{ textDecoration: 'none' }}>
                  <button style={{ backgroundColor: '#d4af37', border: 'none', color: '#0c233c', padding: '10px 30px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}>
                    Başvur
                  </button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header style={{ 
        position: 'relative', 
        width: '100%',
        minHeight: '90vh',
        backgroundColor: '#0c233c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '60px 30px',
        overflow: 'hidden',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        <video autoPlay loop muted playsInline preload="auto" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(12, 35, 60, 0.85)', zIndex: 1 }}></div>

        <motion.div 
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative', zIndex: 2, maxWidth: '600px', flex: '1 1 300px' }}
        >
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 'bold', lineHeight: '1.1', color: 'white', marginBottom: '30px' }}>
            Fikirden İlham Al, <br />
            Geleceği Kurgula, <br />
            <span style={{ color: '#d4af37' }}>Novela ile Yeniden Tanımla.</span>
          </h1>

          <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <Link href="/hakkimizda" style={{ textDecoration: 'none' }}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '12px 30px', backgroundColor: 'transparent', border: '1px solid #d4af37', color: '#d4af37', cursor: 'pointer', fontWeight: 'bold', borderRadius: '4px' }}>KEŞFET</motion.button>
            </Link>
            
            <Link href="/basvuru" style={{ textDecoration: 'none' }}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '12px 30px', backgroundColor: '#d4af37', border: '1px solid #d4af37', color: '#0c233c', cursor: 'pointer', fontWeight: 'bold', borderRadius: '4px' }}>BAŞVUR</motion.button>
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '30px', borderTop: '1px solid rgba(212, 175, 55, 0.3)', paddingTop: '20px', flexWrap: 'wrap' }}>
            {[
              { value: '10', label: 'KOMİTE' },
              { value: '250+', label: 'DELEGE' },
              { value: '1.', label: 'SEZON' }
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#d4af37' }}>{item.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'white', letterSpacing: '2px', marginTop: '5px' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ position: 'relative', zIndex: 2, padding: '25px', backgroundColor: 'rgba(12, 35, 60, 0.6)', border: '1px solid #d4af37', borderRadius: '15px', width: '100%', maxWidth: '330px', textAlign: 'center', color: '#d4af37', backdropFilter: 'blur(8px)', margin: '0 auto' }}
        >
          <h4 style={{ letterSpacing: '2px', marginBottom: '15px', fontSize: '0.75rem', margin: 0 }}>ETKİNLİĞE KALAN SÜRE</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px', alignItems: 'center' }}>
            {Object.entries(timeLeft).map(([key, val]) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: '1.1' }}>
                  {isMounted ? String(val).padStart(2, '0') : '00'}
                </span>
                <span style={{ fontSize: '0.6rem', color: '#fff', letterSpacing: '1px', marginTop: '4px' }}>{key.toUpperCase()}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '15px', fontSize: '0.85rem', color: '#fff' }}>24-25 Nisan 2027 - 08.00</p>
          <div style={{ marginTop: '10px', color: '#d4af37', fontSize: '0.75rem' }}>📍 Konum Kesinleştiğinde Duyurulacaktır.</div>
        </motion.div>
      </header>

      {/* Temamız Bölümü */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ padding: '80px 20px', backgroundColor: '#f4f7f9', textAlign: 'center', color: '#0c233c' }}
      >
        <h3 style={{ fontSize: '0.9rem', letterSpacing: '3px', color: '#0c233c', marginBottom: '20px' }}>TEMAMIZ</h3>
        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '50px', fontStyle: 'italic', fontWeight: 'bold', color: '#0c233c' }}>&quot;İlham Almak&quot;</h2>
        <div style={{ display: 'flex', gap: '40px', textAlign: 'left', maxWidth: '1000px', margin: '0 auto', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '25px', color: '#d4af37', fontWeight: 'bold' }}>Vizyonumuz</h3>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#333' }}>Novela İlham Çalıştayı, ilhamın yalnızca bir fikir değil; üretimin, liderliğin ve değişimin başlangıç noktası olduğuna inanır. Vizyonumuz, farklı bakış açılarına sahip gençleri aynı çatı altında buluşturarak düşünmeye, sorgulamaya ve ortak akıl üretmeye teşvik eden; katılımcılarının yalnızca bugüne değil, geleceğe de yön verecek fikirler geliştirdiği öncü bir çalıştay kültürü oluşturmaktır.</p>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '25px', color: '#d4af37', fontWeight: 'bold' }}>Misyonumuz</h3>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#333' }}>Katılımcılarımıza fikirlerini özgürce ifade edebilecekleri, eleştirel düşünme becerilerini geliştirebilecekleri ve ilhamlarını somut projelere dönüştürebilecekleri nitelikli bir akademik ortam sunmayı amaçlıyoruz. Novela İlham Çalıştayı, bilgi paylaşımını, iş birliğini ve yaratıcılığı merkeze alarak her katılımcının kendinden ve çevresinden ilham almasını; bu ilhamı yeni fikirler, kalıcı dostluklar ve unutulmaz deneyimlere dönüştürmesini hedefler.</p>
          </div>
        </div>
      </motion.section>

      {/* Çalıştay Nedir Bölümü */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ padding: '80px 20px', backgroundColor: '#0c233c', color: '#fff', textAlign: 'center' }}
      >
        <h3 style={{ fontSize: '0.9rem', letterSpacing: '3px', color: '#d4af37', marginBottom: '15px' }}>BİLGİLENDİRME</h3>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '40px', fontWeight: 'bold', color: '#fff' }}>
          Çalıştay Nedir?
        </h2>
        <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'justify', padding: '0 15px' }}>
          <p style={{ marginBottom: '25px' }}>
            Çalıştay; katılımcıların belirli konu başlıkları etrafında bir araya gelerek fikir alışverişinde bulunduğu, farklı bakış açılarını değerlendirdiği ve ortak çözüm önerileri geliştirdiği akademik bir etkinlik modelidir. Geleneksel eğitim anlayışından farklı olarak, çalıştaylarda katılımcılar yalnızca dinleyici değil; tartışan, sorgulayan, araştıran ve aktif olarak sürece katkı sağlayan bireylerdir.
          </p>
          <p style={{ marginBottom: '25px' }}>
            Her komite, kendi alanına özgü konu başlıkları doğrultusunda akademik kadrolar tarafından yönetilir. Delegeler, ön hazırlık süreçlerinin ardından komite oturumlarında görüşlerini dile getirir, farklı fikirleri analiz eder ve belirlenen gündemler doğrultusunda çözüm odaklı tartışmalar yürütür. Bu süreç; eleştirel düşünme, etkili iletişim, akademik araştırma, ekip çalışması ve hitabet gibi pek çok becerinin gelişimine katkı sağlar.
          </p>
          <p style={{ marginBottom: '30px' }}>
            Novela İlham Çalıştayı da bu anlayışı benimseyerek; katılımcılarına yalnızca bilgi edinme fırsatı değil, aynı zamanda düşüncelerini özgürce ifade edebilecekleri, yeni bakış açıları kazanabilecekleri ve ilham verici bir akademik deneyim yaşayabilecekleri bir ortam sunmayı amaçlamaktadır.
          </p>
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link 
              href="/hakkimizda" 
              style={{ 
                display: 'inline-block', 
                padding: '15px 40px', 
                backgroundColor: 'transparent', 
                border: '2px solid #d4af37', 
                color: '#d4af37', 
                fontSize: '1rem', 
                fontWeight: 'bold', 
                textDecoration: 'none', 
                borderRadius: '5px',
                transition: 'all 0.3s ease'
              }}
            >
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Çalıştay Kazanımları Bölümü */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff', color: '#0c233c', textAlign: 'center' }}>
        <h3 style={{ fontSize: '0.9rem', letterSpacing: '3px', color: '#d4af37', marginBottom: '15px' }}>FIRSATLAR VE GELİŞİM</h3>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '50px', fontWeight: 'bold', color: '#0c233c' }}>
          Çalıştayımız Sana Ne Kazandırıyor?
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto', textAlign: 'left' }}>
          {[
            {
              title: 'Eleştirel Düşünme ve Problem Çözme',
              desc: 'Farklı bakış açılarını analiz ederek karmaşık meseleler karşısında yaratıcı ve sürdürülebilir çözüm önerileri üretme becerini geliştirir.',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0c233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              )
            },
            {
              title: 'Akademik Araştırma ve Vizyon',
              desc: 'İlgi duyduğun alanlarda derinlemesine araştırmalar yapmanı, güncel gelişmeleri takip etmeni ve konulara akademik bir çerçeveden bakmanı sağlar.',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0c233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              )
            },
            {
              title: 'Etkili İletişim ve Hitabet',
              desc: 'Komite oturumlarında fikirlerini savunurken topluluk önünde konuşma, kendini net ifade etme ve ikna kabiliyetini artırma şansı yakalarsın.',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0c233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              )
            },
            {
              title: 'Takım Çalışması ve Liderlik',
              desc: 'Ortak akıl üretme süreçlerinde aktif rol alarak grup dinamiklerini yönetmeyi, sorumluluk almayı ve liderlik vasıflarını güçlendirmeyi öğrenirsin.',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0c233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              )
            },
            {
              title: 'Yeni Ağlar (Networking) ve Dostluklar',
              desc: 'Seninle benzer hayallere ve ilgi alanlarına sahip, vizyoner pek çok gençle tanışarak gelecekte de devam edecek kalıcı ve değerli bağlar kurarsın.',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0c233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              )
            },
            {
              title: 'Kariyer ve Gelecek Planlaması',
              desc: 'Edindiğin bu kapsamlı deneyim ve sertifikalarla akademik ve profesyonel hayatına yön verirken özgeçmişini güçlendirirsin.',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0c233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              )
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -6, boxShadow: '0 12px 20px rgba(0,0,0,0.08)' }}
              transition={{ duration: 0.2 }}
              style={{ padding: '35px 30px', backgroundColor: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}
            >
              <div>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: '#eaf4f1', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '25px' 
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: '#0c233c', fontWeight: 'bold' }}>{item.title}</h3>
                <p style={{ lineHeight: '1.7', fontSize: '1rem', color: '#555555' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Etkinlik Bilgileri Bölümü */}
      <section style={{ padding: '80px 20px', backgroundColor: '#0c233c', color: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h3 style={{ fontSize: '0.9rem', letterSpacing: '3px', color: '#d4af37', marginBottom: '15px' }}>KONUM VE ZAMAN</h3>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: '#fff' }}>
            Etkinlik Bilgileri
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', maxWidth: '1100px', margin: '0 auto', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'rgba(18, 48, 80, 0.6)', border: '1px solid #d4af37', borderRadius: '15px', padding: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#d4af37', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px', color: '#0c233c', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: '#d4af37', marginBottom: '5px' }}>Ne Zaman?</h4>
                <p style={{ fontSize: '1rem', color: '#e0e0e0' }}>24 - 25 Nisan 2027</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#d4af37', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px', color: '#0c233c', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: '#d4af37', marginBottom: '5px' }}>Nerede?</h4>
                <p style={{ fontSize: '1rem', color: '#e0e0e0' }}>Mekan Bilgisi Paylaşıldığında Duyurulacaktır.</p>
              </div>
            </div>
          </div>

          <div style={{ width: '100%', height: '320px', borderRadius: '15px', overflow: 'hidden', border: '1px solid #d4af37' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d28.97!3d41.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zS!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#061826', color: '#fff', padding: '70px 20px 30px 20px', borderTop: '1px solid #1a365d' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto', marginBottom: '50px', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ width: '45px', height: '45px', border: '2px solid #d4af37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', color: '#d4af37', fontWeight: 'bold', fontSize: '0.8rem', flexShrink: 0 }}>
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
                <span>Mekan Bilgisi Paylaşıldığında Duyurulacaktır.</span>
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
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem' }}
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
            <span style={{ color: '#00bfff', fontWeight: '600' }}>Built by</span>
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
              <span style={{ color: '#ffcc00', fontWeight: '600' }}>ccenkyaman</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Ek Responsive İnce Ayarlar */}
      <style jsx global>{`
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }

          .desktop-btn {
            display: none !important;
          }

          .hamburger-icon {
            display: flex !important;
          }

          /* Mobil navbar */
          nav {
            padding: 15px 20px !important;
          }

          /* Mobil hero */
          header {
            min-height: auto !important;
            padding: 55px 20px !important;
            justify-content: center !important;
          }

          header > div:nth-of-type(1) {
            max-width: 100% !important;
            text-align: center !important;
          }

          header > div:nth-of-type(1) > div {
            justify-content: center !important;
          }

          header > div:nth-of-type(2) {
            max-width: 100% !important;
          }

          /* Mobil sayaç */
          header h1 {
            margin-bottom: 25px !important;
          }
        }

        @media (max-width: 600px) {
          /* Daha küçük telefonlar */
          header {
            padding: 45px 15px !important;
            gap: 30px !important;
          }

          header h1 {
            font-size: clamp(2rem, 10vw, 2.8rem) !important;
          }

          header > div:nth-of-type(1) > div {
            justify-content: center !important;
            gap: 10px !important;
          }

          header > div:nth-of-type(1) > div a,
          header > div:nth-of-type(1) > div button {
            width: 100% !important;
            text-align: center !important;
          }

          header > div:nth-of-type(2) {
            padding: 20px !important;
            width: 100% !important;
          }

          section {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }

          footer {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
        }

      `}</style>

      {/* Medya Sorguları */}
      <style jsx global>{`
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }
          .desktop-btn {
            display: none !important;
          }
          .hamburger-icon {
            display: flex !important;
          }
        }
        @media (min-width: 901px) {
          .hamburger-icon {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}
