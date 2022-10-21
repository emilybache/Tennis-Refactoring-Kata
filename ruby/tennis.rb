
class TennisGame1

  def initialize(player1Name, player2Name)
    @player1Name = player1Name
    @player2Name = player2Name
    @p1points = 0
    @p2points = 0
  end
        
  def won_point(playerName)
    playerName == 'player1' ? @p1points += 1 : @p2points += 1
  end
  
  def score
    result = ''
    tempScore = 0

    return equal_score if @p1points == @p2points

    minusResult = @p1points - @p2points
    return minus_score(minusResult) if @p1points >= 4 || @p2points >= 4 
     
    other_score(result: result, tempScore: tempScore)
  end

  def base_hash
    {
      0 => 'Love',
      1 => 'Fifteen',
      2 => 'Thirty'
    }
  end

  def equal_score
    hash = base_hash

    hash.each do |key, value|
      hash[key] = value + '-All'
    end

    hash.fetch(@p1points, 'Deuce')
  end

  def minus_score(minusResult)
    case minusResult
    when 1
      'Advantage player1'
    when -1
      'Advantage player2'
    when (2..Float::INFINITY)
      'Win for player1'
    else
      'Win for player2'
    end
  end

  def other_score(result: , tempScore: )
    (1...3).each do |i|
      if i == 1
        tempScore = @p1points
      else
        result += '-'
        tempScore = @p2points
      end
      result += score_hash(tempScore)
    end
    result
  end

  def score_hash(tempScore)
    bh = base_hash
    bh[3] = 'Forty'

    hash = bh[tempScore]
  end
end

class TennisGame2
  def initialize(player1Name, player2Name)
    @player1Name = player1Name
    @player2Name = player2Name
    @p1points = 0
    @p2points = 0
  end
      
  def won_point(playerName)
    playerName == @player1Name ? p1Score() : p2Score()
  end

  def score
    result = ''

    case 
    when @p1points == @p2points # Equal
      return equal_points
    when @p1points > 0 && @p2points == 0 && @p1points <= 3 
      return base_hash[@p1points] + '-Love'
    when @p1points > @p2points # First greater
      result = first_greater
    when @p2points > @p1points # Second greater
      result = second_greater
    end

    win = any_win?
    result = win unless win.nil?

    result
  end

  def equal_points
    @p1points < 3 ? base_hash[@p1points] + '-All' : 'Deuce'
  end

  def first_greater
    result = base_hash[@p1points] + '-' +  base_hash[@p2points] if @p1points < 4
    result = 'Advantage ' + @player1Name if @p2points >= 3

    result
  end

  def second_greater
    result = base_hash[@p1points] + '-' +  base_hash[@p2points] if @p2points < 4
    result = 'Advantage ' + @player2Name if @p1points >= 3

    result
  end

  def any_win?
    result = 'Win for ' + @player1Name if @p1points >= 4 && @p2points >= 0 && (@p1points-@p2points) >= 2
    result = 'Win for ' + @player2Name if @p2points >= 4 && @p1points >= 0 && (@p2points-@p1points) >= 2

    result
  end

  def base_hash
    {
      0 => 'Love',
      1 => 'Fifteen',
      2 => 'Thirty',
      3 => 'Forty'
    }
  end

  def setp1Score(number)
    (0..number).each do |i|
      p1Score()
    end
  end

  def setp2Score(number)
    (0..number).each do |i|
      p2Score()
    end
  end

  def p1Score
    @p1points +=1
  end
  
  def p2Score
    @p2points +=1
  end
end


class TennisGame3
  def initialize(player1Name, player2Name)
    @p1N = player1Name
    @p2N = player2Name
    @p1 = 0
    @p2 = 0
  end
      
  def won_point(n)
    n == @p1N ? @p1 += 1 : @p2 += 1
  end
  
  def score
    if @p1 < 4 && @p2 < 4 && (@p1 + @p2) < 6
      p = ['Love', 'Fifteen', 'Thirty', 'Forty']
      s = p[@p1]
      @p1 == @p2 ? s + '-All' : s + '-' + p[@p2]
    else
      return 'Deuce' if @p1 == @p2

      s = @p1 > @p2 ? @p1N : @p2N
      (@p1-@p2)*(@p1-@p2) == 1 ? 'Advantage ' + s : 'Win for ' + s
    end
  end
end