import classes from "./App.module.css";

import HomePage from "./Components/HomePage";
import BookingPage from "./Components/BookingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={classes.app}>
      <Router>
        <Routes>
           <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
