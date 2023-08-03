part of 'post_bloc.dart';

class PostState {}

class PostInitial extends PostState {}

class LoadingStare extends PostState{}

class LoadedState extends PostState{
  List<donhangModel> dsDH;
  LoadedState({required this.dsDH});
}
class FailedToLoadState extends PostState{
  String err;
  FailedToLoadState({required this.err});
}