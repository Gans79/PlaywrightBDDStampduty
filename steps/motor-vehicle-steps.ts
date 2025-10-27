import { expect } from '@playwright/test';
import { test } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();



Given('Navigate to motor vehicle stamp duty via {string}', async ({ page }, url: string) => {

    await page.goto(url);


});




When('I click on {} on the stamp duty page', async ({ page }, button: string) => {


         await page.locator(`a[role="button"]`, { hasText: 'Check online'}).click()


});

When('User clicks {} and enters purchase {} and clicks calculate', async ({ page }, radio: string, amount: string) => {


         await page.locator(`label[for="passenger_Y"]`).check();
         await page.locator(`input[id="purchasePrice"]`).fill(amount)
         await page.locator(`button[type="submit"]`, { hasText: 'Calculate'}).click()



});


Then('User is landed on the calculator page', async ({ page }) => {


         await expect(page.locator(`h1`)).toContainText('Revenue NSW calculators');
   
   
});


Then('Pop up calculation window is shown with {} and {}', async ({ page }, price: string, duty: string) => {

       const modal = page.locator('.modal-content');
       await modal.waitFor({ state: 'visible', timeout: 50000})
       await expect(page.locator(`td:has-text("Purchase price") + * `)).toHaveText(price);
       await expect(page.locator(`td:has-text("Duty payable") + * `)).toHaveText(duty);

});









