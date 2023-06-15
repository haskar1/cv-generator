import Button from "./Button";

export default function PhotoInput({ onChangePhoto, onHiddenInputClick, inputPhotoRef, photoFile }) {
  return (
    <div className="cv-form-photo-selector">
      <p>Profile Picture: </p>
      <input 
        ref={inputPhotoRef}
        type="file"
        name="photo" 
        accept="image/*" 
        hidden
        onChange={onChangePhoto} 
      />
      <Button value="Choose Photo" onButtonClick={onHiddenInputClick} />
      <p>{photoFile.name}</p>
    </div>
  )
}