/*
Create and export a module with class "SecurePage".
This class behaves as a Child class, which contains the selectors of Secure page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/

const BasePage = require('./base.page')

class DashboardPage extends BasePage {
    get dashboardPageElement () {
        return $('//h3[contains(text(),"kasirAja")]')
    }

    get categoryMenuElement () {
        return $('#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div > div')
    }
}

module.exports = new DashboardPage();