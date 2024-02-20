import React, { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { emptyCart, removeFromCart } from "../Redux/Slice/cartSlice"

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Calculate the total price of all products in the cart
  // const totalPrice = cartArray.reduce((acc, product) => acc + product.price, 0)

  const [total, setTotal] = useState(0)

  const getCartTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map((item) => item.price).reduce((p1, p2) => p1 + p2))
    } else {
      setTotal(0)
    }
  }

  useEffect(() => {
    getCartTotal()
  }, [cartArray])

  const handleCart = () => {
    dispatch(emptyCart())
    alert(`Your order  has been placed....Thank you for purchasing!!`)
    navigate("/")
  }

  return (
    <div style={{ marginTop: "100px" }}>
      {cartArray.length > 0 ? (
        <div className="row">
          <div className="col-lg-8">
            <table className="table shadow rounded">
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>TITLE</th>
                  <th>THUMBNAIL</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {cartArray.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>
                      <img width={"100px"} height={"100px"} src={product.thumbnail} alt="" />
                    </td>
                    <td>${product.price}</td>
                    <td>
                      <Button onClick={() => dispatch(removeFromCart(product.id))} variant="danger">
                        <i class="fa-solid fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* cart summary */}

          <div className="col-lg-3">
            <div className="border mt-3 rounded shadow p-2 w-100">
              <h1 className="text-primary p-2">Cart Summary</h1>
              <h4>
                Total products: <span>{cartArray.length}</span>
              </h4>
              <h4>
                Total: <span className="text-danger fw-bolder fs-2">$ {total}</span>
              </h4>
              <div className="d-grid">
                <button className="btn btn-success mt-5 rounded" onClick={handleCart}>
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: "37vh" }} className="w-100 d-flex flex-column  justify-content-center align-items-center">
          <img height={"400px"} width={"200px"} src="https://th.bing.com/th/id/OIP.8hCRd1NVr5kJJQ3V_KEJiAAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
          <h3 className="text-center text-danger">Cart is empty</h3>
          <Link style={{ textDecoration: "none", marginBottom: "30px" }} to={"/"} className="btn">
            Back to home
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart
