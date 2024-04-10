//random delay function
const RandomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1000 + 6000 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout);
    })
}
//printing the text
const addItem = async (item) => {
    await RandomDelay();
    let div = document.createElement('div')
    div.innerHTML = item
    document.body.append(div)
}


async function main() {

    //bellow code is for the loading effect
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div")
        last = last[last.length - 1]
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {
            last.innerHTML += "."
        }
    }, 300)

    //text array
    let text = ["Initializing Hacking",
        "reading your files",
        "password files detected",
        "sending data to server",
        "cleaning up"]

    // iterating through the array
    for (const item of text) {
        await addItem(item)
    }
    await RandomDelay()
    clearInterval(t)
}
main()












// async function first() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Initializing Hacking...');
//             resolve();
//         }, RandomDelay(1000, 7000));
//     })

// }
// async function second() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('reading your files...');
//             resolve();
//         }, RandomDelay(1000, 7000));
//     })
// }
// async function third() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('password files detected...');
//             resolve();
//         }, RandomDelay(1000, 7000));
//     })
// }
// async function fourth() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('sending data to server...');
//             resolve();
//         }, RandomDelay(1000, 7000));
//     })
// }
// async function fifth() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('cleaning up...');
//             resolve();
//         }, RandomDelay(1000, 7000));
//     })
// }