import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

export default function CVForm({ cv, onChangePersonal, onChangeExperienceOrEducation, onAddClick, onDeleteClick }) {
  return (
    <div>
      <Personal 
        cv={cv} 
        onChangePersonal={onChangePersonal} 
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
