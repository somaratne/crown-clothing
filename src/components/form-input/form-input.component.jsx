import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ onHandleChange, label, name, type, value, required }) => {
  let classes = "form-input-label";
  classes += value.length > 0 ? " shrink" : "";

  return (
    <div className="group">
      <input
        label={label}
        className="form-input"
        name={name}
        onChange={onHandleChange}
        type={type}
        value={value}
        required={required}
        style={{ fontFamily: "Open Sans Condensed" }}
      />
      {label ? <label className={classes}>{label}</label> : null}
    </div>
  );
};

export default FormInput;
