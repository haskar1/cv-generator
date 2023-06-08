import Button from "./Button.js";
import TextInput from "./TextInput.js";

export default function Experience({ cv, onChangePersonal, onChangeExperienceOrEducation, onAddClick, onDeleteClick }) {
  return (
    <div>
      <form>
        {cv.experience.map(experienceItem => {
          return (
            <div key={experienceItem.id}>
              <TextInput
                type="text"
                label="Company"
                name="company"
                category="experience"
                onChangePersonal={onChangePersonal} 
                onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
                id={experienceItem.id}
                value={experienceItem.company}
              />
              <TextInput
                type="text"
                label="Position"
                name="position"
                category="experience"
                onChangePersonal={onChangePersonal} 
                onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
                id={experienceItem.id}
                value={experienceItem.position}
              />
              <TextInput
                type="text"
                label="Location"
                name="location"
                category="experience"
                onChangePersonal={onChangePersonal} 
                onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
                id={experienceItem.id}
                value={experienceItem.location}
              />
              <TextInput
                type="date"
                label="From"
                name="fromDate"
                category="experience"
                onChangePersonal={onChangePersonal} 
                onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
                id={experienceItem.id}
                value={experienceItem.fromDate}
              />
              <TextInput
                type="date"
                label="To"
                name="toDate"
                category="experience"
                onChangePersonal={onChangePersonal} 
                onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
                id={experienceItem.id}
                value={experienceItem.toDate}
              />
              <TextInput
                isTextarea={true}
                label="Description"
                name="description"
                category="experience"
                onChangePersonal={onChangePersonal} 
                onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
                id={experienceItem.id}
                value={experienceItem.description}
              />
              <Button value="Delete" category="experience" id={experienceItem.id} onButtonClick={onDeleteClick} />
            </div>
          )
        })}
        <Button value="Add" category="experience" onButtonClick={onAddClick} />
      </form>
    </div>
  );
}
