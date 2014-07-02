

var parkingLot = {
	rows: 4,
	cols:2,
	slots:[
		null,
		{owner: 'Jake', color:'red'},
		null,
		null,
		{owner: 'Russell', color:'skyblue'},
		{owner: 'Amber', color:'gold'},
		null,
		null,
	]
};
// accessing individual values
// parkingLot.rows
// parkingLot.cols
// parkingLot.slots[0]
// parkingLot.slots[1]
// parkingLot.slots[5].color

var createParkingLot = function(parkingLotData){
	var table = $('<table class="parking-lot">');
	
	// create rows
	for (var i = 0; i < parkingLotData.rows; i++) {
		var row = $('<tr>');
		table.append(row);

		for (var j = 0; j < parkingLotData.cols; j++){
			var cellIndex =i*parkingLotData.cols+j;
			var cell = $('<td>');
			row.append(cell);

			if(parkingLotData.slots[cellIndex]/* !== null)*/){
			cell.text('o-}o');
			cell.css('color', parkingLotData.slots[cellIndex].color || "black")
	   }
	  }
	}


	return table;
};





$(document).on('ready', function() {
 
var table = createParkingLot(parkingLot);
	$('body').append(table);






});