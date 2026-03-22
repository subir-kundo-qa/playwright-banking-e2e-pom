const { expect } = require('@playwright/test');
class CreateAccount {
    constructor(page) {
        this.page = page;
        this.addAccount = page.locator("#add-account-link")
        this.nameAccount = page.getByPlaceholder("e.g., My Savings Account");
        this.accountType = page.getByTestId('account-type-select');
        this.selectOption = page.getByRole('option', { name: 'Savings Account' });
        this.addBalance = page.locator("#initial-balance");
        this.createButton = page.getByRole("button", { name: "Save Account" });

    }

    async CreateAccountP(accountName, initialBalance) {
        await this.addAccount.click();
        await this.nameAccount.fill(accountName);
        await this.accountType.click();
        await this.selectOption.click();
        await this.addBalance.fill(initialBalance);
        await this.createButton.click();
        await expect(this.page.getByText(accountName)).toBeVisible();
        console.log("Account Name verified Successfully");


    }
}

module.exports= {CreateAccount};







