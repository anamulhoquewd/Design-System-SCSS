import React from "react";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  label: string;
  type: string;
  helperText?: string;
  placeholder: string;
  disabled?: boolean;
  value: string;
  name: string;
  id?: string;
  className?: string;
  error?: boolean;
  errorText?: string;
  success?: boolean;
  successText?: string;
  warning?: boolean;
  warningText?: string;
  info?: boolean;
  infoText?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  disabled,
  onChange,
  onFocus,
  onBlur,
  value,
  name,
  id,
  className,
  helperText,
  error = false,
  errorText,
  success = false,
  successText,
  warning = false,
  warningText,
  info = false,
  infoText,
}) => {
  const inputId = id || name;
  const defaultClassName = "input-large-primary-default";
  return (
    <div className={className || defaultClassName}>
      <label htmlFor={inputId}>{label}</label>

      <div className="input-wrapper">
        <span className="input-icon">
          <svg
            viewBox="0 0 1024 1024"
            fill={"currentColor"}
            width={"20px"}
            height={"19px"}
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" />
          </svg>
        </span>
        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <span className="input-icon dropdown-icon">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
          </svg>
        </span>
      </div>

      {error && <p className="helper-text">{errorText}</p>}
      {success && <p className="helper-text">{successText}</p>}
      {warning && <p className="helper-text">{warningText}</p>}
      {info && <p className="helper-text">{infoText}</p>}
      {!error && !success && !warning && !info && helperText && (
        <p className="helper-text">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
