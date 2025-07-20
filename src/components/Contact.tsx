import { useNavigate } from "react-router"

const Contact = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Contacts page</h1>
      <div className="wrapper">
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
    </div>
  )
}

export default Contact