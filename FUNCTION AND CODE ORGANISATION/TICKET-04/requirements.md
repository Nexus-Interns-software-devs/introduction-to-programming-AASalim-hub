# TICKET-04: Number Guessing Game Logic

**Priority:** Must Have  
**Story Points:** 5  
**Points:** 4  
**Due:** Thursday Week 1, End of Class

---

## 📝 USER STORY

```
As a player,
I want to guess a secret number,
So that I can receive feedback on my guess.
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Create a function `checkGuess` that takes a guess as parameter
- [ ] Compare guess to a secret number (1-100)
- [ ] Return feedback: "Too high", "Too low", or "Correct!"
- [ ] Test the function with multiple guesses
- [ ] Display all results

---

## 📋 REQUIREMENTS

1. **Setup:**
   - Declare `secretNumber` (any number 1-100)
   
2. **Function:**
   - Create `checkGuess(guess)` function
   - Compare guess to secretNumber
   - Return appropriate message

3. **Testing:**
   - Call function with numbers higher than secret
   - Call function with numbers lower than secret
   - Call function with the correct number

---

## 💻 EXAMPLE OUTPUT

```
Secret number: 42

Guess 50: Too high
Guess 30: Too low
Guess 42: Correct! 🎉
```

---

## 🧪 TESTING

If secret number is **42**, test:
- [ ] Guess 50 → "Too high"
- [ ] Guess 30 → "Too low"
- [ ] Guess 42 → "Correct!"
- [ ] Guess 100 → "Too high"
- [ ] Guess 1 → "Too low"

---

## 💡 FUNCTION TEMPLATE

```javascript
function checkGuess(guess) {
  // Your logic here
  // Compare guess to secretNumber
  // Return message
}

// Test the function
console.log(checkGuess(50));
console.log(checkGuess(30));
console.log(checkGuess(42));
```

---

## 📤 SUBMISSION

1. Create `guessing-game.js` in the `TICKET-04/code/` folder
2. Complete all acceptance criteria
3. Test with multiple guesses
4. Commit and push to GitHub
5. Check off items in `submission.md`

---

## 🌟 STRETCH GOAL (Optional)

- Add a guess counter
- Track how many guesses it took
- Display message: "You won in 3 guesses!"
