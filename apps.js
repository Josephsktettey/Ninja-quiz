const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
        e.preventDefault();

    let score = 0;
    const userAnwers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // /check
    userAnwers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }   
    });


    scrollTo(0,0)

    result.querySelector('span').textContent =  `${score}%`;
    result.classList.remove('d-none');
})

// const score = [10, 30, 15, 24, 50, 40, 5];


// const products = [
//     {name: 'gold', price:30},
//     {name: 'shell', price:10},
//     {name: 'Gun', price: 40},
//     {name: 'bananna', price: 5},
//     {name: 'mushroom' , price: 50}
// ]

// const promos = products 
//     .filter(product => product.price >20)
//     .map(product => `the ${product.name} is ${product.price /  2}`) 

//     console.log(promos);