import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.js'

function App() {
  return (
    <div>
      <h1>My Tools</h1>
     { /*Add data into the react component */}
      <Todo text='Learn React'/>
      <Todo text='Explore React' />
      <Todo text='Learn full course of React' />


    </div>


  );
}

export default App;
