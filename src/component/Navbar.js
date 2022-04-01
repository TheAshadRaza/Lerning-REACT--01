import React from "react"
// import PropTypes from 'prop-types'
import { Link } from "react-dom";





export default function Navbar(props) {
  
  return (
    <nav   id='rootElement' className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand text-Dark" to="/">CuriOUs</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">UseCase </Link>
            </li>
          </ul>
  
      
  






          <div className={`form-cheak form-Switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <label className="form-check-label" htmlfor="flexRoutesCheakDefault">Enable-Mode</label>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexCheckIndeterminate" />
          </div>
          {/* <div className={`form-cheak form-Routes text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-control me-2" onClick={props.toggleMode} type="cheakbox" id="flexRoutesCheakDeafault"></input>
            <button className="btn btn-outline-success" type="submit">Search</button> */}
          </div>
        </div>
      {/* </div> */}
    </nav>
  )
};