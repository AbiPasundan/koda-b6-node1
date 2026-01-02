import fs from "fs"

const folderName = './music';
const fileName = 'music.mp3';

fs.mkdir(folderName, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } else {
        console.log('Directory created successfully!');
        fs.writeFile(`${folderName}/${fileName}`, "content", err => {
            if (err) {
                console.error(err);
            } else {
                console.log("yeay");
            }
        });
    }
});

