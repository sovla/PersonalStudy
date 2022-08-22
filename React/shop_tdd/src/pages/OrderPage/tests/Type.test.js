import { userEvent, render, screen } from "@testing-library/react";
import { rest } from "msw";
import OrderPage from "../index";
import { server } from "../../../mocks/server";
import Type from "../Type";
import App from "../../../App";

test("서버에서 이미지 받아오기", async () => {
    render(<Type orderType="products" />);

    const productImages = await screen.findAllByRole("img", {
        name: /product$/i,
    });

    expect(productImages).toHaveLength(2);

    const altText = productImages.map((element) => element.alt);

    expect(altText).toEqual(["America product", "England product"]);
});

test("서버에서 옵션 받아오기", async () => {
    render(<Type orderType="options" />);

    const optionElements = await screen.findAllByRole("checkbox");

    expect(optionElements).toHaveLength(2);
});

test("상품 정보 에러 발생한 경우", async () => {
    server.resetHandlers(
        rest.get("http://localhost:5000/products", (req, res, ctx) => {
            return res(ctx.status(500));
        })
    );

    render(<Type orderType="products" />);

    const errorBanner = await screen.findByTestId("error-banner");

    expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});

test("상품에 따른 전체 가격 변동 테스트", async () => {
    render(<App />);
    // 초기값 0
    const productsTotal = screen.getByText("상품 총 가격: ", {
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
