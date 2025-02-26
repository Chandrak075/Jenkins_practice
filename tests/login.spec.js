const{test,expect}  = require('@playwright/test')
const exp = require('constants')

test("Login test", async({page}) => {
    const startTime = Date.now();
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    const endTime = Date.now();
    console.log(`Page Load Time: ${endTime - startTime} ms`);


    await page.locator('#username').fill("student")
    await page.locator('#password').fill("Password123")
    await page.locator('#submit').click()
    await page.waitForTimeout(1000)

    await expect(page.locator(".post-title")).toHaveText("Logged In Successfully")
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation");


    await page.getByText("Log out").click()
    await page.waitForTimeout(1000)
    await expect(page.locator("//h2[normalize-space()='Test login']")).toHaveText("Test login")
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
})