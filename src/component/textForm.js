import React, { useState } from "react"

export default function TextForm(props) {


    const [text, setText] = useState('Enter your Text')
    const handleclick = () => {
        // console.log('uppercase was clicked')
        let newText = text.toUpperCase();
        setText(newText)
     props.showAlert("Converted to Upper case","primary");
    }

    const handleonchange = (event) => {
        console.log('on change')
        setText(event.target.value)

    }
    const lowerclick = (event) => {
        let newlick = text.toLowerCase();
        setText(newlick)
     props.showAlert("Converted to Lower Case  case","primary");

    }


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className="my-5">{props.heading} </h1>
                <div className="my-5">
                    <textarea type="massage" className="form-control" rows='8' value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white' ,color:'white'}} />
                </div>
                <button type="submit" className="btn btn-primary my-2" onClick={lowerclick} >To lower Case</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleclick} >To Upper Case</button>
            </div>
            <div className="container " style={{ color:props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summry is here</h1>
                <p> {text.split('').length} words and {text.length}character</p>
                <p> {0.008 * text.split("").length} words and {text.length}Minutes to Read</p>
                <h2>Priview</h2>
                <p>{text}</p>
            </div>

        </>

    )
};