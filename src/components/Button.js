export default function Button({ value, category, onButtonClick }) {
    return (
        <button onClick={(e) => onButtonClick(e, category)}>{value}</button>
    )
}