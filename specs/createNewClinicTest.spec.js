const { expect } = require('chai');

const rundomNumber = () => Date.now();

describe('Sign-In:', function () {
    it('change speciality and clinic test',async function() {
        const loginField = await $('input[name="email"]');
        const passwordField = await $('input[name="password"]');
        const signInButton = await $('button');
        
      
       
       await browser.url('/sign-in');
      
       await loginField.waitForDisplayed({ timeout: 5000 });
       await loginField.setValue('john_admin2@admin.com');
      
       await passwordField.waitForDisplayed({ timeout: 5000 });
       passwordField.setValue('Pa55word')
       
       await signInButton.waitForDisplayed({ timeout: 5000 });
       await signInButton.click();
      
       await browser.pause(5000);
      
       const clinicPage = await $('=Clinics');
       await clinicPage.waitForDisplayed({ timeout: 5000 });
       await clinicPage.click();
       await browser.pause(3000);
      
      
       const addButton = await $('div.styles_filterWrapper__KeeiZ > button');
       await addButton.click();
       await browser.pause(3000);
      
       
       const nameField = await $('input[name="name"]');
       await nameField.waitForDisplayed({ timeout: 5000});
       await nameField.setValue('Binaty-Studio clinic');
       await browser.pause(3000);
      
      
       const addressField = await $('input[name="address"]')
       await addressField.waitForDisplayed({ timeout: 5000 });
       await addressField.setValue('Bogdana Hhmelnytskoho street');
       await browser.pause(3000);
      
       const ddls = await $$('div.selectStyles__control');
       const status = ddls[0];
       const city = ddls[1];
      
      
       const private = await $('div.selectStyles__option=private');
       await status.click();
       await private.waitForDisplayed({ timeout: 5000 });
       await private.click();
       await browser.pause(3000);
      
      const newYork = await $('div.selectStyles__option=New York, NY')
      await city.click();
      await newYork.waitForDisplayed({ timeout: 5000 });
      await newYork.click();
      await browser.pause(3000);
      
      const addClinicButton = await $('div.styles_submitBtn__jK6DU > button');
      await addClinicButton.waitForDisplayed({ timeout: 5000 });
      await addClinicButton.click();
      await browser.pause(3000);
      })
      })