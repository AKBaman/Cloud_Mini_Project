import './App.css';

function App() {
  return (
    <div className="App">
     <h2>Welcome to my Video Streaming Site</h2>
     <video width="700px" height="500px" controls>
        <source src="https://d38swtlqjc817y.cloudfront.net/Gojo_Edit.mp4" type="video/mp4"/>
     </video>
    </div>
  );
}

export default App;
