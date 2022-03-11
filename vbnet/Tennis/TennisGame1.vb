Public Class TennisGame1
    Implements ITennisGame

    Private m_score1 As Integer = 0
    Private m_score2 As Integer = 0
    Private player1Name As String
    Private player2Name As String

    Public Sub New(ByVal player1Name As String, ByVal player2Name As String)
        Me.player1Name = player1Name
        Me.player2Name = player2Name
    End Sub

    Public Sub WonPoint(ByVal playerName As String) Implements ITennisGame.WonPoint
        If playerName = "player1" Then
            m_score1 += 1
        Else
            m_score2 += 1
        End If
    End Sub

    Public Function GetScore() As String Implements ITennisGame.GetScore
        Dim score As String = ""
        Dim tempScore = 0

        If m_score1 = m_score2 Then

            Select Case m_score1
                Case 0
                    score = "Love-All"
                Case 1
                    score = "Fifteen-All"
                Case 2
                    score = "Thirty-All"
                Case Else
                    score = "Deuce"
            End Select
        ElseIf m_score1 >= 4 OrElse m_score2 >= 4 Then
            Dim minusResult = m_score1 - m_score2

            If minusResult = 1 Then
                score = "Advantage player1"
            ElseIf minusResult = -1 Then
                score = "Advantage player2"
            ElseIf minusResult >= 2 Then
                score = "Win for player1"
            Else
                score = "Win for player2"
            End If
        Else

            For i = 1 To 3 - 1

                If i = 1 Then
                    tempScore = m_score1
                Else
                    score += "-"
                    tempScore = m_score2
                End If

                Select Case tempScore
                    Case 0
                        score += "Love"
                    Case 1
                        score += "Fifteen"
                    Case 2
                        score += "Thirty"
                    Case 3
                        score += "Forty"
                End Select
            Next
        End If

        Return score
    End Function
End Class