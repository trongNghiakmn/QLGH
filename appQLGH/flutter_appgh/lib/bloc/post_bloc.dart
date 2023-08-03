import 'package:bloc/bloc.dart';
import 'package:flutter_appgh/repostiory/user_repostiory.dart';
import 'package:meta/meta.dart';

import '../model/donhangModel.dart';

part 'post_event.dart';
part 'post_state.dart';

class PostBloc extends Bloc<PostEvent, PostState> {
  final _showDH = userRepostiory();
  PostBloc(String sdt) : super(LoadingStare()) {
    on<PostEvent>((event, emit) async {
      if (event is LoadEvent || event is PullToRefreshEvent) {
        emit(LoadingStare());
        try {
          final dh = await _showDH.fetchAllDH(sdt);
          emit(LoadedState(dsDH: dh));
        } catch (e) {
          emit(FailedToLoadState(err: e.toString()));
        }
      }
    });
  }
}

class PostBloc2 extends Bloc<PostEvent, PostState> {
  PostBloc2(String sdt) : super(LoadingStare()) {
    on<PostEvent>((event, emit) {
      if (event is LoadEvent || event is PullToRefreshEvent) {
        emit(LoadingStare());
        try {} catch (e) {}
      } else {}
    });
  }
}
