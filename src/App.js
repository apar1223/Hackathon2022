// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Schemes from "./component/Schemes";
// import Notification from "./component/Notification";
import PhotoGallery from "./component/PhotoGallery";
import Aboutus from "./component/Aboutus";
import Contactus from "./component/Contactus";
import Feedback from "./component/Feedback";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Chatbot from "./component/Chatbot";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div
      className="App d-flex flex-column"
      style={{
        background: "white",
        height: "100vh",
      }}
    >
      <Router>
        <Header></Header>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />

          <Route exact path="/Schemes" element={<Schemes></Schemes>} />
          <Route exact path="/Chatbot" element={<Chatbot></Chatbot>} />

          <Route
            exact
            path="/PhotoGallery"
            element={<PhotoGallery></PhotoGallery>}
          />
          <Route exact path="/Feedback" element={<Feedback></Feedback>} />
          <Route exact path="/Aboutus" element={<Aboutus></Aboutus>} />

          <Route exact path="/Contactus" element={<Contactus></Contactus>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
