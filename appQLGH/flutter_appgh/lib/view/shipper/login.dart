import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_appgh/until/api.dart';
import 'package:flutter_appgh/view/shipper/giaohang.dart';

import '../../model/nhanvienModel.dart';
import 'package:http/http.dart' as http;

class login extends StatelessWidget {
  Future<List<nhanvienModel>> ktLogin(String taikhoan, String matkhau) async {
    final response = await http.get(Uri.parse(
        '${api.ipSever}taikhoan/login?taikhoan=$taikhoan&matkhau=$matkhau'));
    if (response.statusCode == 200) {
      List<dynamic> a = jsonDecode(response.body);
      return a.map((e) => nhanvienModel.fromJson(e)).toList();
    } else {
      throw Exception("Failed to load");
    }
  }

  final _formKey = GlobalKey<FormState>();
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 16),
              child: TextFormField(
                controller: _usernameController,
                decoration: InputDecoration(
                  hintText: 'Username',
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 16),
              child: TextFormField(
                controller: _passwordController,
                obscureText: true,
                decoration: InputDecoration(
                  hintText: 'Password',
                ),
              ),
            ),
            SizedBox(height: 16),
            ElevatedButton(
              onPressed: () async {
                var a = await ktLogin(
                    _usernameController.text, _passwordController.text);
                if (a != null && a.isNotEmpty) {
                  if (a[0].ma_chucvu == 5) {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => GiaoHang(nv: a[0])));
                  } else {
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content: Text('Thông tin tài khoản chưa chính xác'),
                        action: SnackBarAction(
                          label: 'OK',
                          onPressed: () {},
                        ),
                      ),
                    );
                  }
                } else {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text('Thông tin tài khoản chưa chính xác'),
                      action: SnackBarAction(
                        label: 'OK',
                        onPressed: () {},
                      ),
                    ),
                  );
                }
              },
              child: Text('Login'),
            ),
          ],
        ),
      ),
    );
  }
}
