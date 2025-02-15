function dinner(){
    let food = prompt("Name a food")
    let somethingStrange = prompt("Name something weird")
    let adjetive = prompt("Name an adjective")
    let animal = prompt("Name an animal")
    let verb = prompt("Name a verb")
    let object = prompt("Name an object")
    let funnyQuote = prompt("Name something funny being said")
    let funnyQuote2 = prompt("Name another thing thats funny to say")

    document.getElementById("output").innerHTML = `
<p>The dinner party started with a dish of ${food} that smelled like ${somethingStrange}. 
Suddenly, a ${adjetive} ${animal} appeared and started ${verb}ing on the table! 
The host grabbed a ${object} and yelled "${funnyQuote}!" 
We all laughed and said "${funnyQuote2}." It was unforgettable!</p>
`;
}

function mystery(){
        let adjective = prompt("Name an adjective")
        let location = prompt("Name a place")
        let sound = prompt("Name a sound")
        let name = prompt("Name a funny name")
        let object = prompt("Name an object")
        let noun = prompt("Name a noun")
        let name2 = prompt("Name a funny name")
        let jobTitle = prompt("Make up a funny job title")
        let verb = prompt("Name a verb")
        let substance = prompt("Name a funny substance")
        let food = prompt("Name a food")
 
        document.getElementById("output").innerHTML = `
  <p>On a(n) ${adjective} night in the grand ${location}, a loud ${sound} revealed Lord ${name} lying beside a ${object}, muttering, "It was the ${noun}!"
  Detective ${name2}, questioned the ${jobTitle}, who was caught ${verb}ing near the scene. But the truth was stranger than fiction. 
  It turns out Lord ${name} had slipped on ${substance} while trying to steal a plate of ${food}.
  Everyone laughed, and the detective vowed to investigate only serious cases from now on.</p>
  `;
}

function travel(){
    let figure = prompt("Name a hisorical figure")
    let location = prompt("Name a place")
    let object = prompt("Name an object")
    let pluralNoun = prompt("Name a plural noun")
    let adjective = prompt("Name an adjective")
    let verb = prompt("Name a verb")
    let event = prompt("Name an event in time")
    let funnyName = prompt("Name a funny name")
    let adjective2 = prompt("Name another adjective")

    document.getElementById("output").innerHTML = `
    <p>Your time machine malfunctions, and a ${figure} steals your homework escaping to ${location}!
    Armed with a ${object}, you chase them through time, dodging ${pluralNoun} and a ${adjective} dinosaur trying to ${verb} you.
    You finally catch the thief at the ${event} and grab your homework just time.
    Back in class, your teacher, ${funnyName}, says, "That's the most ${adjective2} excuse ever!" But hey, you got an A!</p>
    `;
}