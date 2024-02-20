import React from "react"
import { Col, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeFromWishlist } from "../Redux/Slice/wishlistSlice"
import { addToCart } from "../Redux/Slice/cartSlice"

function WishList() {
  const wishlistArray = useSelector((state) => state.wishlistReducer)
  const dispatch = useDispatch()

  // adding to cart and deleting from the wishlist at a time.
  const handleWishlistCard = (product) => {
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <Row Row className="ms-5" style={{ marginTop: "100px" }}>
        {wishlistArray.length > 0 ? (
          wishlistArray.map((product, index) => (
            <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: "18rem", height: "30rem" }}>
                <Card.Img variant="top" src={product?.thumbnail} height={"200px"} />
                <Card.Body>
                  <Card.Title>{product?.title.slice(0, 20)}</Card.Title>
                  <Card.Text>
                    <p>{product?.description.slice(0, 50)}</p>
                    <h5>${product?.price}</h5>
                  </Card.Text>

                  <div className="d-flex justify-content-between ">
                    <Button onClick={() => dispatch(removeFromWishlist(product.id))} variant="danger">
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                    <Button onClick={() => handleWishlistCard(product)} variant="success">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div style={{ height: "37vh" }} className="w-100 d-flex flex-column  justify-content-center align-items-center">
            <img height={"400px"} width={"200px"} src="https://th.bing.com/th/id/OIP.8hCRd1NVr5kJJQ3V_KEJiAAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <h3 className="text-center text-danger">Wishlist is empty</h3>
            <Link style={{ textDecoration: "none", marginBottom: "30px" }} to={"/"} className="btn">
              Back to home
            </Link>
          </div>
        )}
      </Row>
    </div>
  )
}

export default WishList
