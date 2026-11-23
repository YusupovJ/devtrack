export const DIGIT_OR_SYMBOL_REGEX = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
export const UPPER_AND_LOWER_REGEX = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

export const PASSWORD_RULES = [
  { label: "От 8 символов", test: (v: string) => v.length >= 8 },
  { label: "Строчные и заглавные", test: (v: string) => UPPER_AND_LOWER_REGEX.test(v) },
  { label: "Цифра или символ", test: (v: string) => DIGIT_OR_SYMBOL_REGEX.test(v) },
];
