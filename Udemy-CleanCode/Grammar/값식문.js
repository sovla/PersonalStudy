/**
 * 값 : value 프로그램이 조작할 수 있는 어떤 표현이다. (문자열,숫자)
 * 식 : 값을 결정짓기 위해 평갈될 수 있는 구문이다.
 * 문 : 수행할 액션의 문구 단위이다.
 * React 를 처음 다루는 초보들이 주로 하는 실수가 값을 리턴 해야 하는 곳에 문을 사용하는 것이다.
 *
 */

/* 
값 : <AnyComponent name="jun" />    
식 : <AnyComponent name={isName ? "jun":null} />    
문 : <AnyComponent name={if(isName) {"jun"}} />     

문을 사용 할 경우 즉시실행함수를 이용해서 사용이 가능하다.
<AnyComponent name={(()=>{
    if(isName){
        return "jun"
    }else{
        return null
    }
})()}
*/

// 그리고 js의 가장 큰 단점은 다양한 프로그래밍 방식을 지원 하는 것인데, 이러한 문제가 클린 코딩을 더욱 어렵게 만든다는 점이다.

<div>
    {/* 즉시 실행 함수를 사용 할 경우 */}
    {(() => {
        if (isName) {
            return <span>Jun</span>;
        } else {
            return null;
        }
    })()}
    {/* 해당 소스의 경우 이렇게 작성하는 것이 가독성에 더 좋다 */}
    {isName && <span>Jun</span>}
</div>;
