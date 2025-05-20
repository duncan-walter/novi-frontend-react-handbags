import './App.css'
import Button from './components/Button.jsx';

import Bag1Image from './assets/bag_1.png';
import Bag2Image from './assets/bag_2.png';
import Bag3Image from './assets/bag_3.png';
import Bag4Image from './assets/bag_4.png';

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
    <main>
      <article>
        <span>Best seller</span>
        <img src={Bag1Image} alt="Handy bag"/>
        <p>The handy bag</p>
        <h4>€400,-</h4>
      </article>
      <article>
        <span>Best seller</span>
        <img src={Bag2Image} alt="Stylish bag"/>
        <p>The stylish bag</p>
        <h4>€250,-</h4>
      </article>
      <article>
        <span>New collection</span>
        <img src={Bag3Image} alt="Simple bag"/>
        <p>The simple bag</p>
        <h4>€300,-</h4>
      </article>
      <article>
        <span>New collection</span>
        <img src={Bag4Image} alt="Trendy bag"/>
        <p>The trendy bag</p>
        <h4>€150,-</h4>
      </article>
    </main>
  </>)
}

export default App