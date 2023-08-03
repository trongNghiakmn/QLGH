import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_appgh/model/donhangModel.dart';
import 'package:flutter_appgh/until/api.dart';
import 'package:flutter_appgh/view/khachhang/nguoigui.dart';
import 'package:http/http.dart' as http;

import 'view/khachhang/chiTiet.dart';
import 'view/shipper/login.dart';
import 'view/khachhang/nguoinhan.dart';

void main() {
  runApp(
    MyApp(),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: nguoigui(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      
    );
  }


}
