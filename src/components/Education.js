import TextInput from "./TextInput.js";

export default function Education({ onItemChange, cv }) {
    return (
        <div>
            <form>
                <h2>Education</h2>
                <TextInput type="text" label="University" name="university" category="education" onItemChange={onItemChange} cv={cv} />
                <TextInput type="text" label="Degree" name="degree" category="education" onItemChange={onItemChange} cv={cv} />
                <TextInput type="text" label="Subject" name="subject" category="education" onItemChange={onItemChange} cv={cv} />
                <TextInput type="text" label="Location" name="location" category="education" onItemChange={onItemChange} cv={cv} />
                <TextInput type="date" label="From" name="fromDate" category="education" onItemChange={onItemChange} cv={cv} />
                <TextInput type="date" label="To" name="toDate" category="education" onItemChange={onItemChange} cv={cv} />
            </form>
        </div>
    )
}