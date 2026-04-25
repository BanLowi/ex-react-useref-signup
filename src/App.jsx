import { useState } from "react"

function App() {

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [spec, setSpec] = useState("")
  const [exp, setExp] = useState("")
  const [desc, setDesc] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

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
          <input className="field" type="text" placeholder="Username" required value={username} onChange={(e) => { setUsername(e.target.value) }} />
          <input className="field" type="password" placeholder="Password" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <select name="spec" id="spec" className="field" required value={spec} onChange={(e) => { setSpec(e.target.value) }}>
            <option value="" disabled>- Seleziona Specializzazione -</option>
            <option value="full-stack">Full Stack</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
          <input className="field" type="number" min={1} placeholder="Anni di Esperienza" value={exp} onChange={(e) => { setExp(e.target.value) }} required />
          <textarea className="field" name="feedback" rows="5" cols="40" placeholder="Descrizione" value={desc} onChange={(e) => { setDesc(e.target.value) }} />

          <button type="submit">Invia</button>

        </form>
      </div>

    </>
  )
}

export default App
