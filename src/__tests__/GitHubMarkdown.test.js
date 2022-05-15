import { render, screen } from '@testing-library/react';
import GitHubMarkdown from "../components/GitHubMarkdown";

const markdown = `
# Cocktail Mixer
This contains some GitHub-specific markdown.

## Table of Contents
- [Usage](#grey_exclamation-usage)
- [Features](#sparkles-features)

## :grey_exclamation: Usage
<p align="center">
	<img alt="homepage of frontend with numbers assigned to the sections" src="https://github.com/martenmatrix/cocktail-mixer/blob/main/readme-images/homepage.jpg?raw=true" />
</p>
<ol>
	<li>
		lorum lorum sorum
	</li>
	<li>
        lorum lorum sorum 2
	</li>
	<li>
		<details>
			<summary>
				This will open up the settings. You will be prompted for a password. The default password is <code>cocktail</code>.
			</summary>
			<div>
				<ol>
					<p align="center">
						<img alt="two images: static settings site with numbers on the left and animated settings site with action on the right" src="https://raw.githubusercontent.com/martenmatrix/cocktail-mixer/main/readme-images/static-and-animation-settings.gif" />
					</p>
					<li>
						Add an ingredient and assign it a category. The current categories consist of <code>juice</code>, <code>softdrink</code>, <code>alcohol</code> and <code>unableToPump</code>.
					</li>
				</ol>
			</div>
		</details>
	</li>
</ol>

## :sparkles: Features
- everyone on your local network can make a drink by visiting the website hosted by the machine in your local network
- automatically mix a drink with the press of a button

1. First list item.
1. Second one.

## :wrench: Installation

> :warning: The following guide is for Linux distributions.
1. Clone the repository.
2. Navigate into the folder:

#### Cool code
\`const cool = (text) => console.log(text)\`
`

test('parses markdown correctly', () => {
    const { container } = render((
    <GitHubMarkdown>
        {markdown}
    </GitHubMarkdown>))

    expect(container).toMatchSnapshot();
});