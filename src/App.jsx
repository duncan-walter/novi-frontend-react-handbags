import './App.css'
import Button from "./components/Button.jsx";

function App() {
  function logButtonText(e) {
    console.log(e.target.textContent);
  }

  return (<>
    <h1>Handbags & Purses</h1>
    <nav>
      <Button buttonText="to the collection" action={logButtonText} />
      <Button buttonText="shop all bags" action={logButtonText} />
      <Button buttonText="pre-order" action={logButtonText} isDisabled={true} />
    </nav>
  </>)
}

export default App