import PropTypes from "prop-types";

export function Button({ label, onClick, disabled, size, ...rest }) {
  const buttons = {
    xl: (
      <button disabled={disabled} onClick={onClick} {...rest}>
        {label} xl
      </button>
    ),
    sm: (
      <button disabled={disabled} onClick={onClick} {...rest}>
        {label} sm
      </button>
    ),
    lg: (
      <button disabled={disabled} onClick={onClick} {...rest}>
        {label} lg
      </button>
    ),
  };
  return <>{buttons[size] || ""}</>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "lg", "sm"]),
};
