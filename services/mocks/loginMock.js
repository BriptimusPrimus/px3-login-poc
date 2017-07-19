"use strict";

window.app = window.app || {};
app.services = app.services || {};
app.services.mocks = app.services.mocks || {};

(function() {

    function mockRequest(data) {
        // Only email submit
        if (data.loginContext === 'inputEmail') {
            // Password user
            if (data.login_email === 'abc@px3.com') {
                return {
                    loginContext:  'inputPassword',
                    profile: {
                        displayName: 'Johnny Cage',
                        email: 'abc@px3.com'
                    }
                };
            }

            // Passwordless user
            if (data.login_email === 'pwdless@px3.com') {
                return {
                    section:  'passwordless',
                    profile: {
                        displayName: 'Sonya Blade',
                        email: 'pwdless@px3.com'
                    }
                };
            }

            // Invalid account
            if (data.login_email === 'invalid@px3.com') {
                return {
                    profile: {
                        email: data.login_email
                    },
                    notifications: {
                        message: 'Invalid account',
                        type: 'alert'
                    }
                }
            }

        // Email + Password submit
        } else if (data.loginContext === 'inputPassword') {
            // Login success
            if (data.login_password === '1234') {
                return {
                    section: 'finished'
                }
            }

            // Fallback: wrong password
            return {
                notifications: {
                    message: 'Invalid Login Credentials',
                    type: 'alert'
                }                
            }

        } else if (data.loginContext === 'implicitEmail') {
            // Passwordless user
            if (data.login_email === 'pwdless@px3.com') {
                return {
                    section:  'passwordless',
                    profile: {
                        displayName: 'Sonya Blade',
                        email: 'pwdless@px3.com'
                    }
                };                
            }

            // Fallback: password users
            return {
                loginContext: 'inputPassword',
                profile: {
                    email: data.login_email
                },
                notifications: {
                    message: 'Try using your password',
                    type: 'alert'
                }
            }
        }
    }

    function submitRequest(data, success, fail) {
        setTimeout(function() {
            var response = mockRequest(data);
            if (response) {
                success({
                    state: response
                });
            } else {
                fail();
            }
        }, 1000);
    }

    app.services.mocks.loginMock = {
        submitRequest: submitRequest
    }
}());