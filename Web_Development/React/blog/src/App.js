import './App.css';

function App() {
  const title = 'Welcome to my blog';
  const likes = 50;
  const google = "https://www.google.ca"

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}</p>
        <p>{Math.random()}</p>
        <a href={google}>Google site</a>
      </div>
    </div>
  );
}

export default App;
