import { MapPin, Clock, Phone } from 'lucide-react';

export default function Contacts() {
  return (
    <div style={{ 
      padding: '60px 20px', 
      maxWidth: '900px', 
      margin: '0 auto',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      
      {/* Заголовок с рукописным акцентом */}
      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: '900', 
          color: '#1A1A1A',
          textTransform: 'uppercase',
          marginBottom: '10px',
          letterSpacing: '-1px'
        }}>
          Где нас <span style={{ color: '#E31E24' }}>найти</span>?
        </h1>
        <p style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '32px',
          color: '#E31E24',
          transform: 'rotate(-2deg)',
          display: 'inline-block'
        }}>
          Мы всегда рядом, когда голоден
        </p>
      </div>

      {/* Сетка контактов */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '25px',
        justifyContent: 'center'
      }}>
        
        {/* Карточка: Адрес */}
        <div style={{ 
          flex: '1 1 300px', 
          maxWidth: '400px',
          backgroundColor: '#fff', 
          padding: '30px', 
          borderRadius: '5px',
          boxShadow: '10px 10px 0px #1A1A1A',
          border: '3px solid #1A1A1A',
          transform: 'rotate(-1deg)',
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(0deg) translateY(-5px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(-1deg) translateY(0)'}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{ backgroundColor: '#E31E24', padding: '12px', borderRadius: '50%' }}>
              <MapPin color="#fff" size={24} />
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#1A1A1A', margin: 0 }}>Где мы стоим</h3>
          </div>
          <p style={{ fontSize: '18px', color: '#333', lineHeight: '1.5', margin: 0 }}>
            Город <strong>Душанбе</strong>, Таджикистан.<br/>
            <span style={{ fontSize: '15px', color: '#666' }}>Ищи наш красный киоск — не промахнешься!</span>
          </p>
        </div>

        {/* Карточка: Время работы */}
        <div style={{ 
          flex: '1 1 300px', 
          maxWidth: '400px',
          backgroundColor: '#fff', 
          padding: '30px', 
          borderRadius: '5px',
          boxShadow: '10px 10px 0px #FFD100',
          border: '3px solid #1A1A1A',
          transform: 'rotate(1.5deg)',
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(0deg) translateY(-5px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(1.5deg) translateY(0)'}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{ backgroundColor: '#1A1A1A', padding: '12px', borderRadius: '50%' }}>
              <Clock color="#fff" size={24} />
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#1A1A1A', margin: 0 }}>Когда работаем</h3>
          </div>
          <p style={{ fontSize: '18px', color: '#333', lineHeight: '1.5', margin: 0 }}>
            Каждый день, без выходных.<br/>
            <strong>с 09:00 до 23:00</strong><br/>
            <span style={{ fontSize: '15px', color: '#666' }}>Готовы кормить вас с утра до ночи.</span>
          </p>
        </div>

      </div>

      {/* Блок с телефоном и инстой (по центру) */}
      <div style={{ 
        marginTop: '50px', 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '25px',
        justifyContent: 'center'
      }}>
        
        {/* WhatsApp */}
        <div style={{ 
          flex: '1 1 250px', 
          maxWidth: '350px',
          backgroundColor: '#E31E24', 
          padding: '30px', 
          borderRadius: '5px',
          boxShadow: '10px 10px 0px #FFD100',
          textAlign: 'center',
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Phone color="#fff" size={40} style={{ marginBottom: '15px' }} />
          <h3 style={{ color: '#fff', fontSize: '22px', marginBottom: '5px' }}>Заказ в WhatsApp</h3>
          <p style={{ color: '#ffb3b5', fontSize: '14px', marginBottom: '20px' }}>Мы на связи всегда</p>
          <a 
            href="https://wa.me/992107111333" 
            target="_blank" 
            rel="noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#fff',
              color: '#E31E24',
              padding: '12px 30px',
              borderRadius: '3px',
              fontWeight: '900',
              fontSize: '18px',
              textDecoration: 'none',
              boxShadow: '4px 4px 0px #1A1A1A',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
              e.currentTarget.style.boxShadow = '6px 6px 0px #1A1A1A';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '4px 4px 0px #1A1A1A';
            }}
          >
            107 111 333
          </a>
        </div>

        {/* Instagram */}
        <div style={{ 
          flex: '1 1 250px', 
          maxWidth: '350px',
          backgroundColor: '#fff', 
          padding: '30px', 
          borderRadius: '5px',
          boxShadow: '10px 10px 0px #E31E24',
          border: '3px solid #1A1A1A',
          textAlign: 'center',
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px' }}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <h3 style={{ color: '#1A1A1A', fontSize: '22px', marginBottom: '5px' }}>Смотри наши фото</h3>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>Свежие хот-доги каждый день</p>
          <a 
            href="https://instagram.com/lazza.tajikistan" 
            target="_blank" 
            rel="noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#1A1A1A',
              color: '#fff',
              padding: '12px 30px',
              borderRadius: '3px',
              fontWeight: '900',
              fontSize: '16px',
              textDecoration: 'none',
              boxShadow: '4px 4px 0px #FFD100',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
              e.currentTarget.style.boxShadow = '6px 6px 0px #FFD100';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '4px 4px 0px #FFD100';
            }}
          >
            @lazza.tajikistan
          </a>
        </div>

      </div>

      {/* Подпись снизу */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <p style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '30px',
          color: '#1A1A1A',
          transform: 'rotate(-1deg)',
          display: 'inline-block'
        }}>
          Ждем тебя. Приходи голодным! 🍔
        </p>
      </div>

    </div>
  );
}