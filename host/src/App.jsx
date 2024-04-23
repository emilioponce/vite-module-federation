import "./App.css";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SideBar from "./SideBar.jsx";
import Content from "./Content.jsx";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <SideBar />
      <Footer />
    </div>
  );
};

export default App;
