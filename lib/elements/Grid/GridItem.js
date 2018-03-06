import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridItemElement = (props) => {
    const {
      children,
      element,
      className,
      start,
      end,
      color,
      width,
      ...other
    } = props;

    return (
      <div className={className} >
        {children}
      </div>
    );
};


GridItemElement.propTypes = {

  /**
    * Naming of a grid area.
    */
  area: PropTypes.node,

  /**
    * Primary content.
    */
  children: PropTypes.node,

  /**
   * Additonal classes.
   */
  className: PropTypes.string,

  /**
   * The ending point for a column in the Grid Area
   */
  columnEnd: PropTypes.number,

  /**
   * The starting point for a column in the Grid Area
   */
  columnStart: PropTypes.number,

  /**
   * The ending point for a row in the Grid Area
   */
  rowEnd: PropTypes.number,

  /**
   * The starting point for a row in the Grid Area
   */
  rowStart: PropTypes.number,
}


/** Styling the Component with styled-components */
const GridItem = styled(GridItemElement)`
  grid-column: ${props => props.columnStart || 'auto'} / ${props => props.columnEnd || 'auto'};
  grid-row: ${props => props.rowStart || 'auto'} / ${props => props.rowEnd || 'auto'};
  width: ${props => props.width + 'em' || 'auto'};
  
  ${props => props.area && css`
    grid-area: ${props => grid.area};
  `}
`;

export default GridItem;





