import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <Flame color="#FFD100" size={32} />
        LAZZA <span>FOOD</span>
      </Link>
      <div className="nav-links">
        <Link to="/">Главная</Link>
        <Link to="/menu">Меню</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
    </nav>
  );
}