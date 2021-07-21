const { Button } = require('../elements');
const { Input } = require('../elements');

class EditInfoPage {
    constructor() {
      this.nameInputField = new Input('input[placeholder="Name"]');
      this.surnameInputeField = new Input('input[placeholder="surname"]');
      this.ddls = new Button('div.selectStyles__control');
      this.gender = new Button('div.selectStyles__control', 2);
      this.birthdayInputField = new Input('input[name="birthday"]');
      this.emailInputField = new Input('input[name="email"]');
      this.phoneInputField = new Input('input[name="phone"]');
      this.status = new Button('div.selectStyles__control', 3);
      this.genderOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
      this.statusOption = new Button('div.selectStyles__single-value=TEXT_TO_REPLACE');
      this.confirmEditButton = new Button('div:nth-child(10) > button');
   }

   async edit ({name, surname, gender, birthday, email, phone, status }) {
       await this.nameInputField.setValue(name);
       await this.surnameInputeField.setValue(surname);
       await this.gender.click();
       await this.genderOption.click(gender);
       await this.birthdayInputField.setValue(birthday);
       await this.emailInputField.setValue(email);
       await this.phoneInputField.setValue(phone);
       await this.status.click();
       await this.statusOption.click(status);
       await this.confirmEditButton.click();
       
   }
    }
    module.exports = {EditInfoPage};
