import { storiesOf } from '@storybook/html';
import Wrapper from '../../../../utils/storybook/decorators/Wrapper';

import Location from './location.html.twig';
import { locationData } from './location.data';

storiesOf('Components', module)
  .addDecorator(Wrapper)
  .add('Location', () => Location({ location: locationData.partner }));
