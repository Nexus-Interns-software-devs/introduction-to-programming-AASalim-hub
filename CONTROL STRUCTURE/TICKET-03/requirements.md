# TICKET-03: Password Validator

**Priority:** Must Have  
**Story Points:** 5  
**Points:** 4  
**Due:** Wednesday Week 1, End of Class

---

## 📝 USER STORY

```
As a user,
I want to validate my password strength,
So that I can create a secure password.
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Check if password is at least 8 characters long
- [ ] Check if password contains a number
- [ ] Check if password contains an uppercase letter
- [ ] Display validation result (valid or invalid)
- [ ] Display which requirements are missing (if any)

---

## 📋 REQUIREMENTS

1. **Input:**
   - Declare a `password` variable with a string value

2. **Validation Logic:**
   - Check length (`password.length >= 8`)
   - Check for number (hint: research string methods)
   - Check for uppercase letter

3. **Output:**
   - Display "Password Valid" or "Password Invalid"
   - List any failed requirements

---

## 💻 EXAMPLE OUTPUT

```
Password: "hello"
Result: Invalid
Missing: Length (need 8+), Number, Uppercase Letter

Password: "SecurePass123"
Result: Valid ✓
```

---

## 🧪 TESTING

Test with these passwords:
- [ ] "hello" (too short, no number, no uppercase)
- [ ] "Password" (no number)
- [ ] "password123" (no uppercase)
- [ ] "Pass123" (too short)
- [ ] "SecurePass99" (should be valid)

---

## 💡 HINTS

**Checking for numbers:**
```javascript
const hasNumber = /[0-9]/.test(password);
```

**Checking for uppercase:**
```javascript
const hasUpper = /[A-Z]/.test(password);
```

---

## 📤 SUBMISSION

1. Create `password-validator.js` in the `TICKET-03/code/` folder
2. Complete all acceptance criteria
3. Test with all test cases above
4. Commit and push to GitHub
5. Check off items in `submission.md`
