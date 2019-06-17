// Consolidate grid file into main file before launch
class Gamegrid {
    constructor(selector) {
        this.rows = 6
        this.columns = 7
        this.selector = selector
        this.constructGrid()
    }
    
    constructGrid() {
        // Grab DOM element
        let board = $(this.selector)
        for (let row = 0; row < this.rows; row++) {
            const row = $('<div>')
                .addClass('row')
                board.append(row)
            for (let column = 0; column < this.columns; column++) {
                const column = $('<div>')
                    .addClass('empty column')
                row.append(columns)
            }
            board.append(row)
        }
    }
    //  
    eventListeners() {
        let board = $(this.selector)

        board.on('mouseenter', '.empty.column', function(){
            console.log('here', this)
        })
    } 
}
