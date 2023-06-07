import TextInput from "./TextInput.js";

export default function Personal({ onItemChange, cv }) {
    return (
        <div>
            <form>
                <h2>Personal Information</h2>
                <TextInput type="text" label="First Name" name="firstName" category="personalInformation" onItemChange={onItemChange} cv={cv} />
                <TextInput type="text" label="Last Name" name="lastName" category="personalInformation" onItemChange={onItemChange} cv={cv} />
                <TextInput type="text" label="Address" name="address" category="personalInformation" onItemChange={onItemChange} cv={cv} />
                <TextInput type="tel" label="Phone Number" name="phone" category="personalInformation" onItemChange={onItemChange} cv={cv} />
                <TextInput type="email" label="Email" name="email" category="personalInformation" onItemChange={onItemChange} cv={cv} />
                <TextInput isTextarea={true} label="Description" name="description" category="personalInformation" onItemChange={onItemChange} cv={cv} />
            </form>
        </div>
    )
}