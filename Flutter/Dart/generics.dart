//  제네릭의 장점
//  1. 제네릭 유형을 적절하게 지정하면 생산성이 올라갑니다.
//  2. 제네릭을 사용하여 코드 중복을 줄일 수 있습니다.

void main(List<String> args) {
  var names = <String>[];
  names.add("Gavri");
  // names.add(1); // int type error
}

abstract class ObjectCache {
  Object getByKey(String key);
}

abstract class StringCache {
  String getByKey(String key);
}

// 제네릭 활용

abstract class Cache<T> {
  T getByKey(String key);
}

// -------------- 컬렉션 리터럴

var names = <String>["Seth", "Kathy"]; // List
var uniqueNames = <String>{"Seth", "Kathy"}; // Set
var pages = <String, String>{
  "index.html": "HomePage",
  "robots.txt": "Hints for web robots",
};
// 생성자와 함께 매개변수화된 유형 사용
var nameSet = Set<String>.from(names);
// var views = Map<int, View>();

// var names = <String>[];
// names.addAll(['Seth', 'Kathy', 'Lars']);
// print(names is List<String>); // true

// 제네릭 타입 제한

// 제네릭 형식을 구현할 때는 인수로 제공할 수 있는 형식을 제한하여 인수가 특정 형식의 하위 형식이어야 합니다.
// extends 를 활용해 위 내용을 구현 할 수 있습니다.

class Foo<T extends Object> {
  // null을 제외한 모든 타입은 Object를 상속하기에 null 제외하기 위해 Object 상속
}

class SomeBaseClass {}

class Boo<T extends SomeBaseClass> {}

class Extender extends SomeBaseClass {}

var someBaseClassFoo = Foo<SomeBaseClass>();
var extenderFoo = Foo<Extender>(); // 하위 클래스

var foo = Foo();
print(foo); // Instance of 'Foo<SomeBaseClass>'
