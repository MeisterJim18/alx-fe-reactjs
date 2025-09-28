import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>🔍 GitHub User Search</h1>
      <p>Application is ready! 🎉</p>
      <div style={{
        background: 'lightblue', 
        padding: '20px', 
        borderRadius: '10px',
        margin: '20px'
      }}>
        <h3>What works:</h3>
        <ul>
          <li>✅ Project created</li>
          <li>✅ .env file created</li>
          <li>✅ Structure ready</li>
          <li>✅ Import statements added</li>
        </ul>
      </div>
    </div>
  )
}

export default App