import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("ther counter starts at 0", () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("minus-button");
    expect(buttonElement).toHaveTextContent("-");
});

test("when the - button ios pressed, the counter change", () => {
    render(<App />);
    // 마이너스 버튼 접근
    const buttonElement = screen.getByTestId("minus-button");
    // 마이너스 버튼 클릭
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent("-1");
});

test("plus button has correct text", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("plus-button");
    expect(buttonElement).toHaveTextContent("+");
});

test("when the + button ios pressed, the counter change", () => {
    render(<App />);
    //  버튼 접근
    const buttonElement = screen.getByTestId("minus-button");
    //  버튼 클릭
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent("1");
});

test("on/off button has blue color", () => {
    render(<App />);

    const buttonElement = screen.getByTestId("on/off-button");

    expect(buttonElement).toHaveStyle({
        "background-color": "blue",
    });
});

test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
    render(<App />);

    const buttonElement = screen.getByTestId("on/off-button");

    fireEvent.click(buttonElement);

    const plusButtonElement = screen.getByTestId("plus-button");

    expect(plusButtonElement).toBeDisabled();
});
