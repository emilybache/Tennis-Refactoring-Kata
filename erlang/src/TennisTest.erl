-module('TennisTest').

-include_lib("eunit/include/eunit.hrl").
-include("Tennis1.hrl").

-record(score_test, {
  player1Points = 0 :: integer(),
  player2Points = 0 :: integer(),
  expectedScore :: bitstring()
}).

-define(ALL_SCORES, [
  #score_test{player1Points = 0, player2Points = 0, expectedScore = "Love-All"}
]).

-spec the_test_and_assertion(#score_test{}) -> any().
the_test_and_assertion(Score_test = #score_test{}) ->
  %% Why can't I use Score_test#score_test.expectedScore here instead of hardcoding the expected result?
  ?assertMatch("Love-All",
    'Tennis1':score(#game{
      player1 = Score_test#score_test.player1Points,
      player2 = Score_test#score_test.player2Points
    })).

%%score1_with_map_test_() ->
%%  lists:map(fun the_test_and_assertion/1, ?ALL_SCORES).


score1_test_() ->
  ?_test(the_test_and_assertion(lists:nth(1, ?ALL_SCORES))).


score2_test() ->
  ?assertMatch("Love-All", 'Tennis2':score(#game{player1 = 0, player2 = 0})).

score3_test() ->
  ?assertMatch("Love-All", 'Tennis3':score(#game{player1 = 0, player2 = 0})).
