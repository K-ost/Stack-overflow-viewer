import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const InfoPage: React.FC = () => {
  const { id } = useParams()
  const [title, setTitle] = useState<string>('')
  const [answers, setAnswers] = useState<any>([])

  useEffect(() => {
    fetch(`https://api.stackexchange.com/2.3/questions/${id}?order=desc&sort=activity&site=stackoverflow`)
      .then(response => response.json())
      .then(data => setTitle(data.items[0].title))

    fetch(`https://api.stackexchange.com/2.3/questions/${id}/answers?order=desc&sort=activity&site=stackoverflow`)
      .then(response => response.json())
      .then(data => setAnswers(data.items))
  }, [id])

  return (
    <div className="container pt-2">
      <div className="results_container-header">
        <h1>{title}</h1>
        <Link to="/" className="btn btn-sm btn-outline-primary">Back to home page</Link>
      </div>

      <pre>{JSON.stringify(answers, null, 2)}</pre>
    </div>
  )
}

export default InfoPage
