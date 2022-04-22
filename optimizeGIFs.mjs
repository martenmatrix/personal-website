import gifsicle from 'gifsicle-wrapper';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { argv } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isGifFile = (name) => {
    const regex = /^.+\.gif$/mi;
    return !!regex.test(name);
}

const getAllGifsPaths = (folder) => {
    return fs.readdirSync(folder, {withFileTypes: true})
    .filter(item => !item.isDirectory() && isGifFile(item.name))
    .map(item => ({
        name: item.name,
        path: path.resolve(folder, item.name),    
    }));
}

async function optimizeImage(imageData, replaceImage = false) {
    console.log('🔨 Optimizing ' + imageData.name + '...')

    let output;
    if (replaceImage) {
        output = imageData.path;
    } else {
        output = path.resolve(path.resolve(__dirname, 'src/img/optimized/', imageData.name));
    }

    await gifsicle(imageData.path)
            .optimize({ level: gifsicle.level.O3, lossiness: 199 })
            .toFile(output);

    console.log('✨ Optimized ' + imageData.name + '!')
}

async function optimizeAllImages(replaceImages = false) {
    const pathToImageFolder = path.resolve(__dirname, 'src/img/');
    const allUnoptimizedImages = getAllGifsPaths(pathToImageFolder);

    const allPromises = allUnoptimizedImages.map(async (imageData) => {
        await optimizeImage(imageData, replaceImages);
    });

    console.log('-----------------------------------------------')

    await Promise.all(allPromises);
    console.log('✨ Replaced all images with optimized ones')
}

const replaceImages = argv[2];
if (replaceImages === 'replace') {
    optimizeAllImages(true)
} else {
    optimizeAllImages();
}