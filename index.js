import fs from "fs"

const artistMusic = [
    {
        name: "iwan",
        song: ["Akupun", "Opini", "Suara Hati"],
    },
    {
        name: "agnes",
        song: ["Yess!", "Tralala Trilili", "Balabala"],
    },
    {
        name: "tipex",
        song: ["kawan", "Selamat Jalan", "And The Story Goes"]
    },
]

console.log("------------------");
artistMusic.map(x => {
    function createDir() {
        fs.mkdirSync(x.name);
    }

    function createdFiles() {
        x.song.forEach(element => {
            fs.writeFileSync(`${x.name}/${element}.mp3`, "content");
        });
    }

    function runAll() {
        createDir()
        createdFiles()
    }

    runAll()
})