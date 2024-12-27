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
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{6,15}$/;

  return (stringPassword, regex.test(stringPassword));
};
export const isValidConfirm = (stringPassword, stringConfirm) => {
  if(stringPassword == stringConfirm){
    return true
  }else return false
}
export const isValidUsername = (stringUsername) => {
  let regex = /^[a-zA-Z][a-zA-Z0-9_]{5,14}$/;
  return regex.test(stringUsername);
}