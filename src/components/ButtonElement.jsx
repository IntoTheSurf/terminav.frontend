import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import "../assets/styles/_buttons.scss";

function ButtonElement({
  text, className, variant, isFullWidth, size, ...rest
}) {
  const classes = `${className}`;
  return (
    <button className={classes} variant={variant} size={size} block={isFullWidth.toString()} {...rest}>
      {text || null}
    </button>
  );
}

ButtonElement.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  isFullWidth: PropTypes.bool,
  size: PropTypes.string,
};
ButtonElement.defaultProps = {
  text: '',
  className: '',
  variant: '',
  isFullWidth: false,
  size: '',
};

export { ButtonElement };