export default function Button({ value, category, id, onButtonClick }) {
    return (
        <button onClick={(e) => onButtonClick(e, category, id)}>{value}</button>
    )
}