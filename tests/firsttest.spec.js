
//Author - Krishna Rao

const { test } = require('@playwright/test');

//Playwrite test with Browser Context
test('First Playwrite test', async ({browser}) => {
    
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.google.co.uk/')
    
})

//Playwrite test with Page Context directly
test('Second Playwrite test', async ({page}) => {

    await page.goto('https://www.google.co.uk/')

})