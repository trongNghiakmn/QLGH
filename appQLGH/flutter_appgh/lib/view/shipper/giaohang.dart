import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_appgh/model/nhanvienModel.dart';
import 'package:flutter_appgh/model/phieugiaohangModel.dart';
import 'package:flutter_appgh/until/api.dart';
import 'package:flutter_appgh/view/shipper/donHangDaGiao.dart';
import 'package:http/http.dart' as http;

import '../../model/donhangModel.dart';
import 'chiTietGiaoHang.dart';
import 'donHangCanGiao.dart';

class GiaoHang extends StatefulWidget {
  GiaoHang({super.key, required this.nv});
  nhanvienModel nv;
  @override
  _GiaoHangState createState() => _GiaoHangState();
}

class _GiaoHangState extends State<GiaoHang> {
  int _selectedIndex = 0;
  late List<Widget> _widgetOptions;

  @override
  void initState() {
    super.initState();
    _widgetOptions = [
      Page1(nv: widget.nv),
      Page2(nv: widget.nv),
    ];
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _widgetOptions.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Trang chủ',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.people),
            label: 'Tôi',
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.blue,
        onTap: _onItemTapped,
      ),
    );
  }
}

class Page1 extends StatefulWidget {
  final nhanvienModel nv;
  Page1({required this.nv});
  @override
  State<Page1> createState() => _Page1State();
}

class _Page1State extends State<Page1> {
  List<phieugiaohangModel> dspgh = <phieugiaohangModel>[];
  List<donhangModel> dsDonHang = <donhangModel>[];

  Future<List<phieugiaohangModel>> _fetchpghTheoShipper(int nguoigiao) async {
    final response = await http.get(Uri.parse(
        '${api.ipSever}phieugiaohang/gettheosipper?nguoigiao=$nguoigiao'));
    if (response.statusCode == 200) {
      List<dynamic> a = jsonDecode(response.body);
      List<phieugiaohangModel> kq =
          a.map((e) => phieugiaohangModel.fromJson(e)).toList();
      //return a.map((e) => phieugiaohangModel.fromJson(e)).toList();
      return kq;
    } else {
      throw Exception("Failed to load");
    }
  }

  // Future<List<donhangModel>> _fetchAllDH(int maphieugiaohang) async {
  //   final response = await http.get(Uri.parse(
  //       '${api.ipSever}phieugiaohang/gettheophieugh?maphieugiaohang=$maphieugiaohang'));
  //   if (response.statusCode == 200) {
  //     List<dynamic> a = jsonDecode(response.body);
  //     return a.map((e) => donhangModel.fromJson(e)).toList();
  //   } else {
  //     throw Exception("Failed to load");
  //   }
  // }

  void addList(int nguoigiao) async {
    var a = await _fetchpghTheoShipper(nguoigiao);
    setState(() {
      dspgh = a;
    });
  }

  // void addListDH(int maphieugiaohang) async {
  //   var a = await _fetchAllDH(maphieugiaohang);
  //   setState(() {
  //     dsDonHang = a;
  //   });
  // }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    addList(widget.nv.manv!);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          SizedBox(height: 25),
          Text(
            "Các phiếu giao hàng",
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: dspgh.length,
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
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) =>
                                    chiTietGiaoHang(pgh: dspgh[index])));
                      },
                      title: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Text(
                            "Kho: " + dspgh[index].tenkho!,
                            style: TextStyle(
                              fontSize: 18.0,
                              // fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 10),
                          Text(
                            "Ngày lập phiếu: " +
                                dspgh[index]
                                    .ngaylapphieu!
                                    .toString()
                                    .substring(0, 10),
                            style: TextStyle(
                              fontSize: 18.0,
                              // fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 10),
                          Text(
                            "Số lượng đơn: " + dspgh[index].sldh!.toString(),
                            style: TextStyle(
                              fontSize: 18.0,
                              // fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 10),
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
    );
  }
}

class Page2 extends StatefulWidget {
  final nhanvienModel nv;
  Page2({required this.nv});

  @override
  State<Page2> createState() => _Page2State();
}

class _Page2State extends State<Page2> {
  int nguoigiao = 0;
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Container(
        child: Column(
          children: [
            SizedBox(height: 30),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(width: 10),
                Text(
                  widget.nv.tennv!,
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                ),
              ],
            ),
            SizedBox(height: 10),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(width: 10),
                Text(
                  'Chức vụ:',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(width: 10),
                Expanded(
                  child: Text(
                    'Nhân viên giao hàng',
                  ),
                ),
              ],
            ),
            SizedBox(height: 10),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(width: 10),
                Text(
                  'Số điện thoại:',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(width: 10),
                Expanded(
                  child: Text(
                    widget.nv.sdt!,
                  ),
                ),
              ],
            ),
            SizedBox(height: 50),
            Container(
              width: MediaQuery.of(context).size.width * 1,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) =>
                              donHangDaGiao(nguoigiao: widget.nv.manv!)));
                },
                style: ElevatedButton.styleFrom(
                  side: BorderSide(width: 0.5, color: Colors.black),
                  primary: Colors.white,
                  onPrimary: Colors.black,
                ),
                child: Text('Các đơn đã giao'),
              ),
            ),
            SizedBox(height: 1),
            Container(
              width: MediaQuery.of(context).size.width * 1,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) =>
                              donHangCanGiao(nguoigiao: widget.nv.manv!)));
                },
                style: ElevatedButton.styleFrom(
                  side: BorderSide(width: 0.5, color: Colors.black),
                  primary: Colors.white,
                  onPrimary: Colors.black,
                ),
                child: Text('Các đơn cần giao'),
              ),
            ),
            SizedBox(height: 1),
            Container(
              width: MediaQuery.of(context).size.width * 1,
              child: ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  side: BorderSide(width: 0.5, color: Colors.black),
                  primary: Colors.white, // đặt màu trắng cho nút
                  onPrimary: Colors.black, // đặt màu đen cho chữ
                ),
                child: Text('Thay đổi thông tin cá nhân'),
              ),
            ),
            SizedBox(height: 1),
            Container(
              width: MediaQuery.of(context).size.width * 1,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                style: ElevatedButton.styleFrom(
                  side: BorderSide(width: 0.5, color: Colors.black),
                  primary: Colors.white, // đặt màu trắng cho nút
                  onPrimary: Colors.black, // đặt màu đen cho chữ
                ),
                child: Text('Đăng xuất'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
