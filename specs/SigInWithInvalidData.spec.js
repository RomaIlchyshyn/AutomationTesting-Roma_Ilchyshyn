const { expect } = require('chai');

const rundomNumber = () => Date.now();

describe('Sign-In:', function () {
    it('test with invalid data',async function() {
        const loginField = await $('input[name="email"]');
        const passwordField = await $('input[name="password"]');
        const signInButton = await $('button');
      
       
       await browser.url('/sign-in');
      
       await loginField.waitForDisplayed({ timeout: 5000 });
       await loginField.setValue('binary-tester@admin.com');
      
       await passwordField.waitForDisplayed({ timeout: 5000 });
       passwordField.setValue('test123')
       
       await signInButton.waitForDisplayed({ timeout: 5000 });
       await signInButton.click();
       await browser.pause(3000);
       
      
       await browser.waitUntil(async function(){
        const url = await browser.getUrl();
        return url !== 'http://46.101.234.121/doctors';
      },{timeout:5000},
      );
    })})