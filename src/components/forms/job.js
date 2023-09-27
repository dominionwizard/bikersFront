import { useState } from 'react';
import axios from 'axios'



function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [state, setState] = useState("");
    const [phone, setPhone] = useState("");
    const [lisence, setLisence] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await axios.post(
        'https://riders-m03v.onrender.com/auth/jobber', {
            method: "post",
            body: {firstname:firstName,lastname: lastName,email,city,experience,state, phone, lisence },
            headers: {
                // 'Content-Type': 'text/plain'
                'Content-Type': 'application/json'
            }
        })

        if(result){
            alert("Thank you for applying, we have received your application!")
        }

        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data received");
            setFirstName("");
            setlastName("");
            setEmail("");
            setCity("");
            setState("");
            setPhone("");
            setLisence("");
        }
    }
  }

export default App
