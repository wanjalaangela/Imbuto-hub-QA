

// Function to validate PIN
export function validatePIN(pin) {
  if (!pin) return "Please enter your PIN.";
  if (!/^\d+$/.test(pin)) return "Invalid PIN format. Please enter numbers only.";
  if (pin.length !== 4) return "PIN must be 4 digits.";
  return "valid";
}

// Simulate payment processing
export function processPayment(pin) {
  const validation = validatePIN(pin);
  if (validation !== "valid") return validation;

  // Simulate success
  return "Payment processed successfully.";
}

// Cancel handler
export function cancelPayment() {
  return "Payment cancelled.";
}
