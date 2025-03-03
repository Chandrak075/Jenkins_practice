const {test , expect} = require("@playwright/test");

const date = new Date().toISOString().split("T")[0];

test("Daily upper Circuit", async ({page})=> {
    
    await page.goto("https://www.etmoney.com/stocks/market-data/only-buyers/4");
    await page.waitForSelector("h1");
    await expect(page.locator("//h1[normalize-space()='List of Top Only Buyers Stocks Today']")).toHaveText("List of Top Only Buyers Stocks Today");
    await page.locator(".w-full.col-span-10").screenshot({path :"Screenshot/" + date +" upper_circuit_stocks.png"});
});


test("Daily lower Circuit", async ({page})=> {
    await page.goto("https://www.etmoney.com/stocks/market-data/only-sellers/5");
    await page.waitForSelector("h1");
    await expect(page.locator("//h1[normalize-space()='List of Top Only Sellers Stocks Today']")).toHaveText("List of Top Only Sellers Stocks Today");
    await page.locator(".w-full.col-span-10").screenshot({path :"Screenshot/" + date + " lower_circuit_stocks.png"});
});


test("52 Week high stocks", async ({page})=> {
    await page.goto("https://www.etmoney.com/stocks/market-data/all-time-high/8");
    await page.waitForSelector("h1");
    await expect(page.locator("//h1[normalize-space()='All time high Stocks']")).toHaveText("All time high Stocks");
    await page.locator(".w-full.col-span-10").screenshot({path :"Screenshot/" + date + " 52_week_high_stocks.png"});
});


test("52 Week low stocks", async ({page})=> {
    await page.goto("https://www.etmoney.com/stocks/market-data/all-time-low/10");
    await page.waitForSelector("h1");
    await expect(page.locator("//h1[normalize-space()='All time low Stocks']")).toHaveText("All time low Stocks");
    await page.locator(".w-full.col-span-10").screenshot({path :"Screenshot/" + date +  " 52_week_low_stocks.png"});
});