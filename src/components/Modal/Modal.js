
import {Modal, Button, InputGroup, FormControl} from "react-bootstrap";
import {useState} from "react"
import axios from "axios";
import styled from "styled-components"
import {useNavigate} from "react-router-dom"

interface ModalProps{
    

    isSignupFlow:boolean
};

const ErrorMessage = styled.p`
color:red
`

const ModalComponent = ({isSignupFlow, ...props})=>{
const [show, setShow] = useState(false)
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [errorMsg, setErrorMsg] = useState("")


const handleClose = () => setShow(false)
const handleShow = () => setShow (true)
const navigate = useNavigate()

const handleClick = async()=>{
let response;

if(isSignupFlow){
    

   const signUpData = await axios.post("https://riders-m03v.onrender.com/auth/signup",{
        email,
        password
    });

    // console.log(response)
    response =signUpData
}else{

  const  loginData = await axios.post("https://riders-m03v.onrender.com/auth/login",{
            email,
            password 
    });
    response =loginData

console.log(loginData.data.errors)

};
if(response.data.errors.length > 0){
    return setErrorMsg (response.data.errors[0].msg)

}
else{
if(!isSignupFlow){

    navigate("/dashboard");
}

}

localStorage.setItem("token", response.data.token);
axios.defaults.headers.common["authorization"] = `Bearer ${response.data.token}`
}
return(

<>

<Button onClick={handleShow}>{props.text}{props.color}</Button>{' '}

<Modal show= {show} onHide={handleClose}>
    <Modal.Header>

        <Modal.Title>
            {props.text}
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

    {errorMsg && <errorMessage>{errorMsg}</errorMessage>}
        <InputGroup className="mb-3">
        <InputGroup.Text> Email  </InputGroup.Text>
        <FormControl type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        </InputGroup>
        <InputGroup className="mb-3">
        <InputGroup.Text> Password  </InputGroup.Text>
        <FormControl type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        
        </InputGroup>
    </Modal.Body>
    <Modal.Footer>
       
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleClick}>{props.text}</Button>
    </Modal.Footer>
</Modal>


</>

)

};

export default ModalComponent;