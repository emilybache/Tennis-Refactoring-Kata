class Player(val name: String) {
    var points: Int = 0
        private set

    fun wonPoint() {
        points++
    }

    fun isCalled(playerName: String) = playerName == name

    fun isInTieWith(anotherPlayer: Player) = points == anotherPlayer.points

    fun hasAdvantageOver(anotherPlayer: Player) =
        points >= 4 && points - anotherPlayer.points == 1

    fun hasWonAgainst(anotherPlayer: Player) =
        points >= 4 && points - anotherPlayer.points >= 2

    fun hasNormalScore() = points <= 3
}
