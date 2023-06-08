import TextInput from "./TextInput.js";

export default function Personal({ cv, onChangePersonal }) {
  return (
    <div>
      <form>
        <h2>Personal Information</h2>
        <TextInput
          type="text"
          label="First Name"
          name="firstName"
          category="personalInformation"
          onChangePersonal={onChangePersonal} 
          value={cv.personalInformation.firstName}
        />
        <TextInput
          type="text"
          label="Last Name"
          name="lastName"
          category="personalInformation"
          onChangePersonal={onChangePersonal} 
          value={cv.personalInformation.lastName}
        />
        <TextInput
          type="text"
          label="Address"
          name="address"
          category="personalInformation"
          onChangePersonal={onChangePersonal} 
          value={cv.personalInformation.address}
        />
        <TextInput
          type="tel"
          label="Phone Number"
          name="phone"
          category="personalInformation"
          onChangePersonal={onChangePersonal} 
          value={cv.personalInformation.phone}
        />
        <TextInput
          type="email"
          label="Email"
          name="email"
          category="personalInformation"
          onChangePersonal={onChangePersonal} 
          value={cv.personalInformation.email}
        />
        <TextInput
          isTextarea={true}
          label="Description"
          name="description"
          category="personalInformation"
          onChangePersonal={onChangePersonal} 
          value={cv.personalInformation.description}
        />
      </form>
    </div>
  );
}
