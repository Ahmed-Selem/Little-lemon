import classes from "./App.module.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
