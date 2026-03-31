import { Row, Col } from 'react-bootstrap'

function QuestionSection(props) {
  return (
    <Row className="align-items-center">
      <Col xs={6}>
        <strong>Question #1:</strong> {props.question.text}
      </Col>
      <Col xs={6} className="text-end">
        Asked by{' '}
        <span className="badge rounded-pill text-bg-secondary">
          {props.question.author}
        </span>
      </Col>
    </Row>
  )
}

export default QuestionSection