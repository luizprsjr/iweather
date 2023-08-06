import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mockWeatherAPIResponse'

import { api } from './api'
import {
  getWeatherByCityService,
  WeatherResponseProps,
} from './getWeatherByCityService'

describe('API: getWeatherByCityService', () => {
  it('should return weather api data formatted', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

    const expectedResponse = {} as WeatherResponseProps
    const response = await getWeatherByCityService({ latitude: 123, longitude: 456 })

    expect(typeof response).toEqual(typeof expectedResponse);
  })
})