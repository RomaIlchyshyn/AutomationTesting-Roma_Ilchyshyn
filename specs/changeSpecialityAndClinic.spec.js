const { expect } = require('chai');

const rundomNumber = () => Date.now();

describe('Sign-In:', function () {
    it('change speciality and clinic test',async function(){
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
      
      
       const myProfileButton = await $('=My Profile');
       await myProfileButton.waitForDisplayed({ timeout: 5000});
      
       await myProfileButton.click();
       await browser.pause(3000);
      
      
      const ddls = await $$('div.selectStyles__control');
      
      const speciality = ddls[0];
      const clinic = ddls[1];
      
      const surgeon = await $('div.selectStyles__option=surgeon')
      const clevelandClinic = await $('div.selectStyles__option=Cleveland Clinic')
      const saveButton1 = await $('div.styles_selectSubmitWrapper__1xyQL > button');
      const saveButton2 = await $('div.styles_selectSubmitWrapper__1VXHA > button');
      
      
      
      await speciality.click();
      await surgeon.waitForDisplayed({ timeout: 5000});
      await surgeon.click();
      await browser.pause(3000);
      await saveButton1.click()
      
      
      
      await clinic.click();
      await clevelandClinic.waitForDisplayed({ timeout: 5000 });
      await clevelandClinic.click();
      await browser.pause(3000);
      await saveButton2.click();
      await browser.pause(3000);
      
      })})