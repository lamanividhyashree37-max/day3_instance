import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>DevOps Deployment 🚀</h1>

      <p>My React application is running on AWS EC2.</p>

      <div className="cards">
        <div className="card">
          <h2>React</h2>
          <p>Frontend</p>
        </div>
        <div className="card">
          <h2>Docker</h2>
          <p>Container</p>
        </div>

        <div className="card">
          <h2>AWS EC2</h2>
          <p>Server</p>
        </div>
      </div>

      <h3>Deployment Successful! ✅</h3>
    </div>
  );
}

export default App;