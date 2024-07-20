import "./App.css";
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input !== "") {
      setItems(() => [...items, input]);
      setInput("");
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, itemIndex) => itemIndex !== index));
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div className="p-4 rounded container">
        <h1 className="mainTitle text-center">Wishlist</h1>
        <input
          className="wishItem mb-3"
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Do you want something ?"
        />
        <button className="wishItemButton btn mb-3" onClick={addItem}></button>
        <ul className= 'listOfWishes list-group'>
          {items.map((item, index) => (
            <li key={index} className='list-group-item d-flex justify-content-between align-items-center listItem'>
              <span>{index + 1}: {item}</span>
              <button onClick={() => deleteItem(index)} className='btn wishItemDeleteButton'></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
