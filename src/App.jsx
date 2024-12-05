import Header from "./header.jsx";
import Nav from "./Nav.jsx";
import Footer from "./footer.jsx";
import Page from "./page.jsx";
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;


  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App
