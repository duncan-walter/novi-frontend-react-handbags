import './App.css'

function App() {
  function logButtonText(e) {
    console.log(e.target.textContent);
  }

  return (<>
    <h1>Handbags & Purses</h1>
    <nav>
      <button onClick={logButtonText}>to the collection</button>
      <button onClick={logButtonText}>shop all bags</button>
      <button onClick={logButtonText} disabled={true}>pre-order</button>
    </nav>
  </>)
}

export default App