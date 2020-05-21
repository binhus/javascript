
const numberRand = () => {
    return new Promise ((resolve, reject) => {
        let arr = []
        for (let i = 0; i < 10; i+=1) {
            arr.push(Math.round(Math.random()*50**2));
        }
        const result = soma(arr);
        if (result < 80000) {
            resolve(result);
        } else {
            reject('É mais de oito mil! Essa promise deve estar quebrada!');
        }
        
    })

}

const soma = (arr) => {
    return arr.reduce((acc, curv) => {
        return acc + curv;
    })
}

const resultResolve = (number) => {
    let arr = [];
    let divisor = [2, 3, 5, 10]
    for (let index = 0; index < 4; index++) {
        arr.push(number/divisor[index]);        
    }
    //console.log(arr);
    return arr;
}
numberRand().then(data => resultResolve(data))
.then(data => console.log(soma(data)))
.catch(data => console.log(data));


