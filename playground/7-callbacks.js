// Here setTimeout comes from node API, with first agrument as a callback. Execution is async
setTimeout(() => {
    console.log('Two seconds up!')
}, 2000)


// Here filter is JS function, with its agrument as a callback. Execution is sync
const names = ['Utkarsh', 'PA', 'ASDF']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        return data
    }, 2000)
}

const data = geocode('Pune')
console.log(data)
// Above example wont work. When we call the function, it triggers a async call that will only get executed when main finishes.
// But we are on main line 25 printing it out, which will print undefined.
// This is why we need callbaks when dealing with async, so that it parent function takes care of what needs to be done with the return value of async call
// See 8-callbacks.js for corrected version. 