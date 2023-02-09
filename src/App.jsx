import axios from 'axios';
import { useState, useEffect} from 'react'
import './App.css'
import ResidentInfo from './components/ResidentInfo';

function App() {
  
  const [ location, setLocation] = useState({});
  const [ typeId, setTypeId ] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;

    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then(res => setLocation (res.data));
  },[]);

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
    .then(res => setLocation (res.data)); 
  }


  return (

    <div className="App">
      <div className="App-header">
        <div className="search">
          <input 
            type="text"
            value={typeId}  
            onChange={e => setTypeId(e.target.value)}
          />
          <button onClick={searchType} >Search</button>
        </div>
      </div>
      <div className="search-results">
          <div className="result-info-titlte">
            <h3>
              {location?.name}
            </h3>
          </div>
          <div className="result-info">
            <h3>
              Type: {location?.type}
            </h3>
          </div>
          <div className="result-info">
            <h3>
              Dimension: <br /> {location?.dimension}
            </h3>
          </div>
          <div className="result-info">
            <h3>
              Population:  {location?.residents?.length}
            </h3>
          </div>
      </div>
      <div className="cards">
        {location.residents?.map(resident => (
            <ResidentInfo
            url={resident}
            key={resident}
            location={location.dimension}
            />
          ))}
      </div>

    </div>
  )
}

export default App
