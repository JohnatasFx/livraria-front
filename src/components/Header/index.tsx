import logo from '../../assets/logo.png'
import './style.css'

export default function Header() {
  return (
    <div id="header">
      <div className="logo-container">
        <img src={logo} alt="" className="src" />
      </div>
      <div className="menu-container">
        <a href="" className="ref">Listar Livros</a>
        <a href="" className="ref">Cadastrar Livros</a>
      </div>
    </div>
  );
}