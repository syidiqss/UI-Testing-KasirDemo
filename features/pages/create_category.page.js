/*
Create and export a module with class "SecurePage".
This class behaves as a Child class, which contains the selectors of Secure page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/

const BasePage = require('./base.page')

class CreateCategoryPage extends BasePage {
    get namaTextBox () {
        return $('#nama')
    }
    
    get deskripsiTextBox () {
        return $('#deskripsi')
    }
    
    get simpanButton () {
        return $('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/button')
    }

    get messageElement () {
        return $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3')
    }

    
}

module.exports = new CreateCategoryPage();