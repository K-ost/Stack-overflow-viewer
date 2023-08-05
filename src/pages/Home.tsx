import Search from "../components/Search/Search"

const Home: React.FC = () => {

  console.log()

  return (
    <div className="container">
      <h1>Home</h1>

      <Search />

      <ul>
        <li><a href="https://github.com/hiprofessional/forEach/blob/main/code/requirements.md" target="_blank" rel="noreferrer">Task</a></li>
        <li><a href="https://api.stackexchange.com/docs" target="_blank" rel="noreferrer">API</a></li>
      </ul>
      
    </div>
  )
}

export default Home
