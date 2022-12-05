import logo from './logo.svg';
import './App.css';
import { Element,Title } from './Element';
import { useState } from 'react';

const name = "Hello world 2";

function App() {

  const [numbers,setNumbers] = useState([1,2,3,4,5,6,7]);

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

    setNumbers(list);
    console.log(list);
  }

  const handleShowItem = (item) => {
    alert(item);
    
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <ul>
        {numbers.map( (i) => {
          return <Element 
          key={i} item={i} itemClicked={handleItemClicked} deleteItem={deleteItemList}
          showItem={handleShowItem}
          
          />;
        })}
      </ul>
      <button type='button' onClick={handleClick}>Click me</button>
        {/* <Title />
        <Element /> */}
        
    
    </div>
  );
}

export default App;
