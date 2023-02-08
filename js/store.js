// modules
import arvic from './modules/arvic.js';
import delerose from './modules/delerose.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        arvic,
        delerose,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
