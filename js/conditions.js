        // js conditions

        // let number = prompt('enter number');

        // the "if" condition will display certian things only if certain conditions are met like if the number  given is greater or less than zero like in the example below. 

        // https://www.w3schools.com/jsref/jsref_operators.asp here's a list of all the js operators. Go to comparison operators.

        // "if" sets the condition and executes if the condition is "true"

        // if(number>0){
        //     console.log(number + ' is a good choice');
        // }

        // // // // "else" is used if the condition is not met or is "false"

        // else if (number < 0) {
        //     console.log('why would you use a negative number');
        // }
        
        // else {
        //     console.log( number + " really");
        // }

        // if (number >= 0 && number <=100) {
        //     console.log(number + " is in between 0 and 100, or its 0 or 100");
        // }

        // // write a programme that helps people decide what to wear based on the weather using the if and else statements. "whats the weather like? options 'hot' 'windy' cold' 'raining' "

        // let weather = prompt ("What's the weather like? ... hot, windy, cold, raining");


        // if (weather == "hot") {
        //     console.log('board shorts and aviators')
        // }

        // else if (weather == "windy") {
        //     console.log('long pants and a windbreaker')
        // }

        // else if (weather == "cold") {
        //     console.log('coats and scarves and things')
        // }

        // else if (weather == "raining") {
        //     console.log("doesn't really matter but get under an umbrella")
        // }

        // else {
        //     console.log ('did you misspell something? try all lowercase.')
        // }

        // // // use a switch and break and statement to make the same programme

        

        //     letter = prompt("guess a letter")

        //     answer = ("x") 

        // if (letter == answer){
        //     console.log('well done you guessed right')
        // }

        // else {
        //     console.log('you guessed wrong')
        // }



        let marks = prompt("What was your English code in High school?");

        switch (marks) {
            case '1':
            console.log("pathetic");
            break;

            case '2':
            console.log("not so good")
            break;

            case '3':
            console.log("little bit more work")
            break;

            case '4':
            console.log("decent effort")
            break;

            case '5':
            console.log('almost there')
            break;

            case '6':
            console.log('well done')
            break;

            case '7':
            console.log("Excellent")
            break;

            default:
            console.log("lies")
        }