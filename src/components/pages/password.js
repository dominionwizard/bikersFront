
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useState } from "react";

function Password() {


    const [email, setEmail] = useState("");

    
    

    const handleSubmit = (event) => {
        // not to refresh page
        event.preventDefault();
        axios.delete(`https://riders-m03v.onrender.com/auth/del/${email}`

        
        ).then((response)=>{
          console.log(response)
if(response.data == "Does not exist")
{
alert("User does not exist")

}else{


          alert(`Hello,: ${email}You can now signup`);
        }
        })
    
       
      //  alert(`The name you entered was: ${firstName}  ${lastName}?`);
     }

   
  return (
    <> <marquee>Enter your email address and click the "Reset" button</marquee>



    <Form style={{width: "40rem", marginLeft: "25rem",padding:"10rem"}}>
    <p><label>Enter your Email
                <input style={{width: "200%"}}
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
        </label></p>

        
      {/* <input type="Submit" onClick={handleSubmit} style={{width: "20%",backgroundColor:"blue", color: "white", padding: "14rem 20rem,", margin: "1rem", border: "3rem", pointer: "cursor",marginLeft: "15rem"}} /> */}
<Button type="Submit" onClick={handleSubmit} style={{width: "20%",backgroundColor:"red", color: "white", padding: "14rem 20rem,", margin: "1rem", border: "3rem", pointer: "cursor",marginLeft: "15rem"}}>Reset</Button>
    </Form>
    </>
  );
}
export default Password;

