import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import AllProjects from "../components/AllProjects";

jest.mock('react-router-dom', () => ({
    __esModule: true,
    Link: ({to, children, ...rest}) => (<a data-inputhref={to} href={to} {...rest} data-usesrouter=''>{children}</a>)
}));

jest.mock('../data/projects.js', () => [
    {
        order: 1,
        title: 'A Cool Project 2',
        description: 'cool description',
        id: 'id1',
        titleImage: 'https://example.org',
        hide: false
    },
    {
        order: 2,
        title: 'a cool hidden project',
        description: 'cool description',
        id: 'id2',
        titleImage: 'https://example.org',
        hide: true
    },
    {
        order: -200,
        title: 'A Cool Project 1',
        description: 'cool description',
        id: 'id5',
        titleImage: 'https://example.org',
    }
]);

test('shows the lowercase projects heading above the list of links', () => {
    render(<AllProjects />);
    const heading = screen.getByRole('heading', { level: 1, name: 'projects' });
    const links = screen.getByRole('navigation', { name: 'projects' });

    expect(heading.nextElementSibling).toBe(links);
});

test('projects are shown in lowercase and sorted by order', () => {
    render(<AllProjects />);
    const links = screen.getAllByRole('link');

    const titles = links.map((link) => link.textContent);

    expect(titles).toEqual(['a cool project 1', 'a cool project 2']);
});

test('does not display projects with a hide property', () => {
    render(<AllProjects />);
    const hiddenProjectLink = screen.queryByRole('link', { name: 'a cool hidden project' });

    expect(hiddenProjectLink).not.toBeInTheDocument();
});

test('links to the projects id', () => {
    render(<AllProjects />);
    const links = screen.getAllByRole('link');

    const hrefs = links.map((link) => link.dataset.inputhref);

    expect(hrefs).toEqual(['id5', 'id1']);
});
