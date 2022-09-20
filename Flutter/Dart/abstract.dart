abstract class Person {
  //추상 클래스
  eat(); // 추상 메서드 바디가 없다

  Person();
  sleep() {
    // 일반 메서드
    print("zzz...");
  }
}

class Man implements Person {
  @override // @override는 생략가능
  eat() {
    print("eat");
  }

  sleep() {
    print("zzz...");
  }
}

void main() {
  Man man = Man();

  man.eat(); // eat
  man.sleep(); // zzz...
}
