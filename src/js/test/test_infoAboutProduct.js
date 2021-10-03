import { productInfoMarkup, createListener } from '../layout/product/infoAboutProduct'

refs.mainEL.insertAdjacentHTML('beforeend', productInfoMarkup)
createListener()