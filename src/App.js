import "./styles.css";
import { MoviePlayer } from "./components/MoviePlayer";

export default function App() {
  return (
    <div className="App">
      <div className="header">見出し</div>
      <div className="bodyContent">
        <div className="fileList">
          list
          <ul>
            <div className="list-row">
              <li>file1</li>
              <button>aa</button>
            </div>
            <div className="list-row">
              <li>file2</li>
              <button>aa</button>
            </div>
          </ul>
        </div>
        {/* <div className="palyer">palyer</div> */}
        <MoviePlayer />
      </div>
    </div>
  );
}
