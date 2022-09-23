// 비동기 함수 선언

Future<bool> future() async {
  return true;
}

// 스트림 처리 방법
// - use async and an asynchronous for loop(await for)
// - use the Stream API

void main(List<String> args) async {
  await for (varOrType identifier in expression) {
    // 탈출하고 싶을땐 break; return;

    // ...
  }
}
