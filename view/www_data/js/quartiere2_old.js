var quartiere2 = {
	info:{
		id: 2,
		larghezza: 2000,
		altezza: 1500,
		riferimento: {quartiere: 1, angolo:2},
	},
	strade:[
		{"id": 1,"lunghezza": 250,"from":[0,0],"to":[0,500],"numcorsie":2},
		{"id": 2,"lunghezza": 50,"from":[0,500],"to":[500,500],"numcorsie":2},
		{"id": 3,"lunghezza": 50,"from":[500,0],"to":[500,500],"numcorsie":2},
		{"id": 4,"lunghezza": 50,"from":[500,500],"to":[450,1000],"numcorsie":2},
		{"id": 5,"lunghezza": 50,"from":[450,1000],"to":[450,1500],"numcorsie":2},
		{"id": 6,"lunghezza": 50,"from":[0,500],"to":[450,1500],"numcorsie":2},
		{"id": 7,"lunghezza": 50,"from":[450,1000],"to":[950,1000],"numcorsie":2},
		{"id": 8,"lunghezza": 50,"from":[450,1500],"to":[950,1200],"numcorsie":2},
		{"id": 9,"lunghezza": 50,"from":[950,1000],"to":[950,1200],"numcorsie":2},
		{"id": 10,"lunghezza": 50,"from":[500,500],"to":[1500,500],"numcorsie":2},
		{"id": 11,"lunghezza": 50,"from":[1500,0],"to":[1500,500],"numcorsie":2},
		{"id": 12,"lunghezza": 50,"from":[1500,500],"to":[1500,800],"numcorsie":2},
		{"id": 13,"lunghezza": 50,"from":[950,1000],"to":[1500,800],"numcorsie":2},
		{"id": 14,"lunghezza": 50,"from":[950,1200],"to":[1500,1200],"numcorsie":2},
		{"id": 15,"lunghezza": 50,"from":[1500,800],"to":[1500,1200],"numcorsie":2},
		{"id": 16,"lunghezza": 50,"from":[1500,500],"to":[1900,400],"numcorsie":2},
		{"id": 17,"lunghezza": 50,"from":[2000,0],"to":[1900,400],"numcorsie":2},
		{"id": 18,"lunghezza": 50,"from":[1900,400],"to":[2000,800],"numcorsie":2},
		{"id": 19,"lunghezza": 50,"from":[1500,800],"to":[2000,800],"numcorsie":2},
		{"id": 20,"lunghezza": 50,"from":[1500,1200],"to":[2000,1200],"numcorsie":2},
		{"id": 21,"lunghezza": 50,"from":[2000,800],"to":[2000,1200],"numcorsie":2},

	],
	strade_ingresso:[
		{"id": 1,"lunghezza": 50,"numcorsie":1,"strada_confinante":1,"polo":true,"distanza_da_from":200},
		{"id": 2,"lunghezza": 100,"numcorsie":1,"strada_confinante":4,"polo":true,"distanza_da_from":150},
		{"id": 4,"lunghezza": 50,"numcorsie":1,"strada_confinante":4,"polo":true,"distanza_da_from":320},
		{"id": 3,"lunghezza": 50,"numcorsie":1,"strada_confinante":4,"polo":false,"distanza_da_from":200},
	],
	incroci_a_4:[
		{
			id: "i2",
			strade:[
				{"quartiere":2,"id_strada":3,"tipo_strada":"urbana","polo":false},
				{"quartiere":2,"id_strada":10,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":4,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":2,"tipo_strada":"urbana","polo":false},
			]
		},
		{
			id: "i7",
			strade:[
				{"quartiere":2,"id_strada":11,"tipo_strada":"urbana","polo":false},
				{"quartiere":2,"id_strada":16,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":12,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":10,"tipo_strada":"urbana","polo":false},
			]
		},
		{
			id: "i8",
			strade:[
				{"quartiere":2,"id_strada":12,"tipo_strada":"urbana","polo":false},
				{"quartiere":2,"id_strada":19,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":15,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":13,"tipo_strada":"urbana","polo":false},
			]
		},
		{
			id: "i11",
			strade:[
				{"quartiere":2,"id_strada":18,"tipo_strada":"urbana","polo":false},
				{"quartiere":3,"id_strada":3,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":21,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":19,"tipo_strada":"urbana","polo":false},
			],
		},
	],
	incroci_a_3:[
		{
			id: "i1",
			strade:[
				{"quartiere":2,"id_strada":1,"tipo_strada":"urbana","polo":false},
				{"quartiere":2,"id_strada":2,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":6,"tipo_strada":"urbana","polo":true},
				//null,
			],
			strada_mancante: 3
		},
		{
			id: "i3",
			strade:[
				{"quartiere":2,"id_strada":4,"tipo_strada":"urbana","polo":false},
				{"quartiere":2,"id_strada":7,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":5,"tipo_strada":"urbana","polo":true},
				//null,
			],
			strada_mancante: 3
		},
		{
			id: "i4",
			strade:[
				{"quartiere":2,"id_strada":5,"tipo_strada":"urbana","polo":false},
				{"quartiere":2,"id_strada":8,"tipo_strada":"urbana","polo":true},
				//null,
				{"quartiere":2,"id_strada":6,"tipo_strada":"urbana","polo":false},
			],
			strada_mancante: 2
		},
		{
			id: "i5",
			strade:[
				//null,
				{"quartiere":2,"id_strada":13,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":9,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":7,"tipo_strada":"urbana","polo":false},
			],
			strada_mancante: 0
		},
		{
			id: "i6",
			strade:[
				{"quartiere":2,"id_strada":9,"tipo_strada":"urbana","polo":false},
				{"quartiere":2,"id_strada":14,"tipo_strada":"urbana","polo":true},
				//null,
				{"quartiere":2,"id_strada":8,"tipo_strada":"urbana","polo":false},
			],
			strada_mancante: 2
		},
		{
			id: "i9",
			strade:[
				{"quartiere":2,"id_strada":15,"tipo_strada":"urbana","polo":false},
				{"quartiere":2,"id_strada":20,"tipo_strada":"urbana","polo":true},
				//null,
				{"quartiere":2,"id_strada":14,"tipo_strada":"urbana","polo":false},
			],
			strada_mancante: 2
		},
		{
			id: "i10",
			strade:[
				{"quartiere":2,"id_strada":17,"tipo_strada":"urbana","polo":false},
				//null,
				{"quartiere":2,"id_strada":18,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":16,"tipo_strada":"urbana","polo":false},
			],
			strada_mancante: 1
		},
		{
			id: "i12",
			strade:[
				{"quartiere":2,"id_strada":21,"tipo_strada":"urbana","polo":false},
				{"quartiere":2,"id_strada":22,"tipo_strada":"urbana","polo":false},
				//null,
				{"quartiere":2,"id_strada":20,"tipo_strada":"urbana","polo":false},
			],
			strada_mancante: 2
		},
		{
			id: "i12",
			strade:[
				{"quartiere":1,"id_strada":14,"tipo_strada":"urbana","polo":false},
				{"quartiere":3,"id_strada":2,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":17,"tipo_strada":"urbana","polo":true},
			],
			strada_mancante: 3
		},
		{
			id: "i13",
			strade:[
				{"quartiere":2,"id_strada":21,"tipo_strada":"urbana","polo":false},
				{"quartiere":3,"id_strada":4,"tipo_strada":"urbana","polo":true},
				{"quartiere":2,"id_strada":20,"tipo_strada":"urbana","polo":false},
			],
			strada_mancante: 2
		},
	],
	luoghi:[
		{
			id_luogo: 1,
			nome: "UniPD",
			tipologia: "lavoro",
			idstrada: 1,
			dimensioni: [50,30],
			capienza_macchine: 70,
			capienza_persone: 1000,
			capienza_bici: 100,
		},
		{
			id_luogo: 2,
			nome: "Parcheggio",
			tipologia: "parcheggio",
			idstrada: 2,
			dimensioni: [50,30],
			capienza_macchine: 100,
			capienza_persone: 1000,
			capienza_bici: 0,
		},
		{
			id_luogo: 3,
			nome: "Ospedale",
			tipologia: "lavoro",
			idstrada: 3,
			dimensioni: [50,30],
			capienza_macchine: 500,
			capienza_persone: 5000,
			capienza_bici: 500,
		},
	]
}