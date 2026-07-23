# TICKET-02: Grade Calculator

**Priority:** Must Have  
**Story Points:** 3  
**Points:** 4  
**Due:** Tuesday Week 1, End of Class

---

## 📝 USER STORY

```
As a student,
I want to know my letter grade,
So that I can understand my performance.
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Accept a numeric score (0-100)
- [ ] Calculate letter grade based on score
- [ ] Display score and corresponding letter grade
- [ ] Use if/else or else if statements

**Grading Scale:**
- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: Below 60

---

## 📋 REQUIREMENTS

1. **Input:**
   - Declare a `score` variable with a value (0-100)

2. **Logic:**
   - Use conditional statements to determine grade
   - Check ranges from highest to lowest

3. **Output:**
   - Display: "Score: 85 - Grade: B"

---

## 💻 EXAMPLE OUTPUT

```
Score: 92 - Grade: A
Score: 76 - Grade: C
Score: 55 - Grade: F
```

---

## 🧪 TESTING

Test with these scores:
- [ ] 95 (should be A)
- [ ] 85 (should be B)
- [ ] 75 (should be C)
- [ ] 65 (should be D)
- [ ] 50 (should be F)
- [ ] Edge cases: 90, 80, 70, 60

---

## 📤 SUBMISSION

1. Create `grade-calculator.js` in the `TICKET-02/code/` folder
2. Complete all acceptance criteria
3. Test with all test cases above
4. Commit and push to GitHub
5. Check off items in `submission.md`
