import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import kioskBg from '../assets/kiosk.jpg'; 

// Хук для появления при скролле
function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [ref]);
  return isIntersecting;
}

const FadeInSection = ({ children }) => {
  const domRef = useRef();
  const isVisible = useOnScreen(domRef);
  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", overflowX: 'hidden' }}>
      
      {/* ГЛАВНЫЙ ЭКРАН - Живая композиция */}
      <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '90vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        color: 'white',
        padding: '40px 20px',
        gap: '40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Декоративный круг на фоне */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(227,30,36,0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }}></div>

        {/* ЛЕВАЯ ЧАСТЬ: ФОТО КИОСКА (повернутое) */}
        <div style={{
          flex: '1 1 400px',
          maxWidth: '600px',
          position: 'relative',
          zIndex: 1,
          animation: 'slideInLeft 1s cubic-bezier(0.25, 1, 0.5, 1)'
        }}>
          <div style={{
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '15px 15px 0px #E31E24', // Жесткая тень, как у стикера
            transform: 'rotate(-2deg)', // Легкий наклон
            border: '5px solid white',
            transition: 'transform 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(-2deg) scale(1)'}
          >
            <img 
              src={kioskBg} 
              alt="LAZZA FOOD" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
          
          {/* Стикер "Огонь" */}
          <div style={{
            position: 'absolute',
            top: '-25px',
            left: '-25px',
            backgroundColor: '#FFD100',
            color: '#1A1A1A',
            padding: '15px 25px',
            borderRadius: '50%',
            fontWeight: '900',
            fontSize: '24px',
            transform: 'rotate(-15deg)',
            boxShadow: '5px 5px 0px rgba(0,0,0,0.2)',
            zIndex: 2
          }}>
            🔥
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: ТЕКСТ */}
        <div style={{
          flex: '1 1 400px',
          maxWidth: '500px',
          zIndex: 1,
          animation: 'slideInRight 1s cubic-bezier(0.25, 1, 0.5, 1)'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(40px, 6vw, 64px)', 
            fontWeight: '900', 
            lineHeight: '1.1', 
            marginBottom: '15px',
            textTransform: 'uppercase',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            ГОРЯЧИЙ<br />
            <span style={{ color: '#E31E24', WebkitTextStroke: '2px #FFD100' }}>ХОТ-ДОГ</span><br />
            ПРЯМО СЕЙЧАС
          </h1>
          
          {/* Рукописная подпись */}
          <p style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '32px',
            color: '#FFD100',
            marginBottom: '25px',
            transform: 'rotate(-3deg)',
            display: 'inline-block'
          }}>
            Парные, сочные, как надо!
          </p>
          
          <p style={{ 
            fontSize: '18px', 
            marginBottom: '35px', 
            color: '#bbb',
            lineHeight: '1.6',
            maxWidth: '400px'
          }}>
            У нас нет роботов-поваров. Только руки, мясо и любовь к делу. 
            Забегай за хот-догом или пиши в WhatsApp — привезем горячим.
          </p>
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/992107111333" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#E31E24',
                color: 'white',
                padding: '16px 35px',
                borderRadius: '8px', // Квадратные, не «капсулы»
                fontSize: '16px',
                fontWeight: '900',
                textDecoration: 'none',
                boxShadow: '5px 5px 0px #FFD100', // Жесткая тень
                transition: 'all 0.2s',
                border: '2px solid #E31E24'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '7px 7px 0px #FFD100';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = '5px 5px 0px #FFD100';
              }}
            >
              ЗАКАЗАТЬ В WHATSAPP
            </a>
            
            <Link to="/menu" style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: 'white',
              padding: '16px 35px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '900',
              textDecoration: 'none',
              border: '2px solid white',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              СМОТРЕТЬ МЕНЮ
            </Link>
          </div>
        </div>
      </section>

      {/* БЛОК ПРЕИМУЩЕСТВ - Наклоненные карточки */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f4f4f4', position: 'relative' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '36px', 
          fontWeight: '900', 
          marginBottom: '40px',
          color: '#1A1A1A'
        }}>
          Почему у нас <span style={{ color: '#E31E24' }}>вкусно</span>?
        </h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          
          <FadeInSection>
            <div style={{ 
              flex: '1 1 200px', 
              padding: '30px 25px', 
              backgroundColor: '#fff',
              borderRadius: '5px',
              boxShadow: '10px 10px 0px rgba(0,0,0,0.1)',
              transform: 'rotate(-1deg)',
              borderTop: '8px solid #E31E24',
              maxWidth: '280px'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>👨‍🍳</div>
              <h3 style={{ color: '#1A1A1A', marginBottom: '10px', fontSize: '20px' }}>Руками, не роботом</h3>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.5' }}>Каждый хот-дог собирается вручную. Никакой конвейерной штамповки.</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div style={{ 
              flex: '1 1 200px', 
              padding: '30px 25px', 
              backgroundColor: '#fff',
              borderRadius: '5px',
              boxShadow: '10px 10px 0px rgba(0,0,0,0.1)',
              transform: 'rotate(1.5deg)', // Наклон в другую сторону
              borderTop: '8px solid #FFD100',
              maxWidth: '280px'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>🥩</div>
              <h3 style={{ color: '#1A1A1A', marginBottom: '10px', fontSize: '20px' }}>Мясо, а не соя</h3>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.5' }}>Берем нормальное мясо. Вы чувствуете это с первого укуса.</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div style={{ 
              flex: '1 1 200px', 
              padding: '30px 25px', 
              backgroundColor: '#fff',
              borderRadius: '5px',
              boxShadow: '10px 10px 0px rgba(0,0,0,0.1)',
              transform: 'rotate(-1deg)',
              borderTop: '8px solid #E31E24',
              maxWidth: '280px'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>🛵</div>
              <h3 style={{ color: '#1A1A1A', marginBottom: '10px', fontSize: '20px' }}>Привезем горячим</h3>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.5' }}>Курьер не будет кататься по городу час. Доедет — пока не остыло.</p>
            </div>
          </FadeInSection>

        </div>
      </section>

      {/* ХИТЫ ПРОДАЖ - с "живыми" ценами */}
      <FadeInSection>
        <div style={{ padding: '60px 20px' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '36px', 
            fontWeight: '900', 
            marginBottom: '40px',
            color: '#1A1A1A',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            Народ выбирает это
          </h2>
          
          <div className="menu-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="card" style={{ border: '3px solid #1A1A1A', borderRadius: '5px', boxShadow: '8px 8px 0px #1A1A1A' }}>
              <img src="https://images.unsplash.com/photo-1612392062798-2f3b2b5b5b5b?w=400&q=80" alt="Хот-дог" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3 style={{ marginBottom: '5px' }}>Парной классический</h3>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>Тот самый, с горчицей и кетчупом</p>
                <div style={{ display: 'inline-block', backgroundColor: '#FFD100', color: '#1A1A1A', padding: '5px 15px', fontWeight: '900', borderRadius: '3px', transform: 'rotate(-2deg)' }}>10 c.</div>
              </div>
            </div>

            <div className="card" style={{ border: '3px solid #1A1A1A', borderRadius: '5px', boxShadow: '8px 8px 0px #1A1A1A' }}>
              <img src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80" alt="Шаурма" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3 style={{ marginBottom: '5px' }}>Шаурма с курицей</h3>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>Сочная, завернутая в лаваш</p>
                <div style={{ display: 'inline-block', backgroundColor: '#FFD100', color: '#1A1A1A', padding: '5px 15px', fontWeight: '900', borderRadius: '3px', transform: 'rotate(-2deg)' }}>20 c.</div>
              </div>
            </div>

            <div className="card" style={{ border: '3px solid #1A1A1A', borderRadius: '5px', boxShadow: '8px 8px 0px #1A1A1A' }}>
              <img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80" alt="Картошка фри" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3 style={{ marginBottom: '5px' }}>Картошка фри</h3>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>Хрустящая, с солью</p>
                <div style={{ display: 'inline-block', backgroundColor: '#FFD100', color: '#1A1A1A', padding: '5px 15px', fontWeight: '900', borderRadius: '3px', transform: 'rotate(-2deg)' }}>10 c.</div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* КОМБО - Живой блок */}
      <FadeInSection>
        <section style={{ 
          backgroundColor: '#E31E24', 
          padding: '60px 20px', 
          margin: '60px auto', 
          textAlign: 'center', 
          maxWidth: '1200px',
          borderRadius: '10px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Декор */}
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: '#FFD100', borderRadius: '50%', opacity: 0.2 }}></div>
          
          <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff', marginBottom: '10px' }}>БЕРИ БОЛЬШЕ — ПЛАТИ МЕНЬШЕ</h2>
          <p style={{ marginBottom: '30px', fontWeight: 'bold', color: '#FFD100', fontSize: '18px' }}>И да, мы даем подарки. Просто так.</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            
            <div style={{ background: '#fff', padding: '25px 20px', borderRadius: '5px', flex: '1 1 250px', maxWidth: '300px', boxShadow: '8px 8px 0px #1A1A1A', transform: 'rotate(1deg)' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🌭🌭🌭</div>
              <h3 style={{ color: '#E31E24', fontSize: '22px' }}>3 хот-дога</h3>
              <p style={{ fontSize: '14px', margin: '10px 0', color: '#666' }}>+ Dirol в подарок</p>
              <div style={{ backgroundColor: '#1A1A1A', color: '#fff', padding: '8px 20px', borderRadius: '3px', display: 'inline-block', fontWeight: 'bold' }}>10 c. / шт</div>
            </div>

            <div style={{ background: '#fff', padding: '25px 20px', borderRadius: '5px', flex: '1 1 250px', maxWidth: '300px', boxShadow: '8px 8px 0px #1A1A1A', transform: 'rotate(-1.5deg)' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🌭🌭🌭🌭🌭</div>
              <h3 style={{ color: '#E31E24', fontSize: '22px' }}>5 хот-догов</h3>
              <p style={{ fontSize: '14px', margin: '10px 0', color: '#666' }}>+ Coca-Cola 0,5 л</p>
              <div style={{ backgroundColor: '#1A1A1A', color: '#fff', padding: '8px 20px', borderRadius: '3px', display: 'inline-block', fontWeight: 'bold' }}>10 c. / шт</div>
            </div>

            <div style={{ background: '#fff', padding: '25px 20px', borderRadius: '5px', flex: '1 1 250px', maxWidth: '300px', boxShadow: '8px 8px 0px #1A1A1A', transform: 'rotate(1.5deg)' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭</div>
              <h3 style={{ color: '#E31E24', fontSize: '22px' }}>10 хот-догов</h3>
              <p style={{ fontSize: '14px', margin: '10px 0', color: '#666' }}>+ Coca-Cola 1,5 л</p>
              <div style={{ backgroundColor: '#1A1A1A', color: '#fff', padding: '8px 20px', borderRadius: '3px', display: 'inline-block', fontWeight: 'bold' }}>10 c. / шт</div>
            </div>

          </div>
        </section>
      </FadeInSection>

      {/* ПОДВАЛ С ПРИЗЫВОМ */}
      <div style={{ textAlign: 'center', margin: '60px 0', padding: '0 20px' }}>
        <p style={{ 
          fontFamily: "'Caveat', cursive", 
          fontSize: '28px', 
          color: '#1A1A1A', 
          marginBottom: '20px',
          transform: 'rotate(-2deg)'
        }}>
          Не заставляй себя ждать. Хот-дог уже скучает.
        </p>
        <Link to="/menu" style={{
          display: 'inline-block',
          backgroundColor: '#1A1A1A',
          color: '#FFD100',
          padding: '18px 45px',
          borderRadius: '5px',
          fontSize: '18px',
          fontWeight: '900',
          textDecoration: 'none',
          boxShadow: '6px 6px 0px #E31E24',
          transition: 'all 0.2s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translate(-3px, -3px)';
          e.currentTarget.style.boxShadow = '9px 9px 0px #E31E24';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translate(0, 0)';
          e.currentTarget.style.boxShadow = '6px 6px 0px #E31E24';
        }}
        >
          СМОТРЕТЬ ВСЕ МЕНЮ
        </Link>
      </div>

      {/* Анимации */}
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}