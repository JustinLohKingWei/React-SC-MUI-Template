import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createContext, useState } from "react";
import Modal from "./components/modals/Modals";

export const GlobalContext = createContext<any>(null);

export type globalContextTypes = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentModal: JSX.Element;
  setCurrentModal: React.Dispatch<React.SetStateAction<JSX.Element>>;
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(<Modal />);

  const globalContextValues: globalContextTypes = {
    showModal,
    setShowModal,
    currentModal,
    setCurrentModal,
  };

  return (
    <GlobalContext.Provider value={globalContextValues}>
      <BrowserRouter>
        <>
          <Header />
          <Content />
          <Footer />
        </>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
