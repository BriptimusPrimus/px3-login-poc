"use strict";

// <div id="btnNextContainer" class="actions">
//     <button id="btnNext" class="button" type="submit" name="btnNext" value="next">
//         Next
//     </button>
// </div>

window.app = window.app || {};
app.components = app.components || {};

app.components.BtnNext = function BtnNext(props) {
    var dom = app.$$$.dom;

    return dom(
        'div', {
            id: 'btnNextContainer',
            'class': 'actions'
        }, [
            dom('button', {
                id: 'btnNext',
                'class': 'button',
                type: 'submit',
                events: {
                    click: props && props.onClick
                },
                name: 'btnNext',
                value: 'next'
            }, 'Next')
        ]
    );
}