import "./styles.css";
import { MoviePlayer } from "./components/MoviePlayer";
import { FileList } from "./components/FileList";

export default function App() {
  return (
    <div className="App">
      <div className="header">見出し</div>
      <div className="bodyContent">
        <FileList />
        {/* <div className="palyer">palyer</div> */}
        <MoviePlayer />
      </div>
    </div>
  );
}
