import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';

library.add(fab, fas, faSquareCheck, faMugSaucer);

import StorybookUIRoot from './.ondevice/Storybook';
import '@storybook/addon-console';
export {StorybookUIRoot as default};
