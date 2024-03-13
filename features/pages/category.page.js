/*
Create and export a module with class "SecurePage".
This class behaves as a Child class, which contains the selectors of Secure page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/

const BasePage = require('./base.page')

class CategoryPage extends BasePage {
    get addCategoryElement () {
        return $('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a')
    }

    get messageElement () {
        return $('//*[@id="chakra-toast-manager-top-right"]')
    }
}

module.exports = new CategoryPage();