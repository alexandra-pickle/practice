const Field = ({ field, display_name, type, value, required, onChange }) => {
  return (
    <>
      <div
        className={
          type === "radio" || type === "checkbox" ? "col" : "col width200"
        }>
        <label htmlFor={field}>{display_name}</label>
      </div>
      <div className="col">
        {type === "textarea" ? (
          <textarea
            name={field}
            cols={50}
            rows={5}
            required={required}
            onChange={(e) => onChange(field, e.target.value)}
          />
        ) : (
          <input
            type={type}
            id={field}
            name={field}
            value={value}
            required={required}
            onChange={(e) => onChange(field, e.target.value)}
          />
        )}
      </div>
    </>
  );
};

export default Field;
