import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_application_1/snackBar/main.dart';
import 'package:fluttertoast/fluttertoast.dart';

class Dice extends StatefulWidget {
  const Dice({Key? key}) : super(key: key);

  @override
  State<Dice> createState() => _DiceState();
}

class _DiceState extends State<Dice> {
  int leftDice = 1;
  int rightDice = 1;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:
          AppBar(title: Text("Dice game"), backgroundColor: Colors.redAccent),
      backgroundColor: Colors.redAccent,
      body: Center(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(32.0),
              child: Row(
                children: [
                  Expanded(child: Image.asset("assets/dice$leftDice.png")),
                  SizedBox(
                    width: 20.0,
                  ),
                  Expanded(child: Image.asset("assets/dice$rightDice.png")),
                ],
              ),
            ),
            RaisedButton(
              color: Colors.orangeAccent,
              onPressed: () {
                setState(() {
                  leftDice = Random().nextInt(6) + 1;
                  rightDice = Random().nextInt(6) + 1;
                });
                showToast("Left Dice: {$leftDice}, Right Dice: {${rightDice}}");
              },
              child: const Icon(Icons.arrow_forward,
                  color: Colors.white, size: 35),
            )
          ],
        ),
      ),
    );
  }
}

void showToast(String message) {
  Fluttertoast.showToast(
      msg: message,
      backgroundColor: Colors.white,
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.BOTTOM);
}
