import "package:flutter/material.dart";

import 'package:flutter_application_1/onBoarding/onboarding.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: OnBoardingPage(),
    );
  }
}

class MyPage extends StatelessWidget {
  const MyPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: const Text("Main page")),
        body: Center(
          child: Column(
            children: [
              const Text("Main Screen"),
              ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).pushReplacement((MaterialPageRoute(
                        builder: (context) => const OnBoardingPage())));
                  },
                  child: const Text("Go to onBoarding Screen"))
            ],
          ),
        ));
  }
}
