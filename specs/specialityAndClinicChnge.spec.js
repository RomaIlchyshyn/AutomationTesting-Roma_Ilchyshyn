const { expect } = require('chai');
const { App } = require('../src/pages');

const app = new App();

describe('Edit speciality and cliniks:', function () {
    beforeEach(async function () {
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in');
     })
  
     afterEach(async function () {
        await browser.reloadSession();
     })
     it('edit speciality and clinic for a doctor', async function () {

        await app.SigninPage.signin({
           email: "john_admin2@admin.com",
           password: "Pa55word",
        })
  
        await browser.waitUntil(async function () {
           const url = await browser.getUrl();
           return url === "http://46.101.234.121/doctors";
        }, { timeout: 5000 },
        )
        const url = await browser.getUrl()
        const myProfileButton = await $('=My Profile');
        await myProfileButton.click();
        await browser.pause(3000);
        await app.specialityAndClinicPage.changeSpecialityAndClinic({
            speciality: "surgeon",
            clinic: "Cleveland Clinic",
        })
    })})
