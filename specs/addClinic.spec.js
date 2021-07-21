const { expect } = require('chai');
const { App } = require('../src/pages');

const app = new App();

describe('Add new clinic:', function () {
    beforeEach(async function () {
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in');
     });
  
     afterEach(async function () {
        await browser.reloadSession();
     });
  
     it('add new clinic test', async function () {
  
        await app.authPage.register({
           email: "john_admin2@admin.com",
           password: "Pa55word",
        })
  
        await browser.waitUntil(async function () {
           const url = await browser.getUrl();
           return url === "http://46.101.234.121/doctors";
        }, { timeout: 5000 },
        )
  
        const url = await browser.getUrl();
        expect(url).to.be.eql("http://46.101.234.121/doctors")
        await browser.pause(2000);

        const clinic = await $('=Clinics');
        await clinic.click();
        await browser.pause(3000);
        await app.AddClinicButton.page.addClinicClick();

        await app.addClinicPage.addNewClinic({
            name: "TestClinic",
            address: "S.Banderu",
            status: "private",
            city: "New York",
         })
    })})