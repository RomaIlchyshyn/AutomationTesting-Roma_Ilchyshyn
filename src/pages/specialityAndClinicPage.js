const { Button } = require ('../elements');

class SpeacialityAndClinic {
    constructor() {
        this.ddls = new Button('div.selectStyles__control');
        this.speciality = new Button('div.selectStyles__control', 0);
        this.clinic = new Button('div.selectStyles__control', 1);
        this.specialityChoose = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
        this.clinicChoose = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
        this.submitButton1 = new Button('div.styles_selectSubmitWrapper__1xyQL > button');
        this.submitButton2 = new Button('div.styles_selectSubmitWrapper__1VXHA > button');

    }

    async changeSpecialityAndClinic( { speciality, clinic }) {
        await this.speciality.click();
        await this.specialityChoose.click(speciality);
        await this.submitButton1.click();
        await this.clinic.click();
        await this.clinicChoose.click(clinic);
        await this.submitButton2.click();
    }

}
module.exports = { SpecialityAndClinicPage };