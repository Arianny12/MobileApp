import { useEffect, useState } from 'react'
import cx from 'classnames'
import CardPattern from './assets/moroccan-flower-dark.png'
import Bilbo from './assets/bilbo-baggins.png'
import Cameron from './assets/cameron-poe.png'
import Nikki from './assets/nikki-cage.png'
import Pollux from './assets/pollux-troy.png'
import styles from './UI.module.css'


const cardImages = [
  {src: Bilbo, matched:false}, 
  {src: Cameron, matched:false}, 
  {src: Nikki, matched:false}, 
  {src: Pollux, matched:false}
]

export default function Grid(props) {
  //state to store our deck of cards
  const [cards,setCards] = useState([])
  //state to keep track of our turns
  const [turns,setTurns] = useState(0)

  const [choiceOne,setChoiceOne] = useState(null)
  const [choiceTwo,setChoiceTwo] = useState(null)

  // A function to double our cards (so each has a duplicate)
  // and then shuffle the deck ... and deal them on the screen
  const shuffleCards = () => {
    //spread our image array 2 times so that we can have an array w duplicates to shuffle
    //... means unpack an array
    const shuffledCards = [...cardImages, ...cardImages]
    //add a sort function which fires a function for each item in our new array
    //when a random # is negative, leave the item where it is
    //if it's possitive swap with another random item to shuffle 
    .sort(() => Math.random() -0.5)
    //add mapping function to add an ID property to each img object
    //first we spread the current properties and then add a new one to the end
    .map ((card) => ({...card, id: Math.random()}))
    //use our setter from useState to add our new array of doubled shuffled objects,
    // with unique ids added to each
    setCards(shuffledCards)
    //reset our turns to 0
    setTurns(0)
  }
  // console.log(cards)
  const handleChoice = (card)=>{
    console.log(card)
    //check if we have a choiceOne
    //if we dont have a choiceOne set, make the current card choiceOne
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

  }
  useEffect(() => {
    //thia is where we compare, first we make sure we have both choice
    if (choiceOne && choiceTwo) {
      //comapre src in each card to see if they match
        if (choiceOne.src === choiceTwo.src) {
          setCards((prevCrads)=>{
            //map through the entire array of cards, and set the matched ones to matched=true
            return prevCrads.map((card)=>{  
              //if they match:
              if (card.src === choiceOne.src){
                console.log('these cards match')
                return{...card, matched:true}
              }else {
                return card
              }
            })
          })
          resetTurn()
        } else{
          console.log ('these cards do not match')
          setTimeout(() => resetTurn(), 1000)

        }
    }
},[choiceOne, choiceTwo])

const resetTurn = () =>{
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns((prevTurns) =>prevTurns +1)
}
  
  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <div className={styles.container}>
        <div className={styles.grid}>
          {
            cards.map((card) => (
            <Card 
              key={card.id} 
              card={card}
              img={card.src} 
              handleChoice={handleChoice} 
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />))
          }
        </div>
      </div>
      <div> Turns:  {turns}</div>
    </>
  )
}

export function Card(props) {
  const {card, handleChoice, flipped} = props
  //keep track of flippled/active in state
  const [isActive,setIsActive] = useState(false)

  const handleClick = (event) =>{
    //toggle active state
    handleChoice(card)
  }
  return (
    <div className={styles.flip_card}>
      <div onClick = {handleClick}
            className={cx(styles.flip_card_inner,{[styles.flipped]: flipped})}>
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card back" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={card.src} alt="card front" />
        </div>
      </div>
    </div>
  )
}
