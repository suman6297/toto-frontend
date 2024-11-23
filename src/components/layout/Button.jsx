import PropTypes from 'prop-types';

// normal button
export const Button = ({ children, onClick, onMouseEnter, onMouseLeave, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`rounded-sm shadow-sm font-semibold font-poppins text-white bg-callto-action hover:bg-black/80 hover:duration-500 ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

// google button
export const GoogleButton = ({ children, onClick, onMouseEnter, onMouseLeave, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative inline-flex w-full items-center justify-center rounded-sm px-3.5 py-2.5 font-semibold font-poppins border border-callto-action transition-all duration-200 bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-black hover:duration-500 ${className}`}
    >
      {children}
    </button>
  );
};

GoogleButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};