import 'dart:convert';

import '../model/nhanvienModel.dart';
import 'package:http/http.dart' as http;

class loginRepostiory {
  Future<List<nhanvienModel>> ktLogin(String taikhoan, String matkhau) async {
    final response = await http.get(Uri.parse(
        'http://172.22.1.216:3000/taikhoan/login?taikhoan=$taikhoan&matkhau=$matkhau'));
    if (response.statusCode == 200) {
      List<dynamic> a = jsonDecode(response.body);
      return a.map((e) => nhanvienModel.fromJson(e)).toList();
    } else {
      throw Exception("Failed to load");
    }
  }
}

loginRepostiory loginRepo = new loginRepostiory();
