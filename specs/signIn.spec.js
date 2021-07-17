const { expect } = require('chai');

const rundomNumber = () => Date.now();

describe('Sign-In:', function () {

  it('should be able to sign-in', async function () {
    const loginField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');
     
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
    
    await loginField.waitForDisplayed({ timeout: 5000 });
    await loginField.setValue('john_admin2@admin.com');

    await passwordField.waitForDisplayed({ timeout: 5000 });
    passwordField.setValue('Pa55word')
    
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();
    await browser.pause(3000);
    
   await browser.waitUntil(async function(){
      const url = await browser.getUrl();
      return url === 'http://46.101.234.121/doctors';
   },{timeout:5000},
   );
    
    await browser.reloadSession();
})})