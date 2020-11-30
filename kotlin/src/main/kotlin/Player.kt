class Player(val name: String) {
    var score: Int = 0
        private set

    fun wonPoint() {
        score++
    }

    fun isCalled(playerName: String) = playerName == name

    fun isInTieWith(anotherPlayer: Player) = score == anotherPlayer.score

    fun hasAdvantageOver(anotherPlayer: Player) =
            score >= 4 && score - anotherPlayer.score == 1

    fun hasWonAgainst(anotherPlayer: Player) =
            score >= 4 && score - anotherPlayer.score >= 2
}
