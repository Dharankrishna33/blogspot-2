import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <header>
        <h1>My Blog</h1>
        <nav className={showMenu ? 'show-menu' : ''}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button onClick={toggleMenu}>Menu</button>
      </header>
      <main>
        <article>
          <header>
            <h2>Post Title</h2>
            <p>Posted on January 1, 2023</p>
          </header>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non orci at magna sodales pharetra eu eget magna. Fusce ullamcorper libero nec ante malesuada, vel efficitur ipsum suscipit. Proin viverra velit purus, a luctus sapien tincidunt vel. Vestibulum in maximus est. Mauris tincidunt, ex vel venenatis euismod, neque magna faucibus nisl, vitae malesuada nunc mi eu risus.</p>
          <p>Nunc ullamcorper tellus vel risus hendrerit, eu feugiat tellus molestie. Donec non turpis vel lacus malesuada ultrices. Maecenas finibus, eros sit amet fermentum elementum, elit elit fringilla lorem, id efficitur ex justo ut ipsum. Donec a turpis arcu.</p>
        </article>
      </main>
      <footer>
        <p>Copyright © My Blog</p>
      </footer>
    </div>
  );
}

export default App;
