import TextInput from "./TextInput.js";

export default function Personal({ cv, setCV }) {
    return (
        <div>
            <form>
                <h2>Personal Information</h2>
                <TextInput type="text" label="First Name" name="firstName" category="personalInformation" cv={cv} setCV={setCV} />
                <TextInput type="text" label="Last Name" name="lastName" category="personalInformation" cv={cv} setCV={setCV} />
                <TextInput type="text" label="Address" name="address" category="personalInformation" cv={cv} setCV={setCV} />
                <TextInput type="tel" label="Phone Number" name="phone" category="personalInformation" cv={cv} setCV={setCV} />
                <TextInput type="email" label="Email" name="email" category="personalInformation" cv={cv} setCV={setCV} />
                <TextInput isTextarea={true} label="Description" name="description" category="personalInformation" cv={cv} setCV={setCV} />
            </form>
        </div>
    )
}