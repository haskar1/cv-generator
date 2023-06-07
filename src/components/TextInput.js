import { useState } from "react";

function TextInput({ 
    type, 
    label, 
    name, 
    category, 
    cv, 
    setCV,
    isTextarea
}) {
    const [value, setValue] = useState('');
    let className = value && 'filled';

    if (type === "date") {
        className = 'filled';
    }

    function handleChange(e) {
        setValue(e.target.value);
        setCV({
            ...cv,
            [category]: {
                ...cv[category],
                [name]: e.target.value
            }
        })
    }

    return (
        <div className="input-container">
            {isTextarea 
                ? <textarea value={value} name={name} category={category} onChange={handleChange}></textarea>
                : <input type={type} value={value} name={name} category={category} onChange={handleChange} />
            }
            
            <label className={className}>
                {label}
            </label>
        </div>
    );
}

export default TextInput;