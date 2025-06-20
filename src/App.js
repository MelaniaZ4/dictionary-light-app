import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App 🔎</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a href="https://github.com/MelaniaZ4/dictionary-react-app.git">Open-source code</a> by Melanie Constable
        </footer>
      </div>
    </div>
  );
}

export default App;
