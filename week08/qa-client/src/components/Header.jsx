import { Navbar, Container, Button } from "react-bootstrap"
import { useContext } from "react"

import UserContext from "../contexts/UserContext"
import { Link } from 'react-router'
 
function Header (props){

  const user = useContext(UserContext)

return(

    <Navbar >
        <Container fluid>
          <h1 style={{color: 'white'}} ><Link to='/home'>HeapOverrun</Link></h1>
          <p>{user.name || <LoginButton doLogin={props.doLogin}/>}</p>
        </Container>
      </Navbar>)
}

function LoginButton(props) {
  return <Button onClick={()=>props.doLogin()}>Log In</Button>
}


export default Header