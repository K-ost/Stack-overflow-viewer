import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import TableResults from "../components/TableResults/TableResults"
import { QuestiontType } from "../types"
import Panel from "../components/Panel/Panel"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { resetState, setSearch } from "../store/appSlice"

const Results: React.FC = () => {
  const search = useAppSelector(state => state.app.search)
  const userID = useAppSelector(state => state.app.userID)
  const tag = useAppSelector(state => state.app.tag)
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const [title, setTitle] = useState<string | null>(search)
  const [items, setItems] = useState<QuestiontType[]>([])
  const [itemsView, setItemsView] = useState<QuestiontType[]>([])
  const [itemsTag, setItemsTag] = useState<QuestiontType[]>([])
  const [notfound, setNotfound] = useState<boolean>(true)


  useEffect(() => {
    if (search.length) {
      setSearchParams({'s': search})
    }
  }, [search, setSearchParams])


  useEffect(() => {
    if ( searchParams.has('s') ) {
      setTitle(searchParams.get('s'))
      dispatch(setSearch(searchParams.get('s')))
      
      // Getting data
      fetch(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${searchParams.get('s')}&site=stackoverflow`)
        .then(response => response.json())
        .then(data => {
          if (data.has_more) {
            setNotfound(data.has_more)
            setItems(data.items)
          }
        })
    }
    return () => {
      dispatch(resetState())
    }
  }, [dispatch, searchParams])


  useEffect(() => {
    if (userID) {
      fetch(`https://api.stackexchange.com/2.3/users/${userID}/questions?order=desc&sort=activity&site=stackoverflow`)
        .then(response => response.json())
        .then(data => {
          setItemsView(data.items)
        })
    }

    if (tag.length) {
      fetch(`https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&tagged=${tag}&site=stackoverflow`)
        .then(response => response.json())
        .then(data => setItemsTag(data.items))
    }
  }, [tag, userID])


  return (
    <div className="results_container">
      <div className="results_container-header">
        <h1>Results of "{title}"</h1>
        <Link to="/" className="btn btn-sm btn-outline-primary">Back to home page</Link>
      </div>
      <div className="results_container-main">
        <Panel title="Search results">
          <TableResults list={items!} notfound={notfound} />
        </Panel>
        <Panel title="Quick view panel">
          <TableResults list={itemsView!} notfound={true} />
          <TableResults list={itemsTag!} notfound={true} />
        </Panel>
      </div>
    </div>
  )
}

export default Results
