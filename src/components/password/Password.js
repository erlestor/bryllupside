import "./password.css"
import { useState } from "react"

const Password = ({ setLoggedIn }) => {
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    if (password === "ViGifterOss") setLoggedIn(true)
  }

  return (
    <div className="password-page">
      <h1>Passord:</h1>
      <input
        type="password"
        placeholder="passord"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        text="Gå til side"
        className="password-btn"
      >
        Gå til siden
      </button>
    </div>
  )
}

export default Password
