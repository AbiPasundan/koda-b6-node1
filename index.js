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

        if (fs.existsSync(x.name)) {
            console.log(`Direktory / Folder ${x.name}, sudah ada`);
        } else {
            fs.mkdirSync(x.name);
        }


    }

    function createdFiles() {
        x.song.forEach(element => {
            // console.log(element);
            
            // if (x.name.existsSync(`${element}.mp3`)) {
            //     console.log(`file sudah ada`);
            // } else {
                fs.writeFileSync(`${x.name}/${element}.mp3`, "content");
            // }


        });
    }

    function runAll() {
        createDir()
        createdFiles()
    }

    runAll()
})