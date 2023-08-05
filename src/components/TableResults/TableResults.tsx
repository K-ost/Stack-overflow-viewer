import { QuestiontType } from "../../types"
import TableResultItem from "./TableResultItem"

interface ITableResults {
  list: QuestiontType[]
  notfound: boolean
}

const TableResults: React.FC<ITableResults> = ({ list, notfound }) => {
  return (
    <div>
      {list.map(el => <TableResultItem key={el.question_id} el={el} />)}
      {!notfound && <div className="alert alert-warning">Nothing results found for your request.</div>}
    </div>
  )
}

export default TableResults
