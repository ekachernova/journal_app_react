import "./EntryForm.css";
import "./"
export default function EntryForm () {
    return (
        <>
        <h2>New Entry</h2>
        <form>
            <label forHtml = "entry__input">
                Motto
            </label>
            <input type = "text" id = "entry__input" name = "entry__input">

            </input>
        </form>
        
        </>
    )
}