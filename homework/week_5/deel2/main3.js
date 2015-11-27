/* use this to test out your function */
window.onload = function() {
 	 changeColor(list, country_codes);
}

// their respective alpha 3 country codes and country names.
var country_codes = [
    ["af", "AFG", "Afghanistan"],
    ["ax", "ALA", "Åland Islands"],
    ["al", "ALB", "Albania"],
    ["dz", "DZA", "Algeria"],
    ["as", "ASM", "American Samoa"],
    ["ad", "AND", "Andorra"],
    ["ao", "AGO", "Angola"],
    ["ai", "AIA", "Anguilla"],
    ["aq", "ATA", "Antarctica"],
    ["ag", "ATG", "Antigua and Barbuda"],
    ["ar", "ARG", "Argentina"],
    ["am", "ARM", "Armenia"],
    ["aw", "ABW", "Aruba"],
    ["au", "AUS", "Australia"],
    ["at", "AUT", "Austria"],
    ["az", "AZE", "Azerbaijan"],
    ["bs", "BHS", "Bahamas"],
    ["bh", "BHR", "Bahrain"],
    ["bd", "BGD", "Bangladesh"],
    ["bb", "BRB", "Barbados"],
    ["by", "BLR", "Belarus"],
    ["be", "BEL", "Belgium"],
    ["bz", "BLZ", "Belize"],
    ["bj", "BEN", "Benin"],
    ["bm", "BMU", "Bermuda"],
    ["bt", "BTN", "Bhutan"],
    ["bo", "BOL", "Bolivia, Plurinational State of"],
    ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
    ["ba", "BIH", "Bosnia and Herzegovina"],
    ["bw", "BWA", "Botswana"],
    ["bv", "BVT", "Bouvet Island"],
    ["br", "BRA", "Brazil"],
    ["io", "IOT", "British Indian Ocean Territory"],
    ["bn", "BRN", "Brunei Darussalam"],
    ["bg", "BGR", "Bulgaria"],
    ["bf", "BFA", "Burkina Faso"],
    ["bi", "BDI", "Burundi"],
    ["kh", "KHM", "Cambodia"],
    ["cm", "CMR", "Cameroon"],
    ["ca", "CAN", "Canada"],
    ["cv", "CPV", "Cape Verde"],
    ["ky", "CYM", "Cayman Islands"],
    ["cf", "CAF", "Central African Republic"],
    ["td", "TCD", "Chad"],
    ["cl", "CHL", "Chile"],
    ["cn", "CHN", "China"],
    ["cx", "CXR", "Christmas Island"],
    ["cc", "CCK", "Cocos (Keeling) Islands"],
    ["co", "COL", "Colombia"],
    ["km", "COM", "Comoros"],
    ["cg", "COG", "Congo"],
    ["cg", "COD", "Congo, the Democratic Republic of the"],
    ["cg", "COK", "Cook Islands"],
    ["cr", "CRI", "Costa Rica"],
    ["ci", "CIV", "Côte d'Ivoire"],
    ["hr", "HRV", "Croatia"],
    ["cu", "CUB", "Cuba"],
    ["cw", "CUW", "Curaçao"],
    ["cy", "CYP", "Cyprus"],
    ["cz", "CZE", "Czech Republic"],
    ["dk", "DNK", "Denmark"],
    ["dj", "DJI", "Djibouti"],
    ["dm", "DMA", "Dominica"],
    ["do", "DOM", "Dominican Republic"],
    ["ec", "ECU", "Ecuador"],
    ["eg", "EGY", "Egypt"],
    ["sv", "SLV", "El Salvador"],
    ["gq", "GNQ", "Equatorial Guinea"],
    ["er", "ERI", "Eritrea"],
    ["ee", "EST", "Estonia"],
    ["et", "ETH", "Ethiopia"],
    ["fk", "FLK", "Falkland Islands (Malvinas)"],
    ["fo", "FRO", "Faroe Islands"],
    ["fj", "FJI", "Fiji"],
    ["fi", "FIN", "Finland"],
    ["fr", "FRA", "France"],
    ["gf", "GUF", "French Guiana"],
    ["pf", "PYF", "French Polynesia"],
    ["tf", "ATF", "French Southern Territories"],
    ["ga", "GAB", "Gabon"],
    ["gm", "GMB", "Gambia"],
    ["ge", "GEO", "Georgia"],
    ["de", "DEU", "Germany"],
    ["gh", "GHA", "Ghana"],
    ["gi", "GIB", "Gibraltar"],
    ["gr", "GRC", "Greece"],
    ["gl", "GRL", "Greenland"],
    ["gd", "GRD", "Grenada"],
    ["gp", "GLP", "Guadeloupe"],
    ["gu", "GUM", "Guam"],
    ["gt", "GTM", "Guatemala"],
    ["gg", "GGY", "Guernsey"],
    ["gn", "GIN", "Guinea"],
    ["gw", "GNB", "Guinea-Bissau"],
    ["gy", "GUY", "Guyana"],
    ["ht", "HTI", "Haiti"],
    ["hm", "HMD", "Heard Island and McDonald Islands"],
    ["va", "VAT", "Holy See (Vatican City State)"],
    ["hn", "HND", "Honduras"],
    ["hk", "HKG", "Hong Kong"],
    ["hu", "HUN", "Hungary"],
    ["is", "ISL", "Iceland"],
    ["in", "IND", "India"],
    ["id", "IDN", "Indonesia"],
    ["ir", "IRN", "Iran, Islamic Republic of"],
    ["iq", "IRQ", "Iraq"],
    ["ie", "IRL", "Ireland"],
    ["im", "IMN", "Isle of Man"],
    ["il", "ISR", "Israel"],
    ["it", "ITA", "Italy"],
    ["jm", "JAM", "Jamaica"],
    ["jp", "JPN", "Japan"],
    ["je", "JEY", "Jersey"],
    ["jo", "JOR", "Jordan"],
    ["kz", "KAZ", "Kazakhstan"],
    ["ke", "KEN", "Kenya"],
    ["ki", "KIR", "Kiribati"],
    ["kp", "PRK", "Korea, Democratic People's Republic of"],
    ["kr", "KOR", "Korea, Republic of"],
    ["kw", "KWT", "Kuwait"],
    ["kg", "KGZ", "Kyrgyzstan"],
    ["la", "LAO", "Lao People's Democratic Republic"],
    ["lv", "LVA", "Latvia"],
    ["lb", "LBN", "Lebanon"],
    ["ls", "LSO", "Lesotho"],
    ["lr", "LBR", "Liberia"],
    ["ly", "LBY", "Libya"],
    ["li", "LIE", "Liechtenstein"],
    ["lt", "LTU", "Lithuania"],
    ["lu", "LUX", "Luxembourg"],
    ["mo", "MAC", "Macao"],
    ["mk", "MKD", "Macedonia, the former Yugoslav Republic of"],
    ["mg", "MDG", "Madagascar"],
    ["mw", "MWI", "Malawi"],
    ["my", "MYS", "Malaysia"],
    ["mv", "MDV", "Maldives"],
    ["ml", "MLI", "Mali"],
    ["mt", "MLT", "Malta"],
    ["mh", "MHL", "Marshall Islands"],
    ["mq", "MTQ", "Martinique"],
    ["mr", "MRT", "Mauritania"],
    ["mu", "MUS", "Mauritius"],
    ["yt", "MYT", "Mayotte"],
    ["mx", "MEX", "Mexico"],
    ["fm", "FSM", "Micronesia, Federated States of"],
    ["md", "MDA", "Moldova, Republic of"],
    ["mc", "MCO", "Monaco"],
    ["mn", "MNG", "Mongolia"],
    ["me", "MNE", "Montenegro"],
    ["ms", "MSR", "Montserrat"],
    ["ma", "MAR", "Morocco"],
    ["mz", "MOZ", "Mozambique"],
    ["mm", "MMR", "Myanmar"],
    ["na", "NAM", "Namibia"],
    ["nr", "NRU", "Nauru"],
    ["np", "NPL", "Nepal"],
    ["nl", "NLD", "Netherlands"],
    ["nc", "NCL", "New Caledonia"],
    ["nz", "NZL", "New Zealand"],
    ["ni", "NIC", "Nicaragua"],
    ["ne", "NER", "Niger"],
    ["ng", "NGA", "Nigeria"],
    ["nu", "NIU", "Niue"],
    ["nf", "NFK", "Norfolk Island"],
    ["mp", "MNP", "Northern Mariana Islands"],
    ["no", "NOR", "Norway"],
    ["om", "OMN", "Oman"],
    ["pk", "PAK", "Pakistan"],
    ["pw", "PLW", "Palau"],
    ["ps", "PSE", "Palestine, State of"],
    ["pa", "PAN", "Panama"],
    ["pg", "PNG", "Papua New Guinea"],
    ["py", "PRY", "Paraguay"],
    ["pe", "PER", "Peru"],
    ["ph", "PHL", "Philippines"],
    ["pn", "PCN", "Pitcairn"],
    ["pl", "POL", "Poland"],
    ["pt", "PRT", "Portugal"],
    ["pr", "PRI", "Puerto Rico"],
    ["qa", "QAT", "Qatar"],
    ["re", "REU", "Réunion"],
    ["ro", "ROU", "Romania"],
    ["ru", "RUS", "Russian Federation"],
    ["rw", "RWA", "Rwanda"],
    ["bl", "BLM", "Saint Barthélemy"],
    ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
    ["kn", "KNA", "Saint Kitts and Nevis"],
    ["lc", "LCA", "Saint Lucia"],
    ["mf", "MAF", "Saint Martin (French part)"],
    ["pm", "SPM", "Saint Pierre and Miquelon"],
    ["vc", "VCT", "Saint Vincent and the Grenadines"],
    ["ws", "WSM", "Samoa"],
    ["sm", "SMR", "San Marino"],
    ["st", "STP", "Sao Tome and Principe"],
    ["sa", "SAU", "Saudi Arabia"],
    ["sn", "SEN", "Senegal"],
    ["rs", "SRB", "Serbia"],
    ["sc", "SYC", "Seychelles"],
    ["sl", "SLE", "Sierra Leone"],
    ["sg", "SGP", "Singapore"],
    ["sx", "SXM", "Sint Maarten (Dutch part)"],
    ["sk", "SVK", "Slovakia"],
    ["si", "SVN", "Slovenia"],
    ["sb", "SLB", "Solomon Islands"],
    ["so", "SOM", "Somalia"],
    ["za", "ZAF", "South Africa"],
    ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
    ["ss", "SSD", "South Sudan"],
    ["es", "ESP", "Spain"],
    ["lk", "LKA", "Sri Lanka"],
    ["sd", "SDN", "Sudan"],
    ["sr", "SUR", "Suriname"],
    ["sj", "SJM", "Svalbard and Jan Mayen"],
    ["sz", "SWZ", "Swaziland"],
    ["se", "SWE", "Sweden"],
    ["ch", "CHE", "Switzerland"],
    ["sy", "SYR", "Syrian Arab Republic"],
    ["tw", "TWN", "Taiwan, Province of China"],
    ["tj", "TJK", "Tajikistan"],
    ["tz", "TZA", "Tanzania, United Republic of"],
    ["th", "THA", "Thailand"],
    ["tl", "TLS", "Timor-Leste"],
    ["tg", "TGO", "Togo"],
    ["tk", "TKL", "Tokelau"],
    ["to", "TON", "Tonga"],
    ["tt", "TTO", "Trinidad and Tobago"],
    ["tn", "TUN", "Tunisia"],
    ["tr", "TUR", "Turkey"],
    ["tm", "TKM", "Turkmenistan"],
    ["tc", "TCA", "Turks and Caicos Islands"],
    ["tv", "TUV", "Tuvalu"],
    ["ug", "UGA", "Uganda"],
    ["ua", "UKR", "Ukraine"],
    ["ae", "ARE", "United Arab Emirates"],
    ["gb", "GBR", "United Kingdom"],
    ["us", "USA", "United States"],
    ["um", "UMI", "United States Minor Outlying Islands"],
    ["uy", "URY", "Uruguay"],
    ["uz", "UZB", "Uzbekistan"],
    ["vu", "VUT", "Vanuatu"],
    ["ve", "VEN", "Venezuela, Bolivarian Republic of"],
    ["vn", "VNM", "Viet Nam"],
    ["vg", "VGB", "Virgin Islands, British"],
    ["vi", "VIR", "Virgin Islands, U.S."],
    ["wf", "WLF", "Wallis and Futuna"],
    ["eh", "ESH", "Western Sahara"],
    ["ye", "YEM", "Yemen"],
    ["zm", "ZMB", "Zambia"],
    ["zw", "ZWE", "Zimbabwe"] ];

