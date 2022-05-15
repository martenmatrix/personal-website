import { render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

jest.spyOn(console, 'error'); // errors thrown won't be shown

function ThrowsError(props) {
    useEffect(() => {
        throw new Error();
    },[])

    return <></>;
}

test('display triangle image and states that an error has occurred', () => {
    render(
    <ErrorBoundary>
        <ThrowsError />
    </ErrorBoundary>
    );

    screen.getByAltText('alert triangle');
    screen.getByText('An error occurred.');
});