import TextInput from "./TextInput.js";

export default function Experience({ cv, setCV }) {
    return (
        <div>
            <form>
                <h2>Experience</h2>
                <TextInput type="text" label="Company" name="company" category="experience" cv={cv} setCV={setCV} />
                <TextInput type="text" label="Position" name="position" category="experience" cv={cv} setCV={setCV} />
                <TextInput type="text" label="Location" name="location" category="experience" cv={cv} setCV={setCV} />
                <TextInput type="date" label="From" name="fromDate" category="experience" cv={cv} setCV={setCV} />
                <TextInput type="date" label="To" name="toDate" category="experience" cv={cv} setCV={setCV} />
                <TextInput isTextarea={true} label="Description" name="description" category="experience" cv={cv} setCV={setCV} />
            </form>
        </div>
    )
}