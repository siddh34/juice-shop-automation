import { test, expect, Page } from '@playwright/test';


async function generateTraffic(page: Page, userCount: number) {
  // const res: any = fs.readFileSync('./res-juice.text');
  // const url = res.toString();
  const url = `http://acf20c1830e2149b2944be14c4621651-735567977.us-east-2.elb.amazonaws.com:8000`
  //  for number of users
  if (!userCount) {
    userCount = 1;
  }
  for (let i = 0; i < userCount; i++) {
    await spinUpUsers(page, url, i);
  }
  // Wait for all promises to resolve
  console.log("traffic is generated");
}

function getRandomEmail(): string {
  var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var string = '';
  for (var ii = 0; ii < 15; ii++) {
    string += chars[Math.floor(Math.random() * chars.length)];
  }
  return string + '@gmail.com';
}

async function spinUpUsers(page: Page, url: string, i: number) {
  console.log("url2", url);
  await page.goto(url + '/#/');
  if (i == 0) {
    await page.getByLabel('Close Welcome Banner').click();
  }
  await page.getByLabel('Show/hide account menu').click();
  await page.getByRole('menuitem', { name: 'Go to login page' }).click();
  await page.getByLabel('dismiss cookie message').click();
  await page.getByRole('link', { name: 'Not yet a customer?' }).click();
  await page.getByLabel('Email address field').click();
  const email = getRandomEmail();
  await page.getByLabel('Email address field').fill(email);
  await page.locator('div').filter({ hasText: /^Password \*$/ }).nth(1).click();
  await page.getByLabel('Field for the password').fill('1234567');
  await page.getByLabel('Field to confirm the password').click();
  await page.getByLabel('Field to confirm the password').fill('1234567');
  await page.getByLabel('Selection list for the security question').click();
  await page.getByRole('option', { name: 'Your eldest siblings middle name?' }).click();
  await page.getByPlaceholder('Answer to your security question').click();
  await page.getByPlaceholder('Answer to your security question').fill('do');
  await page.getByLabel('Button to complete the registration').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'X' }).click();
  await page.getByLabel('Text field for the login email').click();
  await page.getByLabel('Text field for the login email').fill(email);
  await page.getByLabel('Text field for the login password').click();
  await page.getByLabel('Text field for the login password').fill('1234567');
  await page.getByLabel('Login', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-card').filter({ hasText: 'Banana Juice (1000ml) 1.99¤Add to Basket' }).getByLabel('Add to Basket').click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Show the shopping cart').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByLabel('Add a new address').click();
  await page.getByPlaceholder('Please provide a country.').click();
  await page.getByPlaceholder('Please provide a country.').fill('awdawd');
  await page.getByPlaceholder('Please provide a name.').click();
  await page.getByPlaceholder('Please provide a name.').fill('awdwd');
  await page.locator('div').filter({ hasText: /^Mobile Number \*$/ }).nth(2).click();
  await page.getByPlaceholder('Please provide a mobile number.').fill('2234234');
  await page.getByPlaceholder('Please provide a mobile number.').click();
  await page.getByPlaceholder('Please provide a ZIP code.').click();
  await page.getByPlaceholder('Please provide a ZIP code.').fill('234234');
  await page.getByPlaceholder('Please provide an address.').click();
  await page.getByPlaceholder('Please provide an address.').fill('swfewefwef');
  await page.getByPlaceholder('Please provide a city.').click();
  await page.getByPlaceholder('Please provide a city.').fill('wefwef');
  await page.getByPlaceholder('Please provide a state.').click();
  await page.getByPlaceholder('Please provide a state.').fill('wefwef');
  await page.getByRole('button', { name: 'send Submit' }).click();
  await page.waitForTimeout(1000);
  // await page.locator('label').click();
  // await page.getByRole('cell', { name: 'swfewefwef, wefwef, wefwef, 234234' }).click();
  await page.getByRole('cell', { name: 'swfewefwef, wefwef, wefwef, 234234' }).click();
  await page.getByLabel('Proceed to payment selection').click();
  await page.getByRole('cell', { name: 'One Day Delivery' }).click();
  await page.getByRole('cell', { name: 'One Day Delivery' }).click();
  await page.getByLabel('Proceed to delivery method selection').click();
  await page.getByRole('button', { name: 'Add new card Add a credit or debit card' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('wefwef');
  await page.getByLabel('Card Number *').click();
  await page.getByLabel('Card Number *').fill('2342342342342343');
  await page.getByLabel('Expiry Month *').selectOption('4');
  await page.getByLabel('Expiry Year *').selectOption('2084');
  await page.getByRole('button', { name: 'send Submit' }).click();
  await page.getByRole('cell', { name: '************2343' }).click();
  await page.getByRole('cell', { name: '************2343' }).click();
  await page.getByRole('row', { name: '************2343 wefwef 4/2084' }).locator('label').click();
  await page.getByLabel('Proceed to review').click();
  await page.getByLabel('Complete your purchase').click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Show/hide account menu').click();
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Go to user profile' }).click();
  await page.locator('div').filter({ hasText: 'Image URL:' }).nth(4).click();
  await page.locator("#url").click();
  // await page.getByPlaceholder('e.g. https://www.gravatar.com/avatar/93585519347f6b5e15e4f186e2d0a82a').fill('https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png');
  await page.waitForTimeout(1000);
  await page.getByLabel('Button to include image from link').click();
  await page.goto(url + '/profile');
  await page.getByRole('link', { name: 'arrow_back' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Open Sidenav').click();
  await page.getByLabel('Go to contact us page').click();
  await page.getByPlaceholder('What did you like or dislike?').click();
  await page.getByPlaceholder('What did you like or dislike?').fill('dawdawd');
  await page.getByLabel('Slider for selecting the star rating').click();
  await page.locator('div').filter({ hasText: /^Result \*$/ }).nth(2).click();
  await page.getByPlaceholder('Please enter the result of the CAPTCHA.').fill('123');
  await page.getByLabel('Button to send the review').click();
  await page.getByLabel('Open Sidenav').click();
  await page.getByLabel('Go to complain page').click();
  await page.getByPlaceholder('What would you like to tell us?').fill('d');
  await page.getByPlaceholder('What would you like to tell us?').click();
  await page.getByPlaceholder('What would you like to tell us?').fill('dawdawd');
  await page.getByLabel('Button to send the complaint').click();
  await page.getByLabel('Open Sidenav').click();
  await page.getByLabel('Go to about us page').click();
  await page.getByLabel('Open Sidenav').click();
  await page.getByLabel('Go to photo wall').click();
  await page.getByLabel('Back to homepage').click();
  await page.getByRole('button', { name: 'Apple Pomace' }).click();
  await page.getByPlaceholder('What did you like or dislike?').click();
  await page.getByPlaceholder('What did you like or dislike?').fill('ewfwef');
  await page.getByLabel('Send the review').click();
  await page.getByLabel('Close Dialog').click();
  await page.goto(
    url + "/rest/products/search?q=apple%27%29%29UNION%20SELECT%20sql,2,3,4,5,6,7,8,9%20FROM%20sqlite_master--",
  );
  await page.waitForTimeout(1000);
  await page.goto(url + "/rest/products/search?q=<b%20<script>alert%281%29<%2Fscript>0");
  await page.waitForTimeout(1000);
  await page.goto(url + "/rest/products/search?q=cat%20%2Fetc%2Fhosts");
  await page.waitForTimeout(1000);
  console.log("Incidents are created!");
}


test('Traffic for juice-shop', async ({ page }) => {
  // await page.goto('https://playwright.dev/');
  test.slow()
  await generateTraffic(page, 1);

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
// 