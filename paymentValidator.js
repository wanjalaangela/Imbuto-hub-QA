 function validatePaymentInput(phoneNumber, amount) {
  if (!phoneNumber && !amount) {
    return { isValid: false, error: "Please enter a phone number and amount." };
  }
  if (!phoneNumber) {
    return { isValid: false, error: "Please enter a phone number." };
  }
  if (!amount) {
    return { isValid: false, error: "Please enter an amount." };
  }
  if (!/^\d{10}$/.test(phoneNumber)) {
    return { isValid: false, error: "Invalid phone number." };
  }
  if (isNaN(amount)) {
    return { isValid: false, error: "Invalid amount." };
  }
  if (Number(amount) <= 0) {
    return { isValid: false, error: "Amount must be greater than zero." };
  }
  return { isValid: true, error: "" };

}
module.exports={validatePaymentInput};
