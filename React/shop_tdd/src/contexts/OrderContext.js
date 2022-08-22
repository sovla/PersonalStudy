import { createContext, useEffect, useMemo, useState } from "react";

export const OrderContext = createContext();

const pricePerItem = {
    products: 1000,
    options: 500,
};
/**
 * 08-22 Junhan 작성
 * orderType에 따른 가격을 계산해 리턴해주는 메소드
 * @param {"products"|"options"} orderType
 * @param {number} orderCounts
 * @returns {number} 가격을 리턴
 */
function calculateSubtotal(orderType, orderCounts) {
    let optionCount = 0;
    for (const count of orderCounts[orderType].values()) {
        optionCount += count;
    }

    return optionCount * pricePerItem[orderType];
}

export function OrderContextProvider(props) {
    const [orderCounts, setOrderCounts] = useState({
        products: new Map(),
        options: new Map(),
    });

    const [totals, setTotals] = useState({
        products: 0,
        options: 0,
        total: 0,
    });

    useEffect(() => {
        const productsTotal = calculateSubtotal("products", orderCounts);
        const optionsTotal = calculateSubtotal("options", orderCounts);
        const total = productsTotal + optionsTotal;

        setTotals({
            products: productsTotal,
            options: optionsTotal,
            total: total,
        });
    }, [orderCounts]);

    const value = useMemo(() => {
        function updateItemCount(itemName, newItemCount, orderType) {
            const newOrderCounts = { ...orderCounts };

            const orderCountsMap = orderCounts[orderType];
            orderCountsMap.set(itemName, parseInt(newItemCount));

            setOrderCounts(newOrderCounts);
        }
        function resetOrderDatas() {
            setOrderCounts({
                options: new Map(),
                products: new Map(),
            });
        }

        return [{ ...orderCounts, totals }, updateItemCount, resetOrderDatas];
    }, [orderCounts, totals]);
    return <OrderContext.Provider value={value} {...props} />;
}
