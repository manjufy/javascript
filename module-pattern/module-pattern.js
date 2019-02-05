/**
 * Module Pattern
 * https://vanillajstoolkit.com/boilerplates/revealing-module-pattern/
 */
const manjuPlugin = (() => {
    /**
     * Variables
     */
    const plubicAPIs = {};

    /**
     * Methods
     */
    const myPrivateMethod = () => {
        console.log('Private method');
    }

    plubicAPIs.init = (options) => {
        console.log('INIT');
        return 'init';
    };

    plubicAPIs.getName = () => {
        console.log('getName - Manju');
        return 'Manju';
    };
    

    return plubicAPIs;
})();

manjuPlugin.getName();
manjuPlugin.init();