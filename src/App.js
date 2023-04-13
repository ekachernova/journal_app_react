import './App.css';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div  className ="EntryForm">
      <h2 className = "EntryTitel">NEW ENTRY</h2>
      <form id = "form" name ="form" type = "submit">
        <label forHtml = "motto__input">
          Motto
        </label>
        <input name= "motto__input" type = "text" id = "motto__input">
        
        </input>
        <label forHtml = "notes__input">
          Notes
        </label>
        <input name = "notes__input" type="text" id = "notes__input">
        
        </input>
      </form>
      </div>
    </div>
    )
}

export default App;
