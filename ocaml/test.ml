
let cases =
  [
    ( 0, 0, "Love-All" );
    ( 1, 1, "Fifteen-All" );
    ( 2, 2, "Thirty-All");
    ( 3, 3, "Deuce");
    ( 4, 4, "Deuce");

    ( 1, 0, "Fifteen-Love");
    ( 0, 1, "Love-Fifteen");
    ( 2, 0, "Thirty-Love");
    ( 0, 2, "Love-Thirty");
    ( 3, 0, "Forty-Love");
    ( 0, 3, "Love-Forty");
    ( 4, 0, "Win for player1");
    ( 0, 4, "Win for player2");

    ( 2, 1, "Thirty-Fifteen");
    ( 1, 2, "Fifteen-Thirty");
    ( 3, 1, "Forty-Fifteen");
    ( 1, 3, "Fifteen-Forty");
    ( 4, 1, "Win for player1");
    ( 1, 4, "Win for player2");

    ( 3, 2, "Forty-Thirty");
    ( 2, 3, "Thirty-Forty");
    ( 4, 2, "Win for player1");
    ( 2, 4, "Win for player2");

    ( 4, 3, "Advantage player1");
    ( 3, 4, "Advantage player2");
    ( 5, 4, "Advantage player1");
    ( 4, 5, "Advantage player2");
    ( 15, 14, "Advantage player1");
    ( 14, 15, "Advantage player2");

    ( 6, 4, "Win for player1");
    ( 4, 6, "Win for player2");
    ( 16, 14, "Win for player1");
    ( 14, 16, "Win for player2");
  ]

let test f (p1,p2,expected) =
  try
    let got = f p1 p2 in
    if got = expected then
      (print_char '.'; None)
    else
      (print_char 'F'; Some (Printf.sprintf "Failed: %d %d expected %S got %S" p1 p2 expected got))
  with
    exn ->
      print_char 'E';
      Some (Printf.sprintf "Exception: %d %d %S : %s %s" p1 p2 expected (Printexc.to_string exn) (Printexc.get_backtrace ()))

let () =
  List.iter begin fun f ->
    let results = List.map (test f) cases in
    print_endline "";
    List.iter (function None -> () | Some s -> print_endline s) results;
  end
  [
    Tennis1.show_score;
    Tennis2.show_score;
    Tennis3.show_score;
  ]
