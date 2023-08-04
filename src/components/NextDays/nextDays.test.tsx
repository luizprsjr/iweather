import clearDay from '@assets/clear_day.svg'
import { render, screen } from '@testing-library/react-native'

import { NextDays } from './'

describe('Component: NextDays', () => {
  it('should render the next days component', () => {
    render(
      <NextDays
        data={[
          { day: '20/09', min: '30°c', max: '34°c', icon: clearDay, weather: 'Céu limpo' },
          { day: '21/09', min: '22', max: '28°c', icon: clearDay, weather: 'Nublado' },
          { day: '22/09', min: '27°c', max: '33°c', icon: clearDay, weather: 'Céu limpo' },
          { day: '23/09', min: '33°c', max: '37°c', icon: clearDay, weather: 'Céu limpo' },
          { day: '24/09', min: '23°c', max: '29°c', icon: clearDay, weather: 'Chuva fraca' },
        ]}
      />
    )
    
    expect(screen.getByText('20/09')).toBeTruthy()
  })
})