class LogIn {
    constructor(page) {
        this.page = page;
        this.userEmail = page.getByTestId("username-input");
        this.userPass = page.getByTestId("password-input")
        this.signIn = page.getByRole("button", { name: 'Login' });

    }

    async goTo() {
        await this.page.goto("https://www.qaplayground.com/bank");
        console.log(await this.page.title());
    }

    async loginProcess() {
        await this.userEmail.fill("admin");
        await this.userPass.fill("admin123");
        await this.signIn.click();

    }
}

module.exports = { LogIn };