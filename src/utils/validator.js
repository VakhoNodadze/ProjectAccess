export const required = (value, error = 'Required') => {
  return !value || !String(value).trim() ? error : undefined;
};

export const emailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const isEmail = (value, error = 'Invalid email') => {
  return !emailRegex.test(value) ? error : undefined;
};
