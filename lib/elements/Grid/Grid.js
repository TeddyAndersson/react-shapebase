import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridItem from './GridItem';

const GridElement = (props) => {
    const {
      children,
      element,
      className,
      columns,
      rows,
      ...other
    } = props;

    return (
      <div className={className} >
        {children}
      </div>
    );
};

GridElement.PropTypes = {

    children: PropTypes.node,
    /**
      * Primary content.
      */
    children: PropTypes.node,

    /**
     * Additonal classes.
     */
    className: PropTypes.string,

    /**
     * Represent the gap between columns
     */
    columnGap: PropTypes.number,

    /**
     * Represents column count per row in the Grid Area.
     */
    columns: PropTypes.number,

    /**
     * Represent the gap between rows
     */
    rowGap: PropTypes.number,

    /**
     * Represents rows count per column in the Grid Area.
     */
    rows: PropTypes.number,

    /**
     * A grid can specify its text alignment.
     */
    textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justified']),
}

const Grid = styled(GridElement)`
    font-family: 'Helvetica';
    display: grid;
    grid-column-gap: ${props => props.columnGap || 0}em;
    grid-row-gap: ${props => props.rowGap || 0}em;
    grid-template-columns: repeat(${props => props.columns || React.Children.count(props.children)}, 1fr);
    grid-template-rows: repeat(${props => props.rows || 'auto'}, 1fr);
    text-align: ${props => props.textAlign || ''}
`;

Grid.Item = GridItem;

export default Grid;




