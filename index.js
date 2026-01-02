import fs from "fs"

// const folderName = './music';
// const fileName = 'music.mp3';

const artist = ["Iwan Fals", "Agnes Monica", "Sumbang"]

const fileName = ['music.mp3']
const folderName = ['./music']

artist.forEach(element => {
    // console.log(element);


    fs.mkdir(element, (err) => {
        if (err) {
            console.error('Error creating directory:', err);
        } else {
            console.log('Directory created successfully!');
            fs.writeFile(`${element}/${element}.mp3`, "content", err => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("yeay");
                }
            });
        }
    });


});



// fs.mkdir(folderName, (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//     } else {
//         console.log('Directory created successfully!');
//         fs.writeFile(`${folderName}/${fileName}`, "content", err => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log("yeay");
//             }
//         });
//     }
// });

