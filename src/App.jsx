import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modellist from './components/Modellist';
import Trendings from './components/Trendings';
import Modeldetails from './components/Modeldetails';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { auth } from './firebase';

function App() {
  const [modelsData, setModelsData] = useState([]);
  const [userName, setUserName] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setIsUserLoggedIn(true);
      } else {
        setUserName("");
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  useEffect(() => {
    fetchModelsData();
  }, []);

  useEffect(() => {
    const loadStartTime = performance.now();
    window.addEventListener('load', () => {
      const loadEndTime = performance.now();
      const pageLoadTime = loadEndTime - loadStartTime;
      console.log('Page load time:', pageLoadTime, 'ms');
    });
  }, []);
  
  const fetchModelsData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const transformedData = data.map(item => ({
        id: item.id,
        name: item.title,
        description: item.body,
      }));
      setModelsData(transformedData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <Router>
      <div>
        <Navbar name={userName} />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home name={userName} />} />
            <Route exact path='/trendings' element={<Trendings modelsData={modelsData} />} />
            <Route exact path='/modellist' element={<Modellist modelsData={modelsData} setModelsData={setModelsData} isUserLoggedIn={isUserLoggedIn} />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/modeldetails/:id' element={<Modeldetails modelsData={modelsData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;