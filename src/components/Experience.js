import TextInput from "./TextInput.js";

export default function Experience({ onItemChange, cv }) {
    return (
        <div>
            <form>
                <h2>Experience</h2>
                <TextInput type="text" label="Company" name="company" category="experience" onItemChange={onItemChange} cv={cv} />
                <TextInput type="text" label="Position" name="position" category="experience" onItemChange={onItemChange} cv={cv} />
                <TextInput type="text" label="Location" name="location" category="experience" onItemChange={onItemChange} cv={cv} />
                <TextInput type="date" label="From" name="fromDate" category="experience" onItemChange={onItemChange} cv={cv} />
                <TextInput type="date" label="To" name="toDate" category="experience" onItemChange={onItemChange} cv={cv} />
                <TextInput isTextarea={true} label="Description" name="description" category="experience" onItemChange={onItemChange} cv={cv} />
            </form>
        </div>
    )
}