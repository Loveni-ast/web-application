function startList(){
    let app = "File ";
    let arr = [];
    for(let i = 0; i <= 6; i++) {
	arr[i] = app + (i + 1);
    };
    let row = `<select name=list[] size=7 id='mass' multiple>`;
            row += `<option value=1 selected id='file1' onclick="startWeb(this.id)">${arr[0]}</option>`;
    for(let i = 1; i <arr.length; i++){
	    row += `<option value=${i + 1} id='file${i+1}' onclick="startWeb(this.id)">${arr[i]}</option>`;
    };
    row += `</select>`;
    $('#list').append(row);
};

function startDate(){
    mdate2 = new Date();
    document.getElementById("dateFinish").value=mdate2.toISOString().substr(0,10);
    mdate1 = mdate2;
    document.getElementById("dateStart").value=mdate1.toISOString().substr(0,10);
};


function startWeb(val){
    document.getElementById('table').innerHTML = '';
$.ajax({
      url: `data/${val}.csv`,
      dataType: 'text'
}).done(successFunction);
 function successFunction(data) {
  var allRows = data.split(/\r?\n|\r/);
  forGraph=[];
  massData = {
        date: [],
	number1: [],
	number2: [],
	number3: []
  };
  for (j=1; j<allRows.length; j++){
      forGraph[j-1]=allRows[j];
      var rowCells = forGraph[j-1].split(';');
      massData.date[j-1] = rowCells[0];
      massData.number1[j-1] = Number.parseFloat(rowCells[1]);
      massData.number2[j-1] = Number.parseFloat(rowCells[2]);
      massData.number3[j-1] = Number.parseFloat(rowCells[3]);      
  }
  startChart(massData);
  var myHead=allRows[0].split(';');
  var table = '<table class="tableOsn">';
  table += '<thead>';
  table += '<tr>';
  for (i=0;i<myHead.length;i++){
         table += '<th>';
         table += myHead[i];
         table += '</th>';
        }
  table += '</tr></thead><tbody>';
  for (var singleRow = 1; singleRow < allRows.length; singleRow++) {
       table += '<tr>';
       var rowCells = allRows[singleRow].split(';');
     for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
         table += '<td>';
         table += rowCells[rowCell];
         table += '</td>';
      }
          table += '</tr>';
   } 
  table += '</tbody>';
  table += '</table>';
  $('#table').append(table);
  }
}

function startChart(forGraph){
    document.getElementById("chart");
    mas1 = [];
        for (let i = 0; i < massData.date.length; i++) {
            mdat=new Date(massData.date[i]);
            mas1[i]=[mdat,massData.number1[i]];
        };
        mas1.reverse();
    diagram1 = new Dygraph(
        document.getElementById("chart1"),

        mas1,  {colors:['#FF0000','#F000F0'], 
                title:"zag0",
                titleHeight:18 ,
                showRangeSelector: true,
                labels:["Date","Rand"],
                labelsDivStyles: {
                'text-align': 'center',
                'background': 'none'
                },
                'labelsDivWidth':400               
            }
    );
    mas2 = [];
        for (let i = 0; i < massData.date.length; i++) {
            mdat=new Date(massData.date[i]);
            mas2[i]=[mdat,massData.number2[i]];
        };
        mas2.reverse();
        
    diagram2 = new Dygraph(
        document.getElementById("chart2"),

        mas2,  {colors:['#FF0000','#F000F0'], 
                title:"zag0",
                titleHeight:18 ,
                showRangeSelector: true,
                labels:["Date","Rand"],
                labelsDivStyles: {
                'text-align': 'center',
                'background': 'none'
                },
                'labelsDivWidth':400
               
            }
    );
    mas3 = [];
        for (let i = 0; i < massData.date.length; i++) {
            mdat=new Date(massData.date[i]);
            mas3[i]=[mdat,massData.number3[i]];
        };
        mas3.reverse();
        
    diagram3 = new Dygraph(
        document.getElementById("chart3"),

        mas3,  {colors:['#FF0000','#F000F0'], 
                title:"zag0",
                titleHeight:18 ,
                showRangeSelector: true,
                labels:["Date","Rand"],
                labelsDivStyles: {
                'text-align': 'center',
                'background': 'none'
                },
                'labelsDivWidth':400
               
            }
    );
};  

function allFunction(){
    startDate();
    startList();
    startWeb("file1");
}