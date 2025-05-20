import './App.css'
import Button from './components/Button.jsx';
import Product from './components/Product.jsx';

import Bag1Image from './assets/bag_1.png';
import Bag2Image from './assets/bag_2.png';
import Bag3Image from './assets/bag_3.png';
import Bag4Image from './assets/bag_4.png';

import Tile1Image from './assets/brand.png';
import Tile2Image from './assets/our_story.png';

function App() {
  function logButtonText(e) {
    console.log(e.target.textContent);
  }

  return (<>
    <h1>Handbags & Purses</h1>
    <nav>
      <Button buttonText="to the collection" action={logButtonText}/>
      <Button buttonText="shop all bags" action={logButtonText}/>
      <Button buttonText="pre-order" action={logButtonText} isDisabled={true}/>
    </nav>
    <main>
      <Product
        productName="The handy bag"
        productImage={Bag1Image}
        productImageAlt="Handy bag"
        productLabelText="Best seller"
        productPrice="400"
      />
      <Product
        productName="The stylish bag"
        productImage={Bag2Image}
        productImageAlt="Stylish bag"
        productLabelText="Best seller"
        productPrice="250"
      />
      <Product
        productName="The simple bag"
        productImage={Bag3Image}
        productImageAlt="Simple bag"
        productLabelText="New collection"
        productPrice="300"
      />
      <Product
        productName="The trendy bag"
        productImage={Bag4Image}
        productImageAlt="Trendy bag"
        productLabelText="New collection"
        productPrice="150"
      />
    </main>
    <footer>
      <section>
        <h2>THE BRAND</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur
          praesentium quia sequi similique sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur
          praesentium quia sequi similique sunt.
        </p>
      </section>
      <section>
        <img src={Tile1Image} alt="Brand"/>
      </section>
      <section>
        <img src={Tile2Image} alt="Our story"/>
      </section>
      <section>
        <h2>OUR STORY</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem illo, labore
          laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum sunt. At
          repellendus tenetur veniam!
        </p>
      </section>
    </footer>
  </>)
}

export default App