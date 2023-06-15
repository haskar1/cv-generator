import React from "react";
import Photo from "./Photo";

export const CVPreview = React.forwardRef((props, ref) => {
  let personal = props.cv.personalInformation;
  let experiences = props.cv.experience;
  let educations = props.cv.education;

  return (
    <div ref={ref} className="cv-preview">
      <div className="cv-preview-title">
        <h2>{personal.firstName} {personal.lastName}</h2>
      </div>
      <div className="cv-preview-main">
        <div>
          <h3>Description</h3>
          <hr/>
          <p>{personal.description}</p>
        </div>
        <div>
          <h3>Experience</h3>
          <hr/>
          {experiences.map(experience => {
            return (
              <div key={experience.id}>
                <p>{experience.company}</p>
                <p>{experience.position}</p>
                <p>{experience.location}</p>
                <p>{experience.description}</p>
                <p>{experience.fromDate} - {experience.toDate}</p>
              </div>
            )
          })}
        </div>
        <div>
          <h3>Education</h3>
          <hr/>
          {educations.map(education => {
            return (
              <div key={education.id}>
                <p>{education.university}</p>
                <p>{education.degree}, {education.subject}</p>
                <p>{education.location}</p>
                <p>{education.fromDate} - {education.toDate}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="cv-preview-sidebar">
        <Photo src={personal.photoURL} />
        <h3>Personal Details</h3>
        <p className="bold">Address</p>
        <p>{personal.address}</p>
        <p className="bold">Phone Number</p>
        <p>{personal.phone}</p>
        <p className="bold">Email</p>
        <p>{personal.email}</p>
      </div>
    </div>
  )
});

// export default function CVPreview({ cv }) {
//   let personal = cv.personalInformation;
//   let experiences = cv.experience;
//   let educations = cv.education;
  
//   return (
//     <div className="cv-preview">
//       <div className="cv-preview-title">
//         <h2>{personal.firstName} {personal.lastName}</h2>
//       </div>
//       <div className="cv-preview-main">
//         <div>
//           <h3>Description</h3>
//           <hr/>
//           <p>{personal.description}</p>
//         </div>
//         <div>
//           <h3>Experience</h3>
//           <hr/>
//           {experiences.map(experience => {
//             return (
//               <div key={experience.id}>
//                 <p>{experience.company}</p>
//                 <p>{experience.position}</p>
//                 <p>{experience.location}</p>
//                 <p>{experience.description}</p>
//                 <p>{experience.fromDate} - {experience.toDate}</p>
//               </div>
//             )
//           })}
//         </div>
//         <div>
//           <h3>Education</h3>
//           <hr/>
//           {educations.map(education => {
//             return (
//               <div key={education.id}>
//                 <p>{education.university}</p>
//                 <p>{education.degree}, {education.subject}</p>
//                 <p>{education.location}</p>
//                 <p>{education.fromDate} - {education.toDate}</p>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//       <div className="cv-preview-sidebar">
//         <Photo src={personal.photoURL} />
//         <h3>Personal Details</h3>
//         <p className="bold">Address</p>
//         <p>{personal.address}</p>
//         <p className="bold">Phone Number</p>
//         <p>{personal.phone}</p>
//         <p className="bold">Email</p>
//         <p>{personal.email}</p>
//       </div>
//     </div>
//   )
// }
