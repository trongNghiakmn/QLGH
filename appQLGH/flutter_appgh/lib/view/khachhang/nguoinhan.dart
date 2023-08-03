import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_appgh/until/api.dart';
import '../../model/donhangModel.dart';
import 'package:http/http.dart' as http;

import 'chiTiet.dart';
import '../shipper/login.dart';
import '../../main.dart';

class nguoinhan extends StatefulWidget {
  @override
  State<nguoinhan> createState() => _nguoinhanState();
}

class _nguoinhanState extends State<nguoinhan> {
  List<donhangModel> dsDonHang = <donhangModel>[];
  Future<List<donhangModel>> _fetchAllDHNhan(String sdt) async {
    final response = await http
        .get(Uri.parse('${api.ipSever}donhang/findnhan?sdt_nguoinhan=$sdt'));
    if (response.statusCode == 200) {
      List<dynamic> a = jsonDecode(response.body);
      return a.map((e) => donhangModel.fromJson(e)).toList();
    } else {
      throw Exception("Failed to load");
    }
  }

  void addListNhan(String sdt) async {
    var a = await _fetchAllDHNhan(sdt);
    setState(() {
      dsDonHang = a;
    });
  }

  TextEditingController _textEditingController = TextEditingController();
  String _searchText = '';
  String dropdownValue = 'Người gửi';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        actions: <Widget>[
          PopupMenuButton<String>(
            itemBuilder: (BuildContext context) {
              return [
                PopupMenuItem<String>(
                  value: 'gui',
                  child: Text('Đơn gửi'),
                ),
                PopupMenuItem<String>(
                  value: 'shipper',
                  child: Text('Đăng nhập'),
                ),
              ];
            },
            onSelected: (String value) {
              // Do something when the menu item is selected
              if (value == "shipper") {
                Navigator.push(
                    context, MaterialPageRoute(builder: (context) => login()));
              }
              if (value == "gui") {
                Navigator.push(
                    context, MaterialPageRoute(builder: (context) => MyApp()));
              }
            },
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(10.0),
        child: Column(
          children: <Widget>[
            Text(
              "ĐƠN NHẬN",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 18.0,
              ),
            ),
            Container(
              padding: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(10.0),
              ),
              child: Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: _textEditingController,
                      decoration: InputDecoration(
                        hintText: 'Nhập số điện thoai',
                        border: InputBorder.none,
                        hintStyle: TextStyle(
                          color: Colors.grey,
                          fontSize: 18.0,
                        ),
                        contentPadding: EdgeInsets.symmetric(vertical: 10.0),
                      ),
                      onChanged: (value) {
                        setState(() {
                          _searchText = value;
                        });
                      },
                    ),
                  ),
                  Container(
                    child: ElevatedButton(
                      onPressed: () {
                        _search();
                      },
                      style: ElevatedButton.styleFrom(
                        side: BorderSide(width: 0.5, color: Colors.black),
                        primary: Colors.white, // đặt màu trắng cho nút
                        onPrimary: Colors.black, // đặt màu đen cho chữ
                      ),
                      child: Text(
                        'Search',
                        style: TextStyle(
                          fontSize: 20.0,
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 10),
            Expanded(
              child: ListView.builder(
                itemCount: dsDonHang.length,
                itemBuilder: (context, index) {
                  return Card(
                    elevation: 2.0,
                    margin: EdgeInsets.symmetric(vertical: 10.0),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10.0),
                    ),
                    child: Container(
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(10.0),
                        border: Border.all(
                          color: Colors.black,
                        ),
                      ),
                      child: ListTile(
                        contentPadding: EdgeInsets.symmetric(
                            horizontal: 20.0, vertical: 10.0),
                        onTap: () {
                          // Do something when the user taps on the list item
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) =>
                                      chiTiet(dh: dsDonHang[index])));
                        },
                        title: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Text(
                              dsDonHang[index].ghichu!,
                              style: TextStyle(
                                fontSize: 20.0,
                                fontWeight: FontWeight.bold,
                                color: Colors.blue,
                              ),
                            ),
                            SizedBox(height: 10),
                            Row(
                              children: [
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        "Tên người gửi:",
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 18.0,
                                        ),
                                      ),
                                      SizedBox(height: 5),
                                      Text(
                                        dsDonHang[index].ten_nguoigui!,
                                        style: TextStyle(
                                          fontSize: 16.0,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                      SizedBox(height: 5),
                                      Text(
                                        dsDonHang[index].sdt_nguoigui!,
                                        style: TextStyle(
                                          fontSize: 16.0,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        "Tên người nhận:",
                                        textAlign: TextAlign.right,
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 18.0,
                                        ),
                                      ),
                                      SizedBox(height: 5),
                                      Text(
                                        dsDonHang[index].ten_nguoinhan!,
                                        textAlign: TextAlign.right,
                                        style: TextStyle(
                                          fontSize: 16.0,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                      SizedBox(height: 5),
                                      Text(
                                        dsDonHang[index].sdt_nguoinhan!,
                                        textAlign: TextAlign.right,
                                        style: TextStyle(
                                          fontSize: 16.0,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                            SizedBox(height: 10),
                            Text(
                              dsDonHang[index].tentrangthai!,
                              style: TextStyle(
                                fontSize: 16.0,
                                fontWeight: FontWeight.bold,
                                color: dsDonHang[index].tentrangthai ==
                                        "Giao hàng thành công"
                                    ? Colors.green
                                    : dsDonHang[index].tentrangthai ==
                                            "Đang giao hàng"
                                        ? Colors.blue
                                        : Colors.red,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  );
                },
              ),
            )
          ],
        ),
      ),
    );
  }

  void _search() {
    // Do something with the search text
    //print('Search text: $_searchText');
    addListNhan(_searchText);
  }
}
