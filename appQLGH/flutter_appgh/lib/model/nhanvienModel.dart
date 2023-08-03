class nhanvienModel {
  int? manv;
  String? tennv;
  String? sdt;
  int? ma_chucvu;
  nhanvienModel({this.manv, this.tennv, this.sdt, this.ma_chucvu});
  factory nhanvienModel.fromJson(Map<String, dynamic> map) {
    return nhanvienModel(
        manv: map['manv'],
        tennv: map['tennv'],
        sdt: map['sdt'],
        ma_chucvu: map['ma_chucvu']);
  }
  int? get getManv => this.manv;

  set setManv(int? manv) => this.manv = manv;

  get getTennv => this.tennv;

  set setTennv(tennv) => this.tennv = tennv;

  get getSdt => this.sdt;

  set setSdt(sdt) => this.sdt = sdt;

  get machucvu => this.ma_chucvu;

  set machucvu(value) => this.ma_chucvu = value;
}
