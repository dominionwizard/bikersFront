
import ReactDOM from 'react-dom/client';
import App from '../forms/hire';
// import ImHero from '../Hero/ImageHero';
import styled from "styled-components"
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import axios from "axios"

const HeroComponent = styled.header `
padding: 5rem 0;
height: 80vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-image :url("https://i.pinimg.com/originals/51/ce/75/51ce75c2d56ef59557c0de5f73e56ca2.jpg");
`;




function Formpurchase() {
  
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [nin, setNin] = useState("");
  const [gname, setGname] = useState("");
  const [gaddress, setGaddress] = useState("");
  const [gnin, setGnin] = useState("");




  const handleSubmit = (event) => {
    // refresh page
    event.preventDefault();
    axios.post('https://riders-m03v.onrender.com/auth/hire',
    
    {first, last, email, city, state, phone, nin, gname, gaddress, gnin}
    ).then((response)=>{
      console.log(response)
      alert(`We have received your request, we will get back to you as soon as possible.: ${first}  ${last}?`);
    })

   
  //  alert(`The name you entered was: ${firstName}  ${lastName}?`);
 }


  return (

<>

 <p style={{ color: "blue" , marginLeft: "40rem"}}>HIRE PURCHASE APPLICATION FORM</p>
    <HeroComponent>
    <form onSubmit={handleSubmit} style={{borderRadius: "1.2rem", marginLeft: "17rem",position: "relative", display: 'flex',top: "-5rem"}}>
       <Row className="mb-3">
      <p><label>Enter your  first name:
        <input style={{width: "200%"}}
           required
          type="text"
          placeholder = "Your First Name"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
      </label></p>
{/* <div style={{width: "90rem", marginLeft: "-25rem", opacity: "0.1", height:"35rem"}}><ImHero /></div> */}


<p><label>Enter your  Last name:
        <input style={{width: "200%"}}
           required
          type="text"
          placeholder = "Your Last Name"
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
      </label></p>

      <p>
        <label>Enter your Email:
        <input style={{width: "220%"}}
          type="text" 
          placeholder = "Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      </p>

     <p>
       <label>Enter your City:
        <input style={{width: "228%"}}
          type="text" 
          placeholder = "Your City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
 </label>
 </p>
 <p>
<label>Enter your State
        <input style={{width: "225%"}}
          type="text"
          placeholder = "Your State" 
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
</label> 
</p>

<p>
  <label>Enter your Phone :
  <input style={{width: "177%"}}
    type="text" 
    placeholder = "Your Phone Number"
    placceHolder={phone}
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
  />
</label>
</p>
        
<p>
  <label>Enter your NIN:
  <input style={{width: "188.9%"}}
    type="number" 
    placeholder = "Your NIN"
    value={nin}
    onChange={(e) => setNin(e.target.value)}
  />
</label>
</p>

<p>
  <label>Enter your Guarantor's name:
  <input style={{width: "170%"}}
    type="text" 
    placeholder = "Guarantor's Name"
    value={gname}
    onChange={(e) => setGname(e.target.value)}
  />
</label>
</p>

<p>
  <label>Enter your Guarantor's house address:
  <input style={{width: "147%"}}
    type="text" 
    placeholder = "Guarantor's Home Address"
    value={gaddress}
    onChange={(e) => setGaddress(e.target.value)}
  />
</label>
</p>

      

<p>
  <label>Enter your guarantor's NIN:
  <input style={{width: "175%"}}
    type="text" 
    placeholder = "Guarantor's NIN"
    value={gnin}
    onChange={(e) => setGnin(e.target.value)}
  />
</label>
</p>

        
      <input type="Submit" onClick={handleSubmit} style={{width: "20%",backgroundColor:"blue", color: "white", padding: "14rem 20rem,", margin: "1rem", border: "3rem", pointer: "cursor",marginLeft: "12rem"}} />
      </Row>
    </form>
    </HeroComponent>
    </> 
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Formpurchase/>);

export default Formpurchase