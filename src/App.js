import { useState } from 'react';
import CVForm from './components/CVForm.js';
import CVPreview from './components/CVPreview.js';
import './styles.css';

export default function App() {
  const [cv, setCV] = useState(initialCV);

  function handleItemChange(e, name, category) {
    setCV({
        ...cv,
        [category]: {
            ...cv[category],
            [name]: e.target.value
        }
    })
}

  return (
    <div>
      <header>
        <h1>CV Generator</h1>
      </header>

      <main>
        <CVForm onItemChange={handleItemChange} cv={cv} />
        <CVPreview />
      </main>
    </div>
  );
}

const initialCV = {
  personalInformation: {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    description: ''
  }, 
  experience: {
    company: '',
    position: '',
    education: '',
    fromDate: '',
    toDate: '',
    description: ''
  }, 
  education: {
    university: '',
    degree: '',
    subject: '',
    location: '',
    fromDate: '',
    toDate: ''
  }
}