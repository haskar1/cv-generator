export default function Button({ 
    value, 
    category, 
    id, 
    onButtonClick, 
    className 
}) {
    return (
        <button className={className} onClick={(e) => onButtonClick(e, category, id)}>{value}</button>
    )
}