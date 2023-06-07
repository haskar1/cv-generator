function TextInput({ 
    type, 
    label, 
    name, 
    category,
    isTextarea,
    onItemChange,
    cv
}) {
    const value = cv[category][name];
    let className = value ? 'filled' : "";

    if (type === "date") {
        className = 'filled';
    }

    return (
        <div className="input-container">
            {isTextarea ? (
                <textarea value={value} name={name} category={category} onChange={(e) => onItemChange(e, name, category)}></textarea>
            ) : (
                <input type={type} value={value} name={name} category={category} onChange={(e) => onItemChange(e, name, category)} />
            )}
            
            <label className={className}>{label}</label>
        </div>
    );
}

export default TextInput;