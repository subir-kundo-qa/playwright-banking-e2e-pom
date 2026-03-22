const { expect } = require('@playwright/test');
class TransactionsPage {
    constructor(page,) {
        this.page = page;
        this.dashBoardLink = page.getByTestId("nav-dashboard");
        this.newTransactions = page.locator("#new-transaction-link");
        this.selectTransactionsType = page.getByTestId('transaction-type-select');
        this.optionSelect = page.getByRole('option', { name: 'Withdrawal' });
        this.accountsLink = page.locator("#from-account");
        this.amountFill = page.getByTestId("transaction-amount-input");
        this.optionalText = page.getByPlaceholder("Optional description");
        this.submitButton = page.getByRole('button', { name: 'Submit Transaction' });


    }

    async TransactionsMethod(accountName, transAmount, transactionTable) {
        await this.dashBoardLink.click();
        await this.newTransactions.click();
        await this.selectTransactionsType.click();
        await this.optionSelect.click();
        await this.accountsLink.click();
        await this.page.getByRole('option', { name: accountName }).click();
        await this.amountFill.fill(transAmount);
        await this.optionalText.fill("Sending for Test Purpose");
        await this.submitButton.click();

        await expect(transactionTable.locator('tr').filter({ hasText: accountName })).toBeVisible();
        console.log("Account Name Verified Successfully");



    }
}

module.exports = {TransactionsPage};






