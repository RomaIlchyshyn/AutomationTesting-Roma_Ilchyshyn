const { expect } = require('chai');
const { App } = require('../src/pages');

const app = new App();
describe('SigIn:', function() {
    beforeEach(async function () {
        await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
   });

   afterEach(async function () {
      await browser.reloadSession();
   });

   it('SigIn with valid login and password', async function() {
       await app.authPage.register({
           email: "john_admin2@admin.com",
           password: "Pa55word",
       })
       await browser.waitUntil(async function () {
        const url = await browser.getUrl();
        return url === "http://46.101.234.121/doctors";
     }, { timeout: 5000 },
     );
     expect(url).to.be.eql("http://46.101.234.121/doctors")
   })

   it('SigIn wit invalid login and email', async function() {
       await app.authPage.register({
           email: "binry-test123@gmail.com",
           password: "test123",
       })
       await browser.waitUntil(async function () {
        const url = await browser.getUrl();
        return url !== "http://46.101.234.121/doctors";
     }, { timeout: 5000 },
     )
     expect(url).to.be.eql("http://46.101.234.121/sign-in")
      await browser.pause(2000);
   })

    })
