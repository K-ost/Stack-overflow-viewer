import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AnswerType } from "../types"
import Answer from "../components/Answer/Answer"

const filter = '&filter=!95kkh65WFZ)RhgpIx)CICUjWUcI0zc7mF4ftHacsxx(xPknT_pRy5XARQUG5ggUBvh_srs1r7gDGqbczuGeWudNAPXDg9G6x)ATpD'

const InfoPage: React.FC = () => {
  const { id } = useParams()
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [answers, setAnswers] = useState<AnswerType[]>([])

  useEffect(() => {
    fetch(`https://api.stackexchange.com/2.3/questions/${id}?order=desc&sort=activity&site=stackoverflow${filter}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.items[0].title)
        setBody(data.items[0].body)
      })

    fetch(`https://api.stackexchange.com/2.3/questions/${id}/answers?order=desc&sort=activity&site=stackoverflow${filter}`)
      .then(response => response.json())
      .then(data => setAnswers(data.items))
  }, [id])

  return (
    <div className="container pt-2">
      <div className="results_container-header">
        <h1>{title}</h1>
        <Link to="/" className="btn btn-sm btn-outline-primary">Back to home page</Link>
      </div>

      <div className="mb-4" dangerouslySetInnerHTML={{__html: body}}></div>

      {answers.map(el => <Answer key={el.answer_id} el={el} />)}
    </div>
  )
}

export default InfoPage
