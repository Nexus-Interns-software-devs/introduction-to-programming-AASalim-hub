# 🔬 LAB 07: Library Book Tracker
## Build CLI App with Data Structures

**Duration:** 120 minutes  
**Difficulty:** Intermediate-Hard  
**Type:** Individual Lab  
**Worth:** 10 points

---

## 🎯 OBJECTIVES

Build a console application that manages a library's book inventory using appropriate data structures. This will prevent you from accidentally copying the Contact Manager demo! 😉

---

## ✅ FEATURES REQUIRED

### Core Functionality:
- **Add book** (title, author, ISBN, genre)
- **View all books** (formatted list)
- **Search by title**
- **Search by author**
- **Update book details**
- **Delete book**

### Data Management:
- Store books in an array of objects
- Implement search algorithms using array methods (`.filter()`, `.find()`)
- Sort books alphabetically by title
- Ensure no duplicate ISBNs are added

### Bonus:
- Export to JSON file
- Import from JSON file
- Track "Checked Out" vs "Available" status
- Favorite/Recommended books feature

---

## 📝 STARTER STRUCTURE

```javascript
const library = [];  // Array of book objects

function addBook(title, author, isbn, genre) {
  const book = { title, author, isbn, genre, status: "Available" };
  // TODO: Check if ISBN already exists before adding
  library.push(book);
}

function viewAllBooks() {
  // TODO: Display all books formatted nicely
}

function searchByTitle(titleQuery) {
  // TODO: Find and return matching books (case-insensitive)
}

// TODO: Implement remaining functions (update, delete, search by author)
```

---

## 📊 GRADING

| Criteria | Points |
|----------|--------|
| Add/View/Delete work | 3 |
| Search functionality | 2 |
| Update functionality | 2 |
| Data validation (No duplicate ISBN) | 1 |
| Code quality | 2 |
| **Total** | 10 |

---

## 📤 SUBMISSION

1. Create `library-tracker.js` in the `LAB-07/code/` folder
2. Complete all required features
3. Test all functions
4. Commit and push to GitHub
5. Check off items in `submission.md`

---

**Build something practical you could actually use!** 📚