list = [["Afghanistan", "AFG", "569.940728793286"], ["Albania", "ALB", "4094.36020359235"], ["Algeria", "DZA", "4473.48744799511"], ["Andorra", "ADO", "39639.386021211"], ["Angola", "AGO", "3886.47849419391"], ["Antigua and Barbuda", "ATG", "13017.3103875487"], ["Argentina", "ARG", "11227.8384960848"], ["Armenia", "ARM", "3124.78401786195"], ["Aruba", "ABW", "24289.1415161326"], ["Australia", "AUS", "51801.0489492732"], ["Austria", "AUT", "46593.3892166807"], ["Azerbaijan", "AZE", "5842.80578358576"], ["Bahrain", "BHR", "20386.0175551116"], ["Bangladesh", "BGD", "760.331935200195"], ["Barbados", "BRB", "15901.4329353355"], ["Belarus", "BLR", "5818.8548592158"], ["Belgium", "BEL", "44360.9016865863"], ["Belize", "BLZ", "4344.13666906088"], ["Benin", "BEN", "690.002281084204"], ["Bermuda", "BMU", "88207.3275597322"], ["Bhutan", "BTN", "2201.29307778936"], ["Bolivia", "BOL", "1981.16010525701"], ["Bosnia and Herzegovina", "BIH", "4392.79262538464"], ["Botswana", "BWA", "6244.006548817"], ["Brazil", "BRA", "11124.0768823607"], ["Brunei Darussalam", "BRN", "31453.0059440482"], ["Bulgaria", "BGR", "6580.81387480713"], ["Burkina Faso", "BFA", "574.458089293656"], ["Burundi", "BDI", "214.230985038468"], ["Cabo Verde", "CPV", "3393.92721226559"], ["Cambodia", "KHM", "782.692789877004"], ["Cameroon", "CMR", "1147.2423467852"], ["Canada", "CAN", "47463.6311923649"], ["Central African Republic", "CAF", "446.800204552837"], ["Chad", "TCD", "895.877995851542"], ["Chile", "CHL", "12785.0518749447"], ["China", "CHN", "4514.94052013381"], ["Colombia", "COL", "6250.65449979147"], ["Comoros", "COM", "759.263222965797"], ["Congo", "COG", "311.247895988429"], ["Congo", "COD", "311.247895988429"], ["Costa Rica", "CRI", "7985.95103532732"], ["Cote d'Ivoire", "CIV", "1236.0851442355"], ["Croatia", "HRV", "13505.7656168629"], ["Cuba", "CUB", "5688.66673216525"], ["Cyprus", "CYP", "30438.9001948061"], ["Czech Republic", "CZE", "19763.9637984737"], ["Denmark", "DNK", "57647.668762065"], ["Djibouti", "DJI", "1358.46050004911"], ["Dominica", "DMA", "6926.8475973831"], ["Dominican Republic", "DOM", "5358.96794361107"], ["Ecuador", "ECU", "4657.30173745799"], ["Egypt", "EGY", "2668.03598826159"], ["El Salvador", "SLV", "3547.07098315322"], ["Equatorial Guinea", "GNQ", "15869.6527116846"], ["Eritrea", "ERI", "451.426692978845"], ["Estonia", "EST", "14632.0822062969"], ["Ethiopia", "ETH", "341.858956165333"], ["Faeroe Islands", "FRO", "47381.5227624969"], ["Fiji", "FJI", "3651.94242614479"], ["Finland", "FIN", "46205.1660111855"], ["France", "FRA", "40705.7662299421"], ["Gabon", "GAB", "9388.23283412454"], [["Gambia,", "The"], ["GMB"], ["562.212735081206"]], ["Georgia", "GEO", "2613.75692472768"], ["Germany", "DEU", "41725.8500720167"], ["Ghana", "GHA", "1323.09914056856"], ["Greece", "GRC", "26863.0116050517"], ["Grenada", "GRD", "7366.57633588191"], ["Guatemala", "GTM", "2805.94799750235"], ["Guinea", "GIN", "430.0564738591"], ["Guinea-Bissau", "GNB", "518.598360839748"], ["Guyana", "GUY", "2998.94127424089"], ["Haiti", "HTI", "662.279381247291"], ["Honduras", "HND", "2110.8220208871"], ["Hungary", "HUN", "12958.2707011137"], ["Iceland", "ISL", "41695.8945861852"], ["India", "IND", "1387.88008401275"], ["Indonesia", "IDN", "3125.21993359966"], ["Iran", "IRN", "5690.89451143955"], ["Iraq", "IRQ", "4487.36628937513"], ["Ireland", "IRL", "47903.6813267378"], ["Israel", "ISR", "30551.1246771895"], ["Italy", "ITA", "35877.8714947865"], ["Jamaica", "JAM", "4917.02320183077"], ["Japan", "JPN", "42909.2341523544"], ["Jordan", "JOR", "4370.72104476013"], ["Kazakhstan", "KAZ", "9070.64997199985"], ["Kenya", "KEN", "991.850545143199"], ["Kiribati", "KIR", "1465.55903215115"], ["Kosovo", "KSV", "3283.21193843172"], ["Kuwait", "KWT", "37724.2737850024"], ["Kyrgyz Republic", "KGZ", "880.037775119108"], ["Lao PDR", "LAO", "1147.09538849898"], ["Latvia", "LVA", "11379.2356381201"], ["Lebanon", "LBN", "8763.79596416551"], ["Lesotho", "LSO", "1087.95019540005"], ["Liberia", "LBR", "326.604433014444"], ["Libya", "LBY", "11933.7792588018"], ["Liechtenstein", "LIE", "140101.967275142"], ["Lithuania", "LTU", "11976.9011427973"], ["Luxembourg", "LUX", "102863.095724628"], ["Macedonia"], ["MKD"], ["4561.17836379433"], ["Madagascar", "MDG", "414.142787218657"], ["Malawi", "MWI", "365.516569542613"], ["Malaysia", "MYS", "8802.91348994664"], ["Maldives", "MDV", "7013.35428382646"], ["Mali", "MLI", "621.22302302877"], ["Malta", "MLT", "19694.0831567142"], ["Marshall Islands", "MHL", "3126.51636530098"], ["Mauritania", "MRT", "1207.82745747508"], ["Mauritius", "MUS", "7772.10005652754"], ["Mexico", "MEX", "8861.49369730697"], ["Moldova", "MDA", "1631.53583179532"], ["Monaco", "MCO", "145221.191568424"], ["Mongolia", "MNG", "2650.34688488399"], ["Montenegro", "MNE", "6636.87502851915"], ["Morocco", "MAR", "2782.6717971832"], ["Mozambique", "MOZ", "416.059336428601"], ["Namibia", "NAM", "5139.05360880406"], ["Nepal", "NPL", "595.427519830012"], ["Netherlands", "NLD", "50341.251919716"], ["New Zealand", "NZL", "33394.0693361365"], ["Nicaragua", "NIC", "1523.48146924241"], ["Niger", "NER", "351.006218346786"], ["Nigeria", "NGA", "2314.96353665347"], ["Norway", "NOR", "87646.2700974708"], ["Oman", "OMN", "19920.6495686354"], ["Pakistan", "PAK", "1043.30020503812"], ["Palau", "PLW", "9004.63721642892"], ["Panama", "PAN", "7958.58368968316"], ["Papua New Guinea", "PNG", "1418.92663451668"], ["Paraguay", "PRY", "3228.32775609855"], ["Peru", "PER", "5056.3290944498"], ["Philippines", "PHL", "2145.24171053314"], ["Poland", "POL", "12530.3070997379"], ["Portugal", "PRT", "22539.9945043592"], ["Puerto Rico", "PRI", "26435.7259802226"], ["Qatar", "QAT", "70870.2265835221"], ["Romania", "ROM", "8139.14667335628"], ["Russian Federation", "RUS", "10674.9972024184"], ["Rwanda", "RWA", "553.597457610684"], ["Samoa", "WSM", "3530.57399435295"], ["Sao Tome and Principe", "STP", "1176.48593505139"], ["Saudi Arabia", "SAU", "18753.9812332079"], ["Senegal", "SEN", "998.119695502128"], ["Serbia", "SRB", "5411.87740391911"], ["Seychelles", "SYC", "10805.0994540818"], ["Sierra Leone", "SLE", "446.341765694627"], ["Singapore", "SGP", "46569.688541916"], ["Slovak Republic", "SVK", "16509.8969196661"], ["Slovenia", "SVN", "23417.6404531573"], ["Solomon Islands", "SLB", "1276.34851310464"], ["South Africa", "ZAF", "7389.96026361652"], ["South Sudan", "SSD", "1563.94857114065"], ["Spain", "ESP", "30737.8322708385"], ["Sri Lanka", "LKA", "2399.920468625"], ["St. Kitts and Nevis", "KNA", "13226.952311419"], ["St. Lucia", "LCA", "7014.19644868519"], ["St. Vincent and the Grenadines", "VCT", "6233.03694488151"], ["Sudan", "SDN", "1421.53237527134"], ["Suriname", "SUR", "8430.85478335862"], ["Swaziland", "SWZ", "2956.69679468117"], ["Sweden", "SWE", "52076.4305245885"], ["Switzerland", "CHE", "74277.1216031631"], ["Tajikistan", "TJK", "744.189892165383"], ["Tanzania", "TZA", "712.233164121615"], ["Thailand", "THA", "4781.79939106487"], ["Timor-Leste", "TMP", "875.836569271265"], ["Togo", "TGO", "496.482472580306"], ["Tonga", "TON", "3557.75988165044"], ["Trinidad and Tobago", "TTO", "15494.7029665448"], ["Tunisia", "TUN", "4212.15466690892"], ["Turkey", "TUR", "10111.5177086398"], ["Turkmenistan", "TKM", "4392.71958330752"], ["Tuvalu", "TUV", "3238.49611054575"], ["Uganda", "UGA", "567.245344482894"], ["Ukraine", "UKR", "2973.99648071562"], ["United Arab Emirates", "ARE", "34341.9112913748"], ["United Kingdom", "GBR", "38362.2171225955"], ["United States", "USA", "48374.0564565966"], ["Uruguay", "URY", "11938.2155396173"], ["Uzbekistan", "UZB", "1377.08214046938"], ["Vanuatu", "VUT", "2965.75121006956"], ["Venezuela", "VEN", "13581.3533771018"], ["Vietnam", "VNM", "1333.58352635481"], ["West Bank and Gaza", "WBG", "2338.71987682303"], ["Yemen", "YEM", "1310.05383929542"], ["Zambia", "ZMB", "1456.12652618031"], ["Zimbabwe", "ZWE", "676.748093328326"]]

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */

