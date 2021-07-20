const { expect } = require('chai');

const rundomNumber = () => Date.now();

describe('editFunction:', function () {
    it('edit function test',async function(){
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
      
      
       const editButton = await $('div.styles_infoHeader__Ej0xQ > button')
       editButton.waitForDisplayed({ timeout: 5000})
       await editButton.click();
      
       await browser.pause(3000);
      
      
       const phoneInputField = await $('input[name="phone"]')
       await phoneInputField.waitForDisplayed({ timeout:5000 })
       await phoneInputField.setValue('3801010100')
       await browser.pause(3000);
      
      
       const confirmEditButton = await $('div:nth-child(10) > button');
       await confirmEditButton.waitForDisplayed({ timeout: 5000 })
       await confirmEditButton.click();
       await browser.pause(3000);
      
      
      })})