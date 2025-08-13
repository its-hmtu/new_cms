
const ruleRequired = {
  required: true,
  message: 'This field is required',
};

export const generateRequiredRules = (required, rules) => {
  const newRules = rules ? [...rules] : [];
  if (required && newRules.filter((item) => 'required' in item).length === 0) {
    newRules.push(ruleRequired);
  }
  return newRules;
};

export const toCapitalize = (stringSource) => {
  const stringArr = stringSource.split(' ');
  return stringArr.map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
};