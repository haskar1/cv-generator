function TextInput({
  type,
  label,
  name,
  category,
  isTextarea,
  onChangePersonal,
  onChangeExperienceOrEducation,
  id,
  value
}) {
  let className;
  if (value !== "" || type === "date") {
    className = "filled";
  }

  return (
    <div className="input-container">
      {isTextarea ? (
        <textarea
          value={value}
          name={name}
          category={category}
          onChange={category === "personalInformation" ? (
                  (e) => onChangePersonal(e, name, category) 
            ) : ( (e) => onChangeExperienceOrEducation(e, id, name, category)
          )}
        ></textarea>
      ) : (
        <input
          type={type}
          value={value}
          name={name}
          category={category}
          onChange={category === "personalInformation" ? (
                  (e) => onChangePersonal(e, name, category) 
            ) : ( (e) => onChangeExperienceOrEducation(e, id, name, category)
          )}
        />
      )}

      <label className={className}>{label}</label>
    </div>
  );
}

export default TextInput;
