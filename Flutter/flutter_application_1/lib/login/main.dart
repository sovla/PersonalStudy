import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

import 'package:flutter_application_1/login/login_app/login.dart';

void main(List<String> args) {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Login app",
      theme: ThemeData(primarySwatch: Colors.grey),
      home: LogIn(),
    );
  }
}
