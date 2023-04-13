import "../EntryForm/EntryForm.css";

export const EntryForm = () => {
    return (
        <div className ="EntryForm">
            <p className = "EntryTitel">NEW ENTRY</p>
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
    )
}