import './App.css'
import List from './components/List';
import data from "./data";
import { useState } from 'react';
function App() {
  const btnClear = () => {
        setPeople([]);
    }
    const [people, setPeople] = useState(data);
    return (
      <div className='container'>
        <h3 className='heading-1'>{people.length} Birthdays Today</h3>
          <List people = {people}/>
        <button type="button" onClick={btnClear} className="btn">Clear All</button>
      </div>
  );
}

export default App;
