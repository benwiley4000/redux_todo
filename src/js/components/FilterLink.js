const React = require('react');

const Link = require('./Link');

class FilterLink extends React.Component {
  componentDidMount () {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => 
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render () {
    const props = this.props;
    const { store } = props;
    const state = store.getState();

    return (
      <Link
        active={
          props.filter === state.visibilityFilter
        }
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >
        {props.children}
      </Link>
    );
  }
}

module.exports = FilterLink;
