import { useState } from 'react';
import CVForm from './components/CVForm.js';
import CVPreview from './components/CVPreview.js';
import './style.css';

export default function App() {
  const [cv, setCV] = useState(initialCV);

  return (
    <div>
      <header>
        <h1>CV Generator</h1>
      </header>

      <main>
        <CVForm cv={cv} setCV={setCV} />
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