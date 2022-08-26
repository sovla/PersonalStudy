import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "snackbar",
      home: MyPage(),
      color: Colors.amber,
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
      body: Builder(builder: (ctx) {
        return Center(
            child: FlatButton(
          child: Text("Show me"),
          onPressed: () {
            Scaffold.of(ctx).showSnackBar(SnackBar(content: Text("Hello")));
          },
        ));
      }),
    );
  }
}
