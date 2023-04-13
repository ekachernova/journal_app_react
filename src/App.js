import './App.css';
import { Header } from './components/Header/Header';
import { EntryForm } from './components/EntryForm/EntryForm';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Header/>
      <EntryForm/>
      <Button/>  
    </div>
    )
}

export default App;
