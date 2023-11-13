import { Header } from "./components/header/Header";
import { Aside } from "./components/aside/Aside";
import { Main } from "./components/main/Main";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  return(
    <>

    <Header />
    <Aside />
    <Main />
    <div className="App">
    <FontAwesomeIcon icon={faEnvelope} />
    </div>
    </>
  )
}

export default App;
