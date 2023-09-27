import styled from "styled-components"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import ModalComponent from "../../Modal/Modal";


const HeroComponent = styled.header `
padding: 5rem 0;
height: 80vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-image :url("https://th.bing.com/th/id/OIP.tIWYHp2UToqlqifSs6zeqAAAAA?pid=ImgDet&rs=1");
`;

const HeaderContainer = styled.div`
background-color: rgb(5, 148, 112);
padding: 3rem;
color: gold;
width: 30rem

`;
const Header = styled.h1`
font-size: 4rem
`

const SubHeading = styled.h3`
margin: 1rem 0;
font-weight: 400

`
const Courier = (isSignupFlow) => {
    return(
        <HeroComponent>
            <Container>
                <HeaderContainer>
                    <Header>
                       
                    </Header>
                    <SubHeading>
                        <ModalComponent style={{backgroundcolor: "danger"}} text="Signup" isSignupFlow={true} />
                       
                        <ModalComponent text="Login" isSignupFlow ={false}/>
                       
                       
                        LETS HELP YOU DELIVER YOUR GOODS!
                    </SubHeading>
                   <Link to="password"><Button style={{backgroundColor: "red", color: "white", marginLeft: "6rem"}}>Forgot Password</Button></Link> 
                </HeaderContainer>
                {/* <Link to="signinsignup"><Button variant="danger" style={{marginLeft: "1rem"}}>Courier Service</Button></Link> */}
            </Container>
        </HeroComponent>
    ) 
};

export default Courier;