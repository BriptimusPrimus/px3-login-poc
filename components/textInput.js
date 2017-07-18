"use strict";

// <div id="login_emaildiv" class="textInput">
//     <div class="fieldWrapper">
//         <label for="email" class="fieldLabel">Email</label>
//         <input 
//             id="email"
//             name="login_email"
//             type="email"
//             class="hasHelp validateEmpty"
//             required="required"
//             aria-required="true"
//             autocomplete="off"
//             placeholder="Email"
//         >
//     </div>
//     <div class="errorMessage" id="emailErrorMessage">
//         <p class="emptyError hide">Required</p>
//         <p class="invalidError hide">That email format isn’t right</p>
//     </div>
// </div>

window.app = window.app || {};
app.components = app.components || {};

app.components.TextInput = function TextInput(props) {
    var dom = app.$$$.dom;

    function label() {
        return dom(
            'label', {
                for: props.id,
                'class': 'fieldLabel'
            }, props.placeholder
        );
    }

    function input() {
        var attributes = {
            id: props.id,
            name: props.name,
            type: props.type,
            'class': props.className,
            placeholder: props.placeholder
        };

        if (props.required) {
            attributes.required = 'required';
            attributes['aria-required'] = 'required';
        }

        if (props.autocomplete) {
            attributes.autocomplete = props.autocomplete
        }

        return dom(
            'input', 
            attributes
        );
    }

    function errrorMsg() {
        var errorMsgs = [];

        if (props.emptyErrorMsg) {
            errorMsgs.push(
                dom('p', {
                    'class': 'emptyError hide'
                }, props.emptyErrorMsg)                
            );
        }

        if (props.invalidErrorMsg) {
            errorMsgs.push(
                dom('p', {
                    'class': 'invalidError hide'
                }, props.invalidErrorMsg)                
            );
        }        

        if (errorMsgs.length === 0) {
            return;
        }
        
        return dom('div', {
            id: props.id + 'ErrorMessage',
            'class': 'errorMessage'
        }, errorMsgs);
    }

    return dom('div', {
        id: props.name + 'div',
        'class': 'textInput'
    }, [
        dom('div', {'class': 'fieldWrapper'}, [
            label(),
            input()
        ]),
        errrorMsg()
    ]);
}
