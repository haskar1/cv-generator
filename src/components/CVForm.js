import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

export default function CVForm({ cv, setCV }) {
    return (
        <div>
            <Personal cv={cv} setCV={setCV} />
            <Experience />
            <Education />
        </div>
    )
}
