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
                    notifications: {
                        message: 'Invalid account'
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
                    message: 'Invalid Login Credentials'
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
                notifications: {
                    message: 'Try using your password'
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