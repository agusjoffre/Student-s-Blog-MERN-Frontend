import { Link } from 'react-router-dom';
import './header.css';

const logosrc = '/logo.png';

export default function Header() {
  return (
    <header>
      <div className="left">
        <Link to="/">
          <img src={logosrc} alt="Home" />
        </Link>
        <Link to="/create">
          <button className="btn-header btn-alert">Crear post</button>
        </Link>
      </div>
      <div className="center-right">
        <Link to="/posts">
          <button className="btn-header btn-nobtn">Articulos</button>
        </Link>
        <Link to="/about">
          <button className="btn-header btn-nobtn">Sobre nosotros</button>
        </Link>
        <Link to="/documents">
          <button className="btn-header btn-nobtn">Documentos</button>
        </Link>
      </div>
      <div className="right">
        <Link to="/register">
          <button className="btn-header btn-nobtn">Crear cuenta</button>
        </Link>
        <Link to="/login">
          <button className="btn-header btn-login">Iniciar sesion</button>
        </Link>
      </div>
    </header>
  );
}
