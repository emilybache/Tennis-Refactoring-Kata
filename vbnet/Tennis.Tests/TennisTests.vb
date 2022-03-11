Imports System
Imports System.Collections
Imports System.Collections.Generic
Imports Xunit

Public Class TestDataGenerator
    Implements IEnumerable(Of Object())

    Private ReadOnly _data As List(Of Object()) = New List(Of Object()) From {
        New Object() {0, 0, "Love-All"},
        New Object() {1, 1, "Fifteen-All"},
        New Object() {2, 2, "Thirty-All"},
        New Object() {3, 3, "Deuce"},
        New Object() {4, 4, "Deuce"},
        New Object() {1, 0, "Fifteen-Love"},
        New Object() {0, 1, "Love-Fifteen"},
        New Object() {2, 0, "Thirty-Love"},
        New Object() {0, 2, "Love-Thirty"},
        New Object() {3, 0, "Forty-Love"},
        New Object() {0, 3, "Love-Forty"},
        New Object() {4, 0, "Win for player1"},
        New Object() {0, 4, "Win for player2"},
        New Object() {2, 1, "Thirty-Fifteen"},
        New Object() {1, 2, "Fifteen-Thirty"},
        New Object() {3, 1, "Forty-Fifteen"},
        New Object() {1, 3, "Fifteen-Forty"},
        New Object() {4, 1, "Win for player1"},
        New Object() {1, 4, "Win for player2"},
        New Object() {3, 2, "Forty-Thirty"},
        New Object() {2, 3, "Thirty-Forty"},
        New Object() {4, 2, "Win for player1"},
        New Object() {2, 4, "Win for player2"},
        New Object() {4, 3, "Advantage player1"},
        New Object() {3, 4, "Advantage player2"},
        New Object() {5, 4, "Advantage player1"},
        New Object() {4, 5, "Advantage player2"},
        New Object() {15, 14, "Advantage player1"},
        New Object() {14, 15, "Advantage player2"},
        New Object() {6, 4, "Win for player1"},
        New Object() {4, 6, "Win for player2"},
        New Object() {16, 14, "Win for player1"},
        New Object() {14, 16, "Win for player2"}
        }

    Public Function IEnumerableOfT_GetEnumerator() As IEnumerator(Of Object()) Implements IEnumerable(Of Object()).GetEnumerator
        Return _data.GetEnumerator()
    End Function

    Private Function IEnumerable_GetEnumerator() As IEnumerator Implements IEnumerable.GetEnumerator
        Return IEnumerableOfT_GetEnumerator()
    End Function
    
End Class

Public Class TennisTests
    <Theory>
    <ClassData(GetType(TestDataGenerator))>
    Public Sub Tennis1Test(ByVal p1 As Integer, ByVal p2 As Integer, ByVal expected As String)
        Dim game = New TennisGame1("player1", "player2")
        CheckAllScores(game, p1, p2, expected)
    End Sub

    <Theory>
    <ClassData(GetType(TestDataGenerator))>
    Public Sub Tennis2Test(ByVal p1 As Integer, ByVal p2 As Integer, ByVal expected As String)
        Dim game = New TennisGame2("player1", "player2")
        CheckAllScores(game, p1, p2, expected)
    End Sub

    <Theory>
    <ClassData(GetType(TestDataGenerator))>
    Public Sub Tennis3Test(ByVal p1 As Integer, ByVal p2 As Integer, ByVal expected As String)
        Dim game = New TennisGame3("player1", "player2")
        CheckAllScores(game, p1, p2, expected)
    End Sub

    Private Sub CheckAllScores(ByVal game As ITennisGame, ByVal player1Score As Integer, ByVal player2Score As Integer, ByVal expectedScore As String)
        Dim highestScore = Math.Max(player1Score, player2Score)

        For i = 0 To highestScore - 1
            If i < player1Score Then game.WonPoint("player1")
            If i < player2Score Then game.WonPoint("player2")
        Next

        Assert.Equal(expectedScore, game.GetScore())
    End Sub
End Class