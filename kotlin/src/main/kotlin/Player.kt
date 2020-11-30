class Player(private val name: String) {
    var score: Int = 0
        private set

    fun wonPoint() {
        score++
    }

    fun isCalled(playerName: String) = playerName == name
}
