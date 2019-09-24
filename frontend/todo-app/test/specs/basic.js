const assert = require('assert');
const path = require('path');

describe('Login and Register test', () => {
    it('It should register a test account', () => {
        browser.url('http://localhost:4200');
        browser.fullscreenWindow();
        
        const username = $('input[name="username"]');
        username.setValue("tester01");

        const password = $('input[name="password"]');
        password.setValue("aA123456");

        const retypepassword = $('input[name="retypepassword"]');
        retypepassword.setValue(password.getValue());

        const firstName = $('input[name="firstname"]');
        firstName.setValue("Tester");

        const lastName = $('input[name="lastname"]');
        lastName.setValue("Nguyen");

        const sNo = $('input[name="studentnumber"]');
        sNo.setValue("s9999000");

        const sEmail = $('input[name="email"]');
        sEmail.setValue("s9999000@student.rmit.edu.au");

        const phoneNo = $('input[name="phonenumber"]');
        phoneNo.setValue("0410999999");

        const submitBtn = $('button[type="submit"]');
        submitBtn.click();

        assert.strictEqual(0, $$('.checkError').length, "Information must not exist");

        browser.waitUntil(() => {
            return browser.getAlertText() === "Register Successful"
        }, 3000);
        browser.acceptAlert();
    })

    it('It should login with registered user', () => {
        const username = $('input[name="username"]');
        username.setValue("tester01");

        const password = $('input[name="password"]');
        password.setValue("aA123456");

        const loginBtn = $('button[type="button"]');
        loginBtn.click();

        browser.waitUntil(() => {
            return browser.getUrl() === 'http://localhost:4200/welcome/tester01'
        }, 3000);
    })
})

describe('Post status and comment', () => {
    it('It should post status with logged in user', () => {
        let i = 0;
        const statusInput = $('input[name="description"]');
        const submitBtn = $('button[type="submit"]');

        for (let i = 0; i <= 5; i++) {
            statusInput.setValue("This is the test status number " + i);
            submitBtn.click();
        }
    });

    it('It should comment on posted status', () => {
        const comments = $$('input[placeholder="Write a comment.."');
        for (const key in comments) {
            if (comments.hasOwnProperty(key)) {
                const comment = comments[key];
                comment.setValue("random comment " + key);
                browser.keys("Enter");
            }
        }
    });
});

describe('Change avatar and background', () => {
    it('It should change avatar', () => {
        const profileLink = $('a[href="/profile/tester01"]');
        profileLink.click();

        browser.waitUntil(() => {
            return !browser.isLoading();
        },3000);

        const avatarBtn = $('.image-cropper');
        avatarBtn.click();

        const uploadAvatarBtn = $('input[name="avatarfile"]')
        const filePath = path.join(__dirname, '/assets/test1-ava.jpg');
        uploadAvatarBtn.setValue(filePath);

        const saveBtn = $('.btn-primary=Save Changes');
        saveBtn.click();

    })

    it('It should change banner', () => {
        browser.waitUntil(() => {
            return !browser.isLoading();
        },3000);

        const bannerBtn = $('.banner');
        bannerBtn.click();

        const uploadBannerBtn = $('input[name="backgroundfile"]')
        const filePath = path.join(__dirname, '/assets/test1-banner.jpg');

        uploadBannerBtn.setValue(filePath);
        const saveBtn = $('.btn-primary=Save Changes');
        saveBtn.click();
        browser.debug();
    });
})