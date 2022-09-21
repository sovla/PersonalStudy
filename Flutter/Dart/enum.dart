// 단순 열거형
enum Color { red, green, blue }

// 향상된 열거형
enum Vehicle {
  car(tires: 4, passengers: 5, carbonPerKilometer: 400), // 각각의 Enum 인스턴스
  bus(tires: 6, passengers: 50, carbonPerKilometer: 800),
  bicycle(tires: 2, passengers: 1, carbonPerKilometer: 0);

  const Vehicle({
    // 생성자
    required this.tires,
    required this.passengers,
    required this.carbonPerKilometer,
  });

  final int tires; // 인스턴스 변수
  final int passengers;
  final int carbonPerKilometer;

  int get carbonFootprint => (carbonPerKilometer / passengers).round(); //
  
}

void main(List<String> args) {
  print(Vehicle.car.carbonPerKilometer);
}
