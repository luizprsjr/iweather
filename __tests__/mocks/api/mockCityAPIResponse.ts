import { CityAPIResponse } from '@services/getCityByNameService'

export const mockCityAPIResponse: CityAPIResponse = {
  id: '1',
  name: 'São Paulo',
  sys: {
    country: 'BR'
  },
  coord: {
    lat: 123,
    lon: 456
  }
}

export function mockCityAPIResponseWithCityName(name: string = 'São Paulo'): CityAPIResponse {
  return {
    id: '1',
    name: name,
    sys: {
      country: 'BR'
    },
    coord: {
      lat: 123,
      lon: 456
    }
  }
}