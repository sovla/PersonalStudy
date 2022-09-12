import 'package:flutter/material.dart';
import 'package:flutter_chatting/config/palette.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_chatting/screens/chat_screen.dart';

class LoginSignupScreen extends StatefulWidget {
  const LoginSignupScreen({Key? key}) : super(key: key);

  @override
  State<LoginSignupScreen> createState() => _LoginSignupScreenState();
}

class _LoginSignupScreenState extends State<LoginSignupScreen> {
  final _authentication = FirebaseAuth.instance;

  bool isSignupScreen = true;
  final _formKey = GlobalKey<FormState>();
  String userName = "";
  String userEmail = "";
  String userPassword = "";

  void _tryValidation() {
    final isValid = _formKey.currentState!.validate();

    if (isValid) {
      _formKey.currentState!.save();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Palette.backgroundColor,
      body: GestureDetector(
        onTap: () {
          FocusScope.of(context).unfocus();
        },
        child: Stack(
          children: [
            Positioned(
                top: 0,
                left: 0,
                right: 0,
                child: Container(
                  height: 300,
                  decoration: const BoxDecoration(
                    image: DecorationImage(
                        image: AssetImage("image/red.jpg"), fit: BoxFit.fill),
                  ),
                  child: Container(
                    padding: const EdgeInsets.only(top: 90, left: 20),
                    child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          RichText(
                              text: TextSpan(
                                  text: "Welcome",
                                  style: const TextStyle(
                                      letterSpacing: 1.0,
                                      fontSize: 25,
                                      color: Colors.white),
                                  children: [
                                TextSpan(
                                    text: isSignupScreen
                                        ? " to Yummy Chat!"
                                        : " back",
                                    style: const TextStyle(
                                        letterSpacing: 1.0,
                                        fontSize: 25,
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold))
                              ])),
                          const Text("signup to continue",
                              style: TextStyle(
                                letterSpacing: 1.0,
                                color: Colors.white,
                              ))
                        ]),
                  ),
                )),
            AnimatedPositioned(
                duration: const Duration(milliseconds: 500),
                curve: Curves.easeIn,
                top: 180.0,
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 500),
                  curve: Curves.easeIn,
                  padding: const EdgeInsets.all(20.0),
                  height: isSignupScreen ? 280.0 : 250.0,
                  width: MediaQuery.of(context).size.width - 40,
                  margin: const EdgeInsets.symmetric(horizontal: 20.0),
                  decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(15.0),
                      boxShadow: [
                        BoxShadow(
                            color: Colors.black.withOpacity(0.3),
                            blurRadius: 15,
                            spreadRadius: 5)
                      ]),
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.only(bottom: 20),
                    child: Column(
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceAround,
                          children: [
                            GestureDetector(
                              onTap: () {
                                setState(() {
                                  isSignupScreen = false;
                                });
                              },
                              child: Column(
                                children: [
                                  Text("LOGIN",
                                      style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                          color: !isSignupScreen
                                              ? Palette.activeColor
                                              : Palette.textColor1)),
                                  if (!isSignupScreen)
                                    Container(
                                      margin: const EdgeInsets.only(top: 3),
                                      height: 2,
                                      width: 55,
                                      color: Colors.orange,
                                    )
                                ],
                              ),
                            ),
                            GestureDetector(
                              onTap: () {
                                setState(() {
                                  isSignupScreen = true;
                                });
                              },
                              child: Column(
                                children: [
                                  Text("SIGN UP",
                                      style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                          color: isSignupScreen
                                              ? Palette.activeColor
                                              : Palette.textColor1)),
                                  if (isSignupScreen)
                                    Container(
                                      margin: const EdgeInsets.only(top: 3),
                                      height: 2,
                                      width: 55,
                                      color: Colors.orange,
                                    )
                                ],
                              ),
                            )
                          ],
                        ),
                        if (isSignupScreen)
                          Container(
                            margin: const EdgeInsets.only(top: 20.0),
                            child: Form(
                                key: _formKey,
                                child: Column(
                                  children: [
                                    TextFormField(
                                      key: const ValueKey(1),
                                      validator: (value) {
                                        if (value!.isEmpty ||
                                            value.length < 4) {
                                          return "4글자 이상 입력해주세요.";
                                        }
                                      },
                                      onSaved: (value) {
                                        userName = value!;
                                      },
                                      onChanged: (value) {
                                        userName = value;
                                      },
                                      decoration: const InputDecoration(
                                          prefixIcon: Icon(Icons.account_circle,
                                              color: Palette.iconColor),
                                          enabledBorder: OutlineInputBorder(
                                            borderSide: BorderSide(
                                                color: Palette.textColor1),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(35.0)),
                                          ),
                                          focusedBorder: OutlineInputBorder(
                                            borderSide: BorderSide(
                                                color: Palette.textColor1),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(35.0)),
                                          ),
                                          hintText: "User name",
                                          hintStyle: TextStyle(
                                              fontSize: 14,
                                              color: Palette.textColor1),
                                          contentPadding: EdgeInsets.all(10.0)),
                                    ),
                                    const SizedBox(
                                      height: 8,
                                    ),
                                    TextFormField(
                                      keyboardType: TextInputType.emailAddress,
                                      key: const ValueKey(2),
                                      validator: (value) {
                                        if (value!.isEmpty ||
                                            !value.contains("@")) {
                                          return "유효한 값을 입력해주세요";
                                        }
                                      },
                                      onSaved: (value) {
                                        userEmail = value!;
                                      },
                                      onChanged: (value) {
                                        userEmail = value;
                                      },
                                      decoration: const InputDecoration(
                                          prefixIcon: Icon(Icons.email,
                                              color: Palette.iconColor),
                                          enabledBorder: OutlineInputBorder(
                                            borderSide: BorderSide(
                                                color: Palette.textColor1),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(35.0)),
                                          ),
                                          focusedBorder: OutlineInputBorder(
                                            borderSide: BorderSide(
                                                color: Palette.textColor1),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(35.0)),
                                          ),
                                          hintText: "User Email",
                                          hintStyle: TextStyle(
                                              fontSize: 14,
                                              color: Palette.textColor1),
                                          contentPadding: EdgeInsets.all(10.0)),
                                    ),
                                    const SizedBox(
                                      height: 8,
                                    ),
                                    TextFormField(
                                      obscureText: true,
                                      key: const ValueKey(3),
                                      validator: (value) {
                                        if (value!.isEmpty ||
                                            value.length < 6) {
                                          return "6글자 이상 입력 해주세요.";
                                        }
                                      },
                                      onSaved: (value) {
                                        userPassword = value!;
                                      },
                                      onChanged: (value) {
                                        userPassword = value;
                                      },
                                      decoration: const InputDecoration(
                                          prefixIcon: Icon(Icons.lock,
                                              color: Palette.iconColor),
                                          enabledBorder: OutlineInputBorder(
                                            borderSide: BorderSide(
                                                color: Palette.textColor1),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(35.0)),
                                          ),
                                          focusedBorder: OutlineInputBorder(
                                            borderSide: BorderSide(
                                                color: Palette.textColor1),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(35.0)),
                                          ),
                                          hintText: "User Password",
                                          hintStyle: TextStyle(
                                              fontSize: 14,
                                              color: Palette.textColor1),
                                          contentPadding: EdgeInsets.all(10.0)),
                                    )
                                  ],
                                )),
                          ),
                        if (!isSignupScreen)
                          Container(
                            margin: const EdgeInsets.only(top: 20),
                            child: Form(
                                key: _formKey,
                                child: Column(
                                  children: [
                                    TextFormField(
                                      key: const ValueKey(4),
                                      validator: (value) {
                                        if (value!.isEmpty ||
                                            !value.contains("@")) {
                                          return "4글자 이상 입력해주세요.";
                                        }
                                      },
                                      onSaved: (value) {
                                        userEmail = value!;
                                      },
                                      onChanged: (value) {
                                        userEmail = value;
                                      },
                                      decoration: const InputDecoration(
                                          prefixIcon: Icon(Icons.account_circle,
                                              color: Palette.iconColor),
                                          enabledBorder: OutlineInputBorder(
                                            borderSide: BorderSide(
                                                color: Palette.textColor1),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(35.0)),
                                          ),
                                          focusedBorder: OutlineInputBorder(
                                            borderSide: BorderSide(
                                                color: Palette.textColor1),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(35.0)),
                                          ),
                                          hintText: "User name",
                                          hintStyle: TextStyle(
                                              fontSize: 14,
                                              color: Palette.textColor1),
                                          contentPadding: EdgeInsets.all(10.0)),
                                    ),
                                    const SizedBox(
                                      height: 8,
                                    ),
                                    TextFormField(
                                      obscureText: true,
                                      key: const ValueKey(5),
                                      validator: (value) {
                                        if (value!.isEmpty ||
                                            value.length < 6) {
                                          return "6글자 이상 입력해주세요.";
                                        }
                                      },
                                      onSaved: (value) {
                                        userPassword = value!;
                                      },
                                      onChanged: (value) {
                                        userPassword = value;
                                      },
                                      decoration: const InputDecoration(
                                          prefixIcon: Icon(Icons.lock,
                                              color: Palette.iconColor),
                                          enabledBorder: OutlineInputBorder(
                                            borderSide: BorderSide(
                                                color: Palette.textColor1),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(35.0)),
                                          ),
                                          focusedBorder: OutlineInputBorder(
                                            borderSide: BorderSide(
                                                color: Palette.textColor1),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(35.0)),
                                          ),
                                          hintText: "User name",
                                          hintStyle: TextStyle(
                                              fontSize: 14,
                                              color: Palette.textColor1),
                                          contentPadding: EdgeInsets.all(10.0)),
                                    )
                                  ],
                                )),
                          )
                      ],
                    ),
                  ),
                )),
            AnimatedPositioned(
                duration: const Duration(milliseconds: 500),
                curve: Curves.easeIn,
                top: isSignupScreen ? 410 : 380,
                left: 0,
                right: 0,
                child: Center(
                  child: Container(
                      padding: const EdgeInsets.all(15),
                      width: 90,
                      height: 90,
                      decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(50)),
                      child: GestureDetector(
                        onTap: () async {
                          print(userName);
                          print(userEmail);
                          print(userPassword);
                          if (isSignupScreen) {
                            _tryValidation();
                            try {
                              final newUser = await _authentication
                                  .createUserWithEmailAndPassword(
                                      email: userEmail, password: userPassword);

                              if (newUser.user != null) {
                                Navigator.push(context,
                                    MaterialPageRoute(builder: (context) {
                                  return const ChatScreen();
                                }));
                              }
                            } catch (e) {
                              print(e);
                              ScaffoldMessenger.of(context)
                                  .showSnackBar(const SnackBar(
                                content: Text("이메일 비밀번호 확인해주세요"),
                                backgroundColor: Colors.blue,
                              ));
                            }
                          } else {
                            _tryValidation();
                            try {
                              final newUser = await _authentication
                                  .signInWithEmailAndPassword(
                                      email: userEmail, password: userPassword);
                              if (newUser.user != null) {
                                Navigator.push(context,
                                    MaterialPageRoute(builder: (context) {
                                  return const ChatScreen();
                                }));
                              }
                            } catch (e) {
                              print(e);
                              ScaffoldMessenger.of(context)
                                  .showSnackBar(const SnackBar(
                                content: Text("이메일 비밀번호 확인해주세요"),
                                backgroundColor: Colors.blue,
                              ));
                            }
                          }
                        },
                        child: Container(
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(30.0),
                              boxShadow: [
                                BoxShadow(
                                    color: Colors.black.withOpacity(0.3),
                                    spreadRadius: 1,
                                    blurRadius: 1,
                                    offset: const Offset(0, 1))
                              ],
                              gradient: const LinearGradient(
                                  colors: [Colors.orange, Colors.red],
                                  begin: Alignment.topLeft,
                                  end: Alignment.bottomRight)),
                          child: const Icon(Icons.arrow_forward,
                              color: Colors.white),
                        ),
                      )),
                ))
            // 전송버튼
            ,
            Positioned(
              top: MediaQuery.of(context).size.height - 125,
              right: 0,
              left: 0,
              child: Column(
                children: [
                  Text(isSignupScreen ? "or Signup with" : "or Signin with"),
                  const SizedBox(
                    height: 10,
                  ),
                  TextButton.icon(
                    onPressed: () {},
                    style: TextButton.styleFrom(
                        backgroundColor: Palette.googleColor,
                        primary: Colors.white,
                        minimumSize: const Size(155, 40),
                        shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(20))),
                    icon: const Icon(Icons.add),
                    label: const Text("Google"),
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
