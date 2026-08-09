'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hakkimizda() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: 'Novela İlham Çalıştayı kimler katılabilir?',
      answer:
        'Çalıştayımız lise ve dengi okul düzeyindeki tüm vizyoner öğrencilerin katılımına açıktır.',
    },
    {
      question: 'Etkinlik katılım ücretli mi ve sertifika verilecek mi?',
      answer:
        'Katılım koşulları ve detayları başvuru formunda yer almaktadır. Etkinlik sonunda tüm katılımcılara resmi katılım sertifikası takdim edilecektir.',
    },
    {
      question: 'Kıyafet yönetmeliği (Dress Code) var mı?',
      answer:
        'Etkinlik boyunca resmi / smart-casual tarzda giyinilmesi tavsiye edilir.',
    },
    {
      question: 'Başvuru sonuçları ne zaman açıklanacak?',
      answer:
        'Başvurular kapandıktan sonra değerlendirme süreci tamamlanır ve sonuçlar sosyal medya hesaplarımız ile e-posta yoluyla duyurulur.',
    },
  ];

  const navItems = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Ekibimiz', href: '/ekibimiz' },
    { name: 'Sponsorlar', href: '/sponsorlar' },
    { name: 'Komiteler', href: '/komiteler' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundColor: '#0c233c',
        color: '#fff',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '15px 20px' : '15px 50px',
          backgroundColor: '#0c233c',
          color: '#d4af37',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          borderBottom: '1px solid #d4af37',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            width: isMobile ? '35px' : '40px',
            height: isMobile ? '35px' : '40px',
            display: 'block',
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Link>

        {/* Desktop Menü */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '50px',
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                gap: '50px',
                margin: 0,
                padding: 0,
              }}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    cursor: 'pointer',
                    fontWeight: '500',
                  }}
                >
                  <Link
                    href={item.href}
                    style={{
                      color:
                        item.name === 'Hakkımızda' ? '#00bfff' : '#fff',
                      textDecoration: 'none',
                      transition: 'color .2s',
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Başvur Butonu */}
            <Link
              href="/basvuru"
              style={{
                textDecoration: 'none',
                backgroundColor: '#d4af37',
                color: '#0c233c',
                padding: '10px 18px',
                borderRadius: '8px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
              }}
            >
              Başvur
            </Link>
          </div>
        )}

        {/* Mobil Menü Butonu */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '28px',
              cursor: 'pointer',
              padding: 0,
              lineHeight: 1,
            }}
          >
            ☰
          </button>
        )}
      </motion.nav>

      {/* Mobil Menü */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'sticky',
              top: '66px',
              zIndex: 999,
              backgroundColor: '#0c233c',
              borderBottom: '1px solid #d4af37',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '10px 20px 20px',
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color:
                      item.name === 'Hakkımızda' ? '#00bfff' : '#fff',
                    textDecoration: 'none',
                    padding: '14px 5px',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '1rem',
                  }}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/basvuru"
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  backgroundColor: '#d4af37',
                  color: '#0c233c',
                  padding: '12px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: '15px',
                }}
              >
                Başvur
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero / Üst Başlık */}
      <header
        style={{
          padding: isMobile ? '55px 20px 45px' : '80px 50px 60px',
          textAlign: 'center',
          backgroundColor: '#0a1d32',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3
            style={{
              fontSize: isMobile ? '0.75rem' : '0.9rem',
              letterSpacing: '3px',
              color: '#d4af37',
              marginBottom: '15px',
            }}
          >
            BİZ KİMİZ?
          </h3>

          <h1
            style={{
              fontSize: isMobile ? '2.4rem' : '3.5rem',
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: '20px',
            }}
          >
            Hakkımızda
          </h1>

          <p
            style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: '#b0b0b0',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Fikirden ilham alan, gelenekleri yıkan ve geleceği ortak akılla
            kurgulayan bir çalıştay kültürü.
          </p>
        </motion.div>
      </header>

      {/* 1. BÖLÜM */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: isMobile ? '60px 20px' : '100px 100px',
          backgroundColor: '#f4f7f9',
          color: '#0c233c',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontSize: '0.9rem',
            letterSpacing: '3px',
            color: '#0c233c',
            marginBottom: '20px',
          }}
        >
          KÖKENİMİZ
        </h3>

        <h2
          style={{
            fontSize: isMobile ? '2rem' : '3.2rem',
            marginBottom: isMobile ? '25px' : '40px',
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: '#0c233c',
          }}
        >
          &quot;İsmimizin Hikayesi&quot;
        </h2>

        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            fontSize: isMobile ? '1rem' : '1.15rem',
            lineHeight: '1.8',
            color: '#333',
            textAlign: 'justify',
          }}
        >
          <p style={{ marginBottom: '20px' }}>
            Novela, kökenini Latince novus (yeni) kelimesinden alan ve
            İtalyancaya geçen bir sözcüktür. Edebiyatta roman ile kısa hikâye
            arasında yer alan anlatı türünü ifade etse de, özünde
            &quot;yeni bir hikâye&quot; ve &quot;yeni bir başlangıç&quot;
            anlamını taşır.
          </p>

          <p>
            Novela İlham Çalıştayı için bu isim, yalnızca bir etkinliği değil;
            her katılımcının kendini keşfettiği, yeni bakış açıları kazandığı
            ve kendi hikâyesine ilham dolu bir sayfa eklediği bir yolculuğu
            temsil etmektedir. Bu nedenle Novela, yeniliği, gelişimi, ilhamı
            ve her bireyin kendi potansiyelini ortaya çıkarma cesaretini
            simgeleyen güçlü bir isim olarak seçilmiştir.
          </p>
        </div>
      </motion.section>

      {/* 2. BÖLÜM */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: isMobile ? '60px 20px' : '100px 100px',
          backgroundColor: '#0c233c',
          color: '#fff',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '35px' : '60px',
          }}
        >
          <h3
            style={{
              fontSize: '0.9rem',
              letterSpacing: '3px',
              color: '#d4af37',
              marginBottom: '15px',
            }}
          >
            FARKLILIĞIMIZ
          </h3>

          <h2
            style={{
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            Neden Novela Çalıştayı?
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {[
            {
              title: 'Ezber Bozan Model',
              desc: 'Sıradan ve monoton akademik etkinliklerin aksine, aktif katılımı, eleştirel tartışmayı ve özgün üretimi merkeze alıyoruz.',
            },
            {
              title: 'Akademik Yetkinlik',
              desc: 'Alanında uzman kadrolar eşliğinde hazırlanan içeriklerle katılımcılara gerçek dünya problemlerine çözüm üretme fırsatı sunuyoruz.',
            },
            {
              title: 'Güçlü Sosyal Ağ',
              desc: 'Benzer vizyona ve hayallere sahip seçkin gençlerle bir araya gelerek ömür boyu sürecek dostluklar ve profesyonel bağlar kurarsın.',
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                padding: isMobile ? '30px 25px' : '35px 30px',
                backgroundColor: 'rgba(18, 48, 80, 0.6)',
                border: '1px solid #d4af37',
                borderRadius: '15px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.3rem',
                  color: '#d4af37',
                  marginBottom: '15px',
                  fontWeight: 'bold',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  color: '#e0e0e0',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. BÖLÜM */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: isMobile ? '60px 20px' : '100px 100px',
          backgroundColor: '#ffffff',
          color: '#0c233c',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '35px' : '60px',
          }}
        >
          <h3
            style={{
              fontSize: '0.9rem',
              letterSpacing: '3px',
              color: '#d4af37',
              marginBottom: '15px',
            }}
          >
            İLKELERİMİZ
          </h3>

          <h2
            style={{
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 'bold',
              color: '#0c233c',
            }}
          >
            Vizyon ve Misyon
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            gap: isMobile ? '25px' : '80px',
            maxWidth: '1100px',
            margin: '0 auto',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          {[
            {
              title: 'Vizyonumuz',
              text: 'Novela İlham Çalıştayı, ilhamın yalnızca bir fikir değil; üretimin, liderliğin ve değişimin başlangıç noktası olduğuna inanır. Vizyonumuz, farklı bakış açılarına sahip gençleri aynı çatı altında buluşturarak düşünmeye, sorgulamaya ve ortak akıl üretmeye teşvik eden; katılımcılarının yalnızca bugüne değil, geleceğe de yön verecek fikirler geliştirdiği öncü bir çalıştay kültürü oluşturmaktır.',
            },
            {
              title: 'Misyonumuz',
              text: 'Katılımcılarımıza fikirlerini özgürce ifade edebilecekleri, eleştirel düşünme becerilerini geliştirebilecekleri ve ilhamlarını somut projelere dönüştürebilecekleri nitelikli bir akademik ortam sunmayı amaçlıyoruz. Novela İlham Çalıştayı, bilgi paylaşımını, iş birliğini ve yaratıcılığı merkeze alarak her katılımcının kendinden ve çevresinden ilham almasını; bu ilhamı yeni fikirler, kalıcı dostluklar ve unutulmaz deneyimlere dönüştürmesini hedefler.',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                flex: 1,
                minWidth: isMobile ? '0' : '300px',
                width: isMobile ? '100%' : undefined,
                boxSizing: 'border-box',
                backgroundColor: '#f8f9fa',
                border: '1px solid #e0e0e0',
                padding: isMobile ? '30px 25px' : '45px',
                borderRadius: '15px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
              }}
            >
              <h3
                style={{
                  fontSize: '2rem',
                  marginBottom: '20px',
                  color: '#d4af37',
                  fontWeight: 'bold',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  lineHeight: '1.8',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  color: '#333',
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. BÖLÜM */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: isMobile ? '60px 15px' : '100px 100px',
          backgroundColor: '#0a1d32',
          color: '#fff',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '35px' : '60px',
          }}
        >
          <h3
            style={{
              fontSize: '0.9rem',
              letterSpacing: '3px',
              color: '#d4af37',
              marginBottom: '15px',
            }}
          >
            SÜREÇ
          </h3>

          <h2
            style={{
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            Etkinlik Akışı
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: isMobile ? '25px' : '40px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* 1. Gün */}
          <div
            style={{
              backgroundColor: 'rgba(12, 35, 60, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '15px',
              padding: isMobile ? '25px 18px' : '40px 30px',
            }}
          >
            <h3
              style={{
                fontSize: '2rem',
                color: '#d4af37',
                marginBottom: '30px',
                textAlign: 'center',
                fontWeight: 'bold',
                borderBottom:
                  '1px solid rgba(212, 175, 55, 0.2)',
                paddingBottom: '15px',
              }}
            >
              1. Gün
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
              }}
            >
              {[
                ['08.00 - 09.00', 'Kahvaltı ve Kayıt'],
                ['09.00 - 10.00', 'Açılış Konferansı'],
                ['10.00 - 10.20', 'Ara'],
                ['10.20 - 11.20', '1. Oturum'],
                ['11.20 - 11.40', 'Ara'],
                ['11.40 - 12.40', '2. Oturum'],
                ['12.40 - 14.20', 'Öğle Arası'],
                ['14.20 - 15.20', '3. Oturum'],
                ['15.20 - 15.40', 'Ara'],
                ['15.40 - 16.40', '4. Oturum'],
                ['16.40 - 17.00', 'Ara'],
                ['17.00 - 18.00', '5. Oturum'],
              ].map(([time, title], index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    borderBottom:
                      '1px solid rgba(255, 255, 255, 0.05)',
                    paddingBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      color: '#d4af37',
                      fontWeight: '600',
                      fontSize: isMobile ? '0.8rem' : '0.95rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {time}
                  </span>

                  <span
                    style={{
                      color: '#fff',
                      fontSize: isMobile ? '0.85rem' : '0.95rem',
                      textAlign: 'right',
                    }}
                  >
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Gün */}
          <div
            style={{
              backgroundColor: 'rgba(12, 35, 60, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '15px',
              padding: isMobile ? '25px 18px' : '40px 30px',
            }}
          >
            <h3
              style={{
                fontSize: '2rem',
                color: '#d4af37',
                marginBottom: '30px',
                textAlign: 'center',
                fontWeight: 'bold',
                borderBottom:
                  '1px solid rgba(212, 175, 55, 0.2)',
                paddingBottom: '15px',
              }}
            >
              2. Gün
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
              }}
            >
              {[
                ['08.00 - 09.00', 'Kahvaltı'],
                ['09.00 - 10.00', '6. Oturum'],
                ['10.00 - 10.20', 'Ara'],
                ['10.20 - 11.20', '7. Oturum'],
                ['11.20 - 11.40', 'Ara'],
                ['11.40 - 12.40', '8. Oturum'],
                ['12.40 - 14.10', 'Öğle Arası'],
                ['14.10 - 15.10', '9. Oturum'],
                ['15.10 - 15.30', 'Ara'],
                ['15.30 - 16.30', '10. Oturum'],
                ['16.30 - 18.30', 'Kapanış'],
              ].map(([time, title], index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    borderBottom:
                      '1px solid rgba(255, 255, 255, 0.05)',
                    paddingBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      color: '#d4af37',
                      fontWeight: '600',
                      fontSize: isMobile ? '0.8rem' : '0.95rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {time}
                  </span>

                  <span
                    style={{
                      color: '#fff',
                      fontSize: isMobile ? '0.85rem' : '0.95rem',
                      textAlign: 'right',
                    }}
                  >
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. BÖLÜM - FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: isMobile ? '60px 15px' : '100px 100px',
          backgroundColor: '#f4f7f9',
          color: '#0c233c',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '35px' : '60px',
          }}
        >
          <h3
            style={{
              fontSize: '0.9rem',
              letterSpacing: '3px',
              color: '#0c233c',
              marginBottom: '15px',
            }}
          >
            MERAK EDİLENLER
          </h3>

          <h2
            style={{
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 'bold',
              color: '#0c233c',
            }}
          >
            Sıkça Sorulan Sorular
          </h2>
        </div>

        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: isMobile ? '18px 16px' : '20px 25px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '15px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: isMobile ? '0.95rem' : '1.1rem',
                  fontWeight: 'bold',
                  color: '#0c233c',
                }}
              >
                <span>{faq.question}</span>

                <span
                  style={{
                    color: '#d4af37',
                    fontSize: '1.5rem',
                    fontWeight: 'normal',
                    flexShrink: 0,
                  }}
                >
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      style={{
                        padding: isMobile
                          ? '0 16px 20px'
                          : '0 25px 25px',
                        color: '#555',
                        lineHeight: '1.6',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                      }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#061826',
          color: '#fff',
          padding: isMobile ? '50px 20px 25px' : '70px 80px 30px',
          borderTop: '1px solid #1a365d',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : '1.5fr 1fr 1.2fr 1.2fr',
            gap: isMobile ? '35px' : '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            marginBottom: isMobile ? '35px' : '50px',
            alignItems: 'start',
          }}
        >
          {/* Footer Logo */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '45px',
                  height: '45px',
                  border: '2px solid #d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px',
                  color: '#d4af37',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                }}
              >
                N
              </div>

              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#fff',
                  lineHeight: '1.3',
                  letterSpacing: '0.5px',
                }}
              >
                NOVELA İLHAM
                <br />
                ÇALIŞTAYI
              </h3>
            </div>

            <p
              style={{
                fontSize: '0.95rem',
                color: '#b0b0b0',
                lineHeight: '1.6',
              }}
            >
              Genç düşünürler için eleştirel tartışma, kavramsal düşünme ve
              akademik gelişimi merkeze alan bir düşünce platformu.
            </p>
          </div>

          {/* Hızlı İletişim */}
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                color: '#fff',
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              Hızlı İletişim
            </h4>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {[
                { name: 'Hakkımızda', href: '/hakkimizda' },
                { name: 'Ekibimiz', href: '/ekibimiz' },
                { name: 'Komiteler', href: '/komiteler' },
                { name: 'İletişim', href: '/iletisim' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      color:
                        link.name === 'Hakkımızda'
                          ? '#00bfff'
                          : '#b0b0b0',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                color: '#fff',
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              İletişim
            </h4>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: '#b0b0b0',
                  fontSize: '0.95rem',
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginTop: '3px', flexShrink: 0 }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>

                <span>
                  Mekan Bilgisi Paylaşıldığında Duyurulacaktır.
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: '#b0b0b0',
                  fontSize: '0.95rem',
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginTop: '3px', flexShrink: 0 }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>

                <span style={{ wordBreak: 'break-all' }}>
                  novalecal27@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                color: '#fff',
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              Sosyal Medya
            </h4>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#b0b0b0',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#social-ig-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <defs>
                    <linearGradient
                      id="social-ig-gradient"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </linearGradient>
                  </defs>

                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                  ></rect>

                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>

                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                  ></line>
                </svg>

                <span>@novelailhamcalistayi</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Alt */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '25px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            flexDirection: isMobile ? 'column' : 'row',
            flexWrap: 'wrap',
            gap: '15px',
            color: '#888888',
            fontSize: '0.85rem',
          }}
        >
          <div>
            © 2027 Novela İlham Çalıştayı – Tüm hakları saklıdır.
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.95rem',
            }}
          >
            <span
              style={{
                color: '#00bfff',
                fontWeight: '600',
              }}
            >
              Built by
            </span>

            <a
              href="https://instagram.com/ccenkyaman"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#footer-ig-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <defs>
                  <linearGradient
                    id="footer-ig-gradient"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </linearGradient>
                </defs>

                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                ></rect>

                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>

                <line
                  x1="17.5"
                  y1="6.5"
                  x2="17.51"
                  y2="6.5"
                ></line>
              </svg>

              <span
                style={{
                  color: '#ffcc00',
                  fontWeight: '600',
                }}
              >
                ccenkyaman
              </span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}