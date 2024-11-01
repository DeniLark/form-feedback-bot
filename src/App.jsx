import { useState } from "react"
import "./App.css"

function App() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    fetch("http://localhost:8085/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message, name, phone }),
    })
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handlerSubmit}>
        <input
          className="form_input"
          type="text"
          placeholder="Enter your name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form_input"
          type="tel"
          placeholder="Enter your phone*"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="form_input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="form_input"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
