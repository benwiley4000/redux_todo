const React = require('react');

const Link = ({
  active,
  onClick,
  children
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href='#'
      onClick={event => {
        event.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

module.exports = Link;
