import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mockWeatherAPIResponse'
import { render, screen, waitFor } from '@__tests__/utils/customRender'
import { saveStorageCity } from '@libs/asyncStorage/cityStorage'
import { api } from '@services/api'

import { Dashboard } from './'

describe('Screen: DashBoard', () => {
  it('should show stored city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })
    const city = {
      id: '1',
      name: 'Rio de Janeiro, BR',
      latitude: 123,
      longitude: 456
    }
    await saveStorageCity(city)
    render(<Dashboard />)

    const cityName = await waitFor(() => screen.findByText(/rio de janeiro/i))
    expect(cityName).toBeTruthy()
  })
})