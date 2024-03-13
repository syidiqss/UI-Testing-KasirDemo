/*
Import classes from newly created page object files.
Import the required keywords from Cucumber.
Use Page Object classes and methods to interact with the UI elements.
Use WebDriverIO commands to perform action the UI elements.
Use expect() to perform the necessary validations.
*/

const { Given, When, Then } = require('@cucumber/cucumber');
// import { Given, When, Then } from '@cucumber/cucumber';

const LoginPage = require('../pages/login.page');
const DashboardPage = require('../pages/dashboard.page');
const CategoryPage = require('../pages/category.page');
const CreateCategoryPage = require('../pages/create_category.page');
const dashboardPage = require('../pages/dashboard.page');


//LOGIN
Given('i am on the login page', async () => {
    await LoginPage.open();
    await expect(browser).toHaveTitle('kasirAja');

});

When('i input email as {string} and password as {string}', async function (email, password) {
    await LoginPage.emailTextBox.setValue(email);
    await LoginPage.passwordTextBox.setValue(password);
});

When('i click on button login', async () => {
    await LoginPage.loginButton.click();
});

Then('i must navigate to dashboard page', async () => {
    await expect(DashboardPage.dashboardPageElement).toExist();
});

Then('i must remain on login page displaying a message {string}', async function (errorMessageLogin) {
    await expect(LoginPage.messageElement).toExist();
    await expect(LoginPage.messageElement).toHaveTextContaining(errorMessageLogin);
});

// CATEGORY
Given('i am on the dashboard page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
});

When('i click on category menu', async () => {
    await dashboardPage.categoryMenuElement.click();
});

When('i click on button tambah #kategori', async () => {
    await CategoryPage.addCategoryElement.click();
});

When('i input name of category as {string} and description as {string}', async function (nama, deskripsi) {
    await CreateCategoryPage.namaTextBox.setValue(nama);
    await CreateCategoryPage.deskripsiTextBox.setValue(deskripsi);
});

When('i click button simpan', async () => {
    await CreateCategoryPage.simpanButton.click();
});

Then('i must see a successful message', async () => {
    await expect(CategoryPage.messageElement).toExist();
});

// Then('i must see alert {string}', async function (errorMessageCategory) {
//     await expect(CreateCategoryPage.messageElement).toExist();
//     await expect(CreateCategoryPage.messageElement).toHaveTextContaining(errorMessageCategory);
// });