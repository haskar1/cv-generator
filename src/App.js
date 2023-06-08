import { useState } from "react";
import CVForm from "./components/CVForm.js";
import CVPreview from "./components/CVPreview.js";
import "./styles.css";


export default function App() {
  const [cv, setCV] = useState(initialCV);

  function handleChangePersonal(e, name, category) {
    setCV({
      ...cv,
      [category]: {
        ...cv[category],
        [name]: e.target.value,
      },
    });
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

  function handleDeleteClick(e) {
    e.preventDefault();
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
          onChangeExperienceOrEducation={handleChangeExperienceOrEducation}
          onAddClick={handleAddClick} 
          onDeleteClick={handleDeleteClick} 
        />
        <CVPreview />
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

