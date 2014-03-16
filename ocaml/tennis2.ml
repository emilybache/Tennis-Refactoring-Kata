
let show_score p1Score p2Score =
    let score = ref "" in
    let p1res = ref "" in
    let p2res = ref "" in

    if p1Score = p2Score && p1Score < 4 then
    begin
        if p1Score = 0 then
            score := "Love";
        if p1Score = 1 then
            score := "Fifteen";
        if p1Score = 2 then
            score := "Thirty";
        score := !score ^ "-All";
    end;
    if p1Score = p2Score && p1Score>2 then
        score := "Deuce";

    if p1Score > 0 && p2Score = 0 then
    begin
        if p1Score = 1 then
            p1res := "Fifteen";
        if p1Score = 2 then
            p1res := "Thirty";
        if p1Score = 3 then
            p1res := "Forty";

        p2res := "Love";
        score := !p1res ^ "-" ^ !p2res;
    end;
    if p2Score > 0 && p1Score = 0 then
    begin
        if p2Score = 1 then
            p2res := "Fifteen";
        if p2Score = 2 then
            p2res := "Thirty";
        if p2Score = 3 then
            p2res := "Forty";

        p1res := "Love";
        score := !p1res ^ "-" ^ !p2res;
    end;

    if p1Score > p2Score && p1Score < 4 then
    begin
        if p1Score = 2 then
            p1res := "Thirty";
        if p1Score = 3 then
            p1res := "Forty";
        if p2Score = 1 then
            p2res := "Fifteen";
        if p2Score = 2 then
            p2res := "Thirty";
        score := !p1res ^ "-" ^ !p2res;
    end;
    if p2Score > p1Score && p2Score < 4 then
    begin
        if p2Score = 2 then
            p2res := "Thirty";
        if p2Score = 3 then
            p2res := "Forty";
        if p1Score = 1 then
            p1res := "Fifteen";
        if p1Score = 2 then
            p1res := "Thirty";
        score := !p1res ^ "-" ^ !p2res;
    end;

    if p1Score > p2Score && p2Score >= 3 then
    begin
        score := "Advantage player1";
    end;
    if p2Score > p1Score && p1Score >= 3 then
    begin
        score := "Advantage player2";
    end;

    if p1Score>=4 && p2Score>=0 && (p1Score-p2Score) >= 2 then
    begin
        score := "Win for player1";
    end;
    if p2Score>=4 && p1Score>=0 && (p2Score-p1Score) >= 2 then
    begin
        score := "Win for player2";
    end;

    !score
