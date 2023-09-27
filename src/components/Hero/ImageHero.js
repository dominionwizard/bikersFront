import styled from "styled-components"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'


const HeroComponent = styled.header `
padding: 5rem 0;
height: 80vh;
background-repeat: no-repeat;
background-size: cover;
background-position: auto;
background-image :url("https://th.bing.com/th/id/R.494eeef813d5c86a785afd837f7a954a?rik=YCECZ%2bYscQViWg&pid=ImgRaw&r=0");
`;

// const HeaderContainer = styled.div`
// background-color: rgb(5, 148, 112);
// padding: 3rem;
// color: gold;
// width: 32.5rem

// `;
const Header = styled.h1`
font-size: 4rem
`

const SubHeading = styled.h3`
margin: 1rem 0;
font-weight: 400

`
const ImHero = () => {
    return(

        <HeroComponent className="Container">
            <Container style={{marginLeft: "24rem", color: "white"}}>
              
                    <Header>
                        {/* Are you reliable as a trained biker? */}
                    </Header>
                    <SubHeading>
                      <marquee> Join our team of bikers today and make money</marquee>
                    
                    </SubHeading>

        
                         
                    
            </Container>
        </HeroComponent>

    ) 
};

export default ImHero