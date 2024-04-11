import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Category from "./Category";
import Categories from "./Categories";
import Register from "./Register";
import Session from "./Session";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home title={"Welcome to Red30 Tech"} />}
        ></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h3>Select a Category from above</h3>} />
        </Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="confirmed" element={<Confirmation />}></Route>
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        ></Route>
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
