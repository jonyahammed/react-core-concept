import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser]= useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => setUser(data))
  }, [])
  // const component = ['jisan', 'rony', 'siyam', 'ridoy'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

    <Movicounter></Movicounter>
    {
      user.map(users => <Component name={users.name} email={users.email} key={users.name}> </Component>)
    }
  
      </header>
    </div>
  );
}

function Movicounter(){
  const [count, setCount] = useState(0)
  const movie = () => setCount(count + 1);
  return (
    <div>
      <button onClick={movie}>Add Movie</button>
      <h5>Number of movies: {count} </h5>
      <MovieDesplay Movie={count + 3}></MovieDesplay>
    </div>
  )
}
function MovieDesplay(props) {
  return (
    <h3>total Miove: {props.Movie}</h3>
  )
}

function Component(props){
  const setStyle = {
    border: '4px solid green',
    margin:'12px',
    padding: '10px'
  }
  return (
    <div style={setStyle}>
      <h2>{props.name}</h2>
      <h3>{props.email}</h3>
      <p>{props.year}</p>
      
    </div>
  )
}

export default App;
