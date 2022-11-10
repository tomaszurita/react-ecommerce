import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar.js';

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = "Bienvenidos!"/>
    </>
  )
}

export default App;