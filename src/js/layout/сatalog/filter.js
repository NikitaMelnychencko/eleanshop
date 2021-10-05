import filterList from '../../json/filter.json';
import filterListHbs from '../../../views/partials/сatalog/filter.hbs';
import catalog from '../../json/catalog.json';



export const setFilterHbs = filterListHbs(filterList,catalog);
// 
const filtersRefs = {
   category : document.querySelectorAll('.filters-categor__item'),
   collection : document.querySelectorAll('.filters-collection__item'),
}
 element.addEventListener('click',)

