import { render, screen } from "../../../test-utils";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import Type from "../Type";

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
