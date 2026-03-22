const { expect } = require('@playwright/test'); 

class AccountVerify {
    constructor(page) {
        this.page = page;
        this.transLink = page.getByTestId("nav-accounts");
        this.dashLink = page.getByTestId("nav-dashboard");
    }

    async verifyAccount(accountName) {
        await this.transLink.click();
        await this.page.waitForLoadState('networkidle');

        const accountNumberText = await this.page.locator('tr') 
            .filter({ hasText: accountName })
            .locator('td')
            .first()
            .textContent();

        console.log("Account Number:", accountNumberText);
        await this.dashLink.click();

        
        await expect(
            this.page.locator("#accounts-overview")
                .filter({ hasText: accountName })
                .filter({ hasText: accountNumberText })
        ).toBeVisible();

        console.log("Both have verified Successfully");
    }
}

module.exports = { AccountVerify };