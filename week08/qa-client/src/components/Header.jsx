import { Navbar, Container, Button } from "react-bootstrap"
import { useContext } from "react"

import UserContext from "../contexts/UserContext"

function Header (props){

  const user = useContext(UserContext)

return(

    <Navbar bg="primary">
        <Container fluid>
          <h1 style={{color: 'white'}} >HeapOverrun </h1>
          <p>{user.name || <LoginButton doLogin={props.doLogin}/>}</p>
        </Container>
      </Navbar>)
}

function LoginButton(props) {
  return <Button onClick={()=>props.doLogin()}>Log In</Button>
}


export default Header