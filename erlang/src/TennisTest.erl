-module('TennisTest').

-include_lib("eunit/include/eunit.hrl").
-include("Tennis1.hrl").

-record(score_test, {
  player1Points = 0 :: integer(),
  player2Points = 0 :: integer(),
  expectedScore :: binary()
}).

-define(ALL_SCORES, [
  #score_test{0, 0, "Love-All"}
]).

test_score1(score_test) ->
  ?assertMatch("Love-All", 'Tennis1':score(#game{player1 = 0, player2 = 0})).

%%basic_test_() ->
%%  ?_test(?assert(1 + 1 =:= 2)).

score1_test_() ->
%%  lists:map(fun test_score1/1, ?ALL_SCORES).
  ?_test(test_score1(lists:nth(0, ?ALL_SCORES))).


score2_test() ->
  ?assertMatch("Love-All", 'Tennis2':score(#game{player1 = 0, player2 = 0})).

score3_test() ->
  ?assertMatch("Love-All", 'Tennis3':score(#game{player1 = 0, player2 = 0})).
