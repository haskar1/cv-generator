import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

export default function CVForm({ cv, onChangePersonal, onChangePhoto, onHiddenInputClick, inputPhotoRef, onChangeExperienceOrEducation, onAddClick, onDeleteClick }) {
  return (
    <div className="cv-form">
      <h2>Personal Information</h2>
      <Personal 
        cv={cv} 
        onChangePersonal={onChangePersonal} 
        onChangePhoto={onChangePhoto}
        onHiddenInputClick={onHiddenInputClick}
        inputPhotoRef={inputPhotoRef}
      />
      <h2>Experience</h2>
      <Experience 
        cv={cv} 
        onChangePersonal={onChangePersonal} 
        onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
        onAddClick={onAddClick} 
        onDeleteClick={onDeleteClick} 
      />
      <h2>Education</h2>
      <Education 
        cv={cv} 
        onChangePersonal={onChangePersonal} 
        onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
        onAddClick={onAddClick} 
        onDeleteClick={onDeleteClick} 
      />
    </div>
  );
}
