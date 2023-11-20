import React, { useState } from "react";
import Form from "react-bootstrap/Form";
 import Button from "react-bootstrap/Button";
 import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";
// import fn from './icons/name.png'

const Home = () => {

    const [inpval,setInpval] = useState({
        name: "",
        password: "",
        Firstname: "",
        lastname: "",
        email: "",
        phone: "",

    })
    const [data,setData] = useState([]);
    console.log(inpval);
    
        

    const getdata = (e)=>{
        const {value,name}=e.target;
        setInpval(()=>{
            return{
                ...inpval,
               [name]:value

            }
        })

    }

//   const addData = (e)=>{
//     e.preventDefault();
//     // console.log(inpval);
//     const { name,password,Firstname, lastname,email,phone} = inpval;
       
//     if (name === "") {
//         alert("name field is requred")

//     }else if(password === ""){
//         alert("password field is requred")

//     }else if(Firstname === ""){
//         alert("firstname field is requred")

//     }else if(lastname === ""){
//         alert('Last name field is requred')

//     }else if(email === ""){
//         alert("email field is requred")

//     }else if(!email.includes("@")){
//         alert("plz enter valid email addres ")

//     }else if(phone === ""){
//         alert('phone field is requred')

//     }else{
//         console.log("data adedd succesfully");
//         localStorage.setItem("userkanhu",JSON.stringify([...data,inpval]));
//     }
//   }
  return (
    <>
      <div className="container mt-3">
        <section>
          <div className="left_data mt-3"></div>
          <h3 className='text-center col-lg-6'> Sign up</h3>
          <Form>
            <Form.Group
              className="mb-3 col-lg-4"
              controlId="formBasicEmail"id="sun">
              <Form.Control type="text" name='name' onChange={getdata} placeholder="User name" />
            </Form.Group>

            <Form.Group
              className="mb-3 col-lg-4"
              controlId="formBasicEmail"id="sun" >
              <Form.Control type="password" name=' password' onChange={getdata} placeholder="password" />
            </Form.Group>

            <Form.Group
              className="mb-3 col-lg-4"
              controlId="formBasicEmail"id="sun" >
               {/* <img src={fn} alt=""></img>  */}
              <Form.Control type="text" name='Firstname' onChange={getdata}placeholder="First Name" />
            </Form.Group>

            <Form.Group
              className="mb-3 col-lg-4"
              controlId="formBasicEmail"id="sun">
              {/* <img src={ln} alt=""></img> */}
              <Form.Control type="text" name ='  lastname'onChange={getdata} placeholder="Last Name" />
            </Form.Group>

            <Form.Group
              className="mb-3 col-lg-4"
              controlId="formBasicEmail"id="sun">
              {/* <img src={email} alt=""></img> */}
              <Form.Control type="email" name=' email'  onChange={getdata} placeholder="Email" />
            </Form.Group>

            <Form.Group
              className="mb-3 col-lg-4"
              controlId="formBasicEmail"id="sun">
              {/* <img src={phone} alt=""></img> */}
              <Form.Control type="phone" name=' phone'onChange={getdata} placeholder="phone" />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail" id="sun">
              {/* <img src={select} alt=""></img> */}
              <select required  class='field2'>
              <option value="">--select--</option>
              <option value="BA">Bachelor of Arts</option>
              <option value="BCom">Bachelor of Commerce</option>
              <option value="BSc">Bachelor of Science</option>
              <option value="BCA">Bachelor of Computer Application</option>
              <option value="BBA">Bachelor of Business Administration</option>
              <option value="MSc">Master of Science</option>
              <option value="MA">Master of Arts</option>
              <option value="MCom">Master of Commerce</option>
              <option value="MCA">Master of Computer Application</option>
              <option value="CSE">B.Tech- Computer Science and Engineering</option>
              <option value="BT">B.Tech- Biotechnology</option>
              <option value="EEE">B.Tech- Electricals and Electronics Engineering</option>
              <option value="ME">B.Tech- Mechanical Engineering</option>
           </select>
              </Form.Group>

             <Button variant="primary" className='col-lg-4' type="submit">
              Submit
            </Button> 
            <p className='mt-3'> Already Have an Account <span>< NavLink to="/login">SignIn</NavLink></span></p>
          </Form>
          < Sign_img />
        </section>
      </div>
    </>
  );
};

export default Home;
