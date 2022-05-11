import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Homepage from '../components/Homepage';

jest.mock('../data/links', () =>
    [
        { title: 'link', href: 'https://example.org' },
        { title: 'link', href: 'https://example.org', newTab: false },
        { title: 'link', href: 'https://example.org', newTab: true },
    ]
);

jest.mock('../components/LinkDesign.js', () => {
    return ({ to, target, children }) => <a href={to} target={target}>{children}</a>;
});

render(<Homepage />);
const navigationLinks = screen.getAllByRole('listitem');
const navigationLinksAnchor = screen.getAllByRole('link');

test('animation delay increases 200ms for every link', () => {
    expect(navigationLinks[0]).toHaveStyle('animation-delay: 0ms');
    expect(navigationLinks[1]).toHaveStyle('animation-delay: 200ms');
    expect(navigationLinks[2]).toHaveStyle('animation-delay: 400ms');
});

test('title is displayed as child of anchor tag', () => {
    expect(navigationLinks[0].textContent).toBe('link');
});

test('links to a newtab if newTab is set to true in linkObject', () => {
    expect(navigationLinksAnchor[2].target).toBe('_blank');
});

test('does not link to a newtab if newTab is set to false or was not specified', () => {
    expect(navigationLinksAnchor[0].target).toBe('_self');
    expect(navigationLinksAnchor[1].target).toBe('_self');
});