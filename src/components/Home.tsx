import { useNavigate } from "react-router"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Home page</h1>
      <div className="wrapper">
        <button onClick={() => navigate('/about')}>Go to About</button>
      </div>
    </div>
  )
}

export default Home