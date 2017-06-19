function getGeneration(cells, generations){
	cells1 = cells.slice(0);
	function countNeighbors(a, b) {
		var count = 0;
		for (var i = -1; i <= 1; i++) {
			for (var j = -1; j <= 1; j++) {
				
				
				if (i === 0 && j === 0) {
					continue;
				}
				if ((a + i < 0 || a + i >= cells1.length) || (b + j < 0 || b + j >= cells1.length)) {
					continue;
				}
				
				else {
					if (cells1[a+i][b+j] === 1) {
						count++;	
					}
				}
			}
		}
		return count;
	}
	
	
	for (var n = 0; n < generations; n++) {
		var obj = {};
		for (var x = 0; x < cells1.length; x++) {
			for (var y = 0; y < cells1.length; y++) {
				obj[x + "," + y] = countNeighbors(x, y);
				
			}
		}
		
		for (var x = 0; x < cells1.length; x++) {
			for (var y = 0; y < cells1.length; y++) {
				if (cells1[x][y] === 1 && (obj[x + "," + y] < 2 || obj[x + "," + y] > 3)) {
					cells1[x][y] = 0;
				}
				if (cells1[x][y] === 0 && obj[x + "," + y] === 3) {
					cells1[x][y] = 1;
				}
			}
		}
	}
	return cells1;
}

getGeneration([[1,0,0],
     [0,1,1],
     [1,1,0]], 4);