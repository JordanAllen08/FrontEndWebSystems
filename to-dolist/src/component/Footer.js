import React from 'react';
import FilterLink from '../containers/FilterButton';
import { VisibilityFilters } from '../actions';


//displayed from ./component/App.js
const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE } > Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} >Completed</FilterLink>
    </div>
);

export default Footer;