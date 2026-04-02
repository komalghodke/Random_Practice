import React, { useState, Component } from "react";

export default function WptPractice() {
  return (
    <div>
      <h1>Practice</h1>

      {/* Q1 */}
      <pre>
{`Q1. HTML + JavaScript
Create a form with email + password.
Validate: email must contain @, password length >= 6.
Show "Valid" or "Invalid" in <p>.`}
      </pre>
      <EmailPasswordForm />

      {/* Q2 */}
      <pre>
{`Q2. jQuery (simulated in React)
Textfield + button → show text reversed in <p>.`}
      </pre>
      <ReverseString />

      {/* Q3 */}
      <pre>
{`Q3. Node.js (simulated output)
Create JSON object of product (id, name, price).
Copy using spread operator, change price, print both.`}
      </pre>
      <NodeDemo />

      {/* Q4 */}
      <pre>
{`Q4. React Functional Component
Counter with Increment/Decrement buttons using useState.`}
      </pre>
      <CounterFunctional />

      {/* Q5 */}
      <pre>
{`Q5. React Class Component
Display table of courses (title, duration).
Add delete button to remove rows.`}
      </pre>
      <ClassCourseTable />

      {/* Q6 */}
      <pre>
{`Q6. React Props Example
Parent passes student name + marks to child component.
Child displays them in <p>.`}
      </pre>
      <PropsDemo name="Komal" marks={95} />

      {/* Q7 */}
      <pre>
{`Q7. React Lifecycle Example
Class component shows current time.
Updates every second using componentDidMount + setInterval.`}
      </pre>
      <Clock />

      {/* Q8 */}
      <pre>
{`Q8. React Form Handling
Form with name + age inputs.
On submit, display entered values in <p>.`}
      </pre>
      <FormDemo />
    </div>
  );
}

/* ---------------- Q1 ---------------- */
function EmailPasswordForm() {
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const validate = () => {
    if (email.includes("@") && pass.length >= 6) {
      setMsg("Valid");
    } else {
      setMsg("Invalid");
    }
  };

  return (
    <div>
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={validate}>Check</button>
      <p>{msg}</p>
    </div>
  );
}

/* ---------------- Q2 ---------------- */
function ReverseString() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
      <button onClick={() => setResult(text.split("").reverse().join(""))}>Reverse</button>
      <p>{result}</p>
    </div>
  );
}

/* ---------------- Q3 ---------------- */
function NodeDemo() {
  const product = { id: 1, name: "Pen", price: 10 };
  const copyProduct = { ...product, price: 15 };

  return (
    <div>
      <p>Original: {JSON.stringify(product)}</p>
      <p>Copy: {JSON.stringify(copyProduct)}</p>
    </div>
  );
}

/* ---------------- Q4 ---------------- */
function CounterFunctional() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

/* ---------------- Q5 ---------------- */
class ClassCourseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        { title: "React Basics", duration: "2 months" },
        { title: "Node.js", duration: "1.5 months" },
        { title: "jQuery", duration: "1 month" },
      ],
    };
  }

  deleteRow = (index) => {
    this.setState((prev) => ({
      courses: prev.courses.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div>
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Title</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((c, i) => (
              <tr key={i}>
                <td>{c.title}</td>
                <td>{c.duration}</td>
                <td><button onClick={() => this.deleteRow(i)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

/* ---------------- Q6 ---------------- */
function PropsDemo({ name, marks }) {
  return <p>Student: {name}, Marks: {marks}</p>;
}

/* ---------------- Q7 ---------------- */
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <p>Current Time: {this.state.time}</p>;
  }
}

/* ---------------- Q8 ---------------- */
function FormDemo() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(`Name: ${name}, Age: ${age}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>{output}</p>
    </div>
  );
}
