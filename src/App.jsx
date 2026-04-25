import { useState } from "react"

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = `!@#$%^&*()-_=+[]{}|;:'\\",.<>?/~`;

function App() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [spec, setSpec] = useState("");
  const [exp, setExp] = useState("");
  const [desc, setDesc] = useState("");
  const [usernameError, setUsernameError] = useState({ text: "", valid: null });
  const [passwordError, setPasswordError] = useState({ text: "", valid: null });
  const [descError, setDescError] = useState({ text: "", valid: null });

  const isUsernameValid = (name) => {

    const nameArr = [...name];

    const checkNumSym = nameArr.some(char => numbers.includes(char) || symbols.includes(char))

    if (checkNumSym) {
      setUsernameError({ text: "Lo username non può contenere simboli o numeri", valid: false })
      return false
    }

    if (nameArr.length < 6) {
      setUsernameError({ text: "Username troppo corto, almeno 6 caratteri", valid: false })
      return false
    }

    setUsernameError({ text: "Username valido", valid: true })
    return true

  }

  const isPasswordValid = (password) => {

    const pswArr = [...password];

    const checkForNum = pswArr.some(char => numbers.includes(char))
    const checkForSym = pswArr.some(char => symbols.includes(char))
    const checkForChar = pswArr.some(char => letters.includes(char))

    if (!checkForNum || !checkForSym || !checkForChar) {
      setPasswordError({ text: "La password deve contenere 1 lettera, 1 numero e 1 simbolo", valid: false })
      return false
    }

    setPasswordError({ text: "Password Conforme", valid: true })
    return true
  }

  const isDescriptionValid = (description) => {

    const noSpaceDesc = description.trim();

    if (noSpaceDesc.length < 100) {
      setDescError({ text: "Testo troppo corto", valid: false })
      return false

    } else if (noSpaceDesc.length > 1000) {
      setDescError({ text: "Testo oltre il limite masssimo", valid: false })
      return false
    }

    setDescError({ text: "Descrizione conforme", valid: true })
    return true
  }

  function handleSubmit(e) {
    e.preventDefault()

    /*     if (!isUsernameValid(username) || !isPasswordValid(password) || !isDescriptionValid(desc)) {
          return
        } */

    if (!name || !username || !password || !spec || !exp) {
      alert("Compila tutti i campi!")
      return
    }

    if (Number(exp) <= 0) {
      alert("Gli anni di esperienza devono essere un numero positivo!")
      return
    }

    console.log({ name, username, password, spec, experienceYears: Number(exp), desc })
  }

  return (
    <>
      <h1 className="title">WEB DEVELOPER SIGN UP</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input className="field" type="text" placeholder="Nome" required value={name} onChange={(e) => { setName(e.target.value) }} />

          {username ? <label style={{ color: usernameError.valid ? "green" : "red" }}>
            {usernameError.text}
          </label> : null}
          <input className="field" type="text" placeholder="Username" required value={username} onChange={(e) => { setUsername(e.target.value); isUsernameValid(e.target.value) }} />

          {password ? <label style={{ color: passwordError.valid ? "green" : "red" }}>
            {passwordError.text}
          </label> : null}
          <input className="field" type="password" placeholder="Password" required value={password} onChange={(e) => { setPassword(e.target.value); isPasswordValid(e.target.value) }} />

          <select name="spec" id="spec" className="field" required value={spec} onChange={(e) => { setSpec(e.target.value) }}>
            <option value="" disabled>- Seleziona Specializzazione -</option>
            <option value="full-stack">Full Stack</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>

          <input className="field" type="number" min={1} placeholder="Anni di Esperienza" required value={exp} onChange={(e) => { setExp(e.target.value) }} />

          {desc ? <label style={{ color: descError.valid ? "green" : "red" }}>
            {descError.text}
          </label> : null}
          <textarea className="field" name="feedback" rows="5" cols="40" placeholder="Descrizione" required value={desc} onChange={(e) => { setDesc(e.target.value); isDescriptionValid(e.target.value) }} />

          <button type="submit">Invia</button>


        </form>
      </div>

    </>
  )
}

export default App

