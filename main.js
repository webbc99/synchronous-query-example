// const name = "Liam";
// const age = 27;
// const greeting = `Hello, my name is ${name}! I am ${age} years old.`;
// console.log(greeting);

// function makeGreeting(name, age) {
//     return `Hello, my name is ${name}! I am ${age} years old.`;
// }

// makeGreeting("Chris", 35);

const MAX_PRIME = 1000000;

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
    const primes = [];
    while(primes.length < quota) {
        const candidate = random(MAX_PRIME);
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }
    return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
    const primes = generatePrimes(quota.value);
    output.textContent = `Finished generating ${quota.value} primes!`;
});

const log = document.querySelector(".event-log");

document.querySelector("#reload").addEventListener("click", () => {
    log.textContent = "";
    document.location.reload();
});

document.querySelector("#xhr").addEventListener("click", () => {
    log.textContent = "";

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () => {
        log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
    });

    xhr.open("GET", "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json");
    xhr.send();
    log.textContent = `${log.textContent}Started XHR request\n`;
});

