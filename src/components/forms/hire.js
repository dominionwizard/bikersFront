import { useState } from 'react';
import axios from 'axios'



function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [phone, setPhone] = useState("");
    const [nin, setNin] = useState("");
    // const [nextOfKin, setNextOfKin] = useState("");
    const [gname, setGname] = useState("");
    const [gaddress, setGaddress] = useState("");
    const [gnin, setGnin] = useState("");
  



    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await axios.post(
        'https://riders-m03v.onrender.com/auth/hire', {
            method: "post",
            body: {firstname:firstName,lastname: lastName, email, city, state, phone, nin, gname, gaddress, gnin },
            headers: {
                // 'Content-Type': 'text/plain'
                'Content-Type': 'application/json'
            }

        })
        if(result){
            alert("We have received your request, we will contact you shortly")
        }
        
        // .then((response)=>{
        //     console.log(response)
        //     alert("We have received your request, we will contact you shortly")
        // }).catch((error)=>{
        //     console.log(error)
        //     alert("Sorry, server error")
        // })

        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setFirstName("");
            setlastName("");
            setEmail("");
            setCity("");
            setState("");
            setPhone("");
            setNin("");
            setGname("");
            setGaddress("");
            setGnin("")
        }
    }
  }

export default App
