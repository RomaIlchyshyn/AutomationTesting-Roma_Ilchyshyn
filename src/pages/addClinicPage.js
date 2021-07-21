const { Button } = require('../elements');
const { Input } = require('../elements');

class AddClinic {
    constructor() {
        this.nameField = new Input('input[name="name"]');
        this.addressField = new Input('input[name="addres"]');

        this.ddls = new Button('div.selectStyles__control');
        this.status = new Button('div.selectStyles__control',0);
        this.city = new Button('div.selectStyles__control',1);
        this.statusChoose = new Button('div.selectStyles__single-value=TEXT_TO_REPLACE');
        this.cityChoose = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
        this.addClinicButton = new Button('div.styles_submitBtn__jK6DU > button');

    }
    async addNewClinic( { name, address, status, city }) {
        await this.nameField.setValue(name);
        await this.addressField.setValue(address);
        await this.status.click();
        await this.statusChoose.click(status);
        await this.city.click();
        await this.cityChoose.click(city);
        await this.addClinicButton.click();
    }
}
module.exports = {AddClinic};