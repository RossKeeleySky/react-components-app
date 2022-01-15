import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="header__title">"I'm going to make them an app they can't refuse"</h1>
        <p className="header__sub-title">- the Appfather</p>
      </div>
      <input type="range" id="theme-color-slider" className="theme-color-slider" />
      <div className="header-change-theme">
        <div className="header-change-theme__logo">
          <h2>logo</h2>
        </div>
        <div className="header-change-theme__title">
          <h1>header</h1>
        </div>
        <ul className="header-change-theme__nav-list">
          <li className="nav-list__list-item">nav item 1</li>
          <li className="nav-list__list-item">nav item 2</li>
          <li className="nav-list__list-item">nav item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
