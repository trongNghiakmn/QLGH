import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../model/donhangModel.dart';

class chiTiet extends StatelessWidget {
  chiTiet({super.key, required this.dh});
  donhangModel dh;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Column(
        children: <Widget>[
          Container(
            padding: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(10.0),
              boxShadow: [
                BoxShadow(
                  color: Colors.grey.withOpacity(0.5),
                  spreadRadius: 2,
                  blurRadius: 5,
                  offset: Offset(0, 3), // changes position of shadow
                ),
              ],
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(height: 30),
                Row(
                  children: [
                    Text(
                      "Tình Trạng Đơn : ",
                      style: TextStyle(fontSize: 20),
                    ),
                    Text(dh.tentrangthai!,
                        style: TextStyle(
                          fontSize: 21,
                          fontWeight: FontWeight.bold,
                          color: dh.tentrangthai == "Giao hàng thành công"
                              ? Colors.green
                              : dh.tentrangthai == "Đang giao hàng"
                                  ? Colors.blue
                                  : Colors.red,
                        )),
                  ],
                ),
                SizedBox(height: 20),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Người gửi: ",
                      style:
                          TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(width: 5),
                    Expanded(
                      child: Text(
                        dh.ten_nguoigui!,
                        style: TextStyle(fontSize: 15),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                    SizedBox(width: 10),
                    Text(
                      "Số điện thoại: ",
                      style:
                          TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(width: 5),
                    Text(
                      dh.sdt_nguoigui!,
                      style: TextStyle(fontSize: 15),
                    ),
                  ],
                ),
                SizedBox(height: 10),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Người nhận: ",
                      style:
                          TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(width: 5),
                    Expanded(
                      child: Text(
                        dh.ten_nguoinhan!,
                        style: TextStyle(fontSize: 15),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                    SizedBox(width: 10),
                    Text(
                      "Số điện thoại: ",
                      style:
                          TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(width: 5),
                    Text(
                      dh.sdt_nguoinhan!,
                      style: TextStyle(fontSize: 15),
                    ),
                  ],
                ),
                SizedBox(height: 20),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Tên hàng: ",
                      style:
                          TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(width: 5),
                    Expanded(
                      child: Text(
                        dh.ghichu!,
                        style: TextStyle(fontSize: 15),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 20),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Địa chỉ: ",
                      style:
                          TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(width: 5),
                    Expanded(
                      child: Text(
                        dh.diachi_nguoinhan!,
                        style: TextStyle(fontSize: 15),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 20),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Khối lượng: ",
                      style:
                          TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(width: 5),
                    Expanded(
                      child: Text(
                        dh.khoiluong! + " KG",
                        style: TextStyle(fontSize: 15),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 20),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Phí giao hàng: ",
                      style:
                          TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(width: 5),
                    Expanded(
                      child: Text(
                        dh.giatri.toString().replaceAllMapped(
                              RegExp(r'(\d{1,3})(?=(\d{3})+(?!\d))'),
                              (Match m) => '${m[1]}.',
                            ),
                        style: TextStyle(fontSize: 15),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 20),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Ngày gửi hàng: ",
                      style:
                          TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(width: 5),
                    Expanded(
                      child: Text(
                        dh.ngaytaodon!.toString().substring(0, 10),
                        style: TextStyle(fontSize: 15),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
