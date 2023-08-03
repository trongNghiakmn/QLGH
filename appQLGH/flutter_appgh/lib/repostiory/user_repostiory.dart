import 'dart:convert';

import 'package:flutter_appgh/until/api.dart';

import '../model/donhangModel.dart';
import 'package:http/http.dart' as http;

class userRepostiory {
  Future<List<donhangModel>> fetchAllDH(String sdt) async {
    final response = await http
        .get(Uri.parse('${api.ipSever}donhang/find?sdt_nguoigui=$sdt'));
    if (response.statusCode == 200) {
      List<dynamic> a = jsonDecode(response.body);
      return a.map((e) => donhangModel.fromJson(e)).toList();
    } else {
      throw Exception("Failed to load");
    }
  }

  Future<List<donhangModel>> fetchAllDHNhan(String sdt) async {
    final response = await http
        .get(Uri.parse('${api.ipSever}donhang/findnhan?sdt_nguoinhan=$sdt'));
    if (response.statusCode == 200) {
      List<dynamic> a = jsonDecode(response.body);
      return a.map((e) => donhangModel.fromJson(e)).toList();
    } else {
      throw Exception("Failed to load");
    }
  }
}

// userRepostiory userRepo = new userRepostiory();
