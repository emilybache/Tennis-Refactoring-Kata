class Player(val name: String) {
    var points: Int = 0
        private set

    fun wonPoint() {
        points++
    }

    fun isCalled(playerName: String) = playerName == name

    fun isInTieWith(anotherPlayer: Player) = points == anotherPlayer.points

    fun hasAdvantageOver(anotherPlayer: Player) =
        points >= WON_SCORE_THRESHOLD && points - anotherPlayer.points == POINTS_DIFFERENCE_FOR_ADVANTAGE

    fun hasWonAgainst(anotherPlayer: Player) =
        points >= WON_SCORE_THRESHOLD && points - anotherPlayer.points >= POINTS_DIFFERENCE_FOR_WIN

    fun hasNormalScore() = points <= NORMAL_SCORE_THRESHOLD

    companion object {
        private const val NORMAL_SCORE_THRESHOLD = 3
        private const val WON_SCORE_THRESHOLD = 4
        private const val POINTS_DIFFERENCE_FOR_ADVANTAGE = 1
        private const val POINTS_DIFFERENCE_FOR_WIN = 2
    }
}
