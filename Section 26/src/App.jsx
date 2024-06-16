import Accordion from "./components/accordion/Accordion";
import SearchableList from "./components/searchableList/SearchableList";
import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from "./Place"
const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];
function App() {
  return (
    <main>
      <section>
        <h2>Why work with us</h2>
        <Accordion className="accordion">
          <Accordion.Item id="1" className='accordion-item'>
            <Accordion.Title id="1" className="accordion-item-title">
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content" id="1">
              <article>
                <p>You cant go wrong with us!</p>
                <p>Some other bullshit!</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id='2' className="accordion-item">
            <Accordion.Title id='2' className="accordion-item-title">
              We working with local guides
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content" id="2">
              <article>
                <p>You cant go wrong with us!</p>
                <p>Some other bullshit!</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList itemKeyFn={(item) => item.id} items={PLACES} >
          {(item) =>
            <Place item={item} />
          }
        </SearchableList>
        <SearchableList itemKeyFn={(item) => item} items={["a", "b", "c", "d"]} >
          {(item) => item}
        </SearchableList>

      </section>
    </main>
  );
}

export default App;
