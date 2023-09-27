
import ReactDOM from 'react-dom/client';

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
background-image :url("https://th.bing.com/th/id/OIP.tIWYHp2UToqlqifSs6zeqAAAAA?pid=ImgDet&rs=1");
`;




function Formpurchase() {
  
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [number, setNumber] = useState("");
  const [reference, setReference] = useState("");
  const [worth, setWorth] = useState("");




  const handleSubmit = (event) => {
    // refresh page
    event.preventDefault();
    axios.post('http://localhost:8080/auth/delivery',
    
    {first,last,phone,location,destination, number, reference, worth}
    ).then((response)=>{
      console.log(response)
      alert(`Hello,: ${first}  ${last}?One of our bikers will be with you shortly`);
    })

   
  //  alert(`The name you entered was: ${firstName}  ${lastName}?`);
 }


  return (

<>

 <p style={{marginLeft: "45%", color: "blue"}}>SEND US TO DELIVER YOUR ITEMS</p>
    <HeroComponent>
    <form onSubmit={handleSubmit} style={{borderRadius: "1.2rem", padding : "1rem", justify: "center", position: "relative",display: 'flex', top: "-2rem", marginLeft: "15rem"}}>
       <Row className="mb-3">
      <p><label>Enter your  first name:
        <input style={{width: "200%"}}
        placeholder ="First Name"
          type="text" 
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
      </label></p>

      <p><label>Enter your Last name:
        <input style={{width: "200%"}}
         placeholder ="Last Name"
          type="text" 
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
      </label></p>
{/* <div style={{width: "90rem", marginLeft: "-25rem", opacity: "0.1", height:"35rem"}}><ImHero /></div> */}

      <p><label>Enter your Phone:
        <input style={{width: "100%"}}
         placeholder ="Phone Number"
          type="text" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label></p>

     <p> <label>Enter your Location:
        <input style={{width: "205%"}}
         placeholder ="Your Location"
          type="text" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
 </label></p>
 <p>
<label>Enter destination of items
        <input style={{width: "85%"}}
         placeholder ="Destination"
          type="text" 
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
</label> </p>



<p><label>Enter the number of items
        <input  style={{width: "84%"}}
         placeholder ="Number of Items"
          type="number" 
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
</label></p>
        
        
        <p><label>Enter the reference code given
                <input style={{width: "77%"}}
                 placeholder ="Reference Code"
                  type="number" 
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                />
        </label></p>
      
        
        
        <p><label>Enter worth of item(s)
                <input style={{width: "90%"}}
                 placeholder ="Worth Of Items"
                  type="number" 
                  value={worth}
                  onChange={(e) => setWorth(e.target.value)}
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

export default Formpurchase