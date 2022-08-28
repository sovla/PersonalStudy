import 'dart:math';

void main() {
  // forLoop();
  // // For in - forEach 는 기능은 동일하나 foreach가 성능적으로 더 좋다
  // forInLoop();
  // forEachLoop();
  // print(lottoNumber().toList());
  listLoop();
}

void forLoop() {
  // for Loop
  for (var i = 0; i < 10; i++) {
    print('$i번째 실행');
  }
}

void forInLoop() {
  List<String> rainbow = ["빨", "주", "노", "초", "파", "남", "보"];
  for (String x in rainbow) {
    print(x);
  }
}

void forEachLoop() {
  List<String> rainbow = ["빨", "주", "노", "초", "파", "남", "보"];
  rainbow.forEach((element) {
    print(element);
  });
}

Set<int> lottoNumber() {
  var random = Random();
  Set<int> lottoList = {};

  var num;
  while (lottoList.length != 6) {
    lottoList.add(random.nextInt(45) + 1);
  }
  return lottoList;
}

void listLoop() {
  var list =
      (List<int>.generate(45, (index) => index + 1)..shuffle()).sublist(0, 6);
  print(list);
}

List<int> lottoNumber2() {
  var list =
      (List<int>.generate(45, (index) => ++index)..shuffle()).sublist(0, 6);
  return list;
}
