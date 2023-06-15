import PhotoInput from "./PhotoInput.js";
import TextInput from "./TextInput.js";

export default function Personal({ 
  cv, 
  onChangePersonal, 
  onChangePhoto, 
  onHiddenInputClick, 
  inputPhotoRef 
}) {
  return (
    <div>
      <form>
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
        <PhotoInput 
          onChangePhoto={onChangePhoto} 
          onHiddenInputClick={onHiddenInputClick}
          inputPhotoRef={inputPhotoRef}
          photoFile={cv.personalInformation.photoFile}
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
