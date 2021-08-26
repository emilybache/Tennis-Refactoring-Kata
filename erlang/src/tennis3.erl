-module(tennis3).

-include("tennis3.hrl").
-export([score/1]).

-spec score(#game{}) -> string().
score(#game{player1 = P1, player2 = P2, player1_name = P1N, player2_name = P2N}) ->
  case P1 < 4 andalso P2 < 4 andalso not(P1 + P2 == 6) of
    true ->
      P = ["Love", "Fifteen", "Thirty", "Forty"],
      S = lists:nth(P1 + 1, P),
      case P1 == P2 of
        true ->
          S ++ "-All";
        false ->
          S ++ "-" ++ lists:nth(P2 + 1, P)
      end;
    false ->
      case P1 == P2 of
        true -> "Deuce";
        false ->
          S = case P1 > P2 of
                true -> P1N;
                false -> P2N
              end,
          case (P1 - P2) * (P1 - P2) == 1 of
            true -> "Advantage " ++ S;
            false -> "Win for " ++ S
          end
      end
  end.
