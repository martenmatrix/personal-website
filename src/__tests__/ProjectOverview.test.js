import { act, render, screen } from "@testing-library/react";
import React from "react";
import Router from "react-router-dom";
import ProjectOverview from "../components/ProjectOverview";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
}));

jest.mock('../data/projects.js', () => [
    {
        order: 4,
        title: 'Capital Gains Calculator',
        description: "Calculate your capital gains with the FiFo method with CSV's from Trading212 or Revolut.",
        id: 'fifo-calc',
        titleImage: 'https://example.org/image.png',
        overviewImage: 'https://example.org/image.gif',
        deploy: 'https://example.org',
        git: 'https://example.org',
        readme: 'https://example.org',
    },
]);

test('display error message on a not existing project', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ projectId: 'does-not-exist' });
    render(<ProjectOverview />);

    const errorMessage = screen.getByText('This project does not exist');
    expect(errorMessage).toBeInTheDocument();
});

test('displays title', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ projectId: 'fifo-calc' });
    render(<ProjectOverview />);

    screen.getByRole('heading', { level: 1, name: 'Capital Gains Calculator' });
    screen.debug()
});

test('clicking on image enlarges it and that is stated', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ projectId: 'fifo-calc' });
    render(<ProjectOverview />);
    screen.getByText('Click the image to enlarge');
    const image = screen.getByAltText('Website being used');

    expect(image.src).toBe('https://example.org/image.gif');
});

test('displays error message when readme does not exist or cannot be fetched', async () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ projectId: 'fifo-calc' });
    const mockedFetch = jest.spyOn(global, 'fetch').mockReturnValue(
            new Promise((resolve, reject) => {
                reject('Error');
            })
    );
    render(<ProjectOverview />)

    expect(mockedFetch).toHaveBeenCalledWith('https://example.org', { "method": "GET" });

    const textToMatch = 'There was an error fetching a file from GitHub. Try refreshing the page.';
    function textContentMatcher(text) {
        return function (_content, node) {
          const hasText = (node) => node.textContent === text
          const nodeHasText = hasText(node)
          const childrenDontHaveText = Array.from(node?.children || []).every(
            (child) => !hasText(child)
          )
          return nodeHasText && childrenDontHaveText
        }
      }
     
    await screen.findByText(textContentMatcher(textToMatch))
});

test('displays a loading animation before it fetches the readme', async () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ projectId: 'fifo-calc' });
    let resolveLoading;
    const mockedFunction = jest.spyOn(global, 'fetch').mockReturnValue(
        new Promise((resolve) => {
            resolveLoading = resolve;
        })
    );
    
    render(<ProjectOverview />);
    expect(mockedFunction).toHaveBeenCalled();
    const loadingCircle = await screen.findByRole('alert');
    expect(loadingCircle).toBeInTheDocument();

    const response = {
        text: () => (
            new Promise((resolve) => resolve('Hello'))
        )
    }
    await act(() => resolveLoading(response));

    expect(loadingCircle).not.toBeInTheDocument();
});