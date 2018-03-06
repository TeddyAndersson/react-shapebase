import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Element extends React.Component {
  constructor(props) {
    super(props)

    this.rootSelector = document.body
    this.container = document.createElement('div')
  }

  componentDidMount() {
    this.rootSelector.appendChild(this.container).setAttribute("id", this.props.id)
  }

  componentWillUnmount() {
    this.rootSelector.removeChild(this.container)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.container)
  }
}

Element.propTypes = {
  id: PropTypes.String,
}

const Portal = styled(Element)``;

export default Portal;