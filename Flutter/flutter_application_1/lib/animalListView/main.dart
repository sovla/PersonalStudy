import "package:flutter/material.dart";
import 'package:flutter_application_1/animalListView/animal_page.dart';
import 'package:flutter_application_1/animalListView/model.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: "MyApp",
      home: MyPage(),
    );
  }
}

class MyPage extends StatefulWidget {
  const MyPage({Key? key}) : super(key: key);

  @override
  State<MyPage> createState() => _MyPageState();
}

class _MyPageState extends State<MyPage> {
  static List<String> animalName = [
    "Bear",
    "Camel",
    "Deer",
    "Fox",
    "Kangaroo",
    "Koala",
    "Lion",
    "Tiger"
  ];

  static List<String> animalLocation = [
    "forest",
    "dessert",
    "forest",
    "snow",
    "Australia",
    "Australia",
    "Africa",
    "Korea"
  ];

  final List<Animal> animalData = List.generate(
      animalName.length,
      (index) => Animal(animalName[index], animalLocation[index],
          "assets/${animalName[index].toLowerCase()}.png"));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("ListView"),
        ),
        body: ListView.builder(
            itemCount: animalData.length,
            itemBuilder: (context, index) {
              return Card(
                child: ListTile(
                    title: Text(animalData[index].name),
                    leading: SizedBox(
                      width: 50,
                      height: 50,
                      child: Image.asset(animalData[index].imgPath),
                    ),
                    onTap: () {
                      Navigator.of(context).push(MaterialPageRoute(
                          builder: (context) => AnimalPage(
                                animal: animalData[index],
                              )));
                    }),
              );
            }));
  }
}
