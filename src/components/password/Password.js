import "./password.css"
import { useState } from "react"

const Password = ({ setLoggedIn }) => {
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    if (password === "ViGifterOss") setLoggedIn(true)
  }

  return (
    <form className="password-page">
      <h1>Passord:</h1>
      <input
        type="password"
        placeholder="passord"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        onClick={handleSubmit}
        value="Gå til side"
        className="password-btn"
        type="submit"
      />
    </form>
  )
}

export default Password
