import { Input } from '@components/Input'
import { render, screen } from '@testing-library/react-native'

describe('Component: Input', () => {
  it('should render the component without the activity indicator if the prop isLoading is false', () => {
    render(<Input />)

    const activityIndicator = screen.queryByTestId('activity-indicator')
    expect(activityIndicator).toBeNull()
  })

  it('should render the component with the activity indicator if the prop isLoading is true', () => {
    render (<Input isLoading />)

    const activityIndicator = screen.getByTestId('activity-indicator')
    expect(activityIndicator).toBeTruthy()
  })
})