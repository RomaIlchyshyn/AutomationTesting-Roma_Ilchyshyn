const { Button } = require('../elements');

class ClinicButn {
    constructor() {
        this.addButton = new Button('div.styles_filterWrapper__KeeiZ > button');

    }
    async addClinicClick() {
        await this.addButton.click();
    }
}
module.exports = { ClinicButn};