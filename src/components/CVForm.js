import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

export default function CVForm({ onItemChange, cv }) {
    return (
        <div>
            <Personal onItemChange={onItemChange} cv={cv} />
            <Experience onItemChange={onItemChange} cv={cv} />
            <Education onItemChange={onItemChange} cv={cv} />
        </div>
    )
}
