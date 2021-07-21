const { expect } = require('chai');
const { App } = require('../src/pages');
const { EditInfoPage } = require('../src/pages');

const app = new App();

describe('Edit profile test:', function () {
    beforeEach(async function () {
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in');
     })
  
     afterEach(async function () {
        await browser.reloadSession();
     })

     it('Edit profile function test', async function(){
         await app.authPage.register({
            email: "john_admin2@admin.com",
            password: "Pa55word",
         })
         await browser.waitUntil(async function () {
            const url = await browser.getUrl();
            return url === "http://46.101.234.121/doctors";
         }, { timeout: 5000 },
         )
         const myProfileButton = await $('=My Profile');
         await myProfileButton.click();

         const editButton = await $('div.styles_infoHeader__Ej0xQ > button');
         await editButton.click();
         await browser.pauser(3000);

         await app.EditInfoPage.edit({
            name: "Rickardo",
            surname: "Milos",
            birthDate: "13/09/1997",
            email: "rickardo.milos@gmail.com",
            phone: "3809945389",
            status: "doctor",
            gender: "male",
         })
         })
     })