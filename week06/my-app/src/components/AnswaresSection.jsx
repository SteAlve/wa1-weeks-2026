import { Table, Row, Col } from 'react-bootstrap'

function AnswerRow(props) {
  return (
    <tr>
      <td>{props.answer.date}</td>
      <td>{props.answer.text}</td>
      <td>{props.answer.author}</td>
      <td>{props.answer.score}</td>
    </tr>
  )
}

function AnswaresTable(props) {
  return (
    <Table striped bordered hover className="w-auto mb-0">
      <thead className="table-light">
        <tr>
          <th>Date</th>
          <th>Text</th>
          <th>Author</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {props.answares.map((a) => (
          <AnswerRow key={a.id} answer={a} />
        ))}
      </tbody>
    </Table>
  )
}

function AnswaresSection(props) {
  return (
    <Row className="justify-content-center">
      <Col xs="auto">
        <AnswaresTable answares={props.answares} />
      </Col>
    </Row>
  )
}

export default AnswaresSection