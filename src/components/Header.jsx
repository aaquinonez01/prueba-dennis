
import { Link, useLocation } from 'react-router-dom'
import '../styles/header.css'
import { ShoppingCart } from 'lucide-react'
import { User } from 'lucide-react'
import {useCartStore} from '../store/cartStore'
import { useState } from 'react'
import { ShoppingCartC } from './ShoppingCart'


export const Header = () => {

  const cartItems = useCartStore(state => state.cartItems);
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => {
    console.log('click')
    setIsOpen(!isOpen)
  };
  //obtener el ultimo segmento de la url
  const {pathname} = useLocation()
  const menunav = [
    {
      name: "Inicio",
      url: "/home"
    },
    {
      name: "Todos los Libros",
      url: "/books"
    },
    {
      name: "Novedades",
      url: "/new"
    },
    {
      name: "Mis Pedidos",
      url: "/pedidos"
    }
  ]
  return (
    
    <header className="header ">
      <div className="header__container container ">
        <Link to="/home" className="header__logo">
          Relatos de Papel
        </Link>
        <nav className="header__nav">
          {menunav.map((item) => (
            <Link key={item.url} to={item.url} className={`header__nav-item ${pathname === item.url ? 'header__nav-item--active' : ''}`}>
              {item.name}
            </Link>
          ))}

          
        </nav>
        <div className="header__actions">
          
          
          <div className='relative'>
          <button className="header__action relative" onClick={toggleCart}>
            <ShoppingCart className="header__icon" />
            <span className="header__cart-badge ">
              {cartItems.length}
            </span>
          </button>
          {isOpen && <ShoppingCartC toggleCart={toggleCart} />}
          </div>

          <button aria-label="Perfil de usuario" className="header__action" onClick={toggleCart}>
            <User className="header__icon" />
          </button>
          
          

          
        </div>
      </div>
    </header>
  )
}
