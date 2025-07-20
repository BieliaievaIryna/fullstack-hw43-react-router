import { useNavigate } from "react-router"

const About = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>About page</h1>
      <div className="wrapper">
        <button onClick={() => navigate('/contact')}>Go to Contact</button>
      </div>
    </div>
  )
}

export default About