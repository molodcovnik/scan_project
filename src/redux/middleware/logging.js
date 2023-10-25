export const logging = store => next => action =>{
    console.log(`Done: ${action.type}, ${action.payload}`)
    return next(action)
}
