import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('')

    const handleUpclick = () => {
        if(text.split(" ").filter(x => x).length !== 0 ){
            if(text === text.toUpperCase()){
                props.showAlert("No changes made!", "warning")
            }
            else{
                let newText = text.toUpperCase()
                setText(newText)
                props.showAlert("Converted to Uppercase!", "success")
            }
        }
        else{
            props.showAlert("Textbox is empty can't covert", "danger")
        }
    }

    const handleLowclick = () => {
        if(text.split(" ").filter(x => x).length !== 0 ){
            if(text === text.toLowerCase()){
                props.showAlert("No changes made!", "warning")
            }
            else{
                let newText = text.toLowerCase()
                setText(newText)
                props.showAlert("Converted to Lowercase!", "success")
            }
        }
        else{
            props.showAlert("Textbox is empty can't covert", "danger")
        }
    }

    const handleCapitalizeclick = () => {
        if(text.split(" ").filter(x => x).length === 0){
            props.showAlert("Textbox is empty can't covert", "danger")
        }
        else{
            setText(text.toLowerCase().replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase()))
            props.showAlert("Converted to Capitalize!", "success")
        }
    }

    const handleClearclick = () => {
        setText("")
        props.showAlert("Cleared!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Clared extra spaces!", "success")
    }

    const handleOnchnage = (event) => {
        setText(event.target.value)
    }


    
    return (
        <>
            <div className="container" style={{color : props.mode.color === 'dark' ? 'white' : '#2a2b2c'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchnage} style={{backgroundColor : props.mode.color === 'dark' ? '#2a2b2c' : 'white', color : props.mode.color === 'dark' ? 'white' : '#2a2b2c'}} id="myBox" rows="8"></textarea>
                </div>
                {/* <button className="btn btn-primary mx-1 btn-sm" style={{maxWidth : '25%', whiteSpace : "normal", textAlign : 'center' }} onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1 btn-sm" style={{maxWidth : '25%', whiteSpace : "normal", textAlign : 'center' }} onClick={handleLowclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1 btn-sm" style={{maxWidth : '25%', whiteSpace : "normal", textAlign : 'center' }} onClick={handleClearclick}>Clear</button>
                <button className="btn btn-primary mx-1 my-1 btn-sm" style={{maxWidth : '25%', whiteSpace : "normal", textAlign : 'center' }} onClick={handleExtraSpaces}>Clear extra spaces</button> */}
                <div className="dropdown">
                    <button className={`btn btn-${props.mode === '' || props.mode.color === 'light' ? 'light' : 'dark'} dropdown-toggle mx-2`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Convert to
                    </button>
                    <ul className={`dropdown-menu dropdown-menu-${props.mode === '' || props.mode.color === 'light' ? 'light' : 'dark'}`} aria-labelledby="dropdownMenuButton1">
                        <li type="button" className="dropdown-item" onClick={handleUpclick}>Uppercase</li>
                        <li type="button" className="dropdown-item" onClick={handleLowclick}>Lowercase</li>
                        <li type="button" className="dropdown-item" onClick={handleCapitalizeclick}>Capitalize</li>
                        <li type="button" className="dropdown-item" onClick={handleClearclick}>Clear</li>
                        <li type="button" className="dropdown-item" onClick={handleExtraSpaces}>Clear extra spaces</li>
                    </ul>
                </div>
            </div>
            <div className="container my-3" style={{color : props.mode.color === 'dark' ? 'white' : '#2a2b2c'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter(x => x).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter(x => x).length}Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview here"}</p>
            </div>
        </>
    )
}
