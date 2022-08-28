import 'package:flutter/material.dart';
import 'package:flutter_application_1/login/my_button/my_button.dart';

class LogIn extends StatelessWidget {
  const LogIn({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: Text(
          "Sign In",
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
        elevation: 0.2,
      ),
      body: _buildButton(),
    );
  }

  Widget _buildButton() {
    // _ private 적용
    return Padding(
      padding: EdgeInsets.all(16),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          MyButton(
              image: Image.asset("assets/glogo.png"),
              text: Text(
                "Login with Google",
                style: TextStyle(color: Colors.black87, fontSize: 15),
              ),
              color: Colors.white,
              radius: 4.0,
              onPressed: () {}),
          SizedBox(
            height: 10,
          ),
        ],
      ),
    );
  }
}
