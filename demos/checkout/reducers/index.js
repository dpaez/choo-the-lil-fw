exports.updateInterest = function updateInterest(state, emitter, interest=0){

    Object.assign(state.price,state.rollback.price);
    state.price.interest = interest
    // update total with interest
    state.price.total += state.price.total * interest / 100
    emitter.emit('render')
}
