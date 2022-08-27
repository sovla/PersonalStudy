import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/material.dart';
import 'package:flutter_application_1/responsive/desktop_body.dart';
import 'package:flutter_application_1/responsive/mobile_body.dart';
import 'package:flutter_application_1/responsive/responsiver_layout.dart';

class MyPage extends StatefulWidget {
  const MyPage({Key? key}) : super(key: key);

  @override
  State<MyPage> createState() => _MyPageState();
}

class _MyPageState extends State<MyPage> {
  @override
  Widget build(BuildContext context) {
    return const ResponseBody(
        mobileBody: MobileBody(), desktopBody: DesktopBody());
  }
}
