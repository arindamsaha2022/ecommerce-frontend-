import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

const Shipping = () => {
  const navigate = useNavigate()
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: ""
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="Shipping">
      <button type="button" className="back-btn" onClick={()=>navigate("/cart")}> {/* Specify type="button" to prevent form submission */}
        <BiArrowBack/>
      </button>

      <form action="">
        <h1>Shipping Address</h1>
        <input 
          required
          type="text"
          placeholder="Name"
          name="Name"
          value={shippingInfo.city}
          onChange={changeHandler}
        />

        <input 
          required
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />

        <input 
          required
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
        />

        <input 
          required
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changeHandler}
        />

        <select
          name="country"
          required
          value={shippingInfo.country}
          onChange={changeHandler}
        >
         <option value="">Choose Country</option>
         <option value="India">India</option>
         <option value="Switzerland">Switzerland</option>
         <option value="Canada">Canada</option>
         <option value="Sweden">Sweden</option>
         <option value="Australia">Australia</option>
         <option value="Japan">Japan</option>
         <option value="Germany">Germany</option>
         <option value="New Zealand">New Zealand</option>
         <option value="United Kingdom">United Kingdom</option>
         <option value="Netherlands">Netherlands</option>  
        </select>

        <input 
          required
          type="text"
          placeholder="Pincode"
          name="pinCode"
          value={shippingInfo.pinCode}
          onChange={changeHandler}
        />


        <button type="submit">Pay Now</button>
      </form>
    </div>
  )
}

export default Shipping
