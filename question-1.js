function lowerCaseWords(array){
    return new Promise(function(resolve, reject){
        let output = [];
        array.forEach(x => {
            if (typeof(x)=== 'string'){
                output.push(x.toLowerCase());
            }
        })
        if (output.length>0) {
            resolve(output);
        }
        else {
            reject(new Error("Array contains no Strings."));
        }
    }).catch(error => console.log(error.message));
}

lowerCaseWords(["PIZZA", 10, true, 25, false, "Wings"]).then((output) =>{
    console.log(output);
})