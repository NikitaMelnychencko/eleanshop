import filterList from '../../json/filter.json';
import filterListHbs from '../../../views/partials/сatalog/filter.hbs';



export const setFilterHbs = filterListHbs(filterList);
// 
const filtersRefs = {
   category : document.querySelectorAll('.filters-categor__item'),
   collection : document.querySelectorAll('.filters-collection__item'),
}


