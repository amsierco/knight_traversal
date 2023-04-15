const createBoard = (() => {
	
    let board = document.createElement('div');
    board.setAttribute('class', 'board');
  
      for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
          let boardTile = document.createElement('div');
          boardTile.setAttribute('id', `${i}${j}`); //RowColumn
        if(i%2 != 0 && j%2 !=0){
            boardTile.setAttribute('class', 'black');
        } else if (i%2 == 0 && j%2 == 0){
            boardTile.setAttribute('class', 'black');
        } else {
            boardTile.setAttribute('class', 'white');
        }
        board.append(boardTile);   
      }
    }
    document.body.appendChild(board);
  })();
