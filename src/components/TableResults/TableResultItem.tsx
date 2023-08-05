import { setUserID, setUserName } from "../../store/appSlice"
import { useAppDispatch } from "../../store/hooks"
import { QuestiontType } from "../../types"

interface ITableResultItem {
  el: QuestiontType
}

const TableResultItem: React.FC<ITableResultItem> = ({ el }) => {
  const dispatch = useAppDispatch()

  const setUserIDForQuestion = (e: any) => {
    e.preventDefault()
    dispatch(setUserID(el.owner.user_id))
    dispatch(setUserName(el.owner.display_name))
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
          <a href="/">{el.answer_count}</a>
        </li>
      </ul>
      <div className="question_item-line">
        <small>Tags:</small><br />
        {el.tags.map((tag, index) => <a href="/" className="badge text-bg-warning me-2" key={index}>{tag}</a>)}
      </div>
    </div>
  )
}

export default TableResultItem
