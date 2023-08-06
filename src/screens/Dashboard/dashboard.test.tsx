import { mockCityAPIResponseWithCityName } from '@__tests__/mocks/api/mockCityAPIResponse'
import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mockWeatherAPIResponse'
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@__tests__/utils/customRender'
import { saveStorageCity } from '@libs/asyncStorage/cityStorage'
import { api } from '@services/api'

import { Dashboard } from './'

describe('Screen: DashBoard', () => {
  beforeAll(async () => {
    const city = {
      id: '1',
      name: 'Rio de Janeiro, BR',
      latitude: 123,
      longitude: 456
    }
    await saveStorageCity(city)
  })

  it('should show stored city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })
    
    render(<Dashboard />)

    const cityName = await waitFor(() => screen.findByText(/rio de janeiro/i))
    expect(cityName).toBeTruthy()
  })

  it('should change the selected city', async () => {
    jest.spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponseWithCityName('Barra do Piraí') })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })

    render(<Dashboard />)
    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'))

    const cityName = 'Barra do Piraí'
    await waitFor(() => act(() => {
      const search = screen.getByTestId('search-input')
      fireEvent.changeText(search, cityName)
    }))

    await waitFor(() => act(() => {
      fireEvent.press(screen.getByText(cityName, { exact: false }))
    }))

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy()
  })
})