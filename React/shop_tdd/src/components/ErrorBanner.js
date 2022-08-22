import React from "react";

const ErrorBanner = ({ message }) => {
    const errorMessage = message || "에러 발생했습니다.";
    return (
        <div data-testid="error-banner" style={{}}>
            {errorMessage}
        </div>
    );
};

export default ErrorBanner;
