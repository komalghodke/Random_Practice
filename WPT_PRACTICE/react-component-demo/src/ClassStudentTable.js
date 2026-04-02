/*
<pre>
Q3. Write a react class component:
- Displays a table of students and marks from a JSON array
- Put a delete button on every row
- If user clicks delete, that row should be removed
</pre>
*/

import React, { Component } from 'react';

class ClassStudentTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { name: "mmm", marks: 90 },
        { name: "lll", marks: 88 },
        { name: "komal", marks: 95 }
      ]
    };
  }

  deleteRow = (index) => {
    this.setState(prevState => ({
      students: prevState.students.filter((_, i) => i !== index)
    }));
  };

  render() {
    return (
      <div>
        <h1>Students Table (Class Component)</h1>
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((s, i) => (
              <tr key={i}>
                <td>{s.name}</td>
                <td>{s.marks}</td>
                <td>
                  <button onClick={() => this.deleteRow(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClassStudentTable;
