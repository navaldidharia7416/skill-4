import './App.css';
import Navbar from './pages/Navbar';
import { useState, useEffect } from 'react'
import User from './pages/User';

function App() {
  const [userData, setusersData] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/defunkt/following").then(response => response.json()).then(
      data => {
        setusersData(data)
        console.log(userData)
      }
    )
  }, [])
  return (
    <div className="App">
      <Navbar data={userData} />
      {userData && (userData.map((users, i) => <User data={users} />)
      )}
      {userData <= 0 && <h1> Loading </h1>}
    </div>
  );
}

export default App;
