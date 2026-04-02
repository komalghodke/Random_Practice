/*
<pre>
Q3. React Functional Component:
- Shows a textfield and a button
- When clicked, adds item to ordered list in a <div>
</pre>
*/

import React, { useState } from 'react';
import ClassItemList from './ClassItemList';
import ClassStudentTable from './ClassStudentTable';
import WPTPractice from './WPTPractice';

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (text.trim() !== "") {
      setItems([...items, text]);
      setText("");
    }
  };

  return (
    <div>
      <h1>Item List (Functional Component)</h1>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>

      <div>
        <ol>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </div>
      <ClassItemList />
      <ClassStudentTable/>
      <WPTPractice/>
    </div>
  );
}