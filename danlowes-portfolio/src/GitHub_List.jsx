// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  // 1. State to store the fetched repositories
  const [repos, setRepos] = useState([]);
  // 2. State to handle loading status
  const [isLoading, setIsLoading] = useState(true);
  // 3. State to handle potential errors
  const [error, setError] = useState(null);


  const githubUsername = 'danlowes1';

  // useEffect hook to perform data fetching when the component mounts
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setRepos(data); // Update the state with the fetched repositories
      } catch (err) {
        setError(err.message); // Set the error message if something goes wrong
        console.error("Failed to fetch repositories:", err);
      } finally {
        setIsLoading(false); // Set loading to false after fetching (success or failure)
      }
    };

    fetchRepos(); 
  }, []); 

  // Render logic based on loading, error, or data
  return (
    <div className="portfolio-container">
      <h1>My GitHub Portfolio</h1>

      {isLoading && <p>Loading repositories...</p>}

      {error && <p className="error-message">Error: {error}</p>}

      {!isLoading && !error && repos.length === 0 && (
        <p>No repositories found or unable to fetch.</p>
      )}

      {!isLoading && !error && repos.length > 0 && (
        <div className="repo-list">
          {repos.map(repo => (
            <div key={repo.id} className="repo-card">
              <h2><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h2>
              <p>{repo.description || 'No description provided.'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
