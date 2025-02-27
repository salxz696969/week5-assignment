import Header from "./components/Header"
import Main from "./components/Main"
import "./main.css"
function App() {

  return (
    <>
    <p>Main differences between HTML and JSX</p><br />
      <p>- JSX can write Javascript on directly</p>
      <p>- JSX use className instead of class</p>
      <p>- JSX has hooks such as useState, useEffect....</p>
     <p>Hello</p> 
     <Header />
     <Main />
    </>
  )
}

export default App
