import React from 'react';

const api = {
  key: "bc1a4bb5afd72e257b1c0b03da202201",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className = "search-box">
          <input 
          type = "text"
          className="search-bar"
          placeholder="Search..."
          ></input>
        </div>
      </main>
    </div>
  );
}

export default App;
