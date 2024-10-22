//import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <Link className="nav-link" to="/">Display Component</Link> */}
            <NavLink className="nav-link" to="/">Display Component</NavLink>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/counter">Counter Component</Link> */}
            <NavLink className="nav-link" to="/counter">Counter Component</NavLink>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/list-colors">ListColors Component</Link> */}
            <NavLink className="nav-link" to="/list-colors">ListColors Component</NavLink>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/book-store">BookStore Component</Link> */}
            <NavLink className="nav-link" to="/book-store">BookStore Component</NavLink>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/book-store">BookStore Component</Link> */}
            <NavLink className="nav-link" to="/book-store-http">BookStoreHttp Component</NavLink>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/book-store">BookStore Component</Link> */}
            <NavLink className="nav-link" to="/book-store-redux">BookStoreRedux Component</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/todo">Todo Component</NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/cookies">CookiesRedux Component</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cookies-chocolates">CookiesChocolatesRedux Component</NavLink>
          </li> */}
          <li className="nav-item">
            {/* <Link className="nav-link" to="/book-store">BookStore Component</Link> */}
            <NavLink className="nav-link" to="/book-store-redux-saga">BookStoreReduxSagaRedux Component</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/hooks">Hooks Components</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/root-book-graphql/book-store-graphql">BookStoreGraphql Components</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/counter-testing">Testing Counter</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );  
}

export default Header;
