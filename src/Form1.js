import "./App.css";
import { useState } from "react";

function Form1() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  

   
    const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const validationErrors = [];
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Reset errors
        setErrors([]);
    
        // Basic form validation
        if (!email || !name || !password || !confirmPassword) {
          setErrors(['All the field are compulsory.']);
          return;
        }
    
        if (password !== confirmPassword) {
          setErrors(['Error: Please Make sure your passwords and confirm passwords match ']);
          return;
        }
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            setSuccessMessage('');
          } else {
            setErrors([]);
            setSuccessMessage('Successfully created !');
          }
    }
    
//   function handleCPassword(e){
//     e.preventDefault()
//     setPassword = useState(e.target.value)
//   }
// function handlePassword(e){
//   e.preventDefault()
//     setCpassword = useState(e.target.value)
// }


//   function handleData(e) {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//     console.log(inputData);
//   }

  // let [pswd,setpswd] = useState(" ");

  // function pswd(e){
  //   // e.preventDefault();
  //   setpswd({...pswd});
  //   console.log(pswd);
    
  

//   function hcreate(e){
//     e.preventDefault();
//     if(!inputData.name || !inputData.email || !inputData.password || !inputData.cpassword){
//        alert("error:please make sure all input are mandetory ")
//     }
//     else if( ! password === cpassword){
//       alert("error: password and confirm password must be same" )
//     }
//     else{
//       alert("successfull")
//     }

//   }





  // }
  //  function hpassword(e){
  //      setPswd(e.target.value);
  //      console.log(e);
  //  }

  return (
    <div className="App">
      <div className="div1">
      <div className="imgg"><img className="im" src="./1.png" alt="" /></div>
        <div className="div2">
          <div className="side">
            <div>
              <legend>
                <h1>Create Account</h1>
              </legend>
            </div>

            <div className="span1">
              <div>
                
                <img className="img1" src="./gmail.png" alt="" />
                <span>Sign up with Google</span>
              </div>
              <div>
                
                <img className=" img2" src="./facebook.png" alt="" />
                Sign up with facebook
              </div>
            </div>
            <br />
            <div className="or">- OR -</div>
            <br />
            <form onSubmit={handleSubmit}>
            
              {/* props only readable  */}
             
              <br />
              <input
            type="text"
            placeholder="Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
              <br />
              <input
            type="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
              <br />
              <input
            type="password"
            id="confirmPassword"
            placeholder="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

              <br />

              <button type="submit" className="btn">Create Account</button>
              <br />
              {errors.length > 0 && (
          <div style={{ color: 'red' }}>
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
       
        { errors.length === 0 && successMessage && <p  style={{ color: 'green' ,textAlign: 'center'} }>{successMessage}</p>}
       
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form1
