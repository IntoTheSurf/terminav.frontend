import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';

function ButtonElement({
  text, className, variant, isFullWidth, size, ...rest
}) {
  const classes = `btn ${className}`;
  return (
    <Button className={classes} variant={variant} size={size} block={isFullWidth.toString()} {...rest}>
      {text || null}
    </Button>
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