import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify'

function App() {

  const [people , setPeople] = useState([]);
  
  useEffect( async () => {
    async function fetchPeople(){
      const data = await API.get('peopleapi', '/people')
      console.log(data);
      setPeople(data.people);
    }
    fetchPeople();
  })

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      {
        people.map( person => (
          <div>
          name : {person.name} & age: {person.age}
          </div>
        ))
      }
    </div>
  );
}

export default App;
