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
    // console.log(x.name)

    function createDir() {
        fs.mkdirSync(x.name, (err) => {
            if (err) {
                console.error('Error creating directory:', err);
            } else {
                console.log('Directory created successfully!');
            }
        });
    }

    function createdFiles() {
        x.song.forEach(element => {
            fs.writeFileSync(`${x.name}/${element}.mp3`, "content", err => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("yeay");
                }
            });
    
        });
    }

    function runAll() {
        createDir()
        createdFiles()
    }

    runAll()
})