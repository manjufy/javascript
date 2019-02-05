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
            const {elem, data} = this.state; // here we are getting the elem and data deconstructed from the state

            // make sure there's a template
            if (!this.template) {
                throw 'ComponentJS: No template was provided';
            }

            // if elem is an element, use it. 
            // if it's a selector, get it
            let _elem = typeof elem === 'string' ? doc.querySelector(elem) : elem;

            if (!elem) return; // if there is no elem, stop and return.

            let _template = typeof this.template === 'function'
                            ? this.template(data)
                            : this.template;
            
            // array indexOf === -1 true if index value is not found.
            if (['string', 'number'].indexOf(typeof _template) === -1) return;
            
            // render the template into the element
            if (_elem.innerHTML === _template) return; // if they're the same, return
            _elem.innerHTML = _template // else update with new template

            // dispatch a render event -> https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
            if (typeof win.CustomEvent === 'function') {
                let event = new CustomEvent('render', {
                    bubbles: true
                });
                _elem.dispatchEvent(event);
            }

            // return the _elem for use elsewhere
            return _elem;
        } // render
    } // class Component

    return Component
})(window, document, console, setInterval, clearInterval, setTimeout, location);

const setup_navbar = () => {
    class NavBar extends Component {
        constructor(props) {
            super(props);
            this.state = { ...props };
        }

        template(props) {
            const { heading } = props;
            let template = `
                <div class="nav">
                    ${heading}
                </div>
            `;

            return template;
        };
    }

    const INITIAL_STATE = {
        elem: '#navbar', // the target element we will be injecting the navbar component into.
        data: {
            heading: 'Welcome to my navbar component.'
        }
    };

    let navbar = new NavBar(INITIAL_STATE);
    navbar.render(); // render the navbar onto the page.
}