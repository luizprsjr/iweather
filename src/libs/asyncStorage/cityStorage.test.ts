import { CityProps } from '@services/getCityByNameService'

import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from './cityStorage'

const newCity: CityProps = {
  id: '1',
  name: 'São Paulo',
  latitude: 123,
  longitude: 456
}


describe('Storage: CityStorage', () => {
  it('should return null when has no city in storage', async () => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })

  it('should return the stored city', async () => {
    await saveStorageCity(newCity)
    const response = await getStorageCity()

    expect(response).toEqual(newCity)
  })

  it('should remove the stored city', async () => {
    await saveStorageCity(newCity)
    await removeStorageCity()
    const response = await getStorageCity()

    expect(response).toBeNull()
  })
})