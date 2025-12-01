import React from 'react';
import "./home.css"

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <p>This is the homepage created using Git branches!</p>
      
      <div className="features">
        <div className="feature-card">
          <h3>Feature 1</h3>
          <p>Learn Git step by step</p>
        </div>
        <div className="feature-card">
          <h3>Feature 2</h3>
          <p>Practice with React</p>
        </div>
        <div className="feature-card">
          <h3>Feature 3</h3>
          <p>Master GitHub workflow</p>
        </div>
      </div>
      
      {/* New section add karo */}
      <div className="git-info">
        <h2>Git Commands We Learned:</h2>
        <ul>
          <li>git stash - Temporary save</li>
          <li>git stash pop - Restore saved changes</li>
          <li>git checkout -b - New branch</li>
          <li>git merge - Branch combine</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;