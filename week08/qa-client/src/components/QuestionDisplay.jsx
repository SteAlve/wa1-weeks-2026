import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router'

function QuestionDisplay (props){
    const q = props.question;

    return (
        <Container fluid>
        <Row>
            <Col as='h1' className='text-start'>
            Question: {q.id}
            </Col>
            <Col className='text-end'>
            {q.email}
            </Col>
        </Row>
        <Row>
            <Col as ='h2' className='text-start' >{q.text}</Col>
        </Row>
        </Container>
    )
   //q.text
   //q.author
}

function QuestionsList(props) {
    return <ul>
        {props.questions.map(q => <li key={q.id}><Link to={`/answers/${q.id}`}>{q.text}</Link></li>)}
    </ul> 
}

export { QuestionDisplay, QuestionsList }