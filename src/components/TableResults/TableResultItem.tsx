import { Link } from "react-router-dom"
import { setTag, setUser } from "../../store/appSlice"
import { useAppDispatch } from "../../store/hooks"
import { QuestiontType } from "../../types"

interface ITableResultItem {
  el: QuestiontType
}

const TableResultItem: React.FC<ITableResultItem> = ({ el }) => {
  const dispatch = useAppDispatch()

  // setUserIDForQuestion
  const setUserIDForQuestion = (e: any) => {
    e.preventDefault()
    dispatch(setUser({id: el.owner.user_id, name: el.owner.display_name}))
  }

  // setTag
  const chooseTag = (e: any, tag: string) => {
    e.preventDefault()
    dispatch(setTag(tag))
  }

  return (
    <div className="question_item">
      <div className="question_item-title">
        <a href="/">{el.title}</a>
      </div>
      <ul className="question_item-meta">
        <li>
          <small>Author:</small> &nbsp;
          <a href="/" onClick={setUserIDForQuestion}>{el.owner.display_name}</a>
        </li>
        <li>
          <small>Replies:</small> &nbsp;
          <Link to={`/info/${el.question_id}`}>{el.answer_count}</Link>
        </li>
      </ul>
      <div className="question_item-line">
        <small>Tags:</small><br />
        {el.tags.map((tag, index) => (
          <a href="/" className="badge text-bg-warning me-2" key={index} onClick={(e) => chooseTag(e, tag)}>{tag}</a>
        ))}
      </div>
    </div>
  )
}

export default TableResultItem
