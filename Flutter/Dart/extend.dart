class Person {
  eat() {
    print("입으로 먹기");
  }

  sleep() {
    print("zzz...");
  }

  String run(String where) {
    var runString = "$where으로 달리기";
    print(runString);
    return runString;
  }
}

class Man extends Person {
  @override // @override는 생략가능
  eat() {
    super.eat();
    print("eat");
  }

  @override
  String run(String where) {
    return super.run(where);
  }

  @override
  // 선언하지 않은 메서드 또는 변수를 사용하는 경우
  noSuchMethod(Invocation invocation) {
    print("선언하지 않은 변수를 사용 : ${invocation.memberName}");
    return super.noSuchMethod(invocation);
  }
}

void main() {
  Man man = Man();

  man.eat(); // 입으로 먹기 , eat
  man.sleep(); // zzz...
  man.run("한강"); // 한강으로 달리기
}
