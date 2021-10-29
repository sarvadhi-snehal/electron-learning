import { Link } from "react-router-dom";
// import { ipcSender } from "./ipc";
// const ipc = require("electron").ipcRenderer;
const Home = () => {
  return (
    <div>
      <h1>hello</h1>
      <Link to="/second">Go to next page</Link>
      <button>Go to next page</button>
    </div>
  );
};

export default Home;
