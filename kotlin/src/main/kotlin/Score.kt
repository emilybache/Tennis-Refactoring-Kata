abstract class Score(
    protected val player1: Player,
    protected val player2: Player
) {
    abstract override fun toString(): String
    abstract fun isApplicable(): Boolean
}