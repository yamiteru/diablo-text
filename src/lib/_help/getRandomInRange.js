export default function getRandomInRange(min = 0, max = 100) {
    return Math.floor(Math.random() * max) + min;  
}