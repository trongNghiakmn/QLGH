import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_appgh/until/api.dart';

import '../../model/donhangModel.dart';
import 'package:http/http.dart' as http;

class donHangDaGiao extends StatefulWidget {
  int nguoigiao;
  donHangDaGiao({required this.nguoigiao});

  @override
  State<donHangDaGiao> createState() => _chiTietGiaoHangState();
}

class _chiTietGiaoHangState extends State<donHangDaGiao> {
  List<donhangModel> dsDonHang = <donhangModel>[];
  int manv = 0;

  Future<List<donhangModel>> _fetchAllDH(int maphieugiaohang) async {
    final response = await http.get(Uri.parse(
        '${api.ipSever}phieugiaohang/getdhpghngtt?nguoigiao=$manv&ma_trangthai=4'));
    if (response.statusCode == 200) {
      List<dynamic> a = jsonDecode(response.body);
      return a.map((e) => donhangModel.fromJson(e)).toList();
    } else {
      throw Exception("Failed to load");
    }
  }

  void addList(int manv) async {
    var a = await _fetchAllDH(manv);
    setState(() {
      dsDonHang = a;
    });
  }

  @override
  void initState() {
    super.initState();
    manv = widget.nguoigiao;
    addList(manv);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Container(
        padding: EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: <Widget>[
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
                          // Navigator.push(
                          //     context,
                          //     MaterialPageRoute(
                          //         builder: (context) =>
                          //             chiTiet(dh: dsDonHang[index])));
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
                                        "Tên người nhận: " +
                                            dsDonHang[index].ten_nguoinhan!,
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 18.0,
                                        ),
                                      ),
                                      SizedBox(height: 5),
                                      Text(
                                        "SĐT: " +
                                            dsDonHang[index].sdt_nguoinhan!,
                                        style: TextStyle(
                                          fontSize: 16.0,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                            SizedBox(height: 15),
                            Text(
                              "Địa chỉ giao: " +
                                  dsDonHang[index].diachi_nguoinhan!,
                              style: TextStyle(
                                fontSize: 16.0,
                                fontWeight: FontWeight.bold,
                              ),
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
            ),
            // Row(
            //   mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            //   children: <Widget>[
            //     Expanded(
            //       child: ElevatedButton(
            //         onPressed: () {},
            //         child: Text('Đã Giao Hàng'),
            //       ),
            //     ),
            //     SizedBox(width: 16.0),
            //     Expanded(
            //       child: ElevatedButton(
            //         onPressed: () {},
            //         child: Text('Giao thất bại'),
            //       ),
            //     ),
            //   ],
            // ),
          ],
        ),
      ),
    );
  }
}
