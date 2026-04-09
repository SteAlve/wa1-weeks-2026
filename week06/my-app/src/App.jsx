import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import QuestionSection from './components/QuestionSection.jsx'
import AnswaresSection from './components/AnswaresSection.jsx'

function App() {
  const [question, setQuestion] = useState({
    text: 'Qual è il tuo linguaggio preferito?',
    author: 'Mario Rossi'
  })

  const [answares, setAnswares] = useState([
    {
      id: 1,
      date: '28/02/2025',
      text: 'Yes',
      author: 'stefano.zeta@email.it',
      score: -10
    },
    {
      id: 2,
      date: '29/02/2025',
      text: 'Not in a million year',
      author: 'guido.vanrossum@python.org',
      score: 5
    },
    {
      id: 3,
      date: '02/03/2025',
      text: 'Both have their pros and cons',
      author: 'alessio.gi@email.it',
      score: 0
    }
  ])

  return (
    <>
      <Header />
      <QuestionSection question={question} />
      <AnswaresSection answares={answares} />
      <Footer />
    </>
  )
}

export default App
