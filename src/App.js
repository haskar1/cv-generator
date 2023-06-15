import { useRef, useState } from "react";
import CVForm from "./components/CVForm.js";
import CVPreview from "./components/CVPreview.js";
import "./styles.css";
import emptyProfilePic from "./img/empty-profile-pic.png";


export default function App() {
  const [cv, setCV] = useState(initialCV);
  const inputPhotoRef = useRef(null);

  function handleChangePersonal(e, name) {
    setCV({
      ...cv,
      personalInformation: {
        ...cv.personalInformation,
        [name]: e.target.value
      }
    });
  }

  function handleHiddenInputClick(e) {
    e.preventDefault();
    if (inputPhotoRef.current) {
      inputPhotoRef.current.click();
    }
  }

  function handleChangePhoto(e) {
    const imgFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setCV({
        ...cv,
        personalInformation: {
          ...cv.personalInformation,
          photoFile: imgFile,
          photoURL: e.target.result
        }
      });
    }
    if (imgFile) {
      reader.readAsDataURL(imgFile);
    }
  }

  function handleChangeExperienceOrEducation(e, id, name, category) {
    const newCategory = cv[category].map(categoryItem => {
      if (id === categoryItem.id) {
        return {...categoryItem, [name]: e.target.value}
      } else {
        return categoryItem;
      }
    });
    setCV({
      ...cv, 
      [category]: newCategory
    });
  }

  function handleAddClick(e, category) {
    e.preventDefault();
    const newCategory = category === "experience" ? {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      location: "",
      fromDate: "",
      toDate: "",
      description: "",
    } : {
      id: crypto.randomUUID(),
      university: "",
      degree: "",
      subject: "",
      location: "",
      fromDate: "",
      toDate: "",
    };
    setCV({
      ...cv, 
      [category]: [
        ...cv[category], 
        newCategory
      ]
    });
  }

  function handleDeleteClick(e, category, id) {
    e.preventDefault();
    const newCategory = cv[category].filter(categoryItem => {
      return categoryItem.id !== id;
    });
    setCV({
      ...cv,
      [category]: newCategory
    });
  }

  return (
    <div>
      <header>
        <h1>CV Generator</h1>
      </header>

      <main>
        <CVForm 
          cv={cv} 
          onChangePersonal={handleChangePersonal} 
          onChangePhoto={handleChangePhoto}
          onHiddenInputClick={handleHiddenInputClick}
          inputPhotoRef={inputPhotoRef}
          onChangeExperienceOrEducation={handleChangeExperienceOrEducation}
          onAddClick={handleAddClick} 
          onDeleteClick={handleDeleteClick} 
        />
        <CVPreview cv={cv} />
      </main>
    </div>
  );
}

const initialCV = {
  personalInformation: {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    photoFile: "",
    photoURL: emptyProfilePic,
    description: ""
  },
  experience: [
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      location: "",
      fromDate: "",
      toDate: "",
      description: ""
    }
  ],
  education: [
    {
      id: crypto.randomUUID(),
      university: "",
      degree: "",
      subject: "",
      location: "",
      fromDate: "",
      toDate: ""
    }
  ]
};

