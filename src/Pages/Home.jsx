import React from "react"
import { Col, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import useFetch from "../Hooks/useFetch"
import { useDispatch } from "react-redux"
import { addtoWishlist } from "../Redux/Slice/wishlistSlice"
import { addToCart } from "../Redux/Slice/cartSlice"

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  console.log(data)

  const dispatch = useDispatch()
  return (
    <>
      <Row className="ms-5" style={{ marginTop: "100px" }}>
        {data?.length > 0 ? (
          data?.map((product, index) => (
            <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: "18rem", height: "30rem" }}>
                <Card.Img variant="top" src={product.thumbnail} height={"200px"} />
                <Card.Body>
                  <Card.Title>{product?.title.slice(0, 20)}</Card.Title>
                  <Card.Text>
                    <p>{product?.description.slice(0, 50)}</p>
                    <h5>${product?.price}</h5>
                  </Card.Text>

                  <div className="d-flex justify-content-between ">
                    <Button variant="danger" onClick={() => dispatch(addtoWishlist(product))}>
                      <i class="fa-solid fa-heart"></i>
                    </Button>
                    <Button variant="success" onClick={() => dispatch(addToCart(product))}>
                      <i class="fa-solid fa-cart-shopping"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-danger fw-bolder ">Nothing to display</p>
        )}
      </Row>
    </>
  )
}

export default Home
