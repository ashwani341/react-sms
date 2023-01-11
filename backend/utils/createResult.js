export const createResult = (err, data) => {
  let result = {};

  if (err) {
    result.status = 'error';
    result.error = err.message;
    return result;
  }

  result.status = 'success';
  result.data = data;
  return result;
};