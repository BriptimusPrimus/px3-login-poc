"use strict";

// <div id="inputEmail">
//     <div id="emailSection">
//         <TextInput />
//     <div>
//     <BtnNext />
// </div>

window.app = window.app || {};
app.components = app.components || {};

app.components.InputEmail = function InputEmail(props) {
    var dom = app.$$$.dom;

    return dom(
        'div', {
            id: 'inputEmail'
        }, [
            dom('div', {
                    id: 'emailSection'
                }, [
                    app.components.TextInput({
                        id: 'email',
                        name: 'login_email',
                        type: 'email',
                        className: 'hasHelp validateEmpty',
                        required: true,
                        autocomplete: 'off',
                        placeholder: props.content.email,
                        emptyErrorMsg: props.content.emailRequired,
                        invalidErrorMsg: props.content.emailWrongFormat,
                        value: props.profile && props.profile.email
                    })
                ]
            ),
            app.components.BtnNext({
                onClick: props.onClickNext,
                content: props.content.nextButton
            })
        ]
    );
}