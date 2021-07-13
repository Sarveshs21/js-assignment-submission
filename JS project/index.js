cards = [
    {
        image:"https://i.pinimg.com/originals/84/10/ea/8410ea80c6646aad1df861362f30744e.jpg",
        value:1,
        status:"closed"
    },

    {
        image:"https://i.pinimg.com/originals/84/10/ea/8410ea80c6646aad1df861362f30744e.jpg",
        value:1,
        status:"closed"
    },

    {
        image:"https://wallpapercave.com/wp/wp4864277.jpg",
        value:2,
        status:"closed"
    },

    {
        image:"https://wallpapercave.com/wp/wp4864277.jpg",
        value:2,
        status:"closed"
    },

    {
        image:"https://i.pinimg.com/236x/23/24/91/2324912e2b8aa4710839b47c0db66d78.jpg",
        value:3,
        status:"closed"
    },

    {
        image:"https://i.pinimg.com/236x/23/24/91/2324912e2b8aa4710839b47c0db66d78.jpg",
        value:3,
        status:"opened"
    },

    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871567-aif3.jpg?resize=480:*",
        value:4,
        status:"closed"
    },

    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871567-aif3.jpg?resize=480:*",
        value:4,
        status:"closed"
    },

]


 let cardCopy = "cards"


 //------shuffling-------

 let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}



function displayCards(data){

    let cardsString="";

    

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reste after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("game over");
            location.reload();

        }

        
    }

    displayCards(cards);

}