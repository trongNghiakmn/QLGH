import 'package:flutter_appgh/until/fortmatTime.dart';

class donhangModel {
  int? madonhang;
  String? ten_nguoigui;
  String? sdt_nguoigui;
  String? ten_nguoinhan;
  String? sdt_nguoinhan;
  String? diachi_nguoinhan;
  String? ghichu;
  String? hinhanh;
  String? tentrangthai;
  int? giatri;
  String? khoiluong;
  DateTime? ngaytaodon;

  donhangModel(
      {this.madonhang,
      this.ten_nguoigui,
      this.sdt_nguoigui,
      this.ten_nguoinhan,
      this.sdt_nguoinhan,
      this.diachi_nguoinhan,
      this.ghichu,
      this.hinhanh,
      this.tentrangthai,
      this.giatri,
      this.khoiluong,
      this.ngaytaodon});
  factory donhangModel.fromJson(Map<String, dynamic> map) {
    return donhangModel(
      madonhang: map['madonhang'],
      ten_nguoigui: map['ten_nguoigui'],
      sdt_nguoigui: map['sdt_nguoigui'],
      ten_nguoinhan: map['ten_nguoinhan'],
      sdt_nguoinhan: map['sdt_nguoinhan'],
      diachi_nguoinhan: map['diachi_nguoinhan'],
      ghichu: map['ghichu'],
      hinhanh: map['hinhanh'],
      tentrangthai: map['tentrangthai'],
      giatri: map['giatri'],
      khoiluong: map['khoiluong'],
      ngaytaodon: fortmartTime.fortmatStringToDateTime(map['ngaytaodon']),
    );
  }
  int? get getMadonhang => this.madonhang;

  set setMadonhang(int? madonhang) => this.madonhang = madonhang;

  get tennguoigui => this.ten_nguoigui;

  set tennguoigui(value) => this.ten_nguoigui = value;

  get sdtnguoigui => this.sdt_nguoigui;

  set sdtnguoigui(value) => this.sdt_nguoigui = value;

  get tennguoinhan => this.ten_nguoinhan;

  set tennguoinhan(value) => this.ten_nguoinhan = value;

  get sdtnguoinhan => this.sdt_nguoinhan;

  set sdtnguoinhan(value) => this.sdt_nguoinhan = value;

  get diachinguoinhan => this.diachi_nguoinhan;

  set diachinguoinhan(value) => this.diachi_nguoinhan = value;

  get getGhichu => this.ghichu;

  set setGhichu(ghichu) => this.ghichu = ghichu;

  get getHinhanh => this.hinhanh;

  set setHinhanh(hinhanh) => this.hinhanh = hinhanh;

  get getTentrangthai => this.tentrangthai;

  set setTentrangthai(tentrangthai) => this.tentrangthai = tentrangthai;

  get getGiatri => this.giatri;

  set setGiatri(giatri) => this.giatri = giatri;

  get getKhoiluong => this.khoiluong;

  set setKhoiluong(khoiluong) => this.khoiluong = khoiluong;

  get getNgaytaodon => this.ngaytaodon;

  set setNgaytaodon(ngaytaodon) => this.ngaytaodon = ngaytaodon;
}
