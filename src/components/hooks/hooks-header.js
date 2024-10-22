import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

function HooksHeader() {
  return (
    <React.Fragment>
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="useState">useState Demo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="useEffect-1">useEffect class Demo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="useEffect-2">useEffect function Demo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="api-demo">useEffect Api Demo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="root-context">useContext Demo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="custom-hooks">Custom Hooks Demo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="use-reducer">useReducer Hook Demo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="use-memo">useMemo Hook Demo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="use-ref">useRef Hook Demo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="use-callback">useCallback Hook Demo</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet></Outlet>
    </React.Fragment>
  );  
}

export default HooksHeader;
