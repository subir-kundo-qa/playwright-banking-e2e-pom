const { test, expect } = require('@playwright/test');
const { LogIn } = require('../pageobjects/LogIn');
const { CreateAccount } = require('../pageobjects/CreateAccount');
const { AccountVerify } = require('../pageobjects/AccountVerify');
const { TransactionsPage } = require('../pageobjects/TransactionsPage');
const { FilterPage } = require('../pageobjects/FilterPage');

test('End to End Banking Flow', async ({ page }) => {

    const accountName = "Mr. J";
    const initialBalance = "20000";
    const transAmount = "10000.00";
    const transactionTable = page.locator("#transactions-table-wrapper");
    const fromDate = "2026-03-22";
    const toDates = "2026-03-23";

    //Log-In
    const logInPage = new LogIn(page);
    await logInPage.goTo();
    await logInPage.loginProcess();



    //Create Account
    const creteAccountPage = new CreateAccount(page)
    await creteAccountPage.CreateAccountP(accountName, initialBalance, transactionTable);

    // Account Number verify
    const accountVerifyPage = new AccountVerify(page);
    await accountVerifyPage.verifyAccount(accountName);


    //Transactions
    const transactionsPage = new TransactionsPage(page);
    await transactionsPage.TransactionsMethod(accountName, transAmount, transactionTable);


    //Filter
    const FilterPageL = new FilterPage(page);
    await FilterPageL.FilterMethod(accountName, fromDate, transactionTable, toDates);


});
