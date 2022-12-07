import logo from "./logo.svg";
import "./App.css";
import { Element, Title } from "./Element";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const name = "Hello world 2";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7]);
  const navigate = useNavigate();
  /**
   * - events
   *  - delete item
   *  - push new item
   * - state
   * - useEffect
   */

  useEffect(() => {
    setNumbers(numbers.map((i) => i * 2));
  }, [numbers.length]);

  // useEffect(() => {
  //   setNumbers(numbers.map(i => i * 2))
  // },[]);

  const handleClick = () => {
    alert("clicked");
  };

  const handleItemClicked = () => {
    alert("handleItemClicked");
  };

  const deleteItemList = (item) => {
    const list = numbers.filter((i) => {
      return i !== item;
    });

    setNumbers(list);
    console.log(list);
  };

  const handleShowItem = (item) => {
    alert(item);
  };

  const goToPage1 = () => {
    navigate({
      pathname: 'page-1',
      search:'search=react&lang=en'
    });
  }

  return (
    <div className="App">
      <Link to="/">Homepage</Link> <br />
      <Link to="page-1">Page 1</Link> <br />
      <Link to="page-2">Page 2</Link> <br />
      <Link to="page-5">Example</Link> <br />

      <button type="button" onClick={goToPage1}>Go to Page 1</button>
      <h1>{name}</h1>
      <ul>
        {numbers.map((i) => {
          return (
            <Element
              key={i}
              item={i}
              itemClicked={handleItemClicked}
              deleteItem={deleteItemList}
              showItem={handleShowItem}
            />
          );
        })}
      </ul>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      {/* <Title />
        <Element /> */}
    </div>
  );
}

export default App;
