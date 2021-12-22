import refs from '../refs/refs.js';
import blockHelp_blockHelpTemplate from '../../views/components/blockHelp.hbs';
import { blockHelpRenderOpen } from '../components/blockHelp/blockHelp.js';

export function blockHelpRender() {
  refs.mainEL.insertAdjacentHTML('beforeend', blockHelp_blockHelpTemplate());
  blockHelpRenderOpen();
}
