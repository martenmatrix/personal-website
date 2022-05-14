import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import AllProjects from "../components/AllProjects";

jest.mock('react-router-dom', () => ({
    __esModule: true,
    Link: ({to, children, ...rest}) => (<a data-inputhref={to} href={to} {...rest} data-usesrouter=''>{children}</a>)
}));

jest.mock('../components/Image.js', () => (
    // eslint-disable-next-line jsx-a11y/alt-text
    (props) => <img {...props} />
));

jest.mock('../data/projects.js', () => [
    {
        order: 1,
        title: 'a cool project 2',
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
        title: 'a cool project 1',
        description: 'cool description',
        id: 'id5',
        titleImage: 'https://example.org',
    }
]);

test('sets src attribute to titleImage value and loading attribute to lazy', () => {
    render(<AllProjects />);
    const imageOfProject = screen.getByAltText(/a cool project 1 being used/i);

    expect(imageOfProject).toHaveAttribute('src', 'https://example.org');
    expect(imageOfProject).toHaveAttribute('loading', 'lazy');
});

test('projects are sorted by order attribute (number bigger = higher ranked)', () => {
    render(<AllProjects />);
    const headings = screen.getAllByRole('heading', { level: 2 });

    const headingsTextContent = headings.map((heading) => heading.textContent);
    
    expect(headingsTextContent).toEqual(['a cool project 1', 'a cool project 2']);
});

test('does not display projects with a hide property', () => {
    render(<AllProjects />);
    const notExistingProjectHeading = screen.queryByRole('heading', { name: 'a cool hidden project', level: 2 });

    expect(notExistingProjectHeading).toBe(null);
});

test('links to the projects id', () => {
    render(<AllProjects />);
    const links = screen.getAllByRole('link');

    const hrefs = links.map((link) => link.dataset.inputhref);

    expect(hrefs).toEqual(['id5', 'id1']);
});

test('displays project title', async () => {
    render(<AllProjects showProjects={[{
        order: 1,
        title: 'a cool project 2',
        description: 'cool description',
        id: 'id1',
        titleImage: 'https://example.org',
        hide: false
    }]} />);
    const title = screen.getByRole('heading', { level: 2, name: 'a cool project 2'});

    expect(title.textContent).toBe('a cool project 2');
});

test('display projects description', () => {
    render(<AllProjects showProjects={[{
        order: 1,
        title: 'a cool project 2',
        description: 'cool description',
        id: 'id1',
        titleImage: 'https://example.org',
        hide: false
    }]} />);

    screen.getByText('cool description');
});