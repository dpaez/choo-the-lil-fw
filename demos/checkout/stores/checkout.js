var { updateInterest } = require('../reducers')

function defineEvents(events){
    events.UPDATECARD = 'DEMO:UPDATECARD';
}

function defineReducers(state, emitter){
    emitter.on(state.events.UPDATECARD, updateInterest.bind({}, state.checkout, emitter))
}


module.exports = function checkoutStore(state, emitter) {

    if (state === undefined){
        state = {
            checkout: {
                installments: []
            }
        }
    }
    // define app events
    defineEvents(state.events);

    if  (process.env.NODE_ENV !== 'production'){
        Object.assign(state, require('../mock'));
    }

    // rollback state
    if (state.checkout.rollback === undefined) {
        state.checkout.rollback = {}
        state.checkout.rollback.price = {}
        Object.assign(state.checkout.rollback.price, state.checkout.price);
    }

    // define app reducers
    // they will manipulate app state :O
    emitter.on(state.events.DOMCONTENTLOADED, () => defineReducers(state, emitter));
}
