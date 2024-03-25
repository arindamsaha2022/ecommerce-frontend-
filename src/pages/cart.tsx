import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/Cart-item";
import { Link } from "react-router-dom";

const CartItems = [
  {
    productId: "hello",
    photo: "https://m.media-amazon.com/images/I/61oCoa9FtqL._SX425_.jpg",
    name: "KeyBoard",
    price: 10000,
    quantity: 4,
    stock: 10,
  }
];

const Cart = () => {
  // Moved constant declarations inside the component
  const [subtotal] = useState(1000);
  const [tax] = useState(Math.round(subtotal * 0.10));
  const [shippngCharges] = useState(200);
  const [Discount] = useState(500);
  const [total] = useState(subtotal + tax + shippngCharges);

  const [couponCode, setCoponCode] = useState("");
  const [isValidCouponCode, setIsValidcouponCode] = useState(false);
  
  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setIsValidcouponCode(Math.random() > 0.5);
    }, 1000);
    return () => {
      clearTimeout(timeOutID);
    };
  }, [couponCode]); 

  return (
    <div className="cart">
      
      <main>
  {CartItems.length > 0 ? (
    CartItems.map((item, index) => (
      <CartItem key={index} cartItem={item} />
    ))
  ) : (
    <h1>No Item Added</h1>
  )}
</main>

      <aside>
        <p>Subtotal:   ₹ {subtotal} </p> 
        <p>Shipping Charges: ₹ {shippngCharges} </p> 
        <p>Tax: ₹ {tax} </p> 
        <p>
          Discount: <em>- ₹ {Discount} </em>
        </p>
        <p>
          <b>Total: ₹ {total}</b> 
        </p>
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCoponCode(e.target.value)}
        />

        {couponCode && (isValidCouponCode ? (
          <span className="green">
            ₹ {Discount} off using the <code>{couponCode}</code>
          </span>
        ) : (
          <span className="red">
            Invalid Code <VscError />
          </span>
        ))}

          {
          CartItems.length > 0 && <Link to="/shipping" className="checkout">Checkout</Link>
        }

      </aside>
    </div>
  );
};

export default Cart;
