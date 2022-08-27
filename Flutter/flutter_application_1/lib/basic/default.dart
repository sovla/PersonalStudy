import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "BBANTO",
      home: Grade(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class Grade extends StatelessWidget {
  const Grade({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.amber[600],
        appBar: AppBar(
          title: Text("BBANTO"),
          backgroundColor: Colors.amber[700],
          centerTitle: true, // 센터
          elevation: 0.0, // 그림자
          leading: IconButton(
              onPressed: () {
                print("menu button is clicked");
              },
              icon: Icon(Icons.menu)),
          actions: <Widget>[
            IconButton(
                onPressed: () {
                  print("menu button is clicked");
                },
                icon: Icon(Icons.shopping_cart)),
            IconButton(
                onPressed: () {
                  print("menu button is clicked");
                },
                icon: Icon(Icons.search)),
          ],
        ),
        drawer: Drawer(
          child: ListView(
            padding: EdgeInsets.zero,
            children: <Widget>[
              UserAccountsDrawerHeader(
                currentAccountPicture: CircleAvatar(
                  backgroundImage: AssetImage("assets/fire.gif"),
                  backgroundColor: Colors.white,
                ),
                accountName: Text("BBANTO"),
                accountEmail: Text("bbanto@bbanto.com"),
                onDetailsPressed: () {
                  print("프로필누름");
                },
                otherAccountsPictures: [
                  CircleAvatar(
                    backgroundImage: AssetImage("assets/character.jpg"),
                    backgroundColor: Colors.white,
                  )
                ],
                decoration: BoxDecoration(
                    color: Colors.red[200],
                    borderRadius: BorderRadius.only(
                        bottomLeft: Radius.circular(40.0),
                        bottomRight: Radius.circular(40.0))),
              ),
              ListTile(
                leading: Icon(Icons.home, color: Colors.grey[850]),
                title: Text("Home"),
                onTap: () {
                  print("탭클릭");
                },
                trailing: Icon(Icons.add),
              ),
              ListTile(
                leading: Icon(Icons.settings, color: Colors.grey[850]),
                title: Text("SEtting"),
                onTap: () {
                  print("탭클릭");
                },
                trailing: Icon(Icons.add),
              ),
              ListTile(
                leading: Icon(Icons.question_answer, color: Colors.grey[850]),
                title: Text("Q&A"),
                onTap: () {
                  print("탭클릭");
                },
                trailing: Icon(Icons.add),
              )
            ],
          ),
        ),
        body: Padding(
          padding: EdgeInsets.fromLTRB(30.0, 40.0, 0.0, 0.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: CircleAvatar(
                  // 동그란 아바타
                  backgroundImage: AssetImage("assets/fire.gif"), // 백그라운드 이미지
                  radius: 60.0, // 크기
                ),
              ),
              Divider(
                // 줄
                height: 60.0,
                color: Colors.grey[850],
                thickness: 0.5, // 굵기
                endIndent: 30.0, // 끝에서 어느정도 떨어져야 될지
              ),
              Text("Name",
                  style: TextStyle(color: Colors.white, letterSpacing: 2.0)),
              SizedBox(
                height: 10.0,
              ),
              Text("BBANTO",
                  style: TextStyle(
                      color: Colors.white,
                      letterSpacing: 2.0,
                      fontSize: 28.0,
                      fontWeight: FontWeight.bold)),
              SizedBox(
                height: 20.0,
              ),
              Text("BBANTO POWER LEVEL",
                  style: TextStyle(color: Colors.white, letterSpacing: 2.0)),
              SizedBox(
                height: 10.0,
              ),
              Text("14",
                  style: TextStyle(
                      color: Colors.white,
                      letterSpacing: 2.0,
                      fontSize: 28.0,
                      fontWeight: FontWeight.bold)),
              Row(
                children: [
                  Icon(Icons.check_circle_outline),
                  SizedBox(
                    width: 10.0,
                  ),
                  Text(
                    "using lightsaber",
                    style: TextStyle(fontSize: 16.0, letterSpacing: 1.0),
                  )
                ],
              ),
              Row(
                children: [
                  Icon(Icons.check_circle_outline),
                  SizedBox(
                    width: 10.0,
                  ),
                  Text(
                    "facehero tattoo",
                    style: TextStyle(fontSize: 16.0, letterSpacing: 1.0),
                  )
                ],
              ),
              Row(
                children: [
                  Icon(Icons.check_circle_outline),
                  SizedBox(
                    width: 10.0,
                  ),
                  Text(
                    "fire flames",
                    style: TextStyle(fontSize: 16.0, letterSpacing: 1.0),
                  )
                ],
              ),
              Center(
                child: CircleAvatar(
                  backgroundImage: AssetImage('assets/character.jpg'),
                  radius: 40.0,
                  backgroundColor: Colors.amber[600],
                ),
              )
            ],
          ),
        ));
  }
}
