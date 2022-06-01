/*  삼함 연산자의 경우 3개의 피 연산자가 들어가며
 *   조건 ? 참[식] : 거짓[식] 으로 구성 된다.
 *   삼항 연산자의 경우 2~3개가 될 경우 가독성이 떨어져 1개가 마지노선이라 생각 된다.
 */
function isCondition() {
    return condition1
        ? value1
        : condition2
        ? value2
        : condition3
        ? value3
        : value4;
}

function isIfCondition() {
    if (condition1) {
        return value1;
    } else if (condition2) {
        return value2;
    } else if (condition3) {
        return value3;
    } else {
        return value4;
    }
    // 스위치문으로 사용 할 경우
    switch (temp) {
        case condition1:
            return value1;
            break;
        case condition2:
            return value2;
            break;
        case condition3:
            return value3;
            break;
        default:
            return value4;
            break;
    }
}
