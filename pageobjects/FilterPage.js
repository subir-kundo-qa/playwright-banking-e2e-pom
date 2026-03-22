const {expect} = require ('@playwright/test');
class FilterPage {
    constructor (page)
    {
        this.page = page;
        this.selectFilter = page.getByTestId("filter-account-select");
        this.optionFilterT = page.getByTestId("filter-transaction-type-select");
        this.transType = page.getByRole('option', { name: 'Withdrawal' });
        this.fromInput = page.getByTestId("date-from-input");
        this.toInput = page.getByTestId("date-to-input");
        this.clickApply = page.getByRole('button', {name: "Apply"});

    }

    async FilterMethod (accountName,fromDate,transactionTable,toDates)
    {
        await this.selectFilter.click();
        await this.page.getByRole('option', { name: accountName }).click();
        await this.optionFilterT.click();
        await this.transType.click();
        await this.fromInput.fill(fromDate);
        await this.toInput.fill(toDates);
        await this.clickApply.click();
        await expect(transactionTable.locator('tr').filter({ hasText: accountName })).toBeVisible();
        console.log("Account Name Verified Successfully after Filter");
    

    }
}

module.exports = {FilterPage};