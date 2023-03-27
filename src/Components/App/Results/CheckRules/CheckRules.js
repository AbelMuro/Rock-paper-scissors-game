
export default function CheckRules(userChoice, houseChoice) {
    if(userChoice == 'scissors' && houseChoice == 'paper') 
        return 'You Win';
    else if(userChoice == 'scissors' && houseChoice == 'rock')
        return 'You Lose';
    else if(userChoice == 'scissors' && houseChoice == 'lizard')
        return 'You Win';      
    else if(userChoice == 'scissors' && houseChoice == 'spock')
        return 'You Lose';
    else if(userChoice == 'paper' && houseChoice == 'scissors')
        return 'You Lose';
    else if(userChoice == 'paper' && houseChoice == 'rock')
        return 'You Win';
    else if(userChoice == 'paper' && houseChoice == 'lizard')
        return 'You Lose';
    else if(userChoice == 'paper' && houseChoice == 'spock')
        return 'You Win';
    else if(userChoice == 'rock' && houseChoice == 'scissors')
        return 'You Win';
    else if(userChoice == 'rock' && houseChoice == 'paper')
        return 'You Lose';
    else if(userChoice == 'rock' && houseChoice == 'lizard')
        return 'You Win';
    else if(userChoice == 'rock' && houseChoice == 'spock')
        return 'You Lose';
    else if(userChoice == 'lizard' && houseChoice == 'scissors')
        return 'You Lose';
    else if(userChoice == 'lizard' && houseChoice == 'paper')
        return 'You Win';
    else if(userChoice == 'lizard' && houseChoice == 'rock')
        return 'You Lose';
    else if(userChoice == 'lizard' && houseChoice == 'spock')
        return 'You Win';
    else if(userChoice == 'spock' && houseChoice == 'scissors')
        return 'You Win';
    else if(userChoice == 'spock' && houseChoice == 'paper')
        return 'You Lose';
    else if(userChoice == 'spock' && houseChoice == 'rock')
        return 'You Win';
    else if(userChoice == 'spock' && houseChoice == 'lizard')
        return 'You Lose';
    else
        return "Draw"
} 