import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm'


test('Renders the label "Choose Date:"', () => {
  const mockProps = {
    availableTimes: { availableTimes: [] },
    dispatch: jest.fn(),
    SubmitForm: jest.fn(),
  };

  render(<BookingForm {...mockProps} />);

  const labelElement = screen.getByText("Choose Date:");
  expect(labelElement).toBeInTheDocument();
});

