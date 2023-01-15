import "./App.css";
import Form from "../src/component/form";
import Header from "../src/component/Header";
import PostPage from "../src/component/PostPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/feeds" element={<PostPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
