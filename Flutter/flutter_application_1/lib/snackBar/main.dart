import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "빌더 위젯 없이 스낵바/토스트메시지",
      home: MyPage(),
    );
  }
}

class MyPage extends StatelessWidget {
  const MyPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Snack Bar"),
        centerTitle: true,
      ),
      body: MySnackBar(),
    );
  }
}

class MySnackBar extends StatelessWidget {
  const MySnackBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: [
          FlatButton(
            onPressed: () {
              flutterToast();
            },
            child: Text("Toast"),
            color: Colors.blue,
          ),
          RaisedButton(
              child: Text("Show Me"),
              onPressed: () {
                flutterToast();
                Scaffold.of(context).showSnackBar(SnackBar(
                  content: Text(
                    "asdsa",
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.white),
                  ),
                  duration: Duration(milliseconds: 1000),
                  backgroundColor: Colors.teal,
                ));
              }),
        ],
      ),
    );
  }
}

void flutterToast() {
  Fluttertoast.showToast(
      msg: "Flutter",
      gravity: ToastGravity.BOTTOM,
      backgroundColor: Colors.redAccent,
      fontSize: 20.0,
      textColor: Colors.white,
      toastLength: Toast.LENGTH_SHORT);
}
