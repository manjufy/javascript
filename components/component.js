/**
 * Vanilla JS Component
 */
const Component = ((win, doc, log, si, ci, sto, loc, undefined) => {
    // es6 IIFE
    'use strict'
    doc.componentRegistry = {}; // keep a record of the components we've created, accessible throught the document
    doc.nextId = 0;             // initial id

    class Component {
        constructor(props) {
            if (!props.elem) {
                throw 'Compoent: You did not provide an element to make into a component'
            }

            this._id = ++doc.nextId;    // creating a unique id
            doc.componentRegistry[this._id] =  this; // assigning id for every new component created

            this.state = {  // defining the initial state
                elem: props.elem,   // the target dom elem we will be injecting the component into. (i.e. #app for <div id="app"></div>)
                data: props.data || null,   // the data we want to pass to our component or null, (i.e an object with key/value pairs)
            }
        }

        // add a setState() method
        setState(props) {
            // Shallow merge new properties into state object
            for(var key in props) {
                if(props.hasOwnProperty(key)) {
                    this.state.data[key] = props[key]
                }
            }

            // trigger a re-render
            this.render(); // basically updating the UI with new state
        }

        sanitize(str) {
            let temp = doc.createElement('div');
            temp.textContent = str;
            return temp.innerHTML;
        }

        template(props) {   // this is where our template markup will go
            let template = `<div>Hello, whats up</div>`;
            return template ?  template : null;
        }

        render() {
            const {elem, data} = this.state;
        }
    }

})(window, document, console, setInterval, clearInterval, setTimeout, location);