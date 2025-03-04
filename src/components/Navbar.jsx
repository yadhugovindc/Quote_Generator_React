import React from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img  src="https://static.vecteezy.com/system/resources/thumbnails/023/654/784/small_2x/golden-logo-template-free-png.png" alt="" style={{width:'100px',height:'auto'}} className='img-fluid rounded-5'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>
        
         <div className='collapse navbar-collapse' id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/"><Button variant="contained">Home</Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/saved"><Button variant="contained">Saved Item</Button></Link>
            </li>
          </ul>
         </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar