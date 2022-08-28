import 'package:flutter/material.dart';
import 'dice.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Dice game',
      home: LogIn(),
    );
  }
}

class LogIn extends StatefulWidget {
  const LogIn({Key? key}) : super(key: key);

  @override
  State<LogIn> createState() => _LogInState();
}

class _LogInState extends State<LogIn> {
  TextEditingController controller = TextEditingController();
  TextEditingController controller2 = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Log in'),
        backgroundColor: Colors.redAccent,
        centerTitle: true,
        leading: IconButton(icon: const Icon(Icons.menu), onPressed: () {}),
        actions: <Widget>[
          IconButton(icon: const Icon(Icons.search), onPressed: () {})
        ],
      ),
      body: Builder(builder: (context) {
        return GestureDetector(
          onTap: () {
            FocusScope.of(context).unfocus();
          },
          child: SingleChildScrollView(
            child: Column(
              children: [
                const Padding(padding: const EdgeInsets.only(top: 50)),
                const Center(
                  child: const Image(
                    image: AssetImage("assets/chef.gif"),
                    width: 170,
                    height: 190,
                  ),
                ),
                Form(
                  child: Theme(
                    data: ThemeData(
                        primaryColor: Colors.teal,
                        inputDecorationTheme: const InputDecorationTheme(
                            labelStyle:
                                TextStyle(color: Colors.teal, fontSize: 15))),
                    child: Container(
                      padding: const EdgeInsets.all(40),
                      child: Column(
                        children: [
                          TextField(
                            controller: controller,
                            decoration: const InputDecoration(
                                labelText: 'Enter "dice"'),
                            keyboardType: TextInputType.emailAddress,
                            autofocus: true,
                          ),
                          TextField(
                            controller: controller2,
                            decoration: const InputDecoration(
                                labelText: 'Enter Password'),
                            keyboardType: TextInputType.text,
                            obscureText: true,
                          ),
                          const SizedBox(
                            height: 40,
                          ),
                          ButtonTheme(
                              minWidth: 100,
                              height: 50,
                              child: RaisedButton(
                                color: Colors.orangeAccent,
                                onPressed: () {
                                  if (controller.text == "dice" &&
                                      controller2.text == "1234") {
                                    Navigator.push(
                                        context,
                                        MaterialPageRoute(
                                            builder: (BuildContext context) =>
                                                const Dice()));
                                  } else if (controller.text == "dice" &&
                                      controller2.text != "1234") {
                                    showSnackBar(context, "비밀번호가 틀립니다.");
                                  } else if (controller.text != "dice" &&
                                      controller2.text == "1234") {
                                    showSnackBar(context, "아이디가 틀립니다.");
                                  } else {
                                    showSnackBar(context, "잘못된 회원입니다.");
                                  }
                                },
                                child: const Icon(Icons.arrow_forward,
                                    color: Colors.white, size: 35),
                              ))
                        ],
                      ),
                    ),
                  ),
                )
              ],
            ),
          ),
        );
      }),
    );
  }
}

void showSnackBar(BuildContext context, String text) {
  Scaffold.of(context).showSnackBar(SnackBar(content: Text("${text}")));
}
