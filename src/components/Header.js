import '../styles/components/Header.scss';

function Header(props) {
  return (
    <header className='header__cards'>
      <a href='index.html'>
        <img
          className='header__cards--profile'
          src={props.imgHeader}
          alt='logo profile-cards'
        />
      </a>
    </header>
  );
}

export default Header;
