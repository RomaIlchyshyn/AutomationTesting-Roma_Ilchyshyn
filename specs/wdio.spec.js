const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('Registration:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  it('should be able to register doctor', async function () {
    await app.authPage.register({
      name: `John${rundomNumber()}`,
      surname: 'Doctor',
      email: `marcus${rundomNumber()}@gmail.com`,
      password: 'Pa55word',
      phone: '380999999',
      birthDate: '11/11/2000',
      status: 'doctor',
      gender: 'female',
    });


const rundomNumber = () => Date.now();

describe('Registration:', function () {

  xit('should be able to sign-in', async function () {
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
    
   await browser.waitUntil(async function(){
      const url = await browser.getUrl();
      return url === 'http://46.101.234.121/doctors';
   },{timeout:5000},
   );
    
    await browser.reloadSession();
})
 xit('test with invalid data',async function() {
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
 

 await browser.waitUntil(async function(){
  const url = await browser.getUrl();
  return url !== 'http://46.101.234.121/doctors';
},{timeout:5000},
);

})
xit('edit function test',async function(){
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


    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
  });

  it('should be able to register patient', async function () {
    await app.authPage.register({
      name: `John${rundomNumber()}`,
      surname: 'Patient',
      email: `marcus${rundomNumber()}@gmail.com`,
      password: 'Pa55word',
      phone: '380999999',
      birthDate: '11/11/2000',
      status: 'patient',
      gender: 'male',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
  });
});

})

xit('change speciality and clinic test',async function(){
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

})

xit('change speciality and clinic test',async function() {
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


