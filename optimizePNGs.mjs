import optipng from 'optipng-bin';
import { execFile } from 'node:child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { argv } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isPNGFile = (name) => {
    const regex = /^.+\.png$/mi;
    return !!regex.test(name);
}

const getAllPNGsPaths = (folder) => {
    return fs.readdirSync(folder, {withFileTypes: true})
    .filter(item => !item.isDirectory() && isPNGFile(item.name))
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

    await new Promise(resolve => {
        execFile(optipng, ['-out', output, imageData.path], error => resolve());
    });
    console.log('✨ Optimized ' + imageData.name + '...')
}

async function optimizeAllImages(replaceImages = false) {
    const pathToImageFolder = path.resolve(__dirname, 'src/img/');
    const allUnoptimizedImages = getAllPNGsPaths(pathToImageFolder);

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