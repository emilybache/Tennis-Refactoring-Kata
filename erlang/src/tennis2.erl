
-module(tennis2).

-include("tennis2.hrl").
-export([score/1]).

-spec score(#game{}) -> string().
score(#game{player1 = Player1, player2 = Player2, player1_name = P1N, player2_name = P2N}) ->
  "Love-All".
