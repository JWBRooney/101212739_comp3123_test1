const resolvedPromise = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let success = {'message': 'Delayed Resolve!'}
            resolve(success);
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject(Error('Delayed Reject'));
        }, 500)
    }).catch(error => console.log(error.message));
}

resolvedPromise().then(output => console.log(output))
rejectedPromise().then(output => console.log(output))