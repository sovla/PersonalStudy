#MiddleWare Example

## lib
1. React
2. React-redux 
3. React-google-map // Google-map
4. React-sparklines // Chart
5. recompose // Higher-Order Function
6. redux-promise // using middleware
7. lodash // 

---

## study

다이어그램
1. 클릭 혹은 어떠한 이벤트로 인해 액션 생성자가 호출된다.
2. 호출된 액션 생성자는 액션을 반환한다.
3. 반환된 액션은 자동적으로 모든 리듀서에 보내진다.
4. 리듀서에서는 해당하는 타입이 맞는것인가 확인한뒤 맞다면 해당하는 타입의 리듀서에 지정해둔 값으로 들어간다.
5. 해당 값은 다시 리듀서를 매핑하는 combineReducers에 의해 글로벌 state 로 지정된다.

현 프로젝트 다이어그램 미들웨어 포함
1. search_bar.js -> onFormSubmit() 이벤트 발생
2. onFormSubmit -> this.props.fetchWeather(this.state.term) 
3. fetchWeather() 내부에 axios.get() 으로 API와 통신 -> 중간에 applyMiddleware(ReduxPromise)(createStore) 로 인해 미들웨어가 promise 객체에대해 판단함 
4. 올바르게 전송 완료시 반환된 액션을 가지고 해당 타입에 맞는 리듀서로 전송 -> 리듀서 내에서 액션 타입에 따른 switch 문으로 다른 결과 return 
5. return [action.payload.data, ...state] 이전에 가지고 있던 state와 병합하여 데이터 전송 -> 전송된 데이터 매핑 combineReducers({  weather: WeatherReducer,});
6. 커넥트 되어있는 컨테이너중 해당되는 데이터가 존재하는 곳으로 전송 function mapStateToProps({ weather }) {return { weather };} Export default connect(mapStateToProps)(WeatherList);

## 강의
- 클론 코딩이다보니 큰 문제없이 진행될거라 생각했으나 많은 라이브러리를 사용해서 오류가 많이 발생해서 고치느라 애먹었다.
- redux의 흐름에 대해 어느정도 이해한것 같다. middleWare는 문지기라 하였는데 라이브러리를 이용하다보니 너무 간단하게 넘어가서 아쉽다. 이부분은 보충이 필요하다.

## 시연영상 
https://youtu.be/Z6rA5KDNdgc


