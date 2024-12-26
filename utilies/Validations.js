//validate Email
export const isValidEmail = (stringEmail) => {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let isValid = stringEmail.match(regex);
  if (isValid) {
    return (true)
  } else {
    return (false)
  }
};
//validate Password
export const isValidPassword = (stringPassword) => {
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{6,10}$/;

  return (stringPassword, regex.test(stringPassword));
};