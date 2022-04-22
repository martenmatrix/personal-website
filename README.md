# Personal Website

This is a template for a slick and lightweight Personal Website, which can be easily customized.
It contains a page with your projects, an overview of each project, and a page to link to external sites. 
	
## Table of Contents
- [Deployed links](#globe_with_meridians-deployed-links)
- [Usage](#grey_exclamation-usage)
	- [Interaction](#interaction)
	- [Customization](#customization)
- [Features](#sparkles-features)
- [Installation](#wrench-installation)
- [Technology stack](#blue_book-technology-stack)
- [License](#scroll-license)

## :globe_with_meridians: Deployed links
The application is hosted at the following address:

- https://marten.codes/

## :grey_exclamation: Usage
#### Interaction
1. You'll be prompted with different links, when you visit the homepage.
2. All link to external sources, except one, the link with the title “projects”.
	1. After clicking the “projects” entry, you'll be showed a short overview for each project that was put on display. The overview contains an image, title, and a description.
	2. After clicking the project overview container, you'll be re-directed to a page with the image enlarged and a more thorough explanation of the project, it's parsed README markdown file.
	3. If you click the image, it will be opened in a new tab, so users are able to take a closer look at it.
	4. The "View on /[a-z]+/i" button in the bottom right corner will re-direct you to the repository of the project.
#### Customization
Customization is fairly easy, usually you just have to touch the files in the folders located at `src/data` and `src/img`.

> :bulb: If you want a complete example, just open the files. They are currently configured for my personal website.

##### Customization of links
The page displays links to external sources and internal sources, these pages are rendered based on the specifications in the `links.js` file. 

The array, contained in the file, will be used to render the links:
- `homepageLinks: <array>`—This array contains an object for each link on the homepage.
	- `<object>`
		- `title: <string> required`—Assign the link a title.
		- `href: <string> required`—Assign the path to which the link should re-direct. If this links to an external source (mailto links excluded), an arrow will be displayed on the link element.
		> :bulb: If you want to display a link to the overview of your showcased projects, set the `href` of the link to `projects`.

		- `newTab: <boolean>`—Specify, if the link should be opened in a new tab.

##### Customization of projects
The page located at `/projects` displays an overview of your projects and a detailed overview after clicking on it, the pages are rendered based on the specifications in the `project.js` file.

- `projects: <array>`—This array contains an object, for each showcased project.
	- `<object>`
		- `id: <string> required`—This is an ID for the project. The link to an overview of the project will later be `projects/<id>`. Make sure it is **unique**.
		- `title: <string> required` This should contain the title of your project.
		- `readme: <string|markdown> required`—This should contain a detailed description of your project, it is recommended to use your project's README. The markdown will be showed on the projects overview. You can even use GitHub's Markdown syntax, and it will get parsed correctly.
		- `titleImage: <string|image> required`—This should contain an image of your project. It will be displayed in its container at the overview of your projects.
		> :bulb: You are able to pass in a URL to your image or to upload your own like explained below.
		
		- `overviewImage: <string|image> required`—This should contain an image of your project. It will be displayed at the project's detailed overview.
		- `description: <string>`—Add a small description about your project here. This will be displayed in the container of the project at the project's overview site.
		- `order: <integer>`—This specifies the ranking of the project. A project with a larger number will get displayed before a project with a smaller one.
		- `git: <string>`—This should contain the link to the project's repository. It is used for the `href` of the link in the bottom right corner of a project's overview.
			>:bulb: If you want to customize the link title, check out the section about the customization of links.
			
		- `deploy: <string>`—If your project got deployed somewhere, enter the link of the deployment.
		- `hide: <boolean>`—Set this to `false` to hide your project from the overview of all projects.

If you want to upload an image of your project to your own site, you'll have to put it in the `img` folder located at `src/img/`, then you need to import it in the `projects.js` file.
As an example, if you would want to import a GIF called “my-image”, you would import it like this: 
`import myBeautifulImage from '../img/my-image.gif`
After that, you would set the value of the `tileImage` key to the variable created at the `import`.
For the example, this would look like this:
```
{
	titleImage: myBeautifulImage,
}
```
The same procedure applies to markdown files.

If something does not work as expected, please [create an issue](https://github.com/martenmatrix/personal-website/issues/new).

## :sparkles: Features
- easily customizable
- slick and beautiful design
- parses your project's README's automatically to HTML, even “markdown” from GitHub
- error boundary
- automatically optimize gifs
- lazy loading of images
- add as many links as you want
- showcase as many projects as you want
- display a detailed overview of your project

##  :wrench: Installation

If you want to run the application on your local pc or just want to contribute, do the following steps:

1. Clone the repository.
	`git clone https://github.com/martenmatrix/personal-website`

2. Install the dependencies.
	`npm install`

3. If you want to download the `.gif`'s used for the examples, you'll have to [install Git LFS](https://git-lfs.github.com/). After installing it, run `git lfs pull` in the projects directory to pull the images. However, this is only necessary, if you want to display the images of the projects, which are examples.

4. If you want that your `.gif`'s get optimized, you can run `npm run optimizegif`.
	> :bulb: By default the optimized images will get outputted to the "optimized" folder, however if you want that your original images get replaced by the optimized ones, run the command `npm run optimizegif replace`.

5. If you want to run the website on your localhost type: 
	`npm run start`

6. If you want to build the site for production. Run `npm run build`. A folder called “build” should get created.

## :blue_book: Technology Stack
- **Node.js** v.16.13.1
- **Create React App** v5.0.0
- **React Router** v.6.2.1
- **React Markdown** v.8.0.2
	- **rehype-raw** v.6.1.1
	- **rehype-sanitize** v.5.0.1
	- **rehype-slug** v.5.0.1
	- **remark-gemoji** v.7.0.1
	- **remark-gfm** v.3.0.1
	- **remark-a11y-emoji** v.3.1.0
- **react-lazy-load-image-component** v.1.5.4
- **gifsicle-wrapper** v.2.0.2

## :scroll: License
[MIT](https://github.com/martenmatrix/personal-website/blob/master/LICENSE)
