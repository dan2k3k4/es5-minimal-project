import { locationData } from './location/location.data';

export const locationsData = {
  noLocationsTypes: {
    partner: {
      entities: [],
    },
    regionalOffice: {
      entities: [],
    },
  },
  bothLocationTypes: {
    partner: {
      entities: Array(4).fill({ ...locationData.partner }),
    },
    regionalOffice: {
      entities: Array(4).fill({ ...locationData.regionalOffice }),
    },
  },
  onlyPartners: {
    partner: {
      entities: Array(4).fill({ ...locationData.partner }),
    },
    regionalOffice: {
      entities: [],
    },
  },
  onlyRegionalOffices: {
    partner: {
      entities: [],
    },
    regionalOffice: {
      entities: Array(4).fill({ ...locationData.regionalOffice }),
    },
  },
};
