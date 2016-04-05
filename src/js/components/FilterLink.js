const React = require('react');

const FilterLink = ({
  filter,
  currentFilter,
  onClick,
  children
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href='#'
      onClick={event => {
        event.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};

module.exports = FilterLink;
