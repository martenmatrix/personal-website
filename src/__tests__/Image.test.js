import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Image from '../components/Image';

jest.mock('react-lazy-load-image-component', () => ({
    __esModule: true,
    LazyLoadImage: (props) => <img {...props} />,
}));

test('removes loading class when image has loaded', () => {
    render(<Image src="https://example.org/image.png" alt="image does not exist" />);
    const image = screen.getByAltText('image does not exist');

    // eslint-disable-next-line testing-library/no-node-access
    expect(image.parentElement).toHaveClass('loading');
    fireEvent.load(image);
    expect(image.parentElement).not.toHaveClass('loading');
});
