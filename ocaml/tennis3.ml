
let show_score p1 p2 =
  let p1N = "player1" in
  let p2N = "player2" in
  if (p1 < 4 && p2 < 4) && (p1 + p2 < 6) then
  begin
    let p = [| "Love"; "Fifteen"; "Thirty"; "Forty" |] in
    let s = p.(p1) in
    if (p1 = p2) then s ^ "-All" else s ^ "-" ^ p.(p2)
  end else begin
    if p1 = p2 then
      "Deuce"
    else
    begin
      let s = if p1 > p2 then p1N else p2N in
      if (p1-p2) * (p1-p2) = 1 then "Advantage " ^ s else "Win for " ^ s
    end
  end
