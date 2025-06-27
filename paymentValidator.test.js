
// import { validatePaymentInput } from './paymentValidator';
const {validatePaymentInput}=require("./paymentValidator");

test ('validatePaymentInput', () => {
  it('Valid phone number and valid amount', () => {
    expect(validatePaymentInput('0771234567', '5000'))
      .toEqual({ isValid: true, error: "" });
  });

  it('Empty phone number', () => {
    expect(validatePaymentInput('', '5000'))
      .toEqual({ isValid: false, error: "Please enter a phone number." });
  });

  it('Empty amount', () => {
    expect(validatePaymentInput('0771234567', ''))
      .toEqual({ isValid: false, error: "Please enter an amount." });
  });

  it('Both fields empty', () => {
    expect(validatePaymentInput('', ''))
      .toEqual({ isValid: false, error: "Please enter a phone number and amount." });
  });

  it('Invalid phone number (too short)', () => {
    expect(validatePaymentInput('07712', '5000'))
      .toEqual({ isValid: false, error: "Invalid phone number." });
  });

  it('Invalid phone number (non-numeric characters)', () => {
    expect(validatePaymentInput('07A1B34567', '5000'))
      .toEqual({ isValid: false, error: "Invalid phone number." });
  });

  it('Amount is zero', () => {
    expect(validatePaymentInput('0771234567', '0'))
      .toEqual({ isValid: false, error: "Amount must be greater than zero." });
  });

  it('Amount is negative', () => {
    expect(validatePaymentInput('0771234567', '-100'))
      .toEqual({ isValid: false, error: "Amount must be greater than zero." });
  });

  it('Amount is not a number', () => {
    expect(validatePaymentInput('0771234567', 'ABC'))
      .toEqual({ isValid: false, error: "Invalid amount." });
  });

  it('Large valid amount', () => {
    expect(validatePaymentInput('0771234567', '1000000'))
      .toEqual({ isValid: true, error: "" });
  });

  it('Special characters in phone number', () => {
    expect(validatePaymentInput('0771@#4567', '5000'))
      .toEqual({ isValid: false, error: "Invalid phone number." });
  });

  it('Special characters in amount', () => {
    expect(validatePaymentInput('0771234567', '50@#'))
      .toEqual({ isValid: false, error: "Invalid amount." });
  });

});
