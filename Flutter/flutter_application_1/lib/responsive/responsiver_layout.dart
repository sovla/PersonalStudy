import 'package:flutter/material.dart';

class ResponseBody extends StatelessWidget {
  const ResponseBody(
      {Key? key, required this.mobileBody, required this.desktopBody})
      : super(key: key);

  final Widget mobileBody;
  final Widget desktopBody;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      if (constraints.maxWidth < 800) {
        return mobileBody;
      } else {
        return desktopBody;
      }
    });
  }
}
