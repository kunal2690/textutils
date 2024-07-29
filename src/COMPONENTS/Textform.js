import React from 'react';
import { useState } from 'react';

export default function Textform(props) {

    const handleupclick = () => {
        let mytext = text.toUpperCase();
        settext(mytext);
    }
    const handleloclick = () => {
        let mytext = text.toLowerCase();
        settext(mytext);
    }

    const handleonchange = (event) => {
        settext(event.target.value);

    }
    const [text, settext] = useState('')
    return (
        <div>


            <div className="mb-3  my-5">
                <label for="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter your text here" onChange={handleonchange} value={text} rows="8"></textarea>
            </div>
            <button type="button" onClick={handleupclick} class="btn btn-primary">Change to Upper Case</button>
            <button type="button" onClick={handleloclick} class="btn btn-primary mx-2">Change to Lower Case</button>
        </div>

    )
}

