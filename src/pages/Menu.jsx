import MenuCard from '../components/MenuCard';

// Ссылки на бесплатные фото (Unsplash / Pexels)
const IMG = {
  hotdog1: "https://images.unsplash.com/photo-1612392062798-2f3b2b5b5b5b?w=400&q=80", // замени на рабочую
  // ... ниже дам более точные
};

export default function Menu() {
  return (
    <div style={{ paddingBottom: '40px' }}>
      <h1 className="section-title" style={{ marginTop: '30px' }}>Меню LAZZA FOOD</h1>

      {/* ХОТ-ДОГИ */}
      <h2 className="section-title">Хот-доги</h2>
      <div className="menu-grid">
        <MenuCard 
          title="Парной классический" 
          price="10 c." 
          imageUrl="https://images.unsplash.com/photo-1612392062798-2f3b2b5b5b5b?w=400&q=80" 
        />
        <MenuCard 
          title="Парной начо" 
          price="15 c." 
          imageUrl="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80" 
        />
        <MenuCard 
          title="Парной LAZZA" 
          price="13 c." 
          imageUrl="https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=400&q=80" 
        />
        <MenuCard 
          title="Парной с курицей" 
          price="15 c." 
          imageUrl="https://images.unsplash.com/photo-1627055319521-4b4b5b5b5b5b?w=400&q=80" 
        />
      </div>

      {/* СЭНДВИЧИ */}
      <h2 className="section-title">Сэндвичи</h2>
      <div className="menu-grid">
        <MenuCard 
          title="Сэндвич" 
          price="15 c." 
          imageUrl="https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80" 
        />
        <MenuCard 
          title="Сэндвич большой" 
          price="20 c." 
          imageUrl="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80" 
        />
      </div>

      {/* КАРТОФЕЛЬ */}
      <h2 className="section-title">Картофель</h2>
      <div className="menu-grid">
        <MenuCard 
          title="Картошка фри" 
          price="10 c." 
          imageUrl="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80" 
        />
        <MenuCard 
          title="Картошка по-деревенски" 
          price="10 c." 
          imageUrl="https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&q=80" 
        />
      </div>

      {/* ШАУРМА */}
      <h2 className="section-title">Шаурма</h2>
      <div className="menu-grid">
        <MenuCard 
          title="Шаурма с курицей" 
          price="20 c." 
          imageUrl="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80" 
        />
      </div>

      {/* КОМБО */}
      <h2 className="section-title">Комбо</h2>
      <div className="menu-grid">
        <MenuCard 
          title="3 хот-дога + Dirol" 
          price="В подарок" 
          imageUrl="https://images.unsplash.com/photo-1612392062798-2f3b2b5b5b5b?w=400&q=80" 
        />
        <MenuCard 
          title="5 хот-догов + CocaCola 0,5" 
          price="В подарок" 
          imageUrl="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80" 
        />
        <MenuCard 
          title="10 хот-догов + CocaCola 1,5л" 
          price="В подарок" 
          imageUrl="https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=400&q=80" 
        />
      </div>

      {/* СОУСЫ */}
      <h2 className="section-title">Соусы</h2>
      <div className="menu-grid">
        <MenuCard 
          title="Чесночный соус" 
          price="4 c." 
          imageUrl="https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80" 
        />
        <MenuCard 
          title="Сырный соус" 
          price="4 c." 
          imageUrl="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80" 
        />
        <MenuCard 
          title="Томатный соус" 
          price="4 c." 
          imageUrl="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" 
        />
      </div>
    </div>
  );
}