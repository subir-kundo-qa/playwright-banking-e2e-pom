# 🎭 playwright-banking-e2e-pom

> End-to-End Banking Automation using Playwright with Page Object Model (POM) design pattern. Covers login, account creation, transactions, filtering and verification flows.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Page Objects](#page-objects)
- [Test Flow](#test-flow)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Author](#author)

---

## 📖 About the Project

This project is a fully automated **End-to-End test suite** for a banking web application built using **Playwright** and the **Page Object Model (POM)** design pattern.

The test suite covers the complete banking flow including:
- User Login
- Account Creation
- Account Number Verification
- Withdrawal Transactions
- Transaction Filtering by date and account

The application under test: [QA Playground - SecureBank](https://www.qaplayground.com/bank)

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev/) | E2E Test Automation Framework |
| [Node.js](https://nodejs.org/) | JavaScript Runtime |
| Page Object Model (POM) | Design Pattern for Test Architecture |
| JavaScript | Programming Language |

---

## 📁 Project Structure

```
playwright-banking-e2e-pom/
│
├── tests/
│   └── MainFlow.spec.js        # Main test spec file
│
├── pageobjects/
│   ├── LogIn.js                # Login page actions
│   ├── CreateAccount.js        # Create account page actions
│   ├── AccountVerify.js        # Account verification actions
│   ├── TransactionsPage.js     # Transaction page actions
│   └── FilterPage.js           # Filter/search page actions
│
├── playwright.config.js        # Playwright configuration
├── package.json
└── README.md
```

---

## 📄 Page Objects

### 🔐 LogIn.js
Handles navigation to the app and user login.
- `goTo()` — navigates to the bank URL
- `loginProcess()` — fills credentials and clicks login

### 🏦 CreateAccount.js
Handles creation of a new bank account.
- `CreateAccountP(accountName, initialBalance)` — fills account details and submits the form, then verifies the account name is visible

### ✅ AccountVerify.js
Handles verification of the created account on the Accounts and Dashboard pages.
- `verifyAccount(accountName)` — navigates to Accounts, retrieves the account number, then verifies both the account name and number appear in the Dashboard overview

### 💸 TransactionsPage.js
Handles creating a new withdrawal transaction.
- `TransactionsMethod(accountName, transAmount, transactionTable)` — selects withdrawal type, picks the account, fills the amount, submits and verifies the transaction in the table

### 🔍 FilterPage.js
Handles filtering transactions by account, type, and date range.
- `FilterMethod(accountName, fromDate, transactionTable, toDates)` — applies filters and verifies the filtered results

---

## 🔄 Test Flow

The main test `End to End Banking Flow` in `MainFlow.spec.js` follows this sequence:

```
1. 🔐 Login           → Navigate to app and login with admin credentials
        ↓
2. 🏦 Create Account  → Create a new Savings Account with initial balance
        ↓
3. ✅ Verify Account  → Verify account number and name on Dashboard
        ↓
4. 💸 Transaction     → Perform a Withdrawal transaction
        ↓
5. 🔍 Filter          → Filter transactions by account, type and date range
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/subir-kundo-qa/playwright-banking-e2e-pom
```

2. Navigate to the project folder:
```bash
cd playwright-banking-e2e-pom
```

3. Install dependencies:
```bash
npm install
```

4. Install Playwright browsers:
```bash
npx playwright install
```

---

## ▶️ Running Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/MainFlow.spec.js
```

Run tests in headed mode (see the browser):
```bash
npx playwright test --headed
```

View the HTML test report:
```bash
npx playwright show-report
```

---

## 👨‍💻 Author

**Subir Kundo**  
QA Engineer  
📧 kundosubir@gmail.com

---

## 📝 License

This project is open source and available for learning and practice purposes.

---

> 💡 *Built with ❤️ for learning Playwright and QA Automation best practices.*
