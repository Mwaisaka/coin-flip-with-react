import React, {Component} from 'react';
import Coin from './Coin';

class FlipCoin extends Component {
    static defaultProps = {
        coins : [
            //Sides of the coin
            {
                side: 'head',
                imgSrc : 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'
            },
            {
                side: 'tail',
                imgSrc : 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'
            }
        ]
    }
    constructor(props){
        super(props)
        //Resposible for rendering current updated coin face
        this.state = {
            //Track total number of flips
            currFace: null,
            totalFlips : 0,
            heads: 0
        }
        //Binding context of this keyword
        this.handleClick = this.handleClick.bind(this)
    }
    //Fucntion that takes an array of different faces of a coin and returns a random chosen single face
    choice (arr){
        const randomIndex = Math.floor(Math.random()*arr.length)
        return arr[randomIndex]
    }
    //Function that is responsible for updating the states according to user interactions
    flipCoin(){
        const newFace = this.choice(this.props.coins)
        this.setState(curState => {
            const heads = curState.heads +
                (newFace.side === 'head' ? 1 : 0)
                return {
                    currFace: newFace,
                    totalFlips:curState.totalFlips +1,
                    heads: heads
                }
        })
    }
    handleClick (){
        this.flipCoin()
    }
    render () {
        const {currFace, totalFlips, heads} = this.state
        return (
            <div>
                <h2>Let's flip a coin</h2>
                {/* If current face exist then show current face */}
                {currFace && <Coin info={currFace} />}
                 {/* Button to flip the coin  */} 
                 <button onClick={this.handleClick}>Flip Me!</button>
                 <p>
                    Out of {totalFlips} flips, there have been {heads} heads 
                    and {totalFlips - heads} tails 
                 </p>
            </div>
        )
    }
}

export default FlipCoin;