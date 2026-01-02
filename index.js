import fs from "fs"

const folderName = './myNewFolder';
const fileName = 'music.mp3';

fs.mkdir(folderName, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } else {
        console.log('Directory created successfully!');
    }
});

fs.writeFile(`${folderName}/music.mp3`, "content", err => {
  if (err) {
    console.error(err);
  } else {
    console.log("yeay");
    
  }
});