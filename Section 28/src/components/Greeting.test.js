import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';


describe('Greeting Component', () => {
    test('renders Hello world as a text', () => {
        //Arrange
        render(<Greeting />);

        //Act

        //Assert
        const element = screen.getByText('Hello World!')

        expect(element).toBeInTheDocument();
    })

    test('Changed text button not clicked', () => {
        render(<Greeting />);

        const paragraph = screen.getByText("It's good to see you!")

        expect(paragraph).toBeInTheDocument();
    })

    test('Changed text button is clicked', () => {
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement);

        //Assert
        const paragraph = screen.getByText("Changed!")

        expect(paragraph).toBeInTheDocument();
    })

    test('Changed text button is clicked and the text("Its good to see you!") is not rendered', () => {
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement);

        //Assert
        const paragraph = screen.queryByText("It's good to see you!")

        expect(paragraph).toBeNull();
    })
})