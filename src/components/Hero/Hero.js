import styled from "styled-components"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'


const HeroComponent = styled.header `
padding: 5rem 0;
height: 80vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-image :url("https://i.pinimg.com/originals/51/ce/75/51ce75c2d56ef59557c0de5f73e56ca2.jpg");
`;

const HeaderContainer = styled.div`
background-color: rgb(5, 148, 112);
padding: 3rem;
color: gold;
width: 37.5rem

`;
const Header = styled.h1`
font-size: 4rem
`

const SubHeading = styled.h3`
margin: 1rem 0;
font-weight: 400

`
const Hero = () => {
    return(
        <HeroComponent>
            <Container>
                <HeaderContainer>
                    <Header>
                        Are you reliable as a trained biker?
                    </Header>
                    <SubHeading>
                        Join our team of bikers today and make money
                    </SubHeading>
                  <div style={{marginLeft: "2rem"}}> <Link to="/purchaseform"> <Button variant="info"style={{fontSize: "1rem",marginLeft: "-2rem"}}>Hire purchase</Button></Link>
                    <Link to="joboffer"><Button variant="warning" style={{fontSize: "1rem",marginLeft: "1rem"}}>Job offer</Button></Link>{''}
                    <Link to="signinsignup"><Button variant="warning" style={{marginLeft: "1rem"}}>Courier Service</Button></Link>
                    <Link to="register"><Button variant="info" style={{fontSize: "1rem",marginLeft: "1rem"}}>Contact Us</Button>{''}</Link>
</div>
                </HeaderContainer>
            </Container>
        </HeroComponent>
    ) 
};

export default Hero