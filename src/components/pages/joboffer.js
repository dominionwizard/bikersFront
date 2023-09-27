
import ReactDOM from 'react-dom/client';
import App from '../forms/hire';
import ImHero from '../Hero/ImageHero';
import styled from "styled-components"
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import axios from "axios";

const HeroComponent = styled.header `
padding: 5rem 0;
height: 80vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-image :url("https://i.pinimg.com/originals/51/ce/75/51ce75c2d56ef59557c0de5f73e56ca2.jpg");
`;




function Job() {
  
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [lisence, setLisence] = useState("");

  
  const handleSubmit = (event) => {
    // refresh page
    event.preventDefault();
    axios.post('https://riders-m03v.onrender.com/auth/jobber',
    
    {firstname, lastname, email, experience, state, phone, lisence}

    ).then((response)=>{
      console.log(response)
      alert(`Your job application has been received, we will contact you!: ${firstname}  ${lastname}?`);
    })

   
  //  alert(`The name you entered was: ${firstName}  ${lastName}?`);
 }

  return (

<>

 <p style={{marginLeft: "38%", color: "blue"}}>APPLY FOR A DRIVING JOB AND EARN SALARY MONTHLY</p>
    <HeroComponent>
    <form onSubmit={handleSubmit} style={{borderRadius: "1.2rem", padding : "1rem", justify: "center", display: 'flex'}}>
       <Row className="mb-3">
        
      <p><label>Enter your  first name:
        <input style={{width: "200%"}}
          type="text" 
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label></p>

      <p><label>Enter your Last name:
        <input style={{width: "200%"}}
          type="text" 
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label></p>
{/* <div style={{width: "90rem", marginLeft: "-25rem", opacity: "0.1", height:"35rem"}}><ImHero /></div> */}

      <p><label>Enter your Email:
        <input style={{width: "220%"}}
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label></p>

     <p> <label>Years of driving experience:
        <input style={{width: "100%"}}
          type="number" 
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
 </label></p>
 <p>
<label>Enter your State
        <input style={{width: "225%"}}
          type="text" 
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
</label> </p>



<p><label>Enter your Phone
        <input  style={{width: "120%"}}
          type="number" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
</label></p>
        
        
        <p><label>Upload your drivers lisence
                <input style={{width: "228%"}}
                  type="file" 
                  value={lisence}
                  onChange={(e) => setLisence(e.target.value)}
                  accept=".jpg, .jpeg, .png, .pdf, .docs" 
                />
        </label></p>
      
        
      <input type="Submit" onClick={handleSubmit} style={{width: "20%",backgroundColor:"blue", color: "white", padding: "14rem 20rem,", margin: "1rem", border: "3rem", pointer: "cursor",marginLeft: "12rem"}} />
   </Row>
   
    </form>
    </HeroComponent>
    </> 
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Formpurchase/>);

export default Job