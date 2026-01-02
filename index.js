import fs from "fs"

const artistMusic = [
    {
        name: "iwan",
        song: ["Akupun.mp3", "Opini.mp3", "Suara Hati.mp3"],
    },
    {
        name: "agnes",
        song: ["Yess!.mp3", "Tralala Trilili.mp3", "Balabala.mp3"],
    },
    {
        name: "tipex",
        song: ["kawan.mp3", "Selamat Jalan.mp3", "And The Story Goes.mp3"]
    },
]

let q = 0
let artMusic = []
let artName = []
// artistMusic.forEach(x => {

// });
// console.log(artistMusic);
console.log("------------------");
artistMusic.map(x => {
    console.log(x.name)
    fs.mkdir(x.name, (err) => {
        if (err) {
            console.error('Error creating directory:', err);
        } else {
            console.log('Directory created successfully!');
        }
    });

    x.song.forEach(element => {
        fs.writeFile(`${x.name}/${element}`, "content", err => {
            if (err) {
                console.error(err);
            } else {
                console.log("yeay");
            }
        });

    });
    artMusic = x.song
})
// console.log(artMusic);
