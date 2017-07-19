"use strict";

// <div id="inputPassword">
//     <Profile />
//     <div id="passwordSection">
//         <TextInput />
//     <div>
//     <BtnNext />
// </div>

window.app = window.app || {};
app.components = app.components || {};

app.components.InputPassword = function InputPassword(props) {
    var dom = app.$$$.dom;

    return dom(
        'div', {
            id: 'inputPassword'
        }, [
            app.components.Profile({
                displayName: props.profile.displayName,
                email: props.profile.email,
                onNotYouClick: props.onNotYouClick
            }),
            dom(
                'div', {
                    id: 'passwordSection'
                }, [
                    app.components.TextInput({
                        id: 'password',
                        name: 'login_password',
                        type: 'password',
                        className: 'hasHelp  validateEmpty',
                        required: true,
                        autocomplete: 'off',
                        placeholder: 'Password',
                        emptyErrorMsg: 'Required'
                    })                    
                ]
            ),
            app.components.BtnNext({
                onClick: props.onClickNext
            })
        ]
    );
}