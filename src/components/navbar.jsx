import '../styles/navbar.css'
import plazing from '../images/plazing.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='div-logo'>
      <img src={plazing} alt="logo" className='logo-plazing' />
      <div className="navbar-left">
        <ul>
          <li>Home</li>
          <li>Sale</li>
          <li>Products</li>
        </ul>
      </div>
      </div>
      
      <div className="navbar-right">
        <ul>
          <li>Cart</li>
          <li>Sign In</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;