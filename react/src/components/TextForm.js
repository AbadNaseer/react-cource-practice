import React, {useState}  from 'react'
export default function TextForm() {
    
    const [text, changeText]=useState("HI how are you!")
    const handleOnChange=(event)=>{
        changeText(event.target.value)
    }
    const handleOnClick=()=>{
        console.log(text);
    }
    return (
        <div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>Convert to Upper Case</button>
        </div>
    )
}
