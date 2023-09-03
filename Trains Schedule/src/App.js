import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [newNumber, setNewNumber] = useState('');
  const [editNumber, setEditNumber] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addNumber = () => {
    if (newNumber !== '') {
      setNumbers([...numbers, newNumber]);
      setNewNumber('');
    }
  };

  const editNumberAtIndex = (index) => {
    setEditNumber(numbers[index]);
    setEditIndex(index);
  };

  const saveEditedNumber = () => {
    if (editIndex !== -1) {
      const updatedNumbers = [...numbers];
      updatedNumbers[editIndex] = editNumber;
      setNumbers(updatedNumbers);
      setEditNumber('');
      setEditIndex(-1);
    }
  };

  const deleteNumberAtIndex = (index) => {
    const updatedNumbers = [...numbers];
    updatedNumbers.splice(index, 1);
    setNumbers(updatedNumbers);
  };

  return (
    <div className="App">
      <h1>Number Management System</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a number"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
        <button onClick={addNumber}>Add Number</button>
      </div>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>
            {index === editIndex ? (
              <>
                <input
                  type="text"
                  value={editNumber}
                  onChange={(e) => setEditNumber(e.target.value)}
                />
                <button onClick={saveEditedNumber}>Save</button>
              </>
            ) : (
              <>
                {number}
                <button onClick={() => editNumberAtIndex(index)}>Edit</button>
                <button onClick={() => deleteNumberAtIndex(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
