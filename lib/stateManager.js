"use strict";

// Minimalistic
// Declarative
// Pure Functions-Components
// Composition Over Inheritance

(function() {

    var stateManager = {
        dom: function domFn(element, attributes, children) {
            // Create new DOM element
            var newEl = document.createElement(element);
            var events;
            
            // Set element attributes
            attributes = attributes || {};
            Object.keys(attributes)
                .filter(function(item) {
                    return item !== 'events'
                })
                .forEach(function(key) {
                    newEl.setAttribute(key, attributes[key]);
                });
            
            // Bind events
            events = attributes.events || {};
            Object.keys(events)
                .forEach(function(evt) {
                    newEl.addEventListener(evt, events[evt]);
                });

            // Set children
            // children is a string, append text to element:
            if (typeof children === 'string') {
                newEl.textContent = children;
            // children is an array of DOM elements, append children to element:
            } else if (children instanceof Array) {
                children.forEach(function(child) {
                    child && newEl.appendChild(child);
                });
            }
            // children is not a string nor an array, do nothing
            
            return newEl;
        },

        place: function placeFn(el, container) {
            if (!container || !el) {
                return;
            }
            container.innerHtml = '';
            container.appendChild(el);
        },

        register: function(options) {
            if (!options.component || !options.renderingFn) {
                return;
            }
            var oldComponent = options.component;
            var store = app.lib.storeFactory(options.state, options.reducer);

            function render(newState) {
                // Create new version of the component using new state
                var newComponent = options.renderingFn(newState);

                // Replace old version with new version
                var parentNode = oldComponent.parentNode;
                parentNode.replaceChild(newComponent, oldComponent);

                // Hold currently active node for the next time
                oldComponent = newComponent;
            }

            store.subscribe(render);
            return store.dispatch;
        }
    }

    if (window.app) {
        window.app.$$$ = stateManager;
    } else {
        window.$$$ = stateManager;
    }

}())