import 'package:flutter_appgh/until/fortmatTime.dart';

class phieugiaohangModel {
  int? maphieugiaohang;
  DateTime? ngaylapphieu;
  int? nguoilapphieu;
  int? nguoigiao;
  String? tennv;
  String? tenkho;
  int? sldh;

  phieugiaohangModel(
      {this.maphieugiaohang,
      this.ngaylapphieu,
      this.nguoilapphieu,
      this.nguoigiao,
      this.tennv,
      this.tenkho,
      this.sldh});
  factory phieugiaohangModel.fromJson(Map<String, dynamic> map) {
    return phieugiaohangModel(
      maphieugiaohang: map['maphieugiaohang'],
      ngaylapphieu: fortmartTime.fortmatStringToDateTime(map['ngaylapphieu']),
      nguoilapphieu: map['nguoilapphieu'],
      nguoigiao: map['nguoigiao'],
      tennv: map['tennv'],
      tenkho: map['tenkho'],
      sldh: map['sldh'],
    );
  }

  int? get getMaphieugiaohang => this.maphieugiaohang;

  set setMaphieugiaohang(int? maphieugiaohang) =>
      this.maphieugiaohang = maphieugiaohang;

  get getNgaylapphieu => this.ngaylapphieu;

  set setNgaylapphieu(ngaylapphieu) => this.ngaylapphieu = ngaylapphieu;

  get getNguoilapphieu => this.nguoilapphieu;

  set setNguoilapphieu(nguoilapphieu) => this.nguoilapphieu = nguoilapphieu;

  get getNguoigiao => this.nguoigiao;

  set setNguoigiao(nguoigiao) => this.nguoigiao = nguoigiao;

  get getTennv => this.tennv;

  set setTennv(tennv) => this.tennv = tennv;

  get getTenkho => this.tenkho;

  set setTenkho(tenkho) => this.tenkho = tenkho;

  get getSldh => this.sldh;

  set setSldh(sldh) => this.sldh = sldh;
}
