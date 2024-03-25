import {useState} from 'react'
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [gendar, setGender] = useState("");
  const [date, setDate]= useState("");

  return (
    
    <div className='login'>
      <h1>Login Page</h1>
      <main>
      <div>
        <label> Gender</label>
     <select value={gendar}
     onChange={(e)=>setGender(e.target.value)}
     >
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
     </select>
     </div>

     <div>
     <label>Date Of Birth</label>
       <input type="date"
       value={date}
       onChange={(e)=>setDate(e.target.value)}
       />
     </div>

     <div>
      <p>Alrady Signed In Onece</p>
      <button>
      <FaGoogle/><span>Signin With Google </span>
      </button>
     </div>


</main>
    </div>
  )
}

export default Login