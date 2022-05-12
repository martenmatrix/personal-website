/* eslint-disable testing-library/no-render-in-setup */

import { render, screen } from '@testing-library/react';
import LinkDesign from '../components/LinkDesign';

jest.mock('react-router-dom', () => ({
    __esModule: true,
    Link: ({to, children, ...rest}) => (<a href={to} {...rest} data-usesrouter='y'>{children}</a>)
}));


test('displays text as children', () => {
    render((<LinkDesign to="https://www.example.org">Test</LinkDesign>));
    const element = screen.getByRole('link');

    expect(element.textContent).toBe('Test');
});

test('uses normal anchor tag for mailto links', () => {
    render((<LinkDesign to="mailto:mail@example.org" />));
    const element = screen.getByRole('link');

    expect(element.dataset.usesrouter).toBe(undefined);
});


describe('absolute links', () => {
    let element;
    beforeEach(() => {
        render((<LinkDesign to="http://www.example.org" />));
        element = screen.getByRole('link');
    })

    test('use a normal anchor tag', () => {
        expect(element.dataset.usesrouter).toBe(undefined);
        console.log(element)
    });

    test('are displayed with an arrow', () => {
        screen.getByAltText('arrow up right');
    });
});


describe('relative links', () => {
    let element;
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render((<LinkDesign to="projects" />));
        element = screen.getByRole('link');
    })

    test('are being created with the react router Link component', () => {
        expect(element.dataset.usesrouter).not.toBe(undefined);
    });

    test('are not displayed with an arrow', () => {
        const arrow = screen.queryByAltText('arrow up right');
        expect(arrow).toBe(null);
    });
});
