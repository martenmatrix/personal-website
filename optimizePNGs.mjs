import optipng from 'optipng-bin';
import { execFile } from 'node:child_process';
import fs from 'fs';
import path from 'path';
import tinify from 'tinify';
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
    console.log('🔨 Optimizing ' + imageData.name + 'with optipng...')

    let output;
    let optipngArguments;
    if (replaceImage) {
        output = imageData.path;
        optipngArguments = ['-o2', imageData.path];
    } else {
        output = path.resolve(path.resolve(__dirname, 'src/img/optimized/', imageData.name));
        optipngArguments = ['-o2', '-i0', '-out', output, imageData.path]
    }

    await new Promise(resolve => {
        execFile(optipng, optipngArguments, error => resolve());
    });

    console.log('✨ Optimized ' + imageData.name + 'with optipng.')
}

async function optimizeImageTinyPNG(imageData, replaceImage = false) {
    console.log('🔨 Optimizing ' + imageData.name + 'with tinypng...')
    let output;
    if (replaceImage) {
        output = imageData.path;
    } else {
        output = path.resolve(path.resolve(__dirname, 'src/img/optimized/', imageData.name));
    }
    const source = tinify.fromFile(imageData.path);
    console.log('✨ Optimized ' + imageData.name + 'with tinypng.');
    await source.toFile(output);
}

async function optimizeAllImages(replaceImages = false) {
    const pathToImageFolder = path.resolve(__dirname, 'src/img/');
    const allUnoptimizedImages = getAllPNGsPaths(pathToImageFolder);

    const allPromises = allUnoptimizedImages.map(async (imageData) => {
        await optimizeImage(imageData, replaceImages);
    });
    await Promise.all(allPromises);

    for (const imageData of allUnoptimizedImages) {
        await optimizeImageTinyPNG(imageData, replaceImages);
    }

    console.log('✨ Replaced all images with optimized ones')
}

tinify.key = argv[2];
const replaceImages = argv[3];
if (replaceImages === 'replace') {
    optimizeAllImages(true)
} else {
    optimizeAllImages();
}