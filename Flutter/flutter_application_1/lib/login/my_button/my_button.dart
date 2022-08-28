import 'package:flutter/material.dart';

class MyButton extends StatelessWidget {
  MyButton(
      {required this.image,
      required this.text,
      required this.color,
      required this.radius,
      required this.onPressed});

  final Widget image;
  final Widget text;
  final Color color;
  final double radius;
  final VoidCallback onPressed;

  @override
  Widget build(BuildContext context) {
    return ButtonTheme(
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(radius))),
        height: 50,
        child: RaisedButton(
          color: color,
          onPressed: onPressed,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              image,
              text,
              Opacity(
                opacity: 0.0,
                child: image,
              )
            ],
          ),
        ));
  }
}