function changeColor(id, code) {
	for (var i = 0; i < list.length; i++){
		list_value = list[i][1]
		list_number = parseInt(list[i][2])
		for (var j = 0; j < country_codes.length; j++){
			if(country_codes[j][1] == list_value) {
				index = country_codes[j][0]}}
		if (index != null){
			id = document.getElementById(index).getElementsByTagName("path")
			if (id.length != 0){
				for (var k = 0; k < id.length; k++) {
					if (list_number < 5000){
						id[k].style.fill = "#7f3b08"
					}
					else if (list_number < 10000){
						id[k].style.fill = "#b35806"
					}
					else if (list_number < 15000){
						id[k].style.fill = "#e08214"
					}
					else if (list_number < 20000){
						id[k].style.fill = "#fdb863"
					}
					else if (list_number < 25000){
						id[k].style.fill = "#ffffbf"
					}
					else if (list_number < 30000){
						id[k].style.fill = "#fee0b6"
					}
					else if (list_number < 35000){
						id[k].style.fill = "#d8daeb"
					}
					else if (list_number < 40000){
						id[k].style.fill = "#b2abd2"
					}
					else if (list_number < 45000){
						id[k].style.fill = "#8073ac"
					}
					else if (list_number < 50000){
						id[k].style.fill = "#542788"
					}
					else {
						id[k].style.fill = "2d004b"
					}
				}}
			else {
				id2 = document.getElementById(index)
					if (list_number < 5000){
						id2.style.fill = "#7f3b08"
					}
					else if (list_number < 10000){
						id2.style.fill = "#b35806"
					}
					else if (list_number < 15000){
						id2.style.fill = "#e08214"
					}
					else if (list_number < 20000){
						id2.style.fill = "#fdb863"
					}
					else if (list_number < 25000){
						id2.style.fill = "#ffffbf"
					}
					else if (list_number < 30000){
						id2.style.fill = "#fee0b6"
					}
					else if (list_number < 35000){
						id2.style.fill = "#d8daeb"
					}
					else if (list_number < 40000){
						id2.style.fill = "#b2abd2"
					}
					else if (list_number < 45000){
						id2.style.fill = "#8073ac"
					}
					else if (list_number < 50000){
						id2.style.fill = "#542788"
					}
					else {
						id2.style.fill = "2d004b"
					}
				}
			}	
		}
	}
	



