import Modal from "./components/modal/modal"
import gato from "./images/mail-love.gif"

//import Carousel from "./components/carousel/carousel"
import './App.css';
import React, {useState} from "react";

function App() {

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="App">
      <React.Fragment>
      <span className="ola"> OLÁ MI </span>
      <span className="amor"> AMOR S2 </span>
      </React.Fragment>
      <button className="butaoCarta" onClick={toggleModal}>open</button>
      <div>
      {modal && <Modal open={modal} onClose={toggleModal} />}
      </div>
    </div>
  );
}

export default App;
