import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ErrorBanner from "../../components/ErrorBanner";
import { OrderContext } from "../../contexts/OrderContext";

const CompletePage = ({ setStep }) => {
    const [OrderDatas, , resetOrderDatas] = useContext(OrderContext);
    const [orderHistory, setOrderHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const orderComplete = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5000/order",
                OrderDatas
            );
            setOrderHistory(response.data);
            setIsLoading(false);
        } catch (error) {
            setIsError(true);
        }
    };

    const orderTable = orderHistory.map((item) => (
        <tr key={item.orderNumber}>
            <td>{item.orderNumber}</td>
            <td>{item.price}</td>
        </tr>
    ));

    useEffect(() => {
        orderComplete();
    }, []);

    if (isError) {
        return <ErrorBanner message="에러가 발생했습니다." />;
    }
    if (isLoading) {
        return <div>loading</div>;
    }

    return (
        <div>
            <h2>주문이 성공했습니다.</h2>
            <h3>지금까지 모든 주문</h3>
            <br />
            <table>
                <tbody>
                    <tr>
                        <th>주문 번호</th>
                        <th>주문 가격</th>
                    </tr>
                    {orderTable}
                </tbody>
            </table>
            <button
                type="button"
                onClick={() => {
                    setStep(0);
                    resetOrderDatas();
                }}
            >
                첫페이지로
            </button>
        </div>
    );
};

export default CompletePage;
