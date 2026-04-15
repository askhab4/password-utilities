const { isStrongPassword, generateStrongPassword } = require('./index');

test('isStrongPassword returns false for weak passwords', () => {
  expect(isStrongPassword("Hello World")).toBe(false);
});

test('isStrongPassword returns true for strong passwords', () => {
  expect(isStrongPassword("pC%mD8TpCKn2")).toBe(true);
});

test('generateStrongPassword returns a password of correct length', () => {
  const pwd = generateStrongPassword(12);
  expect(pwd.length).toBe(12);
});