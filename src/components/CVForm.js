import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Button from "./Button";

export default function CVForm({ 
  cv, 
  onChangePersonal, 
  onChangePhoto, 
  onHiddenInputClick, 
  inputPhotoRef, 
  onChangeExperienceOrEducation, 
  onAddClick, 
  onDeleteClick,
  onReset,
  onPrint
}) {
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
      <div>
        <Button className="print-btn" value="Create PDF" onButtonClick={onPrint} />
        <Button className="reset-btn" value="Reset" onButtonClick={onReset} />
      </div>
    </div>
  );
}
