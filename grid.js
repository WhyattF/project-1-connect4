// Consolidate grid file into main file before launch


class Gamegrid {
    constructor(selector) {
        this.rows = 6
        this.columns = 7
        this.selector = selector
        this.constructGrid()
        this.isPlayer1Turn = true
        this.isPlayer2Turn = false                        
        this.executePlayerTurn()
        this.color= "red"

    }
    
    constructGrid() {
        // Grab DOM element 
        let self = this
        let board = $(this.selector)
        for (let row = 0; row < this.rows; row++) {
            const row = $('<div>')
                .addClass('row')
                board.append(row)
            for (let columns = 0; columns < this.columns; columns++) {
                const column = $('<div></div>')
                    .addClass('empty column')
                    .on('click', function(){
                        $(this).addClass(`${self.color}`).removeClass('empty')

                        //check for winner
                        let winner = 
                    self.executePlayerTurn()
                    })

                  row.append(column)
            }
            board.append(row)
        }

    } 


    executePlayerTurn() {
        if (this.isPlayer1Turn === true) {
            
            this.color = 'red'
            this.isPlayer1Turn = !this.isPlayer1Turn
            this.isPlayer2Turn = !this.isPlayer2Turn

        } else if (this.isPlayer2Turn === true) {
                
                this.color = 'black'
                this.isPlayer2Turn = !this.isPlayer2Turn
                this.isPlayer1Turn = !this.isPlayer1Turn        
            }  
        
        const winner = this.checkForWinner(
           
          )
          if (winner) {
            this.isGameOver = true;
            alert(`Game Over! ${this.color} has won!`);
            $('.column.empty').removeClass('empty');
            return;
          }
        }

        // Set up loop make the move check for win
        checkForWinner(column, row) {
            function checkWin(directionA, directionB) {
                const total = 1 +
                checkDirection(a) +
                checkDirection(b)
            if total >= 4 {
                return ${this.color}
            } else {
                return null
            }
            
            }
            function verticalWin() {
                
                return checkWin({i: -1, j: 0}, {i: 1, j:0})
            }
            return verticalWin()
        }
                  
            horizontalWin()
            diagnalWinLeft()
            diagnalWinRight()

            return
        }
        function verticalWin() {
            for (let i = 0; i < gamegrid.length; )
        }

        
    }




//   let colorChange = $('.empty column')


//    console.log($('.empty column'))

//    function clickEvent(){
//     console.log(this)



    //  
    // eventListeners() {
    //     let board = $(this.selector)

    //     board.on('mouseenter', '.empty.column', function(){
    //     console.log('here',this)
    //     })


