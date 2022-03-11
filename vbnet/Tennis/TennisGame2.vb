Public Class TennisGame2
    Implements ITennisGame

    Private p1point As Integer
    Private p2point As Integer
    Private p1res As String = ""
    Private p2res As String = ""
    Private player1Name As String
    Private player2Name As String

    Public Sub New(ByVal player1Name As String, ByVal player2Name As String)
        Me.player1Name = player1Name
        p1point = 0
        Me.player2Name = player2Name
    End Sub

    Public Function GetScore() As String Implements ITennisGame.GetScore
        Dim score = ""

        If p1point = p2point AndAlso p1point < 3 Then
            If p1point = 0 Then score = "Love"
            If p1point = 1 Then score = "Fifteen"
            If p1point = 2 Then score = "Thirty"
            score += "-All"
        End If

        If p1point = p2point AndAlso p1point > 2 Then score = "Deuce"

        If p1point > 0 AndAlso p2point = 0 Then
            If p1point = 1 Then p1res = "Fifteen"
            If p1point = 2 Then p1res = "Thirty"
            If p1point = 3 Then p1res = "Forty"
            p2res = "Love"
            score = p1res & "-" & p2res
        End If

        If p2point > 0 AndAlso p1point = 0 Then
            If p2point = 1 Then p2res = "Fifteen"
            If p2point = 2 Then p2res = "Thirty"
            If p2point = 3 Then p2res = "Forty"
            p1res = "Love"
            score = p1res & "-" & p2res
        End If

        If p1point > p2point AndAlso p1point < 4 Then
            If p1point = 2 Then p1res = "Thirty"
            If p1point = 3 Then p1res = "Forty"
            If p2point = 1 Then p2res = "Fifteen"
            If p2point = 2 Then p2res = "Thirty"
            score = p1res & "-" & p2res
        End If

        If p2point > p1point AndAlso p2point < 4 Then
            If p2point = 2 Then p2res = "Thirty"
            If p2point = 3 Then p2res = "Forty"
            If p1point = 1 Then p1res = "Fifteen"
            If p1point = 2 Then p1res = "Thirty"
            score = p1res & "-" & p2res
        End If

        If p1point > p2point AndAlso p2point >= 3 Then
            score = "Advantage player1"
        End If

        If p2point > p1point AndAlso p1point >= 3 Then
            score = "Advantage player2"
        End If

        If p1point >= 4 AndAlso p2point >= 0 AndAlso (p1point - p2point) >= 2 Then
            score = "Win for player1"
        End If

        If p2point >= 4 AndAlso p1point >= 0 AndAlso (p2point - p1point) >= 2 Then
            score = "Win for player2"
        End If

        Return score
    End Function

    Public Sub SetP1Score(ByVal number As Integer)
        For i As Integer = 0 To number - 1
            P1Score()
        Next
    End Sub

    Public Sub SetP2Score(ByVal number As Integer)
        For i = 0 To number - 1
            P2Score()
        Next
    End Sub

    Private Sub P1Score()
        p1point += 1
    End Sub

    Private Sub P2Score()
        p2point += 1
    End Sub

    Public Sub WonPoint(ByVal player As String) Implements ITennisGame.WonPoint
        If player = "player1" Then
            P1Score()
        Else
            P2Score()
        End If
    End Sub
End Class
