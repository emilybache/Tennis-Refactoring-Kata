
let show_score p1Score p2Score =
    let score = ref "" in
    let tempScore = ref 0 in
    if p1Score = p2Score then
    begin
        match p1Score with
        | 0 -> score := "Love-All"
        | 1 -> score := "Fifteen-All"
        | 2 -> score := "Thirty-All"
        | _ -> score := "Deuce"
    end
    else if p1Score >= 4 || p2Score >= 4 then
    begin
        let minusResult = p1Score - p2Score in
        if minusResult = 1 then score := "Advantage player1"
        else if minusResult = -1 then score := "Advantage player2"
        else if minusResult >= 2 then score := "Win for player1"
        else score := "Win for player2"
    end
    else
    begin
        for i = 1 to 2 do
            if i = 1 then tempScore := p1Score
            else (score := !score ^ "-"; tempScore := p2Score);
            match !tempScore with
            | 0 -> score := !score ^ "Love"
            | 1 -> score := !score ^ "Fifteen"
            | 2 -> score := !score ^ "Thirty"
            | 3 -> score := !score ^ "Forty"
            | _ -> assert false
        done
    end;
    !score
