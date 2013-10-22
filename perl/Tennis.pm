use strict;
use warnings;

package Tennis::Game1;

sub new {
    my ( $cls, $player1Name, $player2Name ) = @_;
    my $self = {
        player1Name => $player1Name,
        player2Name => $player2Name,
        p1points    => 0,
        p2points    => 0,
    };
    return bless $self, $cls;
}

sub won_point {
    my ( $self, $playerName ) = @_;
    if ( $playerName eq $self->{player1Name} ) {
        $self->{p1points}++;
    }
    else {
        $self->{p2points}++;
    }
}

sub score {
    my $self       = shift;
    my $result     = "";
    my $tempScore = 0;

    if ( $self->{p1points} == $self->{p2points} ) {
        $result = {
            0 => "Love-All",
            1 => "Fifteen-All",
            2 => "Thirty-All",
          }->{ $self->{p1points} }
          || "Deuce";
    }

    elsif ($self->{p1points}>=4 or $self->{p2points}>=4) {
        my $minusResult = $self->{p1points}-$self->{p2points};
        if ($minusResult==1) {
            $result ="Advantage " . $self->{player1Name};
        } elsif ($minusResult ==-1) {
            $result ="Advantage " . $self->{player2Name};
        } elsif ($minusResult>=2) {
            $result = "Win for " . $self->{player1Name};
        } else {
            $result ="Win for " . $self->{player2Name};
        }
    }

    else {
        foreach  my $i (1 .. 2) {
            if ($i==1) {
                $tempScore = $self->{p1points};
            } else {
                $result.="-";
                $tempScore = $self->{p2points};
            }

            $result .= {
                0 => "Love",
                1 => "Fifteen",
                2 => "Thirty",
                3 => "Forty",
            }->{$tempScore};
        }
    }

    return $result;
}


package Tennis::Game2;

sub new {
    my ( $cls, $player1Name, $player2Name ) = @_;
    my $self = {
        player1Name => $player1Name,
        player2Name => $player2Name,
        p1points    => 0,
        p2points    => 0,
    };
    return bless $self, $cls;
}

sub won_point {
    my ( $self, $playerName ) = @_;
    if ( $playerName eq $self->{player1Name} ) {
        $self->{p1points}++;
    }
    else {
        $self->{p2points}++;
    }
}


sub score {
    my $self = shift;
    my $result = "";
    if ($self->{p1points} == $self->{p2points} && $self->{p1points} < 3) {
        if ($self->{p1points}==0) {
            $result = "Love";
        }
        if ($self->{p1points}==1) {
            $result = "Fifteen";
        }
        if ($self->{p1points}==2) {
            $result = "Thirty";
        }
        $result .= "-All";
    }
    if ($self->{p1points}==$self->{p2points} and $self->{p1points}>2) {
        $result = "Deuce";
    }

    my $P1res = "";
    my $P2res = "";
    if ($self->{p1points} > 0 && $self->{p2points}==0) {
        if ($self->{p1points}==1) {
            $P1res = "Fifteen";
        }
        if ($self->{p1points}==2) {
            $P1res = "Thirty";
        }
        if ($self->{p1points}==3) {
            $P1res = "Forty";
        }

        $P2res = "Love";
        $result = "$P1res-$P2res";
    }
    if ($self->{p2points} > 0 && $self->{p1points}==0) {
        if ($self->{p2points}==1) {
            $P2res = "Fifteen";
        }
        if ($self->{p2points}==2) {
            $P2res = "Thirty";
        }
        if ($self->{p2points}==3) {
            $P2res = "Forty";
        }
        $P1res = "Love";
        $result = "$P1res-$P2res";
    }


    if ($self->{p1points}>$self->{p2points} && $self->{p1points} < 4) {
        if ($self->{p1points}==2){
            $P1res="Thirty";
        }
        if ($self->{p1points}==3) {
            $P1res="Forty";
        }
        if ($self->{p2points}==1) {
            $P2res="Fifteen";
        }
        if ($self->{p2points}==2) {
            $P2res="Thirty";
        }
        $result = "$P1res-$P2res";
    }
    if ($self->{p2points}>$self->{p1points} && $self->{p2points} < 4) {
        if ($self->{p2points}==2) {
            $P2res="Thirty";
        }
        if ($self->{p2points}==3) {
            $P2res="Forty";
        }
        if ($self->{p1points}==1) {
            $P1res="Fifteen";
        }
        if ($self->{p1points}==2) {
            $P1res="Thirty";
        }
        $result = "$P1res-$P2res";
    }

    if ($self->{p1points} > $self->{p2points} && $self->{p2points} >= 3) {
        $result = "Advantage " . $self->{player1Name};
    }
    if ($self->{p2points} > $self->{p1points} && $self->{p1points} >= 3) {
        $result = "Advantage " . $self->{player2Name};
    }

    if ($self->{p1points}>=4 && $self->{p2points}>=0 && ($self->{p1points}-$self->{p2points})>=2) {
        $result = "Win for " . $self->{player1Name};
    }
    if ($self->{p2points}>=4 && $self->{p1points}>=0 && ($self->{p2points}-$self->{p1points})>=2) {
        $result = "Win for " . $self->{player2Name};
    }
    return $result;
}

#     def SetP1Score(self, number):
#         for i in range(number):
#             self.P1Score()
#
#     def SetP2Score(self, number):
#         for i in range(number):
#             self.P2Score()
#
#     def P1Score(self):
#         self.p1points +=1
#
#
#     def P2Score(self):
#         self.p2points +=1
#
# class TennisGame3:
#     def __init__(self, player1Name, player2Name):
#         self.p1N = player1Name
#         self.p2N = player2Name
#         self.p1 = 0
#         self.p2 = 0
#
#     def won_point(self, n):
#         if n == self.p1N:
#             self.p1 += 1
#         else:
#             self.p2 += 1
#
#     def score(self):
#         if (self.p1 < 4 and self.p2 < 4) and (self.p1 + self.p2 < 6):
#             p = ["Love", "Fifteen", "Thirty", "Forty"]
#             s = p[self.p1]
#             return s + "-All" if (self.p1 == self.p2) else s + "-" + p[self.p2]
#         else:
#             if (self.p1 == self.p2):
#                 return "Deuce"
#             s = self.p1N if self.p1 > self.p2 else self.p2N
#             return "Advantage " + s if ((self.p1-self.p2)*(self.p1-self.p2) == 1) else "Win for " + s

1;
