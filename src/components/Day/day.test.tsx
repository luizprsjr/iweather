import clearDay from '@assets/clear_day.svg'
import { render, screen } from '@testing-library/react-native'

import { Day } from './'

describe('Component: Day', () => {
  it('should render the day component', () => {
    render(
      <Day
        data={{
          day: '20/09',
          min: '30°c',
          max: '34°c',
          icon: clearDay,
          weather: 'Céu limpo'
        }}
       />
    )

    expect(screen.getByText('20/09')).toBeTruthy()
  })
})