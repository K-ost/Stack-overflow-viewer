import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../store/hooks"
import { setSearch } from "../../store/appSlice"

const Search: React.FC = () => {
  const [val, setVal] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // searchFunc
  const searchFunc = () => {
    if (val.length) {
      setVal('')
      dispatch(setSearch(val))
      navigate('/results')
    } else {
      alert('Search field should not be empty')
    }
  }

  return (
    <div className="d-flex mt-3">
      <input
        type="text"
        className="form-control me-3"
        placeholder="What are you looking for?"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
        value={val}
      />
      <button className="btn btn-outline-primary" onClick={searchFunc}>Find</button>
    </div>
  )
}

export default Search
