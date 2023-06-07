import TextInput from "./TextInput.js";

export default function Education({ cv, setCV }) {
    return (
        <div>
            <form>
                <h2>Education</h2>
                <TextInput type="text" label="University" name="university" category="education" cv={cv} setCV={setCV} />
                <TextInput type="text" label="Degree" name="degree" category="education" cv={cv} setCV={setCV} />
                <TextInput type="text" label="Subject" name="subject" category="education" cv={cv} setCV={setCV} />
                <TextInput type="text" label="Location" name="location" category="education" cv={cv} setCV={setCV} />
                <TextInput type="date" label="From" name="fromDate" category="education" cv={cv} setCV={setCV} />
                <TextInput type="date" label="To" name="toDate" category="education" cv={cv} setCV={setCV} />
            </form>
        </div>
    )
}