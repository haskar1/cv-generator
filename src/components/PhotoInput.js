import Button from "./Button";

export default function PhotoInput({ 
  onChangePhoto, 
  onHiddenInputClick, 
  inputPhotoRef, 
  photoFile 
}) {
  return (
    <div className="cv-form-photo-selector">
      <p className="nowrap">Profile Picture: </p>
      <input 
        ref={inputPhotoRef}
        type="file"
        name="photo" 
        accept="image/*" 
        hidden
        onChange={onChangePhoto} 
      />
      <Button className="nowrap" value="Choose Photo" onButtonClick={onHiddenInputClick} />
      <p>{photoFile.name}</p>
    </div>
  )
}