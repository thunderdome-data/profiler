var photoGrid = {


	init: function(args) {

		//INIT GLOBALS
		photoGrid.initGlobals();

		photoGrid.$detail.hide();
		photoGrid.$prevbtn.hide();
		
		photoGrid.loadData(1, args.googleKey);
	},

	initGlobals: function() {

		//GLOBALS
		photoGrid.current = 0;
		photoGrid.totalEntries = [];
		photoGrid.allData = [];
		photoGrid.ds = [];

		//JQUERY CACHING
		photoGrid.$detail = $("#detail");
		photoGrid.$prevbtn = $("#prevbtn");
		photoGrid.$nextbtn = $("#nextbtn");

	},

	loadData: function(which, key) {

		//LOAD DATA WITH MISO
		//SAMPLE SPREADSHEET 
		//https://docs.google.com/spreadsheet/pub?key=0AurS2EUbrPERdE9Nc1dMSGdfenFCN0FCTk9jZF9TVWc&output=html
		photoGrid.ds = new Miso.Dataset({
	  		importer : Miso.Dataset.Importers.GoogleSpreadsheet,
	  		parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
	  		key : key,
	  		worksheet : which
		});

		photoGrid.ds.fetch({ 
		  success : function() {
		    photoGrid.populateGrid();
		  },
		  error : function() {
		  	console.error("ERROR: Failed to load Google Spreadsheet");
		  }
		});

	},

	showDetail: function(which) {

		photoGrid.current = which;

		photoGrid.$detail.show();
		photoGrid.$detail.animate({ opacity: '1' }, 500);

		var context = {
			name: photoGrid.allData[which][0].name,
			photo: photoGrid.allData[which][0].photourl,
			blurb: photoGrid.allData[which][0].blurb,
			data1: photoGrid.allData[which][0].data1,
			data2: photoGrid.allData[which][0].data2,
			data3: photoGrid.allData[which][0].data3
		}

		photoGrid.$detail.html(Handlebars.templates['display-template'](context));

		photoGrid.checkNav();

		//CLOSE BUTTON
		$("#closebtn").click(function() {
			photoGrid.$detail.hide();
			photoGrid.$detail.animate({ opacity: '0' }, 500);
			$("#detail #vid").empty();
		});

	},

	nextPerson: function() {
		photoGrid.current ++;
		photoGrid.showDetail(photoGrid.current);
	},

	prevPerson: function() {
		photoGrid.current --;
		photoGrid.showDetail(photoGrid.current);
	},

	checkNav: function() {

		if (photoGrid.current == 0) {
			//photoGrid.$prevbtn.hide();
			$("#prevbtn").hide();
		} else {
			//photoGrid.$prevbtn.show();
			$("#prevbtn").show();
		}

		if (photoGrid.current == photoGrid.totalEntries - 1) {
			//photoGrid.$nextbtn.hide();
			$("#nextbtn").hide();
		} else {
			//photoGrid.$nextbtn.show();
			$("#nextbtn").show();
		}
	},

	populateGrid: function() {

		var $len = photoGrid.ds.column("name").data.length;
		photoGrid.totalEntries = $len;
		
		//LOOP THRU GOOGLE DATA AND PUT INTO OBJECT
		for (var j=0; j<$len; j++) {
			var counter = photoGrid.ds.column("id").data[j];
			photoGrid.allData[counter] = [ {
									myid: photoGrid.ds.column("id").data[j],
									name: photoGrid.ds.column("name").data[j],
									data1: photoGrid.ds.column("data1").data[j],
									data2: photoGrid.ds.column("data2").data[j],
									data3: photoGrid.ds.column("data3").data[j],
									blurb: photoGrid.ds.column("blurb").data[j],
									photourl: photoGrid.ds.column("image").data[j],
							    }];
		}
		
		for (var i = 0; i<photoGrid.totalEntries; i++) {

			var context = {
				id: i,
				name: photoGrid.allData[i][0].name, photo:
				photoGrid.allData[i][0].photourl
			}

			$("#container").append(Handlebars.templates['th-template'](context));	
		}

	}

}