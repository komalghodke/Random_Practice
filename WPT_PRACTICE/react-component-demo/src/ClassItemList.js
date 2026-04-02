/*
<pre>
Q3. Write a react class component:
- Shows a textfield and a button
- When clicked, adds item to ordered list in a <div>
Example: If user adds Eraser → list shows "1. Eraser"
</pre>
*/

import React, { Component } from 'react';

class ClassItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  addItem = () => {
    if (this.state.text.trim() !== "") {
      this.setState(prevState => ({
        items: [...prevState.items, prevState.text],
        text: ""
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>Item List (Class Component)</h1>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Enter item"
        />
        <button onClick={this.addItem}>Add</button>

        <div>
          <ol>
            {this.state.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default ClassItemList;
