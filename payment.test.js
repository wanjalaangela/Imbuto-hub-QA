
import { validatePIN, processPayment, cancelPayment } from './payment';

describe('PIN Validation and Payment Processing', () => {

  test('Valid PIN entered', () => {
    const result = processPayment('1234');
    expect(result).toBe('Payment processed successfully.');
  });

  test('Invalid PIN format (letters)', () => {
    const result = processPayment('abcd');
    expect(result).toBe('Invalid PIN format. Please enter numbers only.');
  });

  test('Short PIN (2 digits)', () => {
    const result = processPayment('12');
    expect(result).toBe('PIN must be 4 digits.');
  });

  test('Long PIN (6 digits)', () => {
    const result = processPayment('123456');
    expect(result).toBe('PIN must be 4 digits.');
  });

  test('Empty PIN field', () => {
    const result = processPayment('');
    expect(result).toBe('Please enter your PIN.');
  });

  test('Cancel button clicked', () => {
    const result = cancelPayment();
    expect(result).toBe('Payment cancelled.');
  });

});  
