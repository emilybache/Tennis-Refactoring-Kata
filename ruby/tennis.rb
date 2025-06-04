class TennisGame1
  def initialize(player1_name, player2_name)
    @player1_name = player1_name
    @player2_name = player2_name
    @p1_points = 0
    @p2_points = 0
  end

  def won_point(player_name)
    if player_name == "player1"
      @p1_points += 1
    else
      @p2_points += 1
    end
  end

  def score
    result = ""
    temp_score = 0
    if @p1_points == @p2_points
      result = {
        0 => "Love-All",
        1 => "Fifteen-All",
        2 => "Thirty-All"
      }.fetch(@p1_points, "Deuce")
    elsif (@p1_points >= 4) || (@p2_points >= 4)
      minus_result = @p1_points - @p2_points
      result = if minus_result == 1
        "Advantage player1"
      elsif minus_result == -1
        "Advantage player2"
      elsif minus_result >= 2
        "Win for player1"
      else
        "Win for player2"
      end
    else
      (1...3).each do |i|
        if i == 1
          temp_score = @p1_points
        else
          result += "-"
          temp_score = @p2_points
        end
        result += {
          0 => "Love",
          1 => "Fifteen",
          2 => "Thirty",
          3 => "Forty"
        }[temp_score]
      end
    end
    result
  end
end

class TennisGame2
  def initialize(player1_name, player2_name)
    @player1_name = player1_name
    @player2_name = player2_name
    @p1_points = 0
    @p2_points = 0
  end

  def won_point(player_name)
    if player_name == @player1_name
      p1_score
    else
      p2_score
    end
  end

  def score
    result = ""
    if (@p1_points == @p2_points) && (@p1_points < 3)
      if @p1_points == 0
        result = "Love"
      end
      if @p1_points == 1
        result = "Fifteen"
      end
      if @p1_points == 2
        result = "Thirty"
      end
      result += "-All"
    end
    if (@p1_points == @p2_points) && (@p1_points > 2)
      result = "Deuce"
    end

    p1_res = ""
    p2_res = ""
    if (@p1_points > 0) && (@p2_points == 0)
      if @p1_points == 1
        p1_res = "Fifteen"
      end
      if @p1_points == 2
        p1_res = "Thirty"
      end
      if @p1_points == 3
        p1_res = "Forty"
      end
      p2_res = "Love"
      result = p1_res + "-" + p2_res
    end
    if (@p2_points > 0) && (@p1_points == 0)
      if @p2_points == 1
        p2_res = "Fifteen"
      end
      if @p2_points == 2
        p2_res = "Thirty"
      end
      if @p2_points == 3
        p2_res = "Forty"
      end

      p1_res = "Love"
      result = p1_res + "-" + p2_res
    end

    if (@p1_points > @p2_points) && (@p1_points < 4)
      if @p1_points == 2
        p1_res = "Thirty"
      end
      if @p1_points == 3
        p1_res = "Forty"
      end
      if @p2_points == 1
        p2_res = "Fifteen"
      end
      if @p2_points == 2
        p2_res = "Thirty"
      end
      result = p1_res + "-" + p2_res
    end
    if (@p2_points > @p1_points) && (@p2_points < 4)
      if @p2_points == 2
        p2_res = "Thirty"
      end
      if @p2_points == 3
        p2_res = "Forty"
      end
      if @p1_points == 1
        p1_res = "Fifteen"
      end
      if @p1_points == 2
        p1_res = "Thirty"
      end
      result = p1_res + "-" + p2_res
    end
    if (@p1_points > @p2_points) && (@p2_points >= 3)
      result = "Advantage " + @player1_name
    end
    if (@p2_points > @p1_points) && (@p1_points >= 3)
      result = "Advantage " + @player2_name
    end
    if (@p1_points >= 4) && (@p2_points >= 0) && ((@p1_points - @p2_points) >= 2)
      result = "Win for " + @player1_name
    end
    if (@p2_points >= 4) && (@p1_points >= 0) && ((@p2_points - @p1_points) >= 2)
      result = "Win for " + @player2_name
    end
    result
  end

  def set_p1_score(number)
    (0..number).each do |i|
      p1_score
    end
  end

  def set_p2_score(number)
    (0..number).each do |i|
      p2_score
    end
  end

  def p1_score
    @p1_points += 1
  end

  def p2_score
    @p2_points += 1
  end
end

class TennisGame3
  def initialize(player1_name, player2_name)
    @p1_name = player1_name
    @p2_name = player2_name
    @p1 = 0
    @p2 = 0
  end

  def won_point(n)
    if n == @p1_name
      @p1 += 1
    else
      @p2 += 1
    end
  end

  def score
    if (@p1 < 4) && (@p2 < 4) && (@p1 + @p2 < 6)
      p = ["Love", "Fifteen", "Thirty", "Forty"]
      s = p[@p1]
      (@p1 == @p2) ? s + "-All" : s + "-" + p[@p2]
    elsif @p1 == @p2
      "Deuce"
    else
      s = (@p1 > @p2) ? @p1_name : @p2_name
      ((@p1 - @p2) * (@p1 - @p2) == 1) ? "Advantage " + s : "Win for " + s
    end
  end
end
