import React from "react";
import {Form} from "semantic-ui-react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  placeholder,
  value,
  label,
  error,
  type,
  onChange,
  disabled,
}) => {
  return (
    <Form.Field>
      <label className='auth_label'>{label}</label>
      <input
        className={classnames("auth_input", {
          auth__invalid: error,
        })}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <div className='auth_invalid-feedback'>{error}*</div>}
    </Form.Field>
  );
};

TextFieldGroup.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
};

TextFieldGroup.defaultProps = {
  type: "text",
};

export default TextFieldGroup;
