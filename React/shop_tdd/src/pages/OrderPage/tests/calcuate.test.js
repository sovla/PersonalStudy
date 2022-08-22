import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import Type from "../Type";
import OrderPage from "../OrderPage";

test("상품에 따른 상품 전체 가격 변동 테스트", async () => {
    render(<Type orderType="products" />);
    // 초기값 0
    const productsTotal = screen.getByText("상품 총 가격:", {
        exact: false,
    });
    expect(productsTotal).toHaveTextContent("0");

    // 아메리카 여행 상품 한개 올리기
    const americaInput = await screen.findByRole("spinbutton", {
        name: "America",
    });

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");
    expect(productsTotal).toHaveTextContent("1000");

    //  영국 여행 상품 3개 더 올리기
    const englandInput = await screen.findByRole("spinbutton", {
        name: "England",
    });
    userEvent.clear(englandInput);
    userEvent.type(englandInput, "3");
    expect(productsTotal).toHaveTextContent("4000");
});

test("옵션에 따른 옵션 전체 가격 변동 테스트", async () => {
    render(<Type orderType="options" />);
    // 초기값 0
    const optionsTotal = screen.getByText("옵션 총 가격:", {
        exact: false,
    });
    expect(optionsTotal).toHaveTextContent("0");

    // 보험 옵션 추가
    const insuranceCheckbox = await screen.findByRole("checkbox", {
        name: "Insurance",
    });
    userEvent.click(insuranceCheckbox);
    expect(optionsTotal).toHaveTextContent("500");

    //  디너 옵션 추가
    const dinnerCheckbox = await screen.findByRole("checkbox", {
        name: "Dinner",
    });
    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent("1000");

    //  디너 옵션 제거
    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent("500");
});

describe("전체 상품 가격 변동 테스트", () => {
    test("전체 상품 가격 0원 시작 확인 및 상품 추가에 따른 전체 가격 변동 확인", async () => {
        render(<OrderPage />);
        const total = screen.getByText("Total Price:", { exact: false });

        expect(total).toHaveTextContent("0");
        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });

        userEvent.clear(americaInput);
        userEvent.type(americaInput, "1");

        expect(total).toHaveTextContent("1000");
    });
    test("옵션 추가에 따른 전체 가격 변동 확인", async () => {
        render(<OrderPage />);

        const total = screen.getByText("Total Price:", { exact: false });

        // 보험 옵션 추가
        const insuranceCheckbox = await screen.findByRole("checkbox", {
            name: "Insurance",
        });
        userEvent.click(insuranceCheckbox);
        expect(total).toHaveTextContent("500");
    });

    test("옵션 및 상품 제거에 따른 전체 가격 변동 확인", async () => {
        render(<OrderPage />);

        const total = screen.getByText("Total Price:", { exact: false });

        // 보험 옵션 추가
        const insuranceCheckbox = await screen.findByRole("checkbox", {
            name: "Insurance",
        });
        userEvent.click(insuranceCheckbox);

        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });

        userEvent.clear(americaInput);
        userEvent.type(americaInput, "3");

        userEvent.clear(americaInput);
        userEvent.type(americaInput, "1");

        expect(total).toHaveTextContent("1500");
    });
});
