import "package:flutter/material.dart";
import 'package:flutter_application_1/onBoarding/main.dart';
import 'package:introduction_screen/introduction_screen.dart';

class OnBoardingPage extends StatelessWidget {
  const OnBoardingPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return IntroductionScreen(
      pages: [
        PageViewModel(
            title: "Welcome to My APP",
            body: "This is the first page",
            image: Image.asset("assets/first.jpg"),
            decoration: getPageDecoration()),
        PageViewModel(
            title: "Welcome to My APP",
            body: "This is the first page",
            image: Image.asset("assets/second.jpg"),
            decoration: getPageDecoration()),
        PageViewModel(
            title: "Welcome to My APP",
            body: "This is the first page",
            image: Image.asset("assets/third.jpg"),
            decoration: getPageDecoration())
      ],
      done: const Text("done"),
      onDone: () {
        Navigator.of(context)
            .push(MaterialPageRoute(builder: (context) => const MyPage()));
      },
      next: const Icon(Icons.arrow_right),
      showNextButton: true,
      showSkipButton: true,
      skip: const Text("skip"),
      dotsDecorator: DotsDecorator(
          color: Colors.cyan,
          size: const Size(10, 10),
          activeSize: Size(22, 10),
          activeShape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(24))),
      curve: Curves.bounceOut,
    );
  }
}

PageDecoration getPageDecoration() {
  return const PageDecoration(
      titleTextStyle: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
      bodyTextStyle: TextStyle(fontSize: 18, color: Colors.blue),
      imagePadding: EdgeInsets.only(top: 40),
      pageColor: Colors.orange);
}
