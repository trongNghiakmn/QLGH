import 'package:intl/intl.dart';

class fortmartTime {
  static DateTime fortmatStringToDateTime(String dateTimeString) {
    DateTime dateTime = DateTime.parse(dateTimeString);
    String formattedDateTime = DateFormat('yyyy-MM-dd').format(dateTime);
    DateTime dateTimeFormart = DateTime.parse(formattedDateTime);
    dateTimeFormart = dateTimeFormart.add(Duration(days: 1));
    return dateTimeFormart;
  }
}
