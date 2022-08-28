import 'package:flutter/material.dart';
import 'package:flutter_application_1/weather/screens/loading.dart';
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
    return MaterialApp(
      title: "Weather App",
      theme: ThemeData(primaryColor: Colors.blue),
      home: Loading(),
    );
  }
}
