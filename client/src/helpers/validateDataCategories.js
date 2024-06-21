export const validateDataCategory = (title, description) => {
  const errors = {};

  if (!title.trim()) {
    errors.title = 'Title cannot be empty.'
  }

  if (!description.trim()) {
    errors.description = 'Description cannot be empty.';
  }

  const isValid = Object.keys(errors).length === 0;

  return { isValid, errors };
};
