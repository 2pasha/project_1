export const validateDataTransaction = (category, operationType, amount, date, description) => {
  const errors = {};

  if (!category) {
    errors.category = 'Please select a valid category.';
  }

  if (!operationType) {
    errors.operationType = 'Please select a valid operation type.';
  }

  if (amount <= 0 || isNaN(amount)) {
    errors.amount = 'Please enter a valid amount.';
  }

  if (!date) {
    errors.date = 'Please select a date of transaction.'
  }

  if (!description.trim()) {
    errors.description = 'Description cannot be empty.';
  }

  const isValid = Object.keys(errors).length === 0;

  return { isValid, errors };
};