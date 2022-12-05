import logo from './logo.svg';
import './App.css';
import { Element,Title } from './Element';

const name = "Hello world 2";
const numbers = [1,2,3,4,5,6,7];

function App() {

  /**
   * - events
   *  - delete item
   *  - push new item
   * - state
   * - useEffect
   */

  const handleClick = () => {
    alert('clicked');
  }

  const handleItemClicked = () => {
    alert('handleItemClicked');
  };

  const deleteItemList = (item) => {
    const list = numbers.filter(i => {
      return i !== item;
    });

    console.log(list);
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <ul>
        {numbers.map( (i) => {
          return <Element key={i} item={i} itemClicked={handleItemClicked} deleteItem={deleteItemList} />;
        })}
      </ul>
      <button type='button' onClick={handleClick}>Click me</button>
        {/* <Title />
        <Element /> */}
        
    
    </div>
  );
}

export default App;
