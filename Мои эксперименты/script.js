let dat = {
	data: [],
	nomber1: [],
	nomber2: [],
	nomber3: [],
    };
    for(let i = 0; i <= 9; i++) {
	dat.data[i] = new Date(2020, 11, 30 - i).toISOString().substr(0,10);
	dat.nomber1[i] = getRandomArbitary(0, 100);
	dat.nomber2[i] = getRandomArbitary(0, 100);
	dat.nomber3[i] = getRandomArbitary(0, 100);
};

function getRandomArbitary(min, max){
    return Math.floor(min + Math.random() * (max + 1 - min));
};

function startList(){
	let app = "String ";
    let arr = [];

    for(let i = 0; i <= 4; i++) {
	    arr[i] = app + (i + 1);
    };

    document.querySelector('.list').innerHTML = `<table class="mass">Список:</table>`;

    for(let i = 0; i <arr.length; i++) {
	    let row = document.createElement('tr');
	    row.innerHTML = `
            <td>${arr[i]}</td>
	    `;
	    document.querySelector('.mass').appendChild(row);
    };
};

function startTable(){
    document.querySelector('.table').innerHTML = `<table class="osn">Таблица:
        <tr>
           	<td>Дата</td>
        	<td>Число 1</td>
    	  	<td>Число 2</td>
    	  	<td>Число 3</td>
        </tr>
    </table>`;
    for(let i = 0; i < dat.data.length; i++) {
	    let raw = document.createElement('tr');
	    raw.innerHTML = `
            <td>${dat.data[i]}</td>
            <td>${dat.nomber1[i]}</td>
            <td>${dat.nomber2[i]}</td>
            <td>${dat.nomber3[i]}</td>   
	    `;
	document.querySelector('.osn').appendChild(raw);
    };
};

let mas1 = [];
for (let i = 0; i <= 9; i++) {
    mas1.push([i,dat.nomber1[i]]);
};

/*function startChart() {
    diagram = new Dygraph(
        document.getElementById("chartBlok"),
        mas1
    );
};*/

function startDate(){
    mdate2 = new Date();
    document.getElementById("dateFinish").value=mdate2.toISOString().substr(0,10);
    mdate1 = mdate2;
    document.getElementById("dateStart").value=mdate1.toISOString().substr(0,10);
};

function startChart(){
    document.querySelector('.chartBlok').innerHTML = `<div class="chart">  
    </div>`;
    mas = [];
        for (let i = 0; i <= 9; i++) {
            mas.push([i,dat.nomber1[i]]);
        };
    diagram1 = new Dygraph(
        document.querySelector('.chart'),
        mas
    );
};
  