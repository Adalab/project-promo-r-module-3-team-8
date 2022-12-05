import '../styles/components/Header.scss';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className='header__cards'>
      <NavLink to='/'>
        <img
          className='header__cards--profile'
          src={props.imgHeader}
          alt='logo profile-cards'
        />
      </NavLink>
    </header>
  );
}

export default Header;
