import {
  storiesOf,
} from '@storybook/html';

import Locations from './locations.html.twig';
import {
  locationsData,
} from './locations.data';

storiesOf('Components/Views/Locations', module)
  .add('Both Tabs', () => Locations({
    graphql: {
      ...locationsData.bothLocationTypes,
    },
  }))
  .add('No Tabs', () => Locations({
    graphql: {
      ...locationsData.noLocationsTypes,
    },
  }))
  .add('Partners Tab Only', () => Locations({
    graphql: {
      ...locationsData.onlyPartners,
    },
  }))
  .add('Regional Offices Tab Only', () => Locations({
    graphql: {
      ...locationsData.onlyRegionalOffices,
    },
  }));
