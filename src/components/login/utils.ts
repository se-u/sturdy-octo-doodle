function isNotNumeric(phoneNumber: string) {
  // Check if the phone number contains only digits
  const isNumeric = /^[0-9]+$/.test(phoneNumber);
  if (!isNumeric) return true;
  return false;
}

function isNotPhoneNumber(phoneNumber: string) {
  // Check if the phone number is exactly 8 digits long
  if (phoneNumber.length <= 8) return true;
  return false;
}

export { isNotNumeric, isNotPhoneNumber };
