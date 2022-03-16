// 1a
const mcuShows = [
    `Loki`,
    `Moon Knight`
];
// console.log(mcuShows);

// 1b
const starWarsShows = [
    `Mandalorian`,
    `The Book of Boba Fett`
];
// console.log(starWarsShows);

// 1c
const disneyPlusShows = [
    ...mcuShows,
    ...starWarsShows,
    `The Beatles: Get Back`
];

// 1d
console.log(disneyPlusShows);

// 2a
const netflixMovies = {
    action:`Extraction`,
    crime: `The Irishmen`
};
// console.log(netflixMovies);

// 2b
const amazonPrimeMovies ={
    action: `The Tomorrow War`,
    drama: `One Night in Miami`
};
// console.log(amazonPrimeMovies);

// 2c
const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: `Hamilton`
};

// 2d
console.log(streamingMovies);

// 3a
const disneyJunior = [
    `Mickey Mouse Club House`,
    `Spidey and His Amazing Friends`
];
// console.log(disneyJunior);

// 3b
const [Mickey, Spidey] = disneyJunior;

// 3c
console.log(Mickey, Spidey);

// 4a
const Avengers = {
    warMachine: `James Rhodes`,
    theHulk: `Bruce Banner`
};
// console.log(Avengers);

// 4b
const {warMachine, theHulk} = Avengers;

// 4c
console.log(warMachine, theHulk);

// 4d
const moreAvengers = {
    blackWidow: `Natasha Romanoff`,
    hawkeye: `Clint Barton`,
    ironMan: `Tony Stark`
};
// console.log(moreAvengers);

// 4e
const {blackWidow: Nat, ...others} = moreAvengers;

// 4f
console.log(Nat, others);

// BONUS
// 5a (did not get second part of 5a)
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
}

/*
const {first, second, third} = bonus
 const all = [...first, ...second, ...third];
 console.log(all);
 */

//  OR
 /* 
 const first = bonus.first;
 const second = bonus.second;
 const third = bonus.third;
 const all = [...first, ...second, ...third];
 console.log(all);
 */

//  OR
 /*
 const all = [
     ...bonus[`first`],
     ...bonus[`second`],
     ...bonus[`third`]
 ];
 console.log(all);
 */
 

//  OR
 const all = [
     ...bonus.first,
     ...bonus.second,
     ...bonus.third
 ];
 console.log(all);


//  5b (did not attempt)
// const [one, two, three, four, five, six, seven, eight, nine] = all;


const [one, two, three] = bonus.first;
const [four, five, six] = bonus.second;
const [seven, eight, nine] = bonus.third;
console.log(one, two, three, four, five, six, seven, eight, nine);





