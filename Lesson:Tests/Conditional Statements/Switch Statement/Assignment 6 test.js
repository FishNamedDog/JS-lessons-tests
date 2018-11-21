const favNum = prompt('What is your favorite number?');

switch (true) {
    case favNum === 42:
        console.log("Yay! That's my favorite too!");
        break;
    case favNum <= 41:
        console.log("Eh, that's OK but " + (favNum + 1) + " would be even better");
        break;
    case favNum >= 43:
        console.log("LAME. That number is too large!");
        break;
    default:
        console.log('You fucked up, dawg');
}