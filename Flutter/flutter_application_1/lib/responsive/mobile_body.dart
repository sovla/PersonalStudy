import 'package:flutter/material.dart';

class MobileBody extends StatelessWidget {
  const MobileBody({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("모바일"),
      ),
      backgroundColor: Colors.deepPurple[200],
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: Container(
              height: 300,
              color: Colors.deepPurple[400],
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemBuilder: (context, index) {
                return Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Container(
                    color: Colors.deepPurple[300],
                    height: 120,
                  ),
                );
              },
              itemCount: 10,
            ),
          )
        ],
      ),
    );
  }
}
