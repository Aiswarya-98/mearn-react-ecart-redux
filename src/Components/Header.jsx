import React from "react"
import { Link } from "react-router-dom"
import Badge from "react-bootstrap/Badge"
import { useSelector } from "react-redux"

// import Button from 'react-bootstrap/Button';

function Header() {
  const wishlist = useSelector((state) => state.wishlistReducer)

  const cart = useSelector((state) => state.cartReducer)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              E-Cart
            </Link>
          </a>
          <img src="https://static.vecteezy.com/system/resources/previews/000/437/110/original/vector-add-to-cart-vector-icon.jpg" alt="" height={50} width={50} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor04" aria-controls="navbarColor04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor04">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
            </ul>
            <Link className="nav-link" to={"/wishlist"}>
              <i className="fa-solid fa-heart fa-beat"></i>Wishlist
              <Badge bg="secondary" style={{ color: "black" }}>
                {wishlist.length}
              </Badge>
            </Link>
            &nbsp; &nbsp; &nbsp;
            <Link className="nav-link" to={"/cart"}>
              <i className="fa-solid fa-cart-shopping fa-beat"></i>Cart
              <Badge bg="secondary" style={{ color: "black" }}>
                {cart.length}
              </Badge>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
