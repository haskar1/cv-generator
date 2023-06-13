export default function PhotoInput({ onChangePhoto, photoFile }) {

  function handleFileSelect(e) {
    e.preventDefault();
    const fileInputElem = document.getElementById("fileInputElem");
    if (fileInputElem) {
      fileInputElem.click();
    }
  }

  return (
    <div className="cv-form-photo-selector">
      <p>Profile Picture: </p>
      <input 
        id="fileInputElem"
        type="file"
        name="photo" 
        accept="image/*" 
        hidden
        onChange={onChangePhoto} />
      <button onClick={handleFileSelect}>Choose Photo</button>
      <p>{photoFile.name}</p>
    </div>
  )
}