import "./styles.css";
import Board from "./components/Board";
import People from "./components/People";

export default function App() {
  return (
    <div className="App">
      <h1>Guess Who!</h1>
      <Board />
    </div>
  );
}
