import Header from "./header.jsx";
import Nav from "./Nav.jsx";
import Footer from "./footer.jsx";
import Page from "./page.jsx";
import { useLocation } from "react-router-dom";

function App() {
  const openPage = useLocation().pathname;


  return (
    <div>
      <Header>
        <Nav openPage={openPage} />
      </Header>
      <main>
        <Page openPage={openPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App
