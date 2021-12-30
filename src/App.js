import './App.css';
import Adress from "./components/Profil/Adress";
import FullName from "./components/Profil/FullName";
import PhotoProfil from './components/Profil/ProfilePhoto';
function App() {
  return (
    <div className="App">
     <header className="App-header">
      <PhotoProfil/>
      <br/>
      <FullName/>
      <br/>
      <Adress/>
      </header>  
    </div>
  );
}

export default App;
