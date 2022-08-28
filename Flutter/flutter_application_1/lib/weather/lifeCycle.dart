import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';

/**
 * 공부할 내용
 * 1. Widget lifecycle
 *  - Stateless Widget 
 *    - Constructor Function 
 *    - build
 *  - StateFul Widgets
 *    - Constructor Function 
 *    - initState()
 *    - build()
 *    - setState()
 *    - didUpdateWidget()
 *    - build()
 * 
 * 2. API
 * 3. Exception handling
 * 4. Http package
 * 5. Jason parsing
 * 6. Passing data
 */

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: "Weather App",
      home: Test(),
    );
  }
}

class Test extends StatelessWidget {
  const Test({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Test"),
      ),
      body: Center(
          child: ElevatedButton(
        child: const Icon(Icons.arrow_circle_right_outlined),
        onPressed: () {
          Navigator.of(context)
              .push(MaterialPageRoute(builder: (context) => const Test1()));
        },
      )),
    );
  }
}

class Test1 extends StatefulWidget {
  const Test1({Key? key}) : super(key: key);

  @override
  State<Test1> createState() => _Test1State();
}

class _Test1State extends State<Test1> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    print("init");
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    print("dispose");
  }

  @override
  Widget build(BuildContext context) {
    print("build");
    return Scaffold(
      appBar: AppBar(
        title: const Text("Test1"),
      ),
      body: const Center(child: Text("Test1")),
    );
  }
}
