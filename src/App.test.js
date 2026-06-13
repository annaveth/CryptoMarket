// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoMarket title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoMarket/i);
    expect(titleElement).toBeInTheDocument();
});
