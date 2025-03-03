const { test, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");


const date = new Date().toISOString().split("T")[0];

//See more button handling Function
async function handleSeeMore(page) {
    const seeMoreLocator = page.locator("span[class='cursor-pointer text-primary-green text-[16px] leading-5 font-proximaNovaSemibold capitalize']");

    while (await seeMoreLocator.isVisible()) {
        await seeMoreLocator.click();
        await page.waitForTimeout(2000); // Wait for new data to load
        await page.waitForSelector("tbody tr:last-child"); // Ensure new rows are loaded
    }
}


test("Scrape Stock Market 52 week low Data and Save as JSON", async ({ page }) => {
    await page.goto("https://www.etmoney.com/stocks/market-data/all-time-low/10");

    // Wait for the table to load
    await page.waitForSelector("tbody tr");

    //Handle see more button function calling
    await handleSeeMore(page);
    

    // Get the number of rows in the table
    const rowCount = await page.locator("//tbody/tr").count();

    // Extract stock names and prices
    let stockData = [];

    for (let i = 1; i <= rowCount; i++) {
        const stockName = await page.locator(`//tbody/tr[${i}]/td[1]`).innerText();
        const stockPrice = await page.locator(`//tbody/tr[${i}]/td[2]`).innerText();
        const todays_low= await page.locator(`//tbody/tr[${i}]/td[5]`).innerText();
        const previous_low= await page.locator(`//tbody/tr[${i}]/td[6]`).innerText();

        stockData.push({
            Stock_name: stockName.trim(),
            price_now: stockPrice.trim(),
            Todays_low: todays_low.trim(),
            Previous_low: previous_low.trim()
        });
    }

    // Ensure the folder exists before writing the file
    const folderPath = path.join(__dirname, "jsonData");
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`📂 Created folder: ${folderPath}`);
    }

    // Save to JSON file
    const filePath = path.join(folderPath, `${date} _52_week_low_stocks.json`);
    fs.writeFileSync(filePath, JSON.stringify(stockData, null, 2));
    
    console.log(`✅ Data saved at: ${filePath}`);
});



test("Scrape Stock Market 52 week High Data and Save as JSON", async ({ page }) => {
    await page.goto("https://www.etmoney.com/stocks/market-data/all-time-high/8");

    // Wait for the table to load
    await page.waitForSelector("tbody tr");

    //Handle see more button function calling
    await handleSeeMore(page);

    // Get the number of rows in the table
    const rowCount = await page.locator("//tbody/tr").count();

    // Extract stock names and prices
    let stockData = [];

    for (let i = 1; i <= rowCount; i++) {
        const stockName = await page.locator(`//tbody/tr[${i}]/td[1]`).innerText();
        const stockPrice = await page.locator(`//tbody/tr[${i}]/td[2]`).innerText();
        const todays_high= await page.locator(`//tbody/tr[${i}]/td[5]`).innerText();
        const previous_high= await page.locator(`//tbody/tr[${i}]/td[6]`).innerText();

        stockData.push({
            Stock_name: stockName.trim(),
            price_now: stockPrice.trim(),
            Todays_high: todays_high.trim(),
            Previous_high: previous_high.trim()
        });
    }

    // Ensure the folder exists before writing the file
    const folderPath = path.join(__dirname, "jsonData");
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`📂 Created folder: ${folderPath}`);
    }

    // Save to JSON file
    const filePath = path.join(folderPath, `${date} _52_week_high_stocks.json`);
    fs.writeFileSync(filePath, JSON.stringify(stockData, null, 2));
    
    console.log(`✅ Data saved at: ${filePath}`);
});




test("Scrape Stock Market Upper circuit Data and Save as JSON", async ({ page }) => {
    await page.goto("https://www.etmoney.com/stocks/market-data/only-buyers/4");

    // Wait for the table to load
    await page.waitForSelector("tbody tr");

    //Handle see more button function calling
    await handleSeeMore(page);

    // Get the number of rows in the table
    const rowCount = await page.locator("//tbody/tr").count();

    // Extract stock names and prices
    let stockData = [];

    for (let i = 1; i <= rowCount; i++) {
        const stockName = await page.locator(`//tbody/tr[${i}]/td[1]`).innerText();
        const stockPrice = await page.locator(`//tbody/tr[${i}]/td[2]`).innerText();
        const chnage= await page.locator(`//tbody/tr[${i}]/td[3]`).innerText();

        stockData.push({
            Stock_name: stockName.trim(),
            price_now: stockPrice.trim(),
            Change_percentage: chnage.trim()
        });
    }

    // Ensure the folder exists before writing the file
    const folderPath = path.join(__dirname, "jsonData");
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`📂 Created folder: ${folderPath}`);
    }

    // Save to JSON file
    const filePath = path.join(folderPath, `${date} _Upper_circuit_stocks.json`);
    fs.writeFileSync(filePath, JSON.stringify(stockData, null, 2));
    
    console.log(`✅ Data saved at: ${filePath}`);
});




test("Scrape Stock Market Lower circuit Data and Save as JSON", async ({ page }) => {
    await page.goto("https://www.etmoney.com/stocks/market-data/only-sellers/5");

    // Wait for the table to load
    await page.waitForSelector("tbody tr");

    //Handle see more button function calling
    await handleSeeMore(page);

    // Get the number of rows in the table
    const rowCount = await page.locator("//tbody/tr").count();

    // Extract stock names and prices
    let stockData = [];

    for (let i = 1; i <= rowCount; i++) {
        const stockName = await page.locator(`//tbody/tr[${i}]/td[1]`).innerText();
        const stockPrice = await page.locator(`//tbody/tr[${i}]/td[2]`).innerText();
        const chnage= await page.locator(`//tbody/tr[${i}]/td[3]`).innerText();

        stockData.push({
            Stock_name: stockName.trim(),
            price_now: stockPrice.trim(),
            Change_percentage: chnage.trim()
        });
    }

    // Ensure the folder exists before writing the file
    const folderPath = path.join(__dirname, "jsonData");
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`📂 Created folder: ${folderPath}`);
    }

    // Save to JSON file
    const filePath = path.join(folderPath, `${date} _Lower_circuit_stocks.json`);
    fs.writeFileSync(filePath, JSON.stringify(stockData, null, 2));
    
    console.log(`✅ Data saved at: ${filePath}`);
});