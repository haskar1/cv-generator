import Button from "./Button.js";
import TextInput from "./TextInput.js";

export default function Education({ cv, onChangePersonal, onChangeExperienceOrEducation, onAddClick, onDeleteClick }) {
  return (
    <div>
      <form>
        {cv.education.map(educationItem => {
          return (
            <div key={educationItem.id}>
              <TextInput
                type="text"
                label="University"
                name="university"
                category="education"
                onChangePersonal={onChangePersonal} 
                onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
                id={educationItem.id}
                value={educationItem.university}
              />
              <TextInput
                type="text"
                label="Degree"
                name="degree"
                category="education"
                onChangePersonal={onChangePersonal} 
                onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
                id={educationItem.id}
                value={educationItem.degree}

              />
              <TextInput
                type="text"
                label="Subject"
                name="subject"
                category="education"
                onChangePersonal={onChangePersonal} 
                onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
                id={educationItem.id}
                value={educationItem.subject}

              />
              <TextInput
                type="text"
                label="Location"
                name="location"
                category="education"
                onChangePersonal={onChangePersonal} 
                onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
                id={educationItem.id}
                value={educationItem.location}

              />
              <TextInput
                type="date"
                label="From"
                name="fromDate"
                category="education"
                onChangePersonal={onChangePersonal} 
                onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
                id={educationItem.id}
                value={educationItem.fromDate}

              />
              <TextInput
                type="date"
                label="To"
                name="toDate"
                category="education"
                onChangePersonal={onChangePersonal} 
                onChangeExperienceOrEducation={onChangeExperienceOrEducation} 
                id={educationItem.id}
                value={educationItem.toDate}

              />
              <Button value="Delete" category="education" id={educationItem.id} onButtonClick={onDeleteClick} />
            </div>
          )
        })}
        <Button value="Add" category="education" onButtonClick={onAddClick} />
      </form>
    </div>
  );
}
