import { render } from '@__tests__/utils/customRender'
import { saveStorageCity } from '@libs/asyncStorage/cityStorage'
import { screen, waitFor } from '@testing-library/react-native'

import { Routes } from './'

describe('Routes', () => {
  it('should render the Search screen when no city is selected', async () => {
    render(<Routes />)
    const title = await waitFor(() => screen.findByText(/^escolha um local/i))
    expect(title).toBeTruthy()
  })
})