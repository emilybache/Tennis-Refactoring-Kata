Public Class TennisGame3
    Implements ITennisGame

    Private p2 As Integer
    Private p1 As Integer
    Private p1N As String
    Private p2N As String

    Public Sub New(ByVal player1Name As String, ByVal player2Name As String)
        Me.p1N = player1Name
        Me.p2N = player2Name
    End Sub

    Public Function GetScore() As String Implements ITennisGame.GetScore
        Dim s As String

        If (p1 < 4 AndAlso p2 < 4) AndAlso (p1 + p2 < 6) Then
            Dim p As String() = {"Love", "Fifteen", "Thirty", "Forty"}
            s = p(p1)
            Return If((p1 = p2), s & "-All", s & "-" & p(p2))
        Else
            If p1 = p2 Then Return "Deuce"
            s = If(p1 > p2, p1N, p2N)
            Return If(((p1 - p2) * (p1 - p2) = 1), "Advantage " & s, "Win for " & s)
        End If
    End Function

    Public Sub WonPoint(ByVal playerName As String) Implements ITennisGame.WonPoint
        If playerName = "player1" Then
            Me.p1 += 1
        Else
            Me.p2 += 1
        End If
    End Sub
End Class