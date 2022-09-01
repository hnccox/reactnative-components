import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

import StorybookUIRoot from './.ondevice/Storybook';
import '@storybook/addon-console';
export {StorybookUIRoot as default};
