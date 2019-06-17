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
        }

        // Set up loop make the move check for win
        function winner() {
            verticalWin()
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


