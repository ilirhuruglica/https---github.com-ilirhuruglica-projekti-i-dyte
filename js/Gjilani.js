const SVG = document.getElementById('Harta');

SVG.innerHTML = `
<div class="Titulli">
				<h1>Harta e Komunës</h1>
				<p>Kjo është harta e komunës së Gjilanit</p>
				<button class="Button" onclick="myFunction()">Shfaq ose fshij emrat e vendbanimeve</button>
</div>

<svg version="1.1" id="Fajlli" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1280 800">
<path onclick='document.getElementById("vendbanimi").innerHTML = "Zhegër është një vendbanim në komunën e Gjilanit, Kosovë Vendbanimi i Zhegrës është i vendosur rrëzë Maleve të Karadakut. Dikur pran rrugës që lidhte Gjilanin me Kumanovën, e cila është në hapje e sipër. Zhegra ka formë të zgjatur (3.7 km), përgjatë Lumit të Karadakut. Zhegra shtrihet në pjesën juglindore të Kosovës, në trekëndëshin ndërmjet Kosovës, Serbisë dhe Maqedonisë. Ka kushte të mira për bujqësi dhe blegtori. Pozita e përshtatshme gjeografike i mundëson një qasje të mirë me qendrat tjera të Kosovës dhe të rajonit. Zonat Kadastrale brenda bashkësisë lokale në Zhegër janë: Zhegër, Haxhaj, Demiraj, Selisht, Kurexhaj dhe Terziaj. "'
 id="Zheger" fill="#353535" stroke="#FFFFFF" stroke-width="1.3" stroke-miterlimit="10" d="M654.135,561.643
                c-5.521-2.78-9.596-6.624-11.375-12.921c-1.763-6.236-7.355-10.633-8.975-17.06c0.012-4.979-2.896-8.016-6.883-10.335
                c-1.512-8.354-3.248-16.655-2.645-25.262c0.314-4.483-1.339-8.349-4.911-11.386c-2.341-1.988-4.714-4.082-5.591-7.258
                c2.158-1.992,1.017-4.35,0.643-6.566c-0.185-1.089-0.844-1.857,0.208-3.104c6.09-7.203,8.404-16.797,14.915-23.763
                c1.585,0.014,2.104-1.539,3.164-2.155c4.774-2.793,8.046-9.756,15.366-5.858c0.354,0.302,0.703,0.603,1.056,0.904
                c1.094,4.647,4.146,7.614,8.28,9.657c3.613,4.455,4.258,10.15,6.386,15.227c-0.405,1.104-1.188,2.345,0.922,2.532l-0.082-0.104
                c-0.235,1.155-0.196,2.174,1.259,2.472l-0.068-0.093c0.413,2.962,1.387,5.479,4.814,6.032l-0.077-0.079
                c3.612,2.124,7.216,0.773,10.822-0.022l-0.099-0.037c0.428,1.044,1.299,1.131,2.251,1.041c0.2,0.49,0.401,0.982,0.602,1.476
                c-0.128,1.452,0.195,2.518,1.993,2.309l-0.066-0.075c0.788,3.494,3.555,3.029,5.939,2.718c8.854-1.153,16.911,2.081,24.476,5.547
                c6.803,3.115,12.714,5.511,19.217,0.229c2.238,3.64,4.147,7.414,5.416,11.527c1.193,3.868,1.061,7.325-2.673,9.624
                c-1.387,0.854-1.267,1.35-0.788,2.67c0.702,1.926,1.514,4.092-0.577,5.837c-4.362,2.367-5.041,6.362-4.776,10.78
                c-0.546,5.698-5.369,9.612-6.331,15.142c-0.104,4.611-0.207,9.223-0.314,13.833c-5.46,1.603-10.188,5.666-16.445,4.742
                c-0.798-0.119-2.096,1.135-2.698,2.056c-3.976,6.04-11.016,4.259-16.453,6.525c-1.196,0.496-2.303-0.813-2.674-1.883
                c-1.729-4.974-5.805-5.952-10.292-6.34c-6.408-5.063-11.944-6.351-15.125-2.559C659.666,560.373,657.33,561.472,654.135,561.643z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Cërnica është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Qarrisht. "'
 id="Cernic" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M584.539,361.396
                c-3.033-4.88-8.47-8.267-12.836-12.317c-0.68-0.441-1.361-0.883-2.042-1.324c-0.001,0.001,0.206,0.139,0.206,0.139
                c-1.767-0.269-1.719-3.093-3.905-2.765c-1.57-0.438-3.139-0.875-4.709-1.313c-2.16-1.085-5.637-0.311-5.864-4.127
                c-1.268,0.477-1.667,0.083-1.197-1.182c-1.254,0.459-1.647,0.063-1.183-1.195c-3.977-1.298-8.146-2.34-9.497-7.135
                c-3.964-1.994-4.688-5.582-4.705-9.519c-1.082,0.007-1.242-0.695-1.161-1.583c-0.375-0.491-0.75-0.983-1.125-1.475
                c-3.231-0.27-3.061-3.609-4.751-5.27c-6.602-1.716-5.492-8.218-7.696-12.631c-0.649-1.298-0.338-3.077-0.466-4.637
                c-1.172-4.195-3.755-7.915-4.176-12.359c-0.329-3.466-4.431-2.731-5.686-5.154c-0.585,0.005-1.611,0.188-1.692-0.011
                c-2.509-6.257-8.58-10.055-11.188-16.223c-1.636,1.035-2.123-0.229-2.677-1.358c-4.428-1.847-3.948-5.917-4.348-9.59
                c-0.153-0.327-0.306-0.654-0.458-0.979c-0.363,0.365-0.727,0.729-1.09,1.094c0.333,2.57-1.213,3.888-3.24,4.885
                c-1.191,2.844-3.698,4.563-5.736,6.685c-3.783,6.041-4.111,6.115-9.139,1.671c-6.335-5.601-14.76-4.714-22.148-7.011
                c-3.361-1.045-6.979-1.277-9.746-3.704c-1.923-1.686-4.223-1.488-6.17-0.949c-2.369,0.654-3.669-0.262-5.014-1.763
                c-1.214,0.094-2.426,0.188-3.64,0.282c-0.849,1.937-0.401,3.815,0.127,5.747c1.512,5.527,4.156,10.858,2.317,16.929
                c-0.719,2.368,1.133,3.64,2.726,5.497c4.978,5.802,8.963,12.452,9.738,20.431c0-0.004,0.273,0.191,0.273,0.191l0.225-0.251
                c2.782,1.621,8.708,1.621,3.739,7.245c2.891,6.544,8.531,10.453,13.936,14.593c2.122,1.052,4.748,1.592,4.807,4.735
                c3.144,3.453,6.771,5.235,11.699,4.672c7.425-0.851,7.483-0.604,6.77,6.729c-0.075,0.767-0.293,1.52-0.447,2.277
                c0.491,2.939,2.286,5.746,0.898,8.875c0.065,1.029,0.325,1.96,1.405,2.368c9.413,3.561,18.28,8.624,28.98,8.228
                c5.177-0.191,11.21,0.041,13.277,6.847c1.549,2.802,1.751,7.354,7.204,4.569c1.357-0.692,4.207-0.223,3.703,3.287
                c-0.344,2.399,0.341,4.945,0.566,7.426c-2.233,1.206-4.477,2.225-4.945,5.288c-0.405,2.644-2.434,3.662-5.064,3.389
                c-1.891,2.931,0.752,4.329,2.396,4.358c6.505,0.124,13.618,2.869,19.022-3.367c2.942-0.875,2.423-9.39,8.313-3.765
                c1.356,0.153,2.809,0.641,3.638-1.045c5.18-2.173,10.359-4.438,15.279,0.552c3.763,0.62,8.841,2.507,10.131-2.337
                C590.232,376.304,588.688,368.074,584.539,361.396z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Poneshi është një vendbanim në komunën e Gjilanit, Kosovë. Etimologjia e toponimit Ponesh ka prejardjen e saj në një simbiozë historik gjuhësore shqiptaro-arumune (vlleh)."'
 id="Ponesh" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M431.099,250.297
                c-1.214,0.094-2.426,0.188-3.64,0.282c-8.064,1.225-16.016,0.399-23.921-1.299l0.106,0.109c-1.294-1.855-1.751-4.126-3.84-5.652
                c-1.581-1.155-1.954-3.149-1.602-5.675c1.275-9.131,1.784-18.355-0.491-27.474c1.834-3.995,1.529-8.144,0.886-12.317
                c0.41-1.792,0.123-3.386-0.756-5.074c-1.387-2.67-0.854-5.362,0.927-7.726c4.325-5.733,8.489-11.526,8.957-19.067
                c0.109-1.748,1.253-3.11,2.564-3.729c2.675-1.261,3.533-3.58,5.009-5.835c2.264-3.456-0.121-8.034,0.844-9.262
                c2.688-3.415,2.145-7.475,4.015-10.8c4.059,2.243,8.118,4.484,12.172,6.723c0.403,3.437,3.112,3.519,5.643,3.862l-0.054-0.051
                c1.247,4.077,5.71,3.71,8.265,5.983l0.011-0.065c0.814,3.774,2.805,6.814,5.764,9.252c1.003,2.101,2.851,3.835,4.941,3.514
                c4.883-0.75,8.272,2.183,11.602,4.493c4.09,2.84,8.337,4.004,13.097,4.132c0.352,1.545,0.702,3.09,1.056,4.636
                c-1.136,0.818-1.176,1.844-0.788,3.114c2.998,9.791,11.556,16.358,14.984,25.891c0.986,3.397,1.972,6.792,2.957,10.19
                c0.635,5.399,4.062,8.843,8.23,11.771c-1.304,5.066-3.86,8.109-9.729,8.738c-4.146,0.443-9.25,2.238-5.958,8.709
                c-4.813,3.837-9.781,7.529-11.57,13.917c-0.948,3.386-2.248,4.547-4.687,0.784c-1.492-2.301-3.587-4.172-6.6-4.546
                c-10.067-1.25-20.226-2.167-28.94-8.24c-1.357-0.948-3.383-1.143-4.446-0.005C434.433,251.365,432.784,250.314,431.099,250.297z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Vërbica e Zhegocit është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrat Gjytezë dhe Urbisht i Zhegocit. Vendbanimi është fshat në malet e Zhegocit, me hapësirë është fshat shumë i madh ndërsa nuk kanë mbetur shumë banorë.  Vendbanimi është fshat në malet e Zhegocit, me hapësirë është fshat shumë i madh ndërsa nuk kanë mbetur shumë banorë. Nuk dihet saktësisht se kur ka filluar të banohet fshati mirëpo të dhëna të shumta dëshmojnë se në kjo pjesë ka pasur banim të hershëm.Duke qenë se në Vërbicë të Zhegocit kalonin rrugë të vjetra tregtare për në qendrat e mëdha minerale që nga koha e ilirëve e në mesjetë, fshati ishte pranëJanjevës dhe Artanës që ishin miniera të mëdha të arit dhe argjendit përgjatë luginës kryesore të fshatit janë gjetur copëza të vjetra mineralesh gjysëm të përpunuara. Ato copa mineraleshgjysëm të përpunuara më vonë janë marrë nga banorët dhe janë dërguar për tu përpunuar më mirë në minierat e sotme, andaj sot ndoshta rrallë mund të shihen ato copëza të vogla mineralesh. "'
 id="Verbic_e_Zhegocit" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M333.507,116.653
                c-0.252-0.246-0.739-0.507-0.724-0.734c0.197-2.84,3.903-6.174,2.272-7.659c-2.977-2.708-7.328-4.013-11.539-4.888
                c-5.322-1.103-10.786-2.251-15.406-5.076c-10.155-6.212-10.196-11.542-8.065-24.035c1.759-10.3,6.931-18.875,16.108-24.839
                c4.527-2.941,6.427-8.393,7.574-13.265c1.3-5.521,3.528-5.492,7.467-3.292c0.858,0.479,1.794,0.888,2.517,1.529
                c2.501,2.217,4.912,0.817,7.031-0.395c2.308-1.322,2.462-3.422,1.748-6.131c-2.164-8.196,0.039-10.167,8.188-8.021
                c6.951,1.828,13.891,3.781,20.942,5.109c2.984,0.563,2.981,2.317,3.708,4.356c1.179,3.309,2.526,6.3,6.579,1.991
                c3.643-3.873,8.345-3.647,12.982-1.498c0.53,0.246,1.013,0.763,1.546,0.806c14.5,1.177,14.744,12.881,16.446,22.978
                c0.907,5.378,3.317,11.144-0.327,16.574c6.473,8.638-0.539,16.111-1.992,24.099c-1.469,8.072,2.254,15.406,3.938,23.017
                c0.4,1.803,2.084,3.536-0.296,5.126c-2.84-0.979-6.699-3.347-8.248-2.928c-6.301,1.701-9.9-0.759-12.965-5.529l0.014,0.026
                c0.939-2.127-0.94-3.559-1.358-5.355c-0.785-3.378-2.935-6.962-6.125-6.689c-3.022,0.258-5.631,3.451-5.847,7.312l0.02-0.019
                c-2.375,0.897-4.749,1.793-7.123,2.69c-4.721-1.235-8.803,0.139-12.474,3.607c-2.171-6.531-5.649-9.799-12.417-6.877
                c-0.701,0.302-2.167-0.037-2.683-0.611c-3.157-3.517-4.936-1.189-6.695,1.407C336.685,111.829,335.105,114.248,333.507,116.653z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Pogragjë është një vendbanim në komunën e Gjilanit, Kosovë. Fshati është vendbanim në juglindje të Gjilanit në anën e djathtë të lumit Morava e Binqes rrëzë Maleve të Karadakut, jo larg Kalasë së lashtë me të njëjtin emër. Pogragja është qender e Bashkësise lokale, në të cilën gravitojnë edhe fshatrat tjera për rreth: Llocë, Kokaj, Sllubicë, Bilinicë, Stublina. Pogragja shtrihet përgjatë luginës së lumit Morava e Binçes, në një lartësi mbidetare prej 400 m. Ky vendbanim është afirmuar në pikëpamje të shërbimeve institucionale me ndarjen administrative deri në vitin 1953 që ka pasur funksionin e qendrës komunale. Pogragja sot është bashkësi lokale e e kësaj treve. Pogragja kufizohet me Llocën në jug, Bilinicën dhe fsh.Kukaj në lindje, në perëndim me Uglarin e në veri me Caparin e Bukovikun dhe në verilindje me Dobërçanin, Ranillugun, e Stublinën. Lëvizja e popullsisë së Pogragjës tregon rritje nga regjistrimi i parë pas Luftës së dytë botërore e deri më sot. Sipas regjistrimit të parë të popullsisë pas Luftës së Dytë Botërore në vitin 1948, Pogragja ka papasur 1082 banorë, në vitin 1981, 1560 banorë. Në Pogragjë nuk ka asnjë minoritet ose pakicë. Të githë janë etnik shqiptar. Pogragja gjithsej posedon me 1846.91 hektar sipërfaqe. Prej tyre 382.19 ha janë sipërfaqe me ara, 1.74 ha, me pemishte, 133.61 ha sipërfaqe me livadhe, 108.97 ha sipërfaqe me kullosa, 1128.34 ha sipërfaqe me pyje,. Gjithsej tokë produktive Pogragja i ka 1754.90 ha. tokë. Sipërfaqe joproduktive gjithsej i ka 92 ha. "'
 id="Pogragje" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M876.909,298.004
                c2.983-1.133,6.073-3.394,8.933-3.135c4.438,0.406,8.889,0.743,13.313,1.179c3.755,0.37,3.2,5.356,5.041,8.053
                c2.766,4.054,7.292,7.95,5.036,13.981c-0.394,0.117-0.785,0.232-1.179,0.35c-4.986,1.139-9.837,2.535-13.03,7.01l0.004-0.005
                c-2.061-0.44-3.948,0.231-5.704,1.115c-8.729,4.394-17.622,6.587-27.14,2.513c-0.804-0.344-1.466,0.314-1.879,1.056
                c-3.598,3.792-8.753,4.924-12.994,7.614c-0.114-0.273-0.282-0.794-0.342-0.781c-0.903,0.182-0.973,0.78-0.67,1.523l0.043-0.047
                c-2.753,0.354-3.871,2.026-3.772,4.679l0.063-0.07c-1.385,0.221-1.551,1.185-1.419,2.332l0.051-0.151
                c-2.824,0.501-6.521,2.354-5.087,4.73c2.898,4.791,0.036,7.711-2.025,10.721c-1.908,2.783-2.507,5.319-1.763,8.608
                c1.59-1.4-0.082-3.782,1.912-4.751c0.126,1.918,0.246,3.837,0.371,5.757c-0.494,1.446-0.633,2.848,0.491,4.101
                c0.052,0.209,0.152,0.393,0.305,0.548c-0.004,2.512-0.008,5.021-0.012,7.53c-4.108-4.033-8.229-8.368-14.241-8.982
                c-3.166-0.325-6.177-0.647-9.064-1.948c0.716-5.069-3.767-3.271-5.767-3.875c-12.208-3.694-21.439,1.895-22.801,13.378
                c-3.675,1.373-6.944,1.693-10.896-0.326c-5.397-2.761-11.305-4.896-17.689-4.247c0.236-1.938,3.406-3.049,2.294-4.956
                c-4.665-8.011-0.607-13.438,4.729-18.929c3.725-3.831-0.013-8.618,0.766-12.519c1.261-6.323-2.438-9.426-5.608-13.264
                c-1.465-0.819-3.576,0.484-4.71-1.432c5.004,0.819,8.034-3.01,11.833-5.022c3.918-0.307,4.346-3.345,4.627-6.239
                c0.194-2,0.224-4.447,1.722-5.417c4.124-2.666,5.417-5.977,3.476-10.183c3.307-1.249,2.762,3.963,5.858,2.741
                c0.389,0.424,0.777,0.848,1.168,1.272c1.011,4.079,11.191,7.949,15.661,5.861c1.258-0.587,2.227-1.633,1.903-3.282l-0.021,0.017
                c4.368-2.869,3.609-7.771,4.729-11.926l0.011,0.008c0.918,0.124,1.315-0.27,1.188-1.187l0.019,0.02
                c1.054,0.06,1.281-0.677,1.438-1.485c0.906-1.254,1.862-2.424,3.656-2.216c2.828-0.453,4.358,2.13,6.722,2.897
                c3.896,1.266,5.953,0.428,6.028-3.879c3.102-1.621,5.422,1.711,8.331,1.314l-0.057-0.079c0.524,4.121,3.07,5.5,6.841,4.705
                c4.528-0.955,1.755-4.029,1.786-6.396c0.025-1.859-1.387-3.631-0.277-5.509c2.577,0.628,1.752,4.706,4.862,4.79l-0.051-0.051
                c-0.059,0.867,0.366,1.274,1.214,1.283l-0.066-0.083c-0.64,6.221,3.845,7.281,8.364,8.302l0.023,0.018
                c2.854,6.547,16.987,8.555,22.646,3.215C876.371,298.571,876.64,298.288,876.909,298.004z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Shillova është një vendbanim në komunën e Gjilanit, Kosovë.  "'
 id="Shillov" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M685.218,190.621
                c-0.393,5.581-3.201,6.468-7.653,6.568c-5.776,0.131-9.928,3.478-11.19,8.634c-1.058,4.322-2.777,3.923-6.025,3.381
                c-5.58-0.931-10.955,2.349-12.669,7.163c1.371,9.552,1.037,19.581,7.994,27.542c0.86,0.987,1.593,2.435,1.659,3.709
                c0.365,6.649,2.334,12.596,7.338,17.487c2.213-1.574,1.104-3.769,0.601-6.018c-0.889-3.952,0.491-6.487,3.814-9.387
                c5.006-4.37,10.077-5.695,16.375-5.12c2.775,0.252,5.405-0.839,7.639-3.299c3.06-3.374,7.745-3.18,11.962-3.767
                c3.513-4.244,6.467-0.24,9.62,0.722c0.793,0.241,1.017,1.912,2.273,0.958c0.883-0.669,0.9-1.605,0.786-2.658
                c-0.454-4.1-1.269-8.112-0.212-12.368c0.421-1.682-0.86-4.875-2.336-5.756c-7.33-4.375-10.472-15.002-21.162-14.292
                c-0.194,0.013-0.502,0.021-0.571-0.089c-2.14-3.25-4.255-6.516-6.374-9.778c0.533-1.337,1.067-2.674,1.602-4.011
                c-1.12,0.001-2.243-0.304-3.365-0.727C685.279,189.883,685.243,190.251,685.218,190.621z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Fshati Përlepnicë është vetëm 7 km larg nga qendra komunale, e Gjilanit, ndërsa nga magjistralja qe e lidh këtë qytet me Bujanocin dhe Kosovën Lindore, Përlepnicën e ndan vetëm 2 km. Ndryshe nga shumica e fshatrave, jo vetëm të komunës por edhe të gjithë Kosovës, Përlepnica pati një zhvillim solid të infrastrukturës që para 30 vitesh. Kështu rruga që lidh fshatin me magjistralen që lidh Gjilanin me Bujanoicin është ndërtuar në fillim të viteve shtatëdhjeta, kohë kjo prej kur dy breza asfalti përshkojnë edhe dy rrugët kryesore të fshatit. Ndërsa ndërtimi mbi fshat, i pendës për akumulimin e ujit të pijes në lumin e Përlepnicës, i ka mundësuar Përlepnicës që të lidhet me ujësjellësin, po kështu që në gjysmën e parë të viteve shtatëdhjeta kjo gjë ishte e rrallë në atë kohë për fshatrat e Kosovës.Mbi fshat kalon edhe rruga e vjetër malore që çon deri në Artanë, qytet i vjetër mesjetar, me tradita të pasura qytetërimi dhe xehetarie. Prandaj duke qenë në afërsi të metropoli të tillë të mesjetës, edhe Përlepnica ose me sakët brigjet mbi fshat, në drejtim të Artanës, fshehin pasuri arkeologjike që presin interesimin e arkeologeve.Liqeni artificial, akumulues i Përlepnicës ku merr ujin e pijes pjesa më e madhe e Gjilanit, qëndron tash 25 vite si kurore mbi kokë fshatit Përlepnicë duke shtuar bukurinë bregoreve që e rrethojnë. Ndërsa lart mbi të më pamjen e tij epike qëndron hijerënde “Guri i Kershit”, ku bëjnë folenë shqiponjat dhe ku pastaj ato nisin fluturimin e tyre duke qarë fuqishëm ajrin e pastër malor.Me rreth 3500 banore, rreth 400 shtepi, (gjithçka rreth ose përafërsisht sepse regjistrimi i banoreve si në terë Kosovën nuk është bërë tash 27 vite as në Përlepnicë), shumë shitore pijetore dhe së fundit edhe disa Internet Caffe, Përlepnica nuk dallon shumë nga mesatarja e fshatrave që e rrethojnë. Por Përlepnica e ka edhe një traditë që e veçon nga fshatrat tjerë. Ajo ka traditën e “prodhimit” të mësuesve. Përlepnica ka, mësues shumë mësues... dhe kur jemi te mësuesit le të na lejohet një digresion ; Përlepnica që para 60 e ca vitesh, duke e kuptuar rendësin e arsimit, ka filluar të ndahet në shenje si fshati me numër ndjeshëm më të madh të mësuesve në krahasim me fshatrat tjerë. Prej atëherë pra, siç thuhet shpesh me shpoti, fshati ynë ka pas edhe vazhdon të ketë mësues “edhe për eksport”. Kjo e dhënë sidoqoftë, paraqet njëfarë treguesi për shkallën mbi mesatere të arsimit të qytetareve të Përlepnicës krahasuar me rrethin. Dhe kjo shkallë prapë e shpjegon më se miri edh atmosferën tolerante dhe harmoninë që mbretëron në mes të njerëzve të këtij fshati, apo ndoshta anasjelltas... "'
 id="Perlepnic" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M750.007,155.221
                c-3.523-6.643-8.149-12.67-9.965-20.3c-0.643-2.709-0.999-5.703-2.739-8.484c-5.803-9.273-12.725-18.038-15.559-28.905
                c-1.055-4.04-3.363-3.808-6.01-1.959c-5.053,3.531-10.39,3.091-12.771-2.199c-4.323-9.605-12.395-10.914-21.364-11.247
                c-4.764-0.176-6.024,2.454-6.129,6.471c-0.136,5.134,0.211,10.351-0.604,15.378c-1.233,7.599,0.104,14.588,2.627,21.693
                c4.096,11.531,10.346,22.585,8.728,35.538c-0.462,3.7-2.423,8.194-1.013,10.954c3.148,6.164,0.769,11.604,0.111,17.357
                c1.122,0.422,2.244,0.728,3.365,0.727c0.014-0.032,0.026-0.065,0.039-0.097c-1.525-4.51-0.157-6.403,4.238-5.479
                c4.357,0.916,8.806,1.786,12.908,3.434c3.641,1.463,6.033-0.729,6.71-2.82c1.588-4.912,6.055-8.198,6.881-13.36
                c0.275-1.712,1.691-2.225,2.955-2.473c2.604-0.51,3.562-2.214,3.974-4.521c0.091-0.724,0.185-1.449,0.274-2.173
                c-1.243-3.37,0.933-3.546,3.302-3.524c5.981,0.056,11.965,0.12,17.947,0.181C750.807,159.107,751.462,157.966,750.007,155.221z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Velekincë është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Idrizaj. Fshati shtrihet në jug-lindje të Kosovës në rrugën për Preshevë, rreth 4 kilometra larg qendrës së qytetit të Gjilanit. Velekinca me rrethinë e Gjilanit ka klimë të mesme kontinentale, me vera të nxehta dhe dimra të ftoftë. Afër fshatit Velekincë rrjedh lumi Morava ose ndryshe njihet edhe me emrin Morava e Binçës. Lartësia mbi detare arrin deri në 585 metra.Në shekullin XVIII përmendet me emrin Moravë, si kadillëk në kuadër të sanxhakut të Prishtinës. Lumi Morava emri i vjetër është Angros. Emri Morava rrjedh nga vendbanimi i vjetër që është quajtur Mur an Vadës apo më vonë Vendi i Lekës - Velekinca e sotme. Poashtu fshati përmendet edhe në shkrimet e, babai të historisë, Herodotit në shekullin e V p.e.s."'
 id="Velekinc" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M669.856,310.256
                c-1.819-0.367-4.62,2.528-6.508,4.398c-7.298,7.224-16.147,9.215-25.995,8.359c-1.158-0.1-2.352,0.205-3.527,0.321
                c-0.324,0.419-0.651,0.838-0.979,1.258c-0.039,3.897,2.496,7.972-0.792,11.646c-0.139,0.688-0.275,1.38-0.416,2.067
                c0.173,0.811,0.346,1.617,0.518,2.426c0.338,0.447,0.678,0.896,1.016,1.346c3.941,0.833,1.713,3.577,1.449,5.404
                c-0.428,2.976-2.283,4.702-5.565,4.258c0.019,0.71,0.035,1.419,0.051,2.13c1.943,0.988,4.064,1.737,5.801,3.01
                c6.667,4.897,13.266,8.928,20.566,1.095c0.264-0.282,0.575-0.52,0.865-0.776c3.458-5.116,9.366-4.182,14.251-5.771
                c8.629-1.398,12.406-4.926,11.957-11.165c-1.517-1.905-4.069,2.34-5.189-0.771c-0.608-1.692-0.94-3.756,1.39-4.814
                c0.363-4.297-2.085-6.696-5.434-8.873c-4.68-3.036-4.559-5.713-0.021-8.425c1.447-0.175,2.894-0.348,4.338-0.521
                c0.295-1.228,0.572-2.373,1.269-3.067c-1.649-1.396-3.483-2.791-5.133-4.186C673.212,310.348,672.095,310.708,669.856,310.256z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Malishevë është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Malisht. Fshati është 3-4 km. në juglindje të Gjilanit. Banorët e parë të këtij fshati janë të fisit Berishë. Lagjët (mëhallët) e këtij fshati janë: Hashanët, Durakët, Xhaferët, Çelikët, Doçët, Rrustolltë, Bajrovit , Ilazollët dhe Rashitovit. Këto lagje gjenden në pjesën qëndrore të fshati. Në lindje të fshati, në lagësi prej afro një kilometri gjendet lagja e Epërme e Malishtës, apo Malishta e epërme. Në një lagësi prej 1.5 km, nëveri-lindje të fshatit, gjendet lagjja (mëhalla) e Muhaxhirëve. Kjo lagje ka qenë e banuar me popullatë të ardhur nga vendbanimet shqiptare të Vilajetit të Nishit në vitin 1877/78, të cilët e kanë shëndrruar malin në tokë të bukës. Pas kësaj, shumica e tyre janë shpërngulur për në Turqi dhe në tokat e tyre janë vendosur kolonët serb e malazez. Rreth viteve 1950-60, këta kolonë e kanë shitur këtë pasuri të dhuruar nga Reforma agrare dhe sërish e kanë blerë shqiptarët e ardhur nga Gallapi i Dardanës."'
 id="Malishev" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M759.308,297.489
                c-3.37-2.929-3.408-5.621-3.087-9.104c-1.872-2.658-3.623-5.21-7.442-5.601c-1.671-0.17-3.844-1.925-3.77-3.81
                c0.181-4.453-2.712-8.373-1.882-12.847c-0.08-1.583-0.159-3.166-0.239-4.749c-2.305-2.043-5.466-3.091-6.997-6.028
                c-2.037-0.238-2.604-1.319-1.798-3.186c-1.286-2.287-0.563-3.985,1.544-5.278c1.282-3.272,2.306-4.325-3.246-4.472
                c-6.574-0.172-13.778-0.327-20.254-3.268c-2.125-0.965-4.64-1.07-6.989-1.543c0.812,1.096-0.103,2.195-0.739,2.207
                c-8.281,0.167-13.609,10.359-23.261,6.669c-1.602-0.612-6.07-0.486-6.878,3.636c-0.117,0.619-0.893,1.527-1.438,1.583
                c-7.716,0.794-6.14,5.625-4.377,10.282c0.664,1.756,0.767,3.126-0.759,4.122c-3.648,2.382-2.509,4.706-0.046,6.993
                c6.801,6.315,7.766,14.269,6.78,22.915c-0.335,2.917,0.327,5.962-0.114,8.849c-0.218,1.422,0.333,3.57-0.552,4.75
                c1.648,1.396,3.482,2.791,5.133,4.186c0.612-0.611,1.543-0.876,3.137-0.493c3.877,0.934,8.779-1.518,11.298,3.646
                c0.722,0.07,1.443,0.141,2.166,0.211c7.063-2.447,13.179-0.307,16.625,5.804c1.223-0.304,2.448-0.605,3.674-0.91
                c0.277-0.042,0.548-0.109,0.813-0.203c1.408-4.725,2.301-9.875,8.646-10.56c1.414-1.011,2.856-1.883,4.659-0.92
                c0.912,0.07,2.518-0.092,2.631,0.244c1.412,4.257,5.893,5.553,8.28,8.813c1.213,1.173,2.425,2.349,3.638,3.521
                c3.08-0.562,5.519,1.01,8.003,2.418c5.004,0.819,8.034-3.01,11.835-5.022C768.677,310.9,767.833,304.898,759.308,297.489z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Gjilani është një nga shtatë qytetet më të mëdha të Kosovës. Është vendosur në fushën e Gjilanit gjegjësisht në jug-lindje të Kosovës në Anamoravë. Ndërsa Regjioni i Gjilanit ka një sipërfaqe prej 525 km katror dhe përbëhet nga 63 fshatra, ka pozitë të mirë gjeografike, relievin dhe faktorët klimatik që krijojnë mundësi për zhvillimin e një flore dhe faune të pasur. Regjioni i Gjilanit i përket një biodiversitet i pasur, duke filluar nga bimët barishtore, kullosave, bimëve mjekuese, aromatike, bimëve bujqësore (gruri, misri, tërshëra, patatja etj) shkurret, pyejet me drunj të ndryshëm. Regjioni i Gjilanit është i pasur edhe me lumenjë dhe dy penda artificiale atë të Livoqit dhe të Përlepnicës, ku llogaritet të banuara (habitate) me disa popullata (peshq etj), si dhe gjallesa të fundit të lumenjëve që i quajmë bashkësi jetësore të bentosit."'
 id="Gjilan" fill="#1e1e1e" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M672.438,295.555
                c-0.207-7.026,0.068-13.685-5.029-19.131c-5.528-5.905-8.161-13.613-10.571-20.755c-1.282-3.803-2.126-8.129-3.907-12.011
                c-0.324-0.709-0.704-1.688-1.307-1.929c-3.321-1.329-4.433-2.943-4.147-7.117c0.282-4.123,0.408-8.994-3.669-12.821
                c-2.294-2.155,0.729-4.898,2.892-6.687c-2.383-0.203-4.504-1.147-6.397-2.538c-7.488-5.502-11.255-6.009-19.104-0.69
                c-2.717,1.842-3.912,1.44-6.446,0.229c-7.496-3.584-12.522-0.354-12.873,7.954c-0.175,4.128-1.202,8.302-1.037,12.272
                c0.24,5.781-2.475,7.555-7.202,9.168c-8.595,2.932-13.828,10.453-20.401,16.136c3.432,5.509,4.86,11.692,6.548,17.875
                c1.202,4.402,0.432,8.779,1.059,13.157c0.583,4.083,2.594,6.655,4.732,9.536c1.379,1.859,2.362,1.555,4.109-0.045
                c3.166-2.898,5.465-6.667,9.37-8.845c4.19-2.338,6.875-1.174,7.423,3.537c0.753,6.478,3.451,12.027,9.691,14.444
                c3.587,1.389,3.704,3.458,3.491,6.315c0.052,0.352,0.106,0.701,0.167,1.052c0.004,6.561,3.938,7.637,9.477,7.2
                c11.825-0.935,23.327-2.267,33.647-9.251C669.333,308.291,672.678,303.746,672.438,295.555z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Bresalci është një vendbanim në komunën e Gjilanit, Kosovë. Bresalci ka klimë të mesme kontinentale, është fshat kryesisht kodrionoro-malor, gjendet në veriperëndim të Gjilanit, gjendet me fshtatit Gllamë dhe fshtatit Parallovë. Lagjet e fshatit: Hoxhajt, Rexhajt, Bukovit (Bërkollët), Shasivarët, Uruqët, Qesollët, Myhiri, Malokët. Në këtë vendbanim, te lagja e hoxhajve gjendet vendbanimi i vjetër - qyteti gërmadhë Kalaja e Princeshës, e cila është ngritur në antikitet. Banorët e fshatit Bresalcë, kanë qenë shqiptarë me fe katolike. Këtë e dokumentojnë shenjat e objekteve të vjetra katolike, të cilat ekzistojnë edhe sot e kësaj ditë, si themelet e kishës katolike të vendosura në lagjen e Bukovit (Bërkollët e sotëm), pastaj themelet e kishës katolike te Kroni Plak, në lagjen Gurishtë (Gllama) ruhen ende. Xhamia e fshatit e ndërtuar në vitin 1856, më 10 prill 1999 është djegur tërësisht. Fshati Bresalc sipas regjistrimeve të vitit 2011 mendohet të ketë rreth 2823 banorë. Sipas shënimeve statistikore në vitin 1913, kishte 929 banorë, ndërsa në vitin 1918 kishte 57 familje me 609 banorë shqiptarë. Kjo shihet se një numër i madh i banorëve pas vitit 1914 u shpërngul nga ky vendbanim. Sipas regjistrimit të vitit 1921 kishte 142 shtëpi me 951 banorë. Sipas resgjistimit të vitit 1991, bërë nga LDK-ja, fshati ka 504, me gjithsej 2875 banorë shqiptarë. Nga sulmet barbare serbe mbi këtë fshat, në vitin 1999 janë vrarë 8 persona, 3 shtëpi janë të shkatërruara dhe dia objekte ndihmëse. "'
 id="Bresalc" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M482.651,179.256
                c-0.354-1.546-0.704-3.09-1.056-4.636c0.024-1.083-0.375-1.975-1.465-2.241c-9.28-2.269-16.921-8.927-26.664-9.944
                c-2.561-2.962-2.395-8.076-7.273-9.206l-0.011,0.065c-1.084-4.304-4.544-5.325-8.265-5.983l0.054,0.051
                c0.436-2.732-3.159-2.414-3.47-4.583c3.873-1.147,7.165-3.729,11.292-4.368c1.402-0.218,3.236-1.247,3.843-2.433
                c6.288-12.27,16.903-21.257,24.445-32.558c5.922-2.981,6.563-9.215,8.878-14.416c2.69-2.149,4.269,0.297,5.666,1.711
                c5.532,5.603,11.597,10.68,15.621,17.723c3.195,5.591,9.184,8.3,14.341,11.788c1.865,3.215,3.077,6.864,6.145,9.286l-0.132-0.116
                c0.306,0.739,0.611,1.477,0.916,2.215c0.748,4.594,3.06,8.345,6.232,11.646c4.729,4.923,5.195,10.675,2.843,17.428
                c-2.261,6.484-2.95,13.374-1.626,20.283c-1.548,3.357,2.079,7.163-0.896,10.393c-1.923,2.089-1.552,4.127-0.035,6.276
                c1.127,1.598,1.575,3.429,1.125,5.402c-0.128,0.404-0.255,0.808-0.382,1.211c-5.228,2.413-4.698,7.581-5.744,11.995l0.044-0.038
                c-3.389-0.158-5.65,1.102-5.986,4.775l0.049-0.053c-1.244-0.254-1.991,0.257-2.272,1.481c-3.824,1.476-5.182,6.286-9.528,7.056
                c-2.111-3.732-6.887-5.573-7.468-10.459c-0.032-0.264-1.347-0.376-2.064-0.559c-0.984-3.397-1.971-6.793-2.952-10.187
                c-1.342-4.563-0.296-10.8-3.81-13.513C487.559,190.519,484.967,185.178,482.651,179.256z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Bilinica është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Bilisht. Shtrihet rreth 20 km në lindje të Gjilani. Kufizohet me Stublinën në veri, në lindje me Dobrosinin, me Pogragjën në perendim, ndërsa në jug me Sllubicën dhe Llocën. Mikrotoponimet më karakteristike jan:Dorotel, Kalaja, Rrezja, Shpati, Zabeli, Prroni i kokolit, Livadhi Plak, Kodra Nermjeme, Dupilla, Meraja, Rosulet, Selishta, Preslop, Zelenka, Hijet, Sona, Gjurgjejis, Arat e Rexhës, Bare, Arat e Rames, Sirindeja, Ara Madhe, Branishtë, Reka, Kodërgata, kroni Bardhë, etj. Bilinica në vitin 1981 kishte 168 ekonomi shtëpiake. Me ara kishte gjithsej 214.89 ha. Me pemishte 1.06 ha. Sipërfaqe me vreshta kishte 3.66 ha. Sipërfaqe me livadhe Bilinica kishte 128.82 ha. Sipërfaqe me kullosa 82.34 ha. Me pyje gjthsej 1.061.24 ha. Gjithsej tokë produktive kishte 1492.03 ha , ndërsa joproduktive 79.21 ha. Sipërfaqe të përgjithshme kishte gjithsej 1571.24 ha. "'
 id="Bilinic" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M847.313,337.734
                c4.24-2.69,9.396-3.822,12.994-7.614c1.547,0.761,3.021,1.783,4.649,2.239c8.451,2.375,16.551,1.118,23.95-3.387
                c2.015-1.226,5.768,0.432,6.121-3.537l-0.004,0.005c5.004-1.108,9.682-2.824,13.03-7.01c0.394-0.117,0.785-0.232,1.179-0.35
                c-0.664,2.982,0.198,5.31,2.693,7.192c6.932,5.237,7.546,13.275,9.042,20.9c0.069,0.356,0.046,0.856-0.153,1.119
                c-5.541,7.232-0.028,10.022,5.033,13.526c8.199,5.674,9.102,13.586,4.936,22.981c-0.476,1.071-1.076,2.104-1.741,3.067
                c-4.902,7.129-12.568,11.996-12.877,22.639c-0.211,7.314-9.779,10.71-13.452,17.233c-0.305-3.694-1.521-6.247-6.014-5.207
                c-1.626,0.378-3.438-0.136-3.959-1.792c-1.823-5.783-11.674-4.506-10.915-12.611c0.101-1.102-1.916-0.877-3.055-1.033
                c-5.718-0.784-11.023-2.888-15.521-6.362c-2.732-2.108-5.126-1.701-8.127-1.472c-4.258,0.328-7.738,3.306-12.063,2.944
                c-0.155-0.306-0.297-0.618-0.422-0.939c-6.805-2.072-6.396-6.546-4.899-12.305c1.116-4.293,1.344-9.2-2.274-13.036
                c-0.149-0.153-0.25-0.337-0.302-0.547c0.452-1.442,0.699-2.857-0.491-4.1c-0.125-1.92-0.245-3.838-0.371-5.756
                c4.947-5.49,4.379-12.967,6.963-19.311c0,0-0.051,0.151-0.051,0.149c1.349-0.245,1.559-1.183,1.419-2.33l-0.063,0.069
                c2.207-0.794,3.618-2.229,3.772-4.678l-0.043,0.047C846.879,338.561,847.362,338.511,847.313,337.734z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Dobërçani është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Miresh dhe shtrihet buzë lumit Përlepnica, përgjatë magjistrales Gjilan-Bujanoc, 12 km në verilindje të Gjilanit. Gjendet në një pjesë të rrafshët me disa rrafshnalta. Ështe një fshat me një pozitë mjaft të përshtatshme gjeografike dhe ka shumë cilësi të tjera të cilat ia rrisin vlerat fshatit. Ështe një fshat mjaft përparimtar sidomos pas vitit 1999 pas perfundimit të luftës. Fshati Dobërçan ka afro 600 shtëpi dhe një numër shumë të madh të banorëve ku pjesa dërrmuese janë të rinj. Ajo çfarë më së shumti e përbën bukurinë e fshatit është ndërtimi i Parkut të Dëshmoreve në qendër të fshatit, i cili u ndërtua me investimin e banorëve të fshatit e sidomos nga bashkfshatarët të cilët jetojnë në vendet perëndimore. Gjithashtu rinia dhe të gjithë vendasit në pergjithësi kanë edhe vende të tjera për të kaluar kohën e lirë.  "'
 id="Doberqan" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M839.941,247.239
                c-1.103-0.17-1.834-1.382-1.931-2.714c-0.397-5.443-4.468-8.357-8.64-9.947c-5.436-2.068-4.837-5.948-4.682-10.014
                c0.134-3.383,2.025-6.248,3.024-9.375c0.5-1.567,3.242-3.085,0.759-5.017c-2.123-1.649-4.501-1.923-7.025-0.676
                c-1.608,0.794-2.938,1.799-3.799,3.383c-6.99,3.386-14.125,1.138-21.216,0.558c-5.539,0.48-10.616,2.685-15.861,4.272
                c-1.953,3.183-4.904,4.445-8.522,4.415c-0.002,0-0.443,0.1-0.443,0.1l-0.056,0.458c-0.413,0.578-0.826,1.156-1.237,1.733
                c-2.82,2.309-5.938,4.342-8.388,6.995c-3.282,3.552-7.268,4.754-11.8,5l0.086-0.074c-4.526,2.471-5.054,5.438-1.426,9.325
                c1.758,1.882,1.609,4.841,3.894,6.336c1.305,0.945,3.951,0.521,3.412,3.346l-0.043-0.045c3.783,4.362,10.462,4.94,13.486,10.226
                c1.116,1.95,2.777,1.953,4.551,1.937c2.307-0.023,1.88-1.913,2.371-3.344c2.366-6.881,5.015-8.761,11.819-6.904
                c4.422,1.207,8.55-0.766,12.843,0.075c-0.554,1.251-1.063,2.41-1.575,3.566c1.314,0.394,1.592,1.539,1.919,2.647
                c2.236-0.461,4.473-0.923,6.711-1.385c5.875-3.487,11.957-1.92,12.885,3.969c0.618,3.926,2.639,5.158,5.688,6.386
                c3.084,1.24,3.011,1.425,0.286,4.048c-1.93,1.916-4.202,2.776-6.954,2.579c-2.448-0.177-4.699,0.352-6.125,2.655
                c2.795,0.103,3.102,2.551,4.097,4.349c1.493-0.065,2.986-0.13,4.479-0.194c3.731-2.071,6.362-0.83,8.242,2.677
                c1.463,0.431,2.14,2.854,3.896,2.034c1.771-0.829,0.676-2.813,0.796-4.263c0.146-1.733,0.229-3.481-0.731-5.167
                c-1.53-2.693-2.686-6.28,0.685-7.678c3.354-1.392,3.05,3.185,4.654,4.86c2.31,2.079,3.291,4.819,3.888,7.754
                c0.89-0.045,1.107,0.546,1.175,1.279l-0.067-0.083c1.697,3.868,6.725,4.379,8.366,8.302c-0.001,0,0.022,0.018,0.022,0.018
                c0.935,0.52,1.877,0.979,2.828,1.385c0.061-14.148,0.769-30.356,8.747-41.641C855.917,254.975,848.737,248.601,839.941,247.239z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Dunav është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Tunaj. Vendbanimi Dunav është i vendosur në Malet e Karadakut, i themeluar para 220 viteve. Ky vendbanim gjendet ne te majtë te rruges per komanvë ky fshat gjendet i rrethuar nga me malet e karadakut në të kater anët, njeherish ka pozit te mir gjeografike është vijë kufitare ne dy shtete me atë te serbis dhe me atë te maqedonis, kjo pozitë bën qe Dunavi te jetë vendë lidhes me vendet fqinjë gjithashtu ka shërbyer rrugë lidhese me luginen e presheves. Pozita e mirë gjeografike bën qe ky vend te ketë kushte per zhvillimin e buqesis dhe sidomos zhvillim për degen e blegtoris. Dunavi ësht themeluar para 220 vitëve me ardhjen e familjeve: Selimi,Ferati dhe Dema, prej te cilave u themelua nje fshatë,para ardhjeve te ketyreve familjeve nuk kishte banor te tjerë.Dunavi ne kohen kur ishte i populluar kishte përafersisht 50 shtepi prej te cilave kan mbetur pak ne ditet e sotme pas luftes se fundit ne kosov ky fshat ka vetem nje shtëpit te banuar. Sot ne Kosovë ka shum njerzë te këti fshati duke jetuar ne vende te ndryshem si ne : Zheger,Gjilan,Kabash,Drobesh,Viti,Ferizaj,Prishtin,Kumanov etj. Arsimimi ne dunav u bë si ne shumë fshatra te kosoves fillimisht ne shtepi te konvertuara ne shkolla dhe me von u hap shkolla e par ne këtë fshat.Ne dunav ekzistojne monumente kulturore vet stili i shtepive te ndertuara ne dunav e pershkruan këtë me se miri, gjitashtu ekziston nje monument apo nje kryeveper kulturore(fetare) është kisha katolike Shen Anes  e ndertuar ne vitin 1939, ku nga ky vit deri ne ditet e sotme vazhdon te jetë dhe te mbet kisha e vetme ne karadak dhe ne rajonin e Gjilanit. Gjithashtu gjendet edhe Xhamija e cila momentalisht është e rrënuar. Dunavi (Tunaj) ësht themelu para 220 vitëve me ardhjen e familjeve: Selimi,Ferati dhe Dema, prej te cilave u themelua nje fshat,para ardhjeve te ketyreve familjeve nuk kishte banor te tjerë. Dunavi ne kohen kur ishte i populluar kishte përafersisht 50 shtepi prej te cilave kan mbetur pak ne ditet e sotme pas luftes se fundit ne kosov ky fshat mbeti i braktisur pa asnje banor. sot ne Kosov ka shum njerz te këti fshati duke jetuar ne vende te ndryshem si ne : Zheger,Gjilan,Kabash,Drobesh,Viti,Ferizaj,Prishtin,Kumanov,Kojnare,Preshev në Evropen perëndimore deri në Ameriken e largët.  "'
 id="Dunav" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M827.063,681.222
                c3.467,3.665-0.225,7.691,0.495,11.686c0.766,4.234,1.671,6.05,6.271,6.464c7.567,0.684,9.349,4.777,5.188,11.065
                c-1.692,2.558-0.726,5.307-1.588,7.938c-3.204,9.792-9.693,16.72-18.39,21.593c-4.53,2.537-7.139,7.058-11.498,9.793
                c-1.627,1.021-2.749,4.696-4.78,4.548c-3.773-0.277-7.737,0.314-11.405-1.351c-2.44-1.11-5.018-1.917-7.532-2.86
                c-3.324-6.771-7.353-13.295-9.791-20.37c-3.342-9.679-6.628-19.055-15.812-24.875l0.061,0.05c-0.279-0.271-0.559-0.543-0.837-0.819
                c-0.13-0.314-0.363-0.469-0.703-0.467l-0.219-0.284c-1.227-1.783-2.393-3.669-5.055-3.129l0.031,0.041
                c0.349-1.218-0.034-1.626-1.244-1.132l0.006,0.007c0.426-1.218,0.031-1.61-1.188-1.188v-0.003
                c-1.803-7.169-5.991-13.136-10.302-19.611c5.317-1.211,9.292-3.547,10.854-8.772c0.215-0.726,1.524-1.126,2.328-1.675
                c12.271-3.998,11.169-7.009,19.126,3.514c3.351,4.435,7.824,4.085,12.361,1.745l-0.111,0.063c5.772-1.389,11.353-1.31,16.469,2.209
                c3.953,2.323,9.313,1.804,12.296,6.086C817.129,683.972,822.102,682.956,827.063,681.222z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Stançiçi është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Stanaj. Fshati është pranë burimit të Lumit të Karadakut. I themeluar 250 vjet më parë nga familja e Dabajve, ai është i shpërndarë në lagje sipas familjeve. Stançiçi i komunës së Gjilanit meriton të vihet në spikamë. Është toikonim që për rrënjë ka fjalën stan dhe prapashtesat -(ç)iq. Ai shtrihet në lindje të Moravës, nja 9 kilometra larg Gjilanit, i banuar me popullatë etnike shqiptare. Fjala stan, që sipas disave ka prejardhje sllave, shënon objekte për kafshë, që ndërtohen kryesisht jashtë fshati. Serbet të shumtën i quajnë trla, kurse shqiptarët stane. Për këtë rrënjë fjale ka edhe dijetarë të tjerë që mendojnë ndryshe. Filologu serb Milivoj Pavloviç, duke bërë fjalë për vendbanimet Stan, Stance dhe Katun (fjalë Trako-Rumune) në Serbi jugore, thotë se janë emërtime të vjetra dhe i merr për ilire (Pavlović, 1968: 319). Ngjashëm me këtë shprehet historiani dhe gjuhëtari habsburg Konstandin Jireçek, i cili thotë se këto fjalë të fushës blegtorale të ruajtura deri sot janë fjalë të protoshqipes (iliro-shqipes) (Jireček, 1922: 195). Arat te Stani, Arat e rrafshit, Tupani (ka të bëjë me pyellin), Arat e boshnjakut etj. "'
 id="Stanqiq" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M758.22,704.852
                c9.184,5.82,12.47,15.196,15.812,24.875c2.438,7.075,6.467,13.601,9.791,20.37c-1.551,3.727-4.583,4.047-8,3.49
                c-3.074-4.961-7.336-5.938-14.802-3.396c-2.751,1.969-6.348,1.061-9.288,3.236c-3.99,2.957-6.589,5.656-6.508,11.269
                c0.153,10.455-9.286,16.935-19.393,14.1c-1.507-0.421-2.991-0.916-4.488-1.375c0.895-4.854,0.074-9.459-1.988-13.89
                c-0.022-3.122-0.047-6.242-0.067-9.364c0.595-5.262-1.683-9.818-3.567-14.471c2.404-9.43,1.822-10.504-7.279-14.294
                c-5.517-2.302-6.326-6.563-4.461-11.678c1.762-4.832,0.438-5.771-4.779-6.071c-4.237-0.24-7.861,2.428-11.94,1.202
                c-0.367-3.88,0.882-7.771-0.13-11.642c0.184-11.205,6.939-18.905,18.063-20.591c1.572-0.168,2.468,0.946,3.516,1.818
                c5.053,4.212,10.68,5.078,17.021,3.394c11.52-3.062,11.575-2.956,17.726,7.693c0.762,1.319,1.365,2.848,1.578,4.343
                c0.354,2.492,1.397,3.996,4.042,4.057c0,0,0,0.003,0,0.007c-0.164,0.955,0.28,1.297,1.188,1.185c0,0-0.006-0.007-0.006-0.002
                c-0.118,0.959,0.381,1.244,1.244,1.127c0,0-0.031-0.041-0.031-0.037c0.885,2.337,2.285,3.84,5.055,3.125l0.219,0.284
                c-0.004,0.3-0.009,0.598-0.013,0.89c0.239-0.138,0.478-0.28,0.716-0.423c0.278,0.276,0.558,0.548,0.836,0.819
                c-0.356,0.176-1.04,0.211-0.371,0.842C758.012,705.444,758.116,705.148,758.22,704.852z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Zhegoc është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrat Zogaj dhe Zhegos.  "'
 id="Zhegoc" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M333.507,116.653
                c1.599-2.406,3.178-4.824,4.799-7.215c1.759-2.596,3.538-4.924,6.695-1.407c0.516,0.575,1.982,0.913,2.683,0.611
                c6.768-2.921,10.247,0.347,12.417,6.877c3.67-3.468,7.753-4.843,12.473-3.607c-0.114,1.348-2.447,0.177-2.189,2.38
                c3.356-1.464,8.441,0.979,9.313-5.07l-0.021,0.019c0.646-0.336,1.43-0.535,1.912-1.03c4.857-4.993,5.058-4.893,8,1.586
                c0.708,1.563,0.978,3.873,3.418,4.176l-0.014-0.026c0.367,1.502,0.781,2.995,1.094,4.507c0.885,4.299,2.483,6.789,7.12,3.362
                c1.479-1.091,3.768-1.354,4.932,0.117c2.4,3.035,5.346,1.636,8.152,1.661l-0.042-0.018c0.446,3.387-1.615,7.708,3.487,9.361
                c0.418,1.092,0.837,2.18,1.257,3.27c-3.487,2.54-1.27,8.769-6.552,10.204c-0.087,0.025-0.11,1.178,0.174,1.547
                c4.802,6.259,0.216,9.501-4.035,12.939c-1.521,1.232-3.5,2.697-3.13,4.758c1.122,6.242-3.989,10.017-5.605,15.151
                c-0.692,2.199-2.626,2.771-4.755,1.266c-1.437-1.015-2.929-1.954-4.396-2.928c-3.743-3.381-8.846-3.34-10.945,0.762
                c-1.479,2.891-3.757,3.545-6.19,4.53c-0.625-0.118-1.252-0.234-1.879-0.352c-0.392-2.895-2.652-2.254-4.478-2.312
                c-4.498-0.141-8.993,1.515-13.497,0.034l0.056,0.007c-0.591-8.815-3.486-12.823-9.458-13.104c-4.869-9.304-9.427-18.75-13.176-28.57
                c0.612-6.691,1.225-13.384,1.837-20.076C333.146,118.926,333.326,117.79,333.507,116.653z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Llashtica është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrat Lashtizë dhe Llashtisht. Toponimi Llashticë < (V)llashticë është i lidhur me termin Vllah, një fjalë e përdorur për arumunët (vlleh). Vendbanimi është i vendosur rrëzë Maleve të Karadakut përgjatë lumit të Llashticës. Vendbanimi është i tipit të dendur dhe formë të zgjatur. Në fushën e këtij katundi gjenden vorret pagane ilire të vjetra disa qindra vjet para Krishtit. Këto janë tumat ilire të cilat banorët e këtij katundi i quejnë gomure, ato janë gërrmue e hulumtue nga arkeologët tanë. Në Llashticë janë gjetur veglat e fisit Ilir qe quhet Dardania. Gur i gdhendun që ishte pjesë e ndonji vegle të punës, guri i gjetur në vendin e quejtun Dardhankodër të ketij katundi rreth 150m në juglindje të shtëpisë sime ose 300-400m në veriperëndim të shkollës. Në vitet 80 të sh. XX jane dorëzue arkeologëve në Prishtinë nje myhyr (vulë) të kryeplakut të katundit (miftar), monedhë bronzi të kohës romake gjetje te Kështjella e Govenit (Kalaja e Pogragjës) kështu duhet të emërtohet ky kompleks historik, arkeologjik e turistik e jo turqisht e sllavisht[4]. Në këtë katund, më randësishme për arkelogjinë e historinë tonë janë ruejtun nga mosnjohja e mosdija e vleftës së tyte. Gjetura monedha të kohës romake, turke etj., kam gjetun disa herë ogroshakë të gurit për bosht, tjerrje, plumba e fyshekë të ndryshëm, etj. Nga kërrshëria që kam për këtë lami kam mbledhun shumë gjana tepër të vlefshme dhe i kam piketue vendet ku arkeologët në të ardhmen duhet ta bajnë punën e tyne. Nji qyp u gjet në vendin e quejtun Gradina (sllavisht) në yrtin e Fehmi F. Rashitit, disa copa të këtij qypi më kanë humbun gjatë 1999, me rastin e damtimit të shtëpise, bashkë me shumë gjana të tjera e ma së shumti më dhimbet nje terrakotë (statujë), vetëm koka e nji burri e gjetun në katundin Zllatar. Një vorbë (e zbrazët) u gjet në fund të Lugut të Shtrembët në qoshe kah Zabeli i Shimës, në rreze, aty shihen disa gropa ku fëmijët kanë nxjerr botë (allçi e kuqe). Të bijtë e Sylë Veli Canës gjetën nji votër të tanë; gurët e oxhakut, copa çeramike, nji gur mullini të dorës, etj. në shpat te Lug Gërrzhit (Lugu i Gërrgës, Gregorit) në verilindje të katundit. "'
 id="Llashtic" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M663.771,461.765
                c-2.128-5.074-2.771-10.771-6.385-15.227c-1.466-4.328-5.094-6.805-8.281-9.657c-0.352-0.303-0.701-0.604-1.055-0.904
                c1.511-1.156,3.238-1.644,5.113-1.67c0.424,1.647,1.528,2.146,3.045,1.635c1.445-0.486,1.354-1.779,1.14-2.92
                c-0.489-2.604-1.537-4.71-4.757-4.425c-0.366-0.338-0.73-0.678-1.098-1.018c-0.746-5.526-2.563-10.026-9.358-9.74l0.063,0.03
                c-0.478-1.351-1.793-1.005-2.761-1.364c-1.782-1.495-2.285-3.45-2.029-5.673c3.871-4.747,7.232-4.807,13.101-1.67
                c6.637,3.547,14.623,4.85,21.35,8.771c11.384,6.642,24.416,5.79,36.724,8.177c3.01,0.585,5.235,1.803,7.662,3.486
                c6.146,4.269,11.174,10.77,19.819,10.393c5.217-0.228,9.201-2.866,12.964-6.077c0.51,0.265,1.036,0.553,1.562,0.838
                c0.195,0.703,0.389,1.406,0.583,2.109c-2.337,3.514-7.414,3.096-9.666,6.733c-0.808,0.049-1.744,0.253-1.614,1.169
                c0.078,0.552,0.854,1.314,1.777,0.661l0.034-0.044c-0.166,1.384,0.202,2.097,1.719,1.36c0.127,0.19,0.28,0.356,0.46,0.497
                c-0.412,2.856,2.208,3.492,3.563,3.157c7.229-1.797,9.75,1.015,8.682,7.98c-0.338-0.466-0.653-0.455-0.871,0.06
                c-0.06,0.146,0.053,0.366,0.087,0.552c0.236-0.239,0.472-0.479,0.708-0.721c0.41,0.028,0.817,0.058,1.229,0.083
                c-1.366,5.526-4.301,10.93-1.337,16.797c-2.655-1.212-2.937-4.464-4.802-5.766c-5.863,4.363-9.308,10.954-15.226,15.162
                c-0.95,0.068-2.172-0.22-2.808,0.266c-3.669,2.797-7,1.864-11.132,0.55c-4.97-1.58-8.87-4.942-14.188-6.236
                c-7.334-1.785-14.484-1.559-21.745-1.905l0.066,0.075c-0.666-0.771-1.329-1.54-1.993-2.309c-0.199-0.492-0.4-0.984-0.602-1.476
                c-0.541-0.798-1.05-1.665-2.251-1.041l0.099,0.037c-3.613-2.885-7.211,2.078-10.822,0.022l0.077,0.079
                c-0.416-2.96-2.858-4.302-4.814-6.032l0.068,0.093c-0.125-0.976-0.3-1.923-1.259-2.472l0.082,0.104
                C664.388,463.453,664.079,462.608,663.771,461.765z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Gadishi është një vendbanim në komunën e Gjilanit, Kosovë. - Në vitet e 80ta mendohet të ketë pasur rreth 500 banorë por për shkak të kushteve ekonomike: zhvillimi i energjetikës, asfaltimi i rrugës, mungesa e institucioneve publike, etj. Banorët mirgojnë pothuajse 60% e tyre rreth qytetit të Gjilanit dhe Lipjanit. Në ditët e sotme shumica e popullatës janë larguar dhe janë të paktë ata që japin fryte bujqësore për të tjerët . Mendohet që në ditët e sotme të ketë të banuara rreth 20 shtëpi me rreth 60 banorë. - Fshati Gadish gjendet në pjesën veri-perëndimore të qytetit të Gjilanit , kufizohet për rreth me fshatrat e tjera si: Zhegocin,Kishnapolën, Gumnishtën. Gadishi ka qenë fshat i banuar qysh në vitet e para të shek. XX . - Mendohet që gjatë viteve të 50 ta të jetë ndërtuar Shkolla e Parë, por pas dëmtimeve të shumta fshatarët bashkë me organin drejtues komunal të ndërtojnë objektin e ri shkollor në hyrje të fshatit SHF Afërdita pasi që e vjetra ishte brenda në fshat. Fshtai gjatë viteve 80ta kishte diku rreth 50 shtëpi. Gadishi gjendet gjatë kilometrit të 8 të magjistrales Gjilan-Gadime-Lipjan.  "'
 id="Gadish" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M371.679,184.084
                c0.626,0.118,1.253,0.234,1.882,0.352c2.146,1.048,4.317,1.715,6.136-0.491c1.158-1.406,1.376-3.706,3.813-3.835
                c2.831,0.659,4.858,3.537,8.141,2.946l-0.095-0.097c-0.421,1.383,0.72,1.081,1.39,1.288c1.735,1.099,2.511,2.37,2.199,4.703
                c-0.476,3.541-0.112,7.118,3.454,9.323c0.645,4.173,0.949,8.323-0.886,12.317c0.938,8.406-0.9,16.72-1.543,25.007
                c-0.554,7.134,1.622,11.004,7.477,13.793l-0.106-0.109c4.438,4.316,9.864,5.443,15.626,4.062c3.911-0.938,5.916,0.112,6.533,3.953
                c0.84,5.23,4.021,10.134,1.736,15.833c-0.649,1.622-0.748,4.29,1.236,5.397c7.133,3.974,7.489,12.181,11.61,18.008
                c-4.447,2.453-7.8,6.763-13.114,7.737c-1.576-0.479-3.153-0.956-4.729-1.433l0.063,0.065c-2.357-4.76-4.978-9.789-10.753-10.33
                c-3.184-0.299-4.669-0.586-4.919-3.902c-0.197-2.638-4.239-5.156-2.302-7.299c4.531-5.009-0.829-5.489-2.737-7.609
                c-1.219-2.273-1.51-6.129-5.201-5.127c-4.939,1.341-9.598-0.67-14.386-0.248l-0.029-0.017c-0.662-2.78-2.97-2.135-4.769-2.098
                c-4.289,0.09-8.569,0.503-12.857,0.617c-2.83,0.074-5.856-0.893-5.041-4.209c1.187-4.831-0.767-8.609-2.515-12.623
                c0.027-1.126-1.655-2.687,0.886-3.171c1.256-0.238,3.745,0.754,2.986-1.984c-0.504-1.814-2.235-2.739-4.253-1.915
                c-3.038,1.245-3.408-0.361-3.117-2.777c-2.234-5.642,0.398-12.188-3.274-17.617c-0.383-0.564-0.004-2.05,0.51-2.746
                c2.431-3.273,1.831-8.013,5.494-10.75c1.572-1.174,0.565-2.56-0.637-3.929c-3.444-3.926-4.556-8.879-5.468-13.864
                c4.817-0.178,4.654-3.672,4.687-7.038C360.43,184.123,366.101,188.421,371.679,184.084z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Kishnapoli është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Shpal."'
 id="Kishnapol" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M353.494,240.21
                c-0.291,2.416,0.08,4.022,3.117,2.777c2.018-0.824,3.749,0.1,4.253,1.915c0.759,2.738-1.73,1.746-2.986,1.984
                c-2.541,0.484-0.859,2.045-0.884,3.171c-0.554,0.157-1.448,0.15-1.613,0.495c-1.985,4.126,0.887,15.205,4.697,17.445
                c1.536,0.903,1.042,1.713,0.721,2.778c-2.514,0.552-5.028,1.104-7.542,1.656c-0.391-0.462-0.782-0.924-1.173-1.387
                c-2.868,0.229-3.679,3.553-6.285,4.172c-1.307-3.679-1.475-3.716-3.991-0.86l0.063-0.049c-2.589,0.895-5.384,0.807-5.253,5.323
                c0.078,2.695-1.849,6.84-6.682,5.51c-1.93,0.964-3.86,1.929-5.791,2.894c-3.132,1.864-6.402,0.652-9.628,0.427l0.134-0.054
                c-0.786-1.132-1.544-1.836-3.232-1.949c-7.039-0.47-14.89,1.023-19.42-6.706c-1.36-2.32-3.137-0.091-4.634-0.609
                c1.065-15.901-0.202-32.1,7.129-47.127c2.694-5.521-3.321-6.679-6.108-8.382c-3.776-2.308-5.344-5.63-5.73-9.18
                c-0.429-3.929,2.29-6.172,6.496-5.297c10.792,2.245,21.647,3.613,32.66,2.238c4.842-0.604,9.793-1.155,14.392-2.659
                c3.74-1.224,3.914-5.996,6.247-8.843c1.702-2.076,2.487-4.892,4.769-6.607c5.282,8.039,6.286,16.231,2.09,25.256
                c-3.273,7.034,1.602,13.763,2.154,20.705C351.491,239.62,352.787,239.892,353.494,240.21z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Shurdhani është një vendbanim në komunën e Gjilanit, Kosovë. Fshati shtrihet 21 km në jug të Gjilanit, gjendet mu në Grykë të Karadakut. Është i njohur për livadhet që duken si ballkone në mal. Jo rrallë gjatë verës ky fshat vizitohet turistë vendor jo vetëm përshkak të natyrës së bukur por për burimin e tij të vogël termal i cili gjendet mu buzë rrugës magjistrale që të shpije në kufi me Maqedoninë, pika kufitare Ballanoc. Shurdhani – është fshat i komunës së Gjilanit, nja 10 km larg qendrës komunale. Për etimologjinë e këtij oikonimi nuk kemi të dhëna gjuhësore e as arkeologjike, porse nga hetimi ynë del se ka një emërtim me origjinë shqipe. Besohet se toponime të këtij tipi dalin të përmenden, sipas interpretimeve të deritashme, edhe në antikë. I këtillë do të ishte toponimi Sarda të cilin Fr. B. Nopça (Nopça, nr. 43,1911: 918), e konsideron të vazhduar nga shqiptarët në trajtën Shurdhah, ndërsa te emri Sarda gjente një fjalë ilire – trakase. Këtë tezë të Nopçës (Nopseas) e përtriu tani vonë David Luka (Luka, 1972: 134), i cili konsideron po ashtu se emri i sotëm Shurdhah-u (toponim në lindje të Shkodrës) koincidon me emrin ilir të antikës Sard/os : Shurdh/ah dhe me emrin ilir të fisit Sardeates të Dalmacisë. Këtë tezë D. Luka e arsyeton me shndërrimin përmbrenda shqipes të grupit konsonantik (s : sh, rd > rdh). Errësimi i a-së në ë e pastaj në u si refleks i vonë, ka ndodhur për punë të lëvizjes së theksit. Toponimi Shurdhan i anës së Gjilanit, në mungesë të materialeve të shkruara, nuk mund të dihet a ishte i banuar në antikë, andaj s’mund të dihet a në mos quhej edhe ky ndoshta Sarda, porse dihet se kështu si është sot, është emërtim shqip dhe nëse nuk është vazhdim shqiptar i ndonjë toponimi antik, atëherë është toponim që shkon me grupin e toponimeve të emërtuar në bazë të ndonjë vetie të ndonjë apo të banorëve, si bie fjala katundi Rrenc në anë të Opojës. Se ky toponim nuk mbetet i vetmuar për nga tipi, dëshmon edhe rrethana se në Serbinë Jugore ekziston toponimi Surdulica, i cili është, siç thotë Petar Skok e të tjerë, toponim arumun i cili ka vlerën kuptimore të shqipes Shurdhan. Edhe fshatrat Stançiq dhe Stani. oponimet më karaktristike: Hija, Kodra e Gatë, Kodra e Djegme, Kodra e Arrrave, Balltaku, Guri i llatinit, Te Purrit, Shpati i Vogël, Shapti i Madh, Plepishta, Lugi i Madh, Vrella, Madeni, reka e Madenit, Dabidigi, Guri, Stanit të Moçëm, Kodra e Katunit, Arat e Gurit, Mrizet, Roga e Fejzës, te kisha, te Vorret, Guri i Ostrovicës.[2] Toponimi Shurdhan i anës së Gjilanit, në mungesë të materialeve të shkruara, nuk mund të dihet a ishte i banuar në antikë, andaj s’mund të dihet a në mos quhej edhe ky ndoshta Sarda, porse dihet se kështu si është sot, është emërtim shqip dhe nëse nuk është vazhdim shqiptar i ndonjë toponimi antik, atëherë sipas është toponim që shkon me grupin e toponimeve të emërtuar në bazë të ndonjë vetie të ndonjë apo të banorëve, se ky toponim nuk mbetet i vetmuar për nga tipi, dëshmon edhe rrethana të tjerë, toponim arumun i cili ka vlerën kuptimore të shqipes Shurdhan. Të etimonit tonë janë edhe toponimet Shurdhani i Gjilanit, që lidhet me toponimin Sarda “Shurdhah”; fshati Vęrnez i Vitisë, me prejardhje ilire, ashtu si edhe fshatrat tjera nga Vitia e Gjilanit."'
 id="Shurdhan" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M812.095,681.483
                c-2.983-4.282-8.343-3.763-12.294-6.082c-4.006-8.899-8.765-9.539-16.471-2.214l0.111-0.063c-6.499,0.104-12.182-1.386-14.477-8.368
                c-1.887-5.733-6.581-4.177-9.515-2.718c-2.699,1.344-5.775,2.176-8.239,4.063c-3.02-0.629-4.61,1.163-5.896,3.475l0.078-0.074
                c-4.562,0.829-6.061,5.529-9.626,7.619c-2.181-0.03-4.188,0.729-6.272,1.229c-8.232,1.971-16.377,2.86-23.017-4.179
                c-3.002-3.968-0.756-8.527-1.438-12.756c0.363-0.151,0.731-0.303,1.098-0.452c4.611-0.692,5.792-4.005,6.104-7.982l-0.037,0.045
                c1.092,0.141,1.029-0.607,1.019-1.32c0.425-0.438,0.851-0.876,1.272-1.314c3.128-5.599,7.872-9.975,14.222-8.975
                c5.458,0.859,6.771-3.184,8.954-5.498c1.996-2.11,1.165-5.916-1.22-8.578c-1.69-1.888-3.215-3.923-4.812-5.892
                c1.038-0.705,2.077-1.409,3.117-2.116c4.964,0.64,9.773,0.253,14.277-2.161c7.476,2.278,13.793,0.463,20.14-4.141
                c3.22-2.337,7.698-3.549,11.679-4.764c6.347-1.936,10.743,1.411,11.821,8.977c1.117,7.847,2.121,15.833-0.03,23.738
                c-2.85,0.729-2.636,4.015-1.686,4.525c2.493,1.345,2.319,6.033,6.413,5.021c6.675,4.48,10.619,11.719,16.842,16.651
                c0.894,1.297,1.569,2.928,3.665,2.314l-0.021-0.023c0.627,4.979,6.418,5.206,8.308,9.026l0.401-0.004c0,0,0.088,0.392,0.087,0.396
                C822.02,680.985,816.936,680.551,812.095,681.483z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Sllakoci i Epërm është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Malmir i Epërm. "'
 id="Sllakovc_i_eperm" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M426.083,306.107
                c1.803,4.688-0.288,8.813-5.678,10.888c-2.33,0.896-4.739,1.63-7.164,2.225c-3.212,0.79-5.256,2.143-5.03,6.007
                c0.169,2.888-1.035,4.731-4.691,4.979c-10.078,0.684-19.674,4.235-29.23,6.972c-8.06,2.309-17.023,4.445-22.915,12.183
                c-3.211,4.217-11.331,3.813-16.226,0.201c-6.489-4.793-12.601-9.982-16.28-17.418c2.851-3.847,0.559-9.341,4.146-12.954
                c0.065-0.204,0.061-0.408-0.015-0.609c0.23-0.901,0.425-2.748,1.143-2.321c4.222,2.513,5.99-1.552,8.411-3.13
                c2.084-1.358,4.104-3.785,6.389-2.559c2.331,1.25,3.093,4.175,3.113,7.141c0.04,6,6.419,9.904,11.853,7.459
                c5.834-2.624,9.246-9.218,8.344-16.266c-0.213-1.657,0.896-4.438-2.699-3.65c-0.615-1.894-0.184-4.294-2.577-5.33
                c0.736-1.736,2.174-2.536,3.916-2.928c3.134-1.252,6.701-2.376,2.401-6.382c-2.099-1.957-2.82-4.593-3.796-7.118
                c0.858-3.866-1.282-8.092,1.412-11.737c6.805-2.908,13.897-4.018,21.266-3.389l0.029,0.017c3.595,1.625,7.053,3.704,11.229,3.427
                c2.549,1.685,5.1,3.37,7.649,5.056l-0.087-0.113c-0.274,1.135,0.165,1.562,1.294,1.298l-0.125-0.103
                c-0.075,0.151-0.243,0.332-0.207,0.45c0.086,0.27,0.27,0.511,0.413,0.765c-0.821,1.736-2.116,2.477-0.73,5.522
                c2.58,5.675,4.538,10.622,11.484,11.775c1.342,0.222,2.753,1.81,3.989,3.087c1.376,1.42,2.611,3.881,5.388,3.351
                c0,0-0.064-0.065-0.064-0.063C422.054,305.709,423.966,306.021,426.083,306.107z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Uglari është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Margesh. Gjendet 5 kilometra larg qendrës komunale të Gjilanit. Uglarë është vendosur në dy anë e lumit Morava e Binçës, në skajin jug-lindor të Fushës së Gjilanit. Uglarë ka 250 shtepi te banueshme dhe ka dikun rreth 1500 banorë . Demografia e fshatit Uglarë perbehet prej 1500 banorëve ku 100% jan shqipetar dhe ka disa lagje.  "'
 id="Uglar" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M762.784,340.059
                c1.261-6.323-2.438-9.426-5.608-13.264c-5.881,4.146-8.785-1.546-12.714-3.847c-1.212-1.174-2.424-2.35-3.637-3.522
                c-5.317-0.854-6.778-1.963-8.526-5.936c-0.514-1.164-1.573-2.089-2.384-3.123c-1.804-0.961-3.246-0.089-4.66,0.922
                c-3.379,3.12-4.479,8.108-8.657,10.56c-0.253,0.094-0.522,0.161-0.801,0.203c-0.635,2.656-1.941,2.6-3.632,0.991
                c-1.141-0.086-2.654,0.261-3.354-0.341c-3.869-3.318-8.407-4.82-13.313-5.544c-0.723-0.07-1.444-0.141-2.166-0.211
                c-2.646,3.467-3.065-1.651-5.471-1.492c-3.481,0.229-6.725,1.896-10.231,1.406c-1.444,0.174-2.891,0.348-4.337,0.521
                c-2.73,3.441-0.928,5.756,2.073,7.496c4.447,2.576,6.005,6.491,5.815,11.37c1.076,0.398,1.841,1.088,2.093,2.254
                c1.693,2.642,2.127,6.279,7.225,5.12c2.74-0.623,6.841,1.487,7.908,4.306c3.597,9.484,10.596,15.979,17.873,22.362
                c0.421,0.368,1.165,0.447,1.455,0.87c5.205,7.577,5.179,7.548,13.358,4.07c7.114-3.025,14.085-4.269,20.194,2.189
                c1.366,0.182,2.742,0.408,3.706-0.959c0.236-1.938,3.407-3.049,2.295-4.956c-4.665-8.011-0.607-13.438,4.729-18.929
                C765.743,348.746,762.007,343.959,762.784,340.059z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Livoçi i Epërm është një vendbanim në komunën e Gjilanit, Kosovë. Fshat i tipit të shpërndarë, që shtrihet rreth 2km në perëndim të Gjilanit. I ndarë në lagje të tipit të grumbulluar, të cilat shtrihen në pjesën fushore dhe kodrinore. Livoçi i Epërm shtrihet buzë lumit të Livoçit (Bresalcit) në perëndim të Gjilanit. Vendbanim mjaft i vjetër iliro-dardan. Këtë e dëshmojnë varrezat ilire, mbi fshat, pusi (bunari) i ilirëve në vendin e quajtur Kalidha. Popullsia janë familje të ardhura nga fshatrat e tjera si nga Karadaku, Shpali (Kishnapola), Lisocka, Meshina, Temali (Kranidelli), Kreshta (Velegllava), Gadishi, etj. Sipas regjisitrimit të vitit 1981, ishin 191 shtëpi me 1295 banorë (1056 shqiptarë, 239 serbë). "'
 id="Livoq_i_eperm" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M506.38,257.817
                c5.487-1.704,9.746-5.324,14.262-8.566c1.594-1.144,2.898-2.49,4.797-0.07c7.402,9.447,16.687,11.13,27.183,5.747
                c7.045-3.613,12.789-0.663,18.572,2.889c-0.571,1.175-2.02,2.552-0.409,3.627c6.362,4.249,5.246,10.837,6.167,17.089
                c0.962,6.515-0.213,13.919,5.284,19.167c3.119,2.977,3.965,6.045,1.711,9.809l-0.024,0.025c-2.242,0.268-4.655,0.29-4.878,3.429
                l0.028-0.032c-3.202,0.795-5.124,2.849-5.907,6.019l0.024,0.005c-1.272-0.479-1.668-0.084-1.188,1.188l0.014-0.027
                c-2.798,0.075-5.392-1.635-8.26-0.95c-5.77-0.325-9.628-3.986-13.766-7.454c-2.938-2.461-6.18-7.104-10.469-1.422
                c-2.646,1.252-4.144,4.773-7.832,3.961l0.098,0.089c-1.827-3.56-3.384-7.299-5.581-10.615c-1.406-2.123,1.241-5.663-2.6-6.658
                c-1.172-4.195-3.755-7.915-4.177-12.359c-0.328-3.466-4.431-2.731-5.686-5.152c-2.358-6.978-5.813-13.088-12.916-16.309
                c0,0,0.055,0.063,0.056,0.063c0.017-2.28-1.827-0.839-2.697-1.348c-4.429-1.847-3.949-5.917-4.349-9.59" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Livoçi i Poshtëm është një vendbanim në komunën e Gjilanit, Kosovë. Livoçi i Poshtëm ka afërsisht 350 shtëpi dhe diku rreth 4500 banor. Fshati Livoç i Poshtëm shtrihet në jug-perëndim të qytetit të Gjilanit. Shtrihet në dy anët e rrugës magjistrale Gjilan-Ferizaj. Ne Livoç të Poshtëm punon shkolla fillore Dëshmorët e Kombit. Në këtë shkollë janë rreth 500 nxënës të fshatit përfshirë edhe muhaxheret. "'
 id="Livoq_i_Poshtom" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M539.523,308.289
                c4.291-5.682,7.53-1.039,10.469,1.422c4.138,3.468,7.996,7.129,13.765,7.454c-0.492,2.514-3.795-0.041-4.706,3.504
                c4.663-0.833,9.104,0.806,12.966-2.554l-0.014,0.027c0.931,0.139,1.326-0.256,1.188-1.188c0,0-0.024-0.005-0.023-0.005
                c3.294-0.705,5.214-2.757,5.906-6.019l-0.028,0.032c2.002-0.606,4.679-0.255,4.878-3.429l0.024-0.025
                c3.384,0.322,4.813-2.324,5.815-4.59c2.349-5.302,6.631-8.509,11.115-11.649c2.691-1.885,3.515-0.443,4.103,2.045
                c1.637,6.911-0.72,16.489,11.225,16.671c1.17,0.017,2.304,2.358,3.455,3.622c0.052,0.352,0.106,0.702,0.167,1.05
                c-2.801,9.44-2.656,9.641,6.903,9.5c1.177-0.017,2.354-0.033,3.53-0.049c0.177,2.123,2.52,3.925,0.748,6.361
                c-1.584,2.179-0.406,4.043,1.048,5.77c-0.139,0.688-0.275,1.38-0.412,2.063c-0.571,0.964-2.363,2.188,0.514,2.431
                c0.338,0.447,0.678,0.896,1.018,1.346c-0.392,2.816,1.414,6.625-4.486,6.264c-2.644-0.161-1.158,2.308,0.368,3.398
                c0.019,0.71,0.035,1.419,0.05,2.13c-6.971-2.337-10.533,3.486-15.367,6.35c-5.972,3.538-9.958,4.84-13.188-2.912
                c-0.214-5.013-0.342-10.094-7.59-9.467c-0.365-0.092-0.573-0.324-0.624-0.697c0.078-1.181,0.068-2.135-1.336-2.799
                c-8.506-4.026-16.804-3.007-25.039,0.781c-1.57-0.438-3.139-0.875-4.71-1.314c-0.656-3.22-3.34-3.57-5.865-4.145l0.016,0.013
                c0.086-0.888-0.358-1.245-1.203-1.202l0.019,0.018c0.043-0.846-0.327-1.279-1.204-1.203l0.029,0.028
                c-2.119-3.796-5.85-5.447-9.535-7.159l0.022,0.023c-0.84-3.563-1.701-7.115-4.725-9.604l0.063,0.079
                c-0.407-0.529-0.815-1.057-1.225-1.587c-0.375-0.491-0.75-0.983-1.122-1.469c-1.177-2.662,0.854-4.079,2.151-5.877
                C539.342,310.808,541.811,310.031,539.523,308.289z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Stublina shtrihet rreth 20 km në lindje të Gjilanit. Fshat kodrinoro-malor. Në lindje kufizohet me fshatin Dobrosinqë është i banuar krejtësisht nga shqiptarët edhe që është nën administrimin e Serbisë, në perëndim me fshatin Pogragjë, në jug me fshatin Bilinicë, e në veriperëndim me Ranillugin fshat i banuar me popullatë serbe.Stublina si vendbanim është krijuar në vitin 1878 nga refugjatët (Muhaxhirët) nga Jabllanica. Në Stublinë janë vendosur familjet Bublic nga Stublla e Jabllanicës dhe Dediqët nga Medvegja. Poashtu jetojnë edhe Dubovët te ardhur nga Medvegja si dhe Huruglica që kanë ardhur nga komuna e Leskovcit, Jabllanica.Lagjet: Dediqi, Rakovica, Dubova, Bublica, Mollova, Huruglica. Këtu janë edhe Stubllakët dhe Bogujevcët. )Mikrotoponimet më karakteristike: Burution, Prrojet e Tamocit, Te Lugi Salihit, Lugi Mollës, te Pusat e Demës, Te Krojt e Mehmetiti, Grahecë, Prroi i dardhës, Arat e Jezerit, Arat e Demës, Xhexhemihane."'
 id="Sllubic" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M842.64,400.272
                c0.125,0.318,0.267,0.632,0.421,0.938c0.782,3.423,3.063,4.81,5.586,2.317c3.486-3.443,7.049-2.24,10.649-1.256
                c3.734,1.02,7.359,2.467,10.988,3.842c4.6,1.748,9.837,2.619,10.98,8.883c0.318,1.734,2.498,2.686,4.188,2.759
                c2.262,0.099,3.402,0.9,4.538,2.866c1.043,1.812,3.119,3.142,5.42,2.984c2.951-0.197,4.703,1.504,6.467,3.372
                c-3.813,7.491-8.424,14.674-9.946,23.112c-1.15,6.378-4.533,9.061-11.076,8.266c-6.491-0.786-13.384,1.531-19.436-2.566
                c-0.797-0.538-1.476-1.244-2.208-1.873c-2.269-6.211-7.587-9.223-12.876-12.266c-0.307,0.015-0.607-0.021-0.904-0.101
                c-0.651-1.08-1.303-2.161-1.953-3.239c-0.984-4.169-3.909-7.698-3.995-12.161c-1.625-6.359-3.251-12.719-4.88-19.076
                C833.501,400.341,838.064,400.297,842.64,400.272z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Kmetoci është një fshat i cili shtrihet rreth 7km në verilindje të Gjilanit.Është vendbanim kodrinor dhe fushor i ndarë në lagje. Fshati është vendosur në rrafsh, në luginën e lumit të Përlepnicës, në afërsi të grykës së Dobërçanit. Në lokacionin Qeramidica në anën e djathtë të rrugës Gjilan-Dardanë,gjendet një numër i madh i tegullave dhe sipas fragmenteve të tzre janë qeramikë e kuqe e pjekur.Në bazë të këtij materiali mund të supoyohet se është në pyetje një vendbanim i antikës së vonë.Poashtu në këtë fshat ekyistojnë varreya të vjetra të quajtura Romake në vendbanimin Shavarina. Në vitin 1897 kishte 30 shtëpi serbe e 15 shqipëtare.Në vitin 1903 21 shtëpi serbe por ka pasur edhe shqiptarë.Në vitin 1911 26 shtëpi serbe me nacionalitete shqipëtare.Sipas regjistrimeve zyrtare në vitin 1913-307 banorë.Regjistrimi i vitin 1921-46 shtëpi me 281 banorë.Kurse pas regjistrimeve të vona para luftës në Kosovë në fillim të vitit 1999 ishin regjistruar 79 shtëpi me 675 banorë shqipëtarë 90 shtëpi me 540 banorë serbë dhe 3 shtëpi me 14 banorë romë.Kurse gjatë agresionit policoro-ushtarak serbë në vitin 1999 u dogjën 33 shtëpi të vrara 2 gra dhe një dëshmor.Popullata e këtij fshati në këtë periudhë u dëbuan në Maqedoni. "'
 id="Kmetoc" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M687.085,194.254
                c0.546-1.369,1.093-2.739,1.64-4.109c1.247-2.065,2.285-3.809,5.501-2.728c2.367,0.797,4.887,1.608,7.346,2.003
                c8.44,1.357,7.426,3.78,13.325-4.704c3.629-5.22,5.232-12.321,12.135-15.262c2.426-1.036,1.467-3.253-0.64-4.527
                c0.091-0.724,0.185-1.449,0.274-2.173c7.955-2.361,16.094-0.754,24.143-1.112c0.479,3.492,4.653,3.724,5.883,6.817
                c0.779,1.966,2.139,3.647,1.79,5.932c0.73,5.577-1.196,11.481,2.052,16.75c0.959,9.918,0.245,19.413-6.897,27.283
                c-3.476-0.588-5.554-3.435-8.305-5.188c-11.754-7.496-15.756-10.057-25.804-0.293c-2.181,2.118-5.771,2.414-8.249-0.881
                c-4.056-5.39-8.245-10.599-16.021-10.207c-1.14,0.058-1.916-0.745-1.77-1.874C694.153,194.883,690.23,195.025,687.085,194.254z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Pidiq është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Pidik. "'
 id="Pidiq" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M726.409,573.428
                c-1.063,1.346-2.671,2.237-2.912,4.253c-0.241,2.011,0.85,2.795,2.378,3.5c1.44,0.663,2.709,0.775,3.373-0.933
                c1.09-2.802,2.686-5.256,6.034-4.15c3.591,1.186,3.839,4.645,3.923,7.857c0.073,2.715-0.453,5.582,2.447,7.333
                c0.895,1.438-2.104,2.674-0.352,4.005c6.502,4.934,5.434,12.777,7.616,19.37c-4.347,2.699-9.765,1.338-14.188,3.74
                c-2.416-0.562-4.938-0.808-7.006-2.387c-0.594-3.868-3.343-3.459-6.18-3.293c-4.167,0.239-7.832,3.312-12.228,2.079
                c-2.616-2.466-6.459,0.574-9.047-2.018c-4.506-0.26-9.012-0.521-14.151-0.815c2.699-4.862,4.18-9.853,5.723-14.827
                c5.666-3.66,8.604-10.176,14.364-13.737c1.007-0.175,2.005-0.515,2.119-1.653c0.102-1.013-0.854-1.402-1.574-1.148
                c-3.586,1.26-6.624-1.521-10.053-1.246l0.028,0.025c-0.733-3.348,4.448-3.925,3.741-5.882c-2.057-5.689,2.901-5.378,5.223-7.587
                c2.618-2.494,5.495-3.252,8.846-3.92c3.76-0.75,7.353-2.406,10.959-3.813c2.039-0.794,1.321-1.982,0.141-3.063
                c0.104-4.609,0.205-9.222,0.311-13.832" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Muqibaba është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrat Babaj dhe Muçaj. Shtrihet thellë në Malet e Karadakut. Vendbanim i tipit të shpërdarë, dhe përbëhet prej disa lagjeve të cilat pothuajse jan të boshatisura. Fshatarët e Muçibabës u detyruan të largohen nga fshati pas konfliktit me ushtrinë dhe policinë serbe. Imer Muqibabaj, dëshmorë i Luftës së Myçiyabës 1945- Në rajonin e Gjilanit në Luftën e Dytë Botërore janë në një numër prej 8 mijë vetash, të cilit ishin ngritur në kryengritje kundër okupuesve të cilët kryenin vrasje, masakrime dhe keqtrajtim të shqiptarëve, derisa për javë të tëra lumenjtë në qytetin e Gjilani kishin ngjyrën e kuqe. Sot na bashkon 70 – vjetori i kryengritjes së madhe e cila jo vetëm në këtë pjesë të Kosovës, në këtë pjesë të Shqipërisë, në thirrjen për atdhe e për zot, u bashkuan burra e gra, për të luftuar pabarazinë dhe okupimin që u vendos. Jam i nderuar që sot në emër të gjithë qytetarëve të Gjilanit dhe në prezencë të përfaqësuesve më të lartë të presidencës së Shqipërisë dhe përfaqësuesve të tjerë, i ngulfatur nga emocionet, ndjenjat dhe respekti për ata që kanë sakrifikuar, që ti respektojmë dëshmorët, familjet e tyre, veteranët dhe të gjithë ata që kanë dhënë mundi, sakrificë dhe gjaku i tyre i njomë e i derdhur është bërë “nuri” – dritë për lirinë e shqiptarëve dhe lirinë e Kosovës. Ai gjak i cili nuk është legjendë, në Gjilan ka mbuluar lumenjtë e qytetit siç ka qenë Mirusha dhe lumenjtë tjerë, sepse për javë të tëra uji ka marrë ngjyrë të kuqe, ai gjak i cili ishte i fëmijëve, grave, burrave, të rinjve e të rejave që janë pushkatuar, masakruar, torturuar e ndëshkuar në mënyrën më të egër, sepse donin që Kosova të mbetet Shqipëri, pse donin që Kosova të ketë plisa të bardhë, pse donte që Kosova të jetë aty ku e ka vendin... me okupim për shqiptarët, andaj për këtë ata u kryengritën që të kenë lirinë. U kryengritën për tu treguar gjeneratave të ardhshme që nuk ka liri, u kryengritën për të dëshmuar qartë që lufta nuk ka përfunduar dhe për të lënë mesazhin me gjakun e tyre në dimrin e ferrit të vitit ’44 – ’45 në Gjilan "'
 id="Mucibab" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M755.94,475.145
                c-2.964-5.867-0.029-11.271,1.337-16.797c1.457-1.604,0.974-3.953,2.447-5.709c2.103-2.5,1.379-4.987-1.313-6.843
                c0.073-0.486,0.146-0.971,0.22-1.456c2.9,0.413,6.921,3.17,7.8-1.917c1.002-5.811,2.699-7.209,7.511-4.319l-0.045-0.041
                c-0.133,0.948,0.372,1.265,1.226,1.24l-0.063-0.063c0.792,0.945,0.026,3.667,2.749,2.416c2.815,2.657,4.516-0.005,6.489-1.362
                c2.098,0.266,3.583,1.483,4.648,3.191c3.908,6.271,9.436,11.087,14.527,16.297c0.356,2.389,0.103,5.196,3.688,5.369
                c5.521,3.447,9.677,7.702,9.505,14.875c-0.053,2.228-0.595,4.22-2.643,4.738c-3.196,0.813-5.63,2.179-7.363,5.086
                c-0.964,1.616-2.585,0.979-3.271-0.442c-2.459-5.079-7.49-5.974-12.031-7.702c-1.863-0.217-3.734-0.39-5.592-0.662
                c-4.237-0.625-7.837,0.478-10.656,3.801c-6.554,6.716-7.979,6.5-10.77-2.002c-1.01-3.082-4.041-3.671-5.927-5.626
                c-0.437-0.368-0.871-0.735-1.308-1.104l0.132,0.132c-0.446-0.434-0.896-0.865-1.341-1.298L755.94,475.145z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Kravaricë është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrat Mrizaj dhe Mrizisht. Fshati shtrihet 9 km në jugperëndim të Gjilanit. Është vendbanim kodrinor të tipit të grumbulluar. Shënime Statistikore : Në vitin 1948 kishte 22 shtëpi me 152 banorë ; në vitin 1953 kishte 23 shtëpi me 176 banorë; në vitin 1956 kishte 23 familje me 191 banorë ; në vitin 1961 kishte 27 shtëpi me 260 banorë ; 1971 kishte 31 shtëpi me 298 banorë ;në vitin 1981 kishte 43 shtëpi me 306 banorë. Në vitin 1999 fshati gjithsej kishte 32 shtëpi me rreth 300 banorë. Por në vitin 1999 nga pasojat e luftës dje sulmeve serbe u dogjën dhe u shkatërruan 3 shtëpi dhe disa objekte të tjera.Popullata ishte dëbuar nga aty dhe ishin zhvendosur në disa fshtra të Vitisë (Sllatinë,Sodovinë) , ndërsa disa kishin qëndruar edhe nëpër male.Familjet e këtij fshati janë: Llapashticët, Jabuçanët, Gjigolët, Pasjaqët, Lipovicët, Bucalitë etj. "'
 id="Kravaric" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M483.8,352.176
                c-2.164-0.734-2.267-3.463-1.379-5.721c-4.219-3.936-2.452-9.173-3.034-13.901c-4.66,0.277-9.122-0.206-13.379-2.46
                c-2.588-1.371-2.327-2.648-0.662-4.396c-0.059-3.144-2.685-3.684-4.807-4.738c0.679,1.773,1.359,3.548,2.045,5.341
                c-0.536,0.19-0.865,0.364-1.213,0.419c-2.97,0.471-6.97-1.498-8.708,1.658c-2.054,3.729-1.217,7.204,1.843,11.236
                c3.665,4.83,8.025,9.38,10.719,14.889c4.604,9.423,11.765,13.516,22.183,12.023c1.047-0.151,1.897-0.074,2.609,0.173
                c0.873-1.864,1.582-3.848,1.995-5.875C490.343,355.761,487.702,353.498,483.8,352.176z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Vrapçiq është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrat Thanisht dhe Thanëzë. "'
 id="Vrapqiq" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M538.835,373.548
                c0.504-3.51-2.346-3.979-3.703-3.287c-5.453,2.785-5.655-1.768-7.204-4.569c-10.001-4.814-21.779-3.013-31.597-8.466
                c-3.596-1.997-3.322,0.892-3.917,4.927c-0.127-0.467-0.263-0.905-0.403-1.33c-0.413,2.027-1.122,4.012-1.995,5.875
                c1.594,0.554,2.402,2.063,2.561,4.495c0.655,10.188,1.06,10.547,11.7,13.756c4.175,1.601,9.069-0.003,12.942,2.903
                c0.805,0.591,1.617,1.19,2.429,1.791l0.229,0.005c0,0-0.159,0.15-0.161,0.148c1.454,3.553,3.134,5.857,6.08,1.083
                c-0.682-0.498-0.916-1.122-0.167-1.671c0.26-0.19,0.836,0.049,1.271,0.09l-0.005,0.036c3.692-2.344,5.929-5.424,7.479-9.762
                c1.1-3.07,3.109,1.4,5.027,1.401C539.176,378.494,538.491,375.948,538.835,373.548z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Sllakoc i Poshtëm është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Malmir i Poshtëm.  "'
 id="Sllakovc_i_poshtem" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M322.999,318.579
                c0.075,0.202,0.08,0.405,0.014,0.61c-4.298,0.324-4.184,3.786-4.731,6.727c-0.373,2.003,0.641,4.297-1.289,5.964
                c-0.678-0.381-1.313-0.936-2.042-1.122c-9.378-2.405-10.596-4.397-8.867-14.499c0.348-2.032,0.022-3.896-1.977-5.058
                c-0.446-3.893-6.324-4.796-5.239-9.529c-2.842-5.492-6.241-10.716-8.083-16.694c7.81,2.155,15.561,4.724,23.866,3.43
                c0,0-0.134,0.054-0.133,0.054c3.275,1.335,6.492,1.373,9.627-0.427c1.93-0.965,3.86-1.93,5.791-2.894
                c-0.109,1.878,0.005,3.7,2.496,3.74c2.618,0.042,4.561-1.372,5.516-3.669c1.479-3.563,2.63-7.261,3.922-10.904l-0.063,0.049
                c1.177,0.996,2.578,0.955,3.991,0.86c2.606-0.619,3.417-3.943,6.279-4.175c-0.279,1.143,0.159,1.705,1.351,1.651
                c0.438,0.491,0.877,0.984,1.315,1.475c-0.007,1.484,1.334,1.321,2.169,1.776c0.019,0.438,0.038,0.875,0.056,1.312
                c-1.866,5.512,0.434,10.574,3.718,14.111c2.506,2.702,0.642,3.783,0.204,5.631c-1.742,0.39-3.179,1.19-3.917,2.925
                c-7.86-2.261-13.009,0.543-15.273,8.316c-4.699-3.025-7.909-0.979-10.919,2.878c-1.121,1.436-2.196,4.33-4.959,2.602
                c-1.377-0.86-2.749-2.409-3.848-0.546C321.001,314.824,319.926,317.314,322.999,318.579z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Lipovicë është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Blinajë. Në Lipovicë banojn vetëm disa banorë të cilët mirren me bagëti e blegtori, shumica e popullatës janë shpërngulur në Velekincë mbi shkollë në rrugën për Livoçë (Lagja e Lipovicëve - Blinishtës)- Komuna e Gjilanit, ku jetojn mbi 50 shtëpi, pastaj në Lagjen e Arbëris së Gjilanit mbi 10 shtëpi në rrugën e prishtinës rreth 10 shtëpi, në dheun e bardhë 5 shtëpi, në Livoçë të Gjilanit rreth 10 shtëpi, pastaj në Malishevë të Gjilanit rreth 10 shtëpi. Si dhe shum nga popullata e kesaj treve jetojn në Preshevë dhe Kumanovë si dhe në mergatë. "'
 id="Lipovic" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M751.289,377.421
                c1.366,0.182,2.742,0.408,3.706-0.959c6.387-0.647,12.293,1.486,17.689,4.247c3.953,2.02,7.224,1.698,10.897,0.326
                c2.174,1.593,3.712,3.73,5.109,5.986c1.244,3.219-1.413,8.555,4.901,9.084c0.095,0.008,0.103,1.027,0.15,1.574
                c-2.812,1.255-2.853,5.065-5.748,6.242c-2.322-2.123-4.558-4.354-6.995-6.336c-1.832-1.488-2.822-4.944-6.052-3.583
                c-2.952,1.247-3.381,4.304-3.248,7.071c0.169,3.496-0.819,6.158-2.877,9.128c-3.569,5.151-6.768,11.271-4.297,17.581
                c1.822,4.664,1.422,7.724-0.798,12.157c-2.253,4.501-3.478,2.718-5.867,1.015c-2.613-1.86-3.097-6.205-7.273-6.204
                c-0.523-0.285-1.052-0.573-1.562-0.838c-0.664-0.355-1.412-0.648-2.019-1.121c-4.061-3.162-7.831-6.364-4.063-12.246
                c0.903-1.408,1.045-3.308,1.536-4.983c3.163,0.105,6.276-0.478,6.282-4.291c0.002-3.408-2.973-2.813-5.295-2.619
                c-1.729-1.479-2.428-3.455-2.718-5.627c0.256-3.517,1.027-7.313-4.251-7.83c-3.024-5.513,4.274-1.989,4.259-4.864
                c6.396,0.651,5.021-4.542,5.996-7.972C748.789,380.294,748.778,378.211,751.289,377.421z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Kokaj është një fshat në Malet e Karadakut (Malet e Zeza), Gjilan, Kosovë. Vendbanimi Kokaj shtrihet në juglindje të territorit të Komunës së Gjilanit, gjegjësisht në skajin juglindor të territorit të Kosovës. Ky vendbanim i vendosur thellë në Malet e Karadakut është 18 km larg Gjilanit (12,2 km vija ajrore nga qendra e Gjilanit dhe 10,20 km nga qendra e Preshevës dhe 17 km nga Bujanoci). Fshat kodrinor-malor i tipit të shpërndarë, i vendosur në shpatijet e Maleve të Karadakut, në gjerësinë gjeografike veriore prej 42° 23 26 dhe 21 34 46 të gjatësisë gjeografike lindore. Vendbanimin Kokaj e përbëjnë tri lagje : Lagjja e Poshtme, Lagjja e Epërme dhe në mes të tyre Lagja e Gurinës. Për nga lartësia mbidetare dallojnë lagjet njëra prej tjetrës. Nga 650 m lagjja e Poshtme, 700 m e Gurinës dhe 750-800 ajo e Epërmja. maja më e lartë arrin 860 m lartësi mbidetare.Territori i fshatit Kokaj kufizohet me atë të Llocës në veri, të Sllubicës në lindje, në jug me Magjeren dhe Ranatocin (që i takojnë komunë së Preshevës) e në perëndim me territorin e Myqëbabës dhe Buricës. Ndryshe territori i fshatit Kokaj shtrihet nga Lumi i Sllubicës në lindje, deri te Lumi Llapusha (Lapushnica) në perëndim dhe nga Kodra e Lestes (Llocë) në veri deri te vendi i ashtuquajtur Zllatare në jug (Ranatoci). Sipërfaqja e përgjithshme e territorit të fshatit Kokaj është 402,52 ha.Fshati Kokaj i takon Bashkësisë Lokale të Pogragjës. E tërë Bashkësia Lokale e Pogragjës ka një sipërfaqe prej 50 km² ose 9,7 % të territorit të komunës, në vitin 1981 përbënte 4,3 % të tërë numrit të banorëve të komunës, ndërsa pas luftës edhe pjesëmarrja e popullsisë është edhe më e vogël. Komuna e Gjilanit ka territor prej 253 km² dhe rreth 130.000 banor (vlerësim viti 2003).Si vendbanim është krijuar para dy shekujve kur banorët e parë erdhën nga vendbanimi i Sanxhakut të Nishit, Klaiq. Fshati Kokaj përbëhet prej tri lagjeve të ndara njëra nga tjetra, e ato janë : Mahalla e Poshtme, Mahalla e Epërme dhe në mes tyre shtrihet Gurina, ku edhe është shkolla e fshatit e ndërtuar në vitin 1967, me iniciativën e plakut Nezir Haliti."'
 id="Inatoc" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M807.16,465.151
                c-3.586-0.174-3.331-2.98-3.688-5.369c-0.066-1.905,0.27-3.726-1.627-5.306c-4.349-3.623-6.972-8.685-10.313-13.156
                c-3.65-4.883-6.176-9.715-2.104-15.549l0.007-0.396c2.521,0.217,5.073,0.254,7.56,0.683c4.719,0.815,9.935-0.346,11.273-4.293
                c2.438-7.198,7.399-6.066,12.753-6.751c4.563-0.583,10.377,0.358,13.021-5.413c0.188-0.842,0.377-1.684,0.565-2.527
                c1.627,6.357,3.254,12.717,4.879,19.076c-2.177,6.141-1.963,6.785,3.996,12.161c0.649,1.078,1.301,2.159,1.952,3.239
                c-2.872-0.143-3.528,2.729-4.105,4.179c-1.673,4.18-4.511,4.772-8.258,4.191c-3.755-4.816-3.755-4.816-9.314,1.168
                c-5.392,3.146-9.624,8.137-16.019,9.725C804.6,461.594,807.657,463.727,807.16,465.151z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Nasalja është një vendbanim në komunën e Gjilanit, Kosovë. Në Nasalë njerzit shkojnë për peshkim sepse atje është Anamorava. "'
 id="Nasale" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M612.314,474.762
                c-3.853,3.474-7.584,3.255-11.48-0.076c-2.506-2.146-6.011,0.151-8.457-1.1c-7.676-3.925-16.064-4.396-24.272-5.773
                c-2.007-0.336-2.446-1.57-1.62-2.813c1.802-2.712,0.232-7.455,5.931-8.238c1.616-0.223,5.315-3.769,6.424-7.591
                c2.189-7.536,8.463-12.979,10.412-21.146c1.097-4.593,8.854-6.265,13.652-4.999c6.221,1.638,9.938-0.33,13.685-4.445
                c1.03-1.132,2.329-2.192,4.139-1.738c0.438,3.605-2.726,5.044-4.608,7.029c-3.169,3.335-4.965,6.255-2.775,11.173
                c1.084,2.432,3.805,6.409-0.872,8.869c0.696,0.902-1.7,4.453,2.22,2.591c1.03,0.287,2.062,0.576,3.092,0.863
                c4.063,4.983-2.298,3.021-3.546,4.801c1.543,0.771,2.82,1.41,4.097,2.049l0.031-0.173c-3.154,2.244-6.305-2.251-9.458-0.009
                c-3.219-0.019-4.861,1.799-4.541,4.788c0.409,3.829-1.846,8.271,2.256,11.334c0.586,0.438,1.586,0.936,2.13,0.725
                C613.428,469.063,612.194,472.509,612.314,474.762z M612.623,448.165c-0.433-0.499-0.324-1.405-1.209-0.959
                c-0.33,0.167-0.748,0.332-0.91,0.621c-0.405,0.715,0.298,0.987,0.714,0.981C611.669,448.806,612.115,448.417,612.623,448.165z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Çeliku është një vendbanim në komunën e Gjilanit, Kosovë. Fshati Çelik shtrihet në thellësi të Grykës së Kardakut rreth 8 km në jug të Zhegrës. Në të djathtë të rrugës Gjilan-Kumanovë, rreth 1 km në perëndim të fshatit Shurdhan. Sot në fshatin Çelik jetojnë 15 familje, me rreth 100 banore.Fshati Çelik kufizohet me këto fshatra: me fshatin Stançiq, Shurdhan, Pidiq, Stubell si dhe me fshatin Verrnez tani të braktisur (i banuar me kroat).Relievi i fshatit është në përgjithësi kodrinoro-malor me një lartësi mbidetare rreth 700 m. Dallohet me toke të bute, me kullosa ta pasura, pyje e burime të shumta te ujit.Në afërsi të fshatit gjendet miniera e hekurit e cila thuhet se është përdorur që nga koha e perandorisë romake, e cila aktivizohet edhe një herë në periudhën e pushtimit bullgar.Më vonë është bere edhe një incizim i tokës ku është vërtetuar se tokat tona janë të pasura me minerale të ndryshme siç janë hekuri, boksiti, plumbi, ari e argjendi.Mes fshatit Çelik dhe Pidiq gjendet Guri i Madh, një prerje e rrepinjt gurerore i cili bashkë me Zdravecin formojnë një kanjon të bukur. Në maje të Gurit te Madh gjenden themelet e Kalasë së vjetër e cila i takon kohës së Perandorisë Romake. Në këtë bregore gjenden edhe disa forma të shpellave, mjaft të pasura me stalagmite dhe stalagmite, por ende të pa eksploruara plotesisht.Sot fshati ka infrastruktura të re pas luftës shkatërruese që pësoi më 1999. Tani fshati ka rruge të re si dhe urën mbi Lumin e Karadakut që lidh Celikun me fshatin Shurdhan, respektivisht me rrugën magjistrale Gjilan-Kumanovë.  "'
 id="Celik" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M727.724,616.018
                c2.067,1.579,4.591,1.825,7.007,2.387c-0.229,0.316-0.221,0.627,0.03,0.931c-1.04,0.707-2.079,1.411-3.114,2.113
                c-0.649,1.999-0.649,1.999,0.432,3.686c6.063,9.459,5.671,10.479-5.275,13.677c-1.292,0.377-2.561,0.934-3.88,1.105
                c-5.548,0.721-8.425,4.239-8.424,10.478c-0.423,0.438-0.849,0.876-1.272,1.314c-0.698,0.161-1.083,0.569-1.019,1.32l0.037-0.045
                c-2.964,1.948-4.39,5.077-6.104,7.982c-0.365,0.149-0.733,0.301-1.098,0.452c-0.306-0.023-0.612-0.052-0.919-0.092
                c-0.765-2.06-2.362-3.46-3.887-4.919l0.128,0.198c-0.774-2.842,2.234-6.812-2.527-8.459l0.1,0.134
                c0.581-3.369-1.568-7.735-3.085-8.007c-5.199-0.931-8.066-6.249-13.406-6.265c-1.593-3.991-3.433-7.903-4.695-11.997
                c-0.908-2.94-0.123-5.191,3.647-5.994c4.845-1.029,9.646-1.325,14.553-1.188c1.938,0.056,4.557,1.219,5.32-2.045
                c2.588,2.592,6.431-0.448,9.049,2.018c0.472,3.37,1.952,4.521,5.104,2.471C718.616,614.548,723.097,614.386,727.724,616.018z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Goden është një vendbanim në komunën e Gjilanit, Kosovë. "'
 id="Goden_i_vogel" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M706.205,583.405
                c-5.761,3.563-8.698,10.078-14.364,13.737c-1.702,0.016-2.296-1.275-2.931-2.502c-2.97-5.733-7.913-8.042-13.305-4.971
                c-7.725,4.396-17.334-3.509-15.618-11.566c2.544-5.239,0.537-9.14-3.649-12.398c-2.519-0.387-1.609-2.634-2.201-4.063
                c3.193-0.171,5.529-1.27,7.806-3.979c3.181-3.792,8.717-2.505,15.12,2.559c1.233,3.909,6.841,2.136,7.931,5.844
                c1.377,4.69,3.78,5.923,8.273,3.93c1.509-0.669,3.591-0.704,4.628,1.359c1.093,2.169-1.074,2.512-2.018,3.6
                c-1.492,1.729-2.922,3.631,0.85,4.431l-0.028-0.024C699.063,582.599,703.071,581.976,706.205,583.405z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Lladova është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrat Meslum dhe Fushëmirë. Duke u bazuar ne poziten gjeografike ne te cilen shtrihet fshati yne lehtesishte mund te konkludojme se kjo treve ka qene e banuar qe nga kohrat me te lashta te civilizimit e qe datojne qysh nga epoka e paleolite por edhe ne shtresimet me te vonshme arkeologjike.Toka pjellore dhe klima e pershtateshme por edhe ujrat e bollshme qe rrjedhin neper fshatin tone dhe ne afersi te tij kane ber qe kjo treve te jet e banuar qysh heret nga paraardhesit tane Pellazget e Iliret dhe ne veqanti nga Dardanet si një fis i njohur Ilir.për ket deshmojne edhe tomulat apo varrezat ilire te cilat jan gjetur ne mes te trekendshit Lladovë, Llashticë pasjan e ku pas disa germimeve jan zbuluar shum deshmi si arme lufte mjete pune etj e qe forcojne edhe me tej tezens e Iliret ishin autokton ne kto treva qysh nga koha e bronxit.Se fshati Lladove ka qene një treve e banuar edhe ne antike këtë e deshmojn shume gjetje te ndërtimit ne lokalitetin e quajtur kuka por qe stuhit e kohës e kane shkaterruar ne tersi.duke u bazuar ne shume fakte historike te kohës te cilat flasin për kalime te shumta te hordhive barbare ne kto ane e si pasoj është shkatruar edhe fshati yne icili ne antiken e vonshme ishte një qendër e zhvilluar dhe qe numronte rreth 500 shtëpi banimi gjurmët e se ciles i gjejme ne lokalitetin e quajtur Selishte nga edhe eka marre emrin një fshat icili sot gjindtë ne një largesi 6 km prej Lladoves diku thell ne gryken e Karadakut.Banoret e ketij fshati por edhe te shum fshatrave tjera te dardanis si pasoj e një stuhie te eger te dyndjes se popujve barbare drejt bizantit u detyruan qe te lene vatrat e veta dhe te strehohen maleve ku konfiguracioni gjeografik i terrenit i mundesonte një mbrojtje me te mir karshi sulmeve barbare.fshati Lladove ben pjese ne grupin e vendbanimeve te vonshme pasi qe sot nuk munde te deshmojme një vazhdimsi ne mes te vendabanimit antik dhe atij te mesjetes se vonshme. "'
 id="Lladov" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M618.334,454.218
                c-1.276-0.639-2.554-1.278-4.097-2.049c1.248-1.78,7.608,0.184,3.549-4.801c4.085-4.062,0.203-7.116-1.258-12.008
                c-0.979,4.682,1.038,8.362-1.837,11.145c-3.919,1.862-1.523-1.688-2.22-2.591c4.677-2.46,1.956-6.438,0.872-8.869
                c-2.188-4.918-0.394-7.838,2.775-11.173c1.883-1.985,5.046-3.424,4.607-7.029c1.067-6.864,2.685-8.097,9.202-7.077
                c2.488,0.39,4.987,0.711,7.481,1.066c-0.256,2.223,0.247,4.178,2.031,5.674c0.234,1.843,1.563,1.468,2.759,1.363l-0.063-0.03
                c2.116,2.326,5.438,3.593,5.969,7.326c0.231,1.642,1.582,2.557,3.391,2.414c0.366,0.34,0.731,0.68,1.094,1.014
                c-0.258,1.949,3.943,3.447,0.576,5.714c-1.875,0.026-3.603,0.514-5.113,1.67c-7.32-3.896-10.592,3.065-15.366,5.858
                c-1.06,0.616-1.579,2.169-3.165,2.155C623.759,445.178,622.37,451.145,618.334,454.218z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Vërbicë e Kmetocit është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrat Urbisht dhe Urbisht i Kmetocit. Shtrihet rreth 7-8 km në verilindje t Gjilanit.Urbishti i Kmetocit është fshati i fundit i rrypit të Bjeshkëve të Karadakut.Është vendbanim kodrinor. Familjet:Surdulli,Robeli,Dushica,Zuzaku,Maloku,Isufi,Bajraliu,Hashani,Vokshi,Berisha,Salihu,Matoshi,Kçiku,Demi,etj. Mikrotoponimet më karakteristike:Rreze,,Kisha,Te Livadhet,Krye Arave,Terksa,Ledina Madhe,Te Fusha,Te Gurtë,Prroni e Fellë,Lugina,Garavina,Oosja,Te Prrojet,Te Çeshmja,Te Bazeni etj. Në pjesën verilindore të fshatit,në vendin Rreze ka shenja të vendbanimit.Është gjetur qeramikë, e cila dëshmon për ekzistimin e vendbanimit.Nga qeramika më së miri është e përfaqësuar ajo e gërryer.Është gjetur një shpat në një varrezë.Në një pirg të ngritur ekzistojnë themelet e kishës së vjetër ilire,ku sipas legjendës, aty ka ari të cilin e ruan gjarpëri. Aty ka lisa të mëdhenjë, që nuk i prek askush. Është vendbanim mjaftë i vjetër. Por, në dokument e shkruara përmendet në kartën e knjez Llazarit të lëshuar në vitin 1381 manastirit të Ravanocës . Si vendbanim me emrin Vrbiç është i regjistruar në defterin e Kazasë së Novobërdës të vitit 1498 dhe kishte 19 kryefamiljarë dhe bashtina. Banohej me popullatë shqiptare vendëse -Shemsiajt dhe Hajdinajt. Pas dëbimit të shqiptarëve nga Sanxhaku i Nishit në vitin 1877/88, këtu u vendosën familjet muhaxhire Pllana, Bogunovci dhe disa të tjera. Në sallnamet e Vilajetit të Kosovës të vitit 1893, të vitit 1896 dhe të vitit 1900 është e shënuar me emrin Verbica-I Zir. Në vitin 1929 të gjitha familjet e fshatit sa ishin 17, shpërngulen, 13 nga ato shkojnë në Turqi, ndërsa 4 familje mbesin në Gjilan, në Urbishtë të Zhegovcit, etj. Ndërsa, në tokat e tyre pushteti serb menjëherë i solli 23 familje kolone serbe e malazeze, kryesisht nga Serbia Jugore. Kurse, sipas një dokumenti arkivor, në lokalitetin Verbica-Shillova prej vitit 1928-1935 u kolonizuan 16 familje kolone me 83 anëtarë. Popullata shqiptare filloi prapë të vendoset në vitin 1947. Këtu vendoset Ruhan Hashani prej Lajçiqi. Në vitin 1950 dhe më vonë, këtu u vendosën familjet nga Desivojca (Surdulli), Velegllava (Dushica e Kçiku), Lajçiqi (Robeli), Lisocka (Zuzaku, Demi dhe Maloku), Tërstena (Bajraliu), Kitka (Vokshi), Gmica (Matoshi), Cfirca (Berisha), Dushkaja-Dabisheci (Salihu), Gjyrisheci (Isufi), etj. "'
 id="Verbic_e_Kmetocit" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M753.918,223.017
                c-1.293,3.278-1.229,7.077-3.79,9.868c-8.174,1.935-15.227,7.684-24.555,6.045c-5.021-0.881-7.043-3.399-6.03-7.404
                c1.38-5.465-0.22-10.025-2.302-14.766c1.849-0.999,4.076-1.518,5.169-2.922c3.267-4.203,7.059-4.2,11.755-3.02
                C742.123,212.82,747.969,217.93,753.918,223.017z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Bukovik ose Bukanik është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Bunget. Bukoviku gjindet në pjesën lindore të teritorit të komunës së Gjilanit.Fshati është i vendosur në Lugun e kodrinës së Bukovikut, në një lartësi mbidetare rreth 700m.Kodra ku është vendosur ky vendbanim është mollake dhe e rrethuar nga të gjitha anët nga fushat. Në perëndim Fusha e Gjilanit, në lidje dhe jug nga lugina e Lumit Morava e Binçës, kurse në veri na lugina e lumit të Përlepnicës.Hapsira e teritorit të Bukovikut është me toka pjellore, kullota dhe me pyje. Ky vendbanim sipas gojdhënave është krijuar rrett viti 1772 nga dy vëllezërit Uka dhe Dema. Këta dy vëllezër ishin ardh nga Krusha e Madhe Malësisë e Gjakovës, e aty ishin ardh nga vendbanimi Lec qe ndodhet ne komunen e Medvegjës afër Leskocit. Në këtë vendbanim ariitën edhe banorëtë rinj në vitin 1878 nga Gërguroci dhe Bërnjashi i Leskocit. Të përndjekur nga pushtuesit serb.  "'
 id="Bukovik" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M827.033,276.52
                c-1.93,1.916-4.202,2.776-6.954,2.579c-2.448-0.177-4.699,0.352-6.122,2.653c-0.928,2.499,0.305,6.389-4.224,6.575
                c-1.794-0.208-2.75,0.961-3.658,2.218c-1.035-0.041-1.902,0.074-1.437,1.482l-0.018-0.02c-1.25-0.458-1.645-0.061-1.188,1.187
                c0,0-0.012-0.008-0.012-0.007c-3.051,2.604-3.287,3.203-4.729,11.925l0.021-0.017c-6.428,3.034-11.931-0.22-17.564-2.579
                c-0.391-0.424-0.779-0.848-1.167-1.27c0.045-2.438-3.868-3.776-1.828-6.869c0.459-0.693-0.651-1.383-1.401-1.42
                c-1.73-0.088-6.189,5.622-5.484,7.208c0.713,1.601,2.353,3.181,0.343,4.622c-2.082,1.492-2.934-1.152-4.372-1.881
                c-2.396-1.21-3.506-3.611-5.257-5.392c-2.64-2.686-3.001-6.64-5.761-9.13c-1.872-2.658-3.623-5.21-7.442-5.601
                c-1.671-0.17-3.843-1.925-3.77-3.81c0.181-4.453-2.712-8.373-1.885-12.847c1.888-0.989,3.773-1.977,5.661-2.965
                c7.753-0.037,2.194-5.354,3.198-8.069c0.105-0.382,0.21-0.765,0.316-1.147c1.401,0.094,2.188,1.854,3.791,1.399l-0.043-0.045
                c3.398,7.772,10.54,10.701,17.72,13.424c2.214,0.838,3.966-0.102,4.974-2.745c2.227-5.835,5.812-7.524,11.845-5.417
                c3.094,1.081,5.917,1.654,8.958,0.293c1.314,0.394,1.592,1.539,1.916,2.649c-0.008,2.056,2.604,2.861,2.918,2.544
                c4.275-4.3,9.043-1.077,13.554-1.151C817.854,271.207,823.199,273.272,827.033,276.52z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Bukovik ose Bukanik është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Bunget. Bukoviku gjindet në pjesën lindore të teritorit të komunës së Gjilanit.Fshati është i vendosur në Lugun e kodrinës së Bukovikut, në një lartësi mbidetare rreth 700m.Kodra ku është vendosur ky vendbanim është mollake dhe e rrethuar nga të gjitha anët nga fushat. Në perëndim Fusha e Gjilanit, në lidje dhe jug nga lugina e Lumit Morava e Binçës, kurse në veri na lugina e lumit të Përlepnicës.Hapsira e teritorit të Bukovikut është me toka pjellore, kullota dhe me pyje. Ky vendbanim sipas gojdhënave është krijuar rrett viti 1772 nga dy vëllezërit Uka dhe Dema. Këta dy vëllezër ishin ardh nga Krusha e Madhe Malësisë e Gjakovës, e aty ishin ardh nga vendbanimi Lec qe ndodhet ne komunen e Medvegjës afër Leskocit. Në këtë vendbanim ariitën edhe banorëtë rinj në vitin 1878 nga Gërguroci dhe Bërnjashi i Leskocit. Të përndjekur nga pushtuesit serb.  "'
 id="Llovce" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M834.039,409.602
                c-2.643,5.771-8.458,4.83-13.021,5.413c-5.353,0.685-10.313-0.447-12.752,6.751c-1.34,3.947-6.556,5.108-11.273,4.293
                c-2.485-0.429-5.037-0.466-7.56-0.683c-0.031-0.718-0.063-1.436-0.096-2.153c-0.159-4.851-3.845-9.404-1.207-14.485
                c1.263-3.994,7.613-5.406,5.614-11.059c-0.049-0.547-0.057-1.565-0.15-1.575c-6.314-0.527-3.658-5.863-4.896-9.082
                c2.34-2.73,0.759-4.903-1.224-6.718c-0.93-0.853-2.291-1.833-1.044-2.577c3.12-1.866,4.636-5.32,8.318-6.827
                c6.126-2.508,11.668-1.163,17.399,0.633c2.889,1.301,5.898,1.624,9.064,1.947c6.013,0.615,10.133,4.95,14.243,8.984
                c-0.343,3.164-0.077,6.553-1.155,9.44C832.072,397.888,830.88,403.646,834.039,409.602z" />
<path fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M341.701,308.238
                c2.265-7.773,7.413-10.577,15.273-8.316c2.394,1.037,1.963,3.437,2.578,5.331c1.376,4.752-0.313,9.097-1.81,13.458
                c-1.304,3.8-4.533,4.79-7.833,4.166c-3.129-0.593-7.047-1.175-5.78-6.466C344.823,313.512,343.24,310.756,341.701,308.238z" />
<path onclick='document.getElementById("vendbanimi").innerHTML = "Burincë është një vendbanim në komunën e Gjilanit, Kosovë. Pas vitit 1999 fshati është i njohur edhe me emrin Burimzë. Vendbanimi Burincë shtrihet në Juglindje të Komunës së Gjilanit, përkatësisht në skajin juglindor të Kosovës. Përkah Relievi është fshat Kodrinoro-Malor, i vendosur në shpatijet e Maleve të Karadakut, gjendet në gjerësinë gjeografike mes kordinatave 42° 23 47 veri dhe 21° 33 2 lindje. Është vendbanim i tipit të grumbulluar. Ky vendbanim sa i përket territorit është fshat i vogël në krahasim me fshatrat përreth me vetëm 160 Ha. Është i shpërndara në tri mahalla: Mahalla e Hajdarëve, Mahalla e Zymberëve dhe Mahalla e Zmokëve (Rexhepëve). Gjendet në lartësi mbidetare me rreth 700-750m.Burinca shtrihet në jug të qendrës komunale - Gjilanit. I futur thellë në Malet e Karadakut karakterizohet me pozitë të izoluar. Me pak toka pjellore dhe mungesë kullotash Burinca është vendbanim emigrues. Që nga themelimi nga ky vendbanim pati emigrime në drejtim të qendrës komunale. Sot Burinca pothuajse është e boshatisur, edhe pse banorët e dikurshëm kanë filluar të ndërtojnë shtëpi për kalimin e pushimeve dhe vikendeve. "'
 id="Burunic" fill="#353535" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M773.941,438.104
                c1.271-1.218,0.182-2.238-0.497-2.948c-8.435-8.849-9.523-14.854-2.716-23.782c2.646-3.471,3.905-6.38,3.053-10.487
                c-0.261-1.247-0.535-2.992,0.841-3.741c1.518-0.823,2.413,0.872,3.407,1.64c2.613,2.015,5.093,4.204,7.625,6.321
                c1.099,0.993,1.369,2.325,1.498,3.715c-5.035,5.676-1.258,10.016,2.187,14.404c0.031,0.718,0.063,1.436,0.095,2.152
                c0,0-0.007,0.396-0.008,0.398c-3.589,1.641-5.324,4.044-4.4,8.298c0.422,1.931-0.445,4.141-0.729,6.222
                c-1.975,1.357-3.674,4.021-6.489,1.362c-0.69-1.063-0.263-3.398-2.749-2.416l0.063,0.063c0.532-1.346,0.098-1.73-1.226-1.24
                L773.941,438.104z" />

<g id="myDIV">
    <g>
        <path fill="#FFFFFF" d="M322.449,55.829h1.374l4.187,9.76l4.255-9.76h1.374l-5.496,12.633h-0.275L322.449,55.829z" />
        <path fill="#FFFFFF" d="M335.305,59.619h5.068v0.866h-4.184v2.771h4.148v0.866h-4.148v3.475h4.148v0.866h-5.032V59.619z
                                     M336.658,57.544c0.192,0,0.357,0.068,0.493,0.205s0.204,0.3,0.204,0.493s-0.068,0.357-0.204,0.493s-0.301,0.204-0.493,0.204
                                    s-0.356-0.068-0.493-0.204s-0.205-0.301-0.205-0.493s0.068-0.356,0.205-0.493S336.465,57.544,336.658,57.544z M339.11,57.544
                                    c0.192,0,0.357,0.068,0.493,0.205s0.204,0.3,0.204,0.493s-0.068,0.357-0.204,0.493s-0.301,0.204-0.493,0.204
                                    s-0.356-0.068-0.493-0.204s-0.205-0.301-0.205-0.493s0.068-0.356,0.205-0.493S338.918,57.544,339.11,57.544z" />
        <path fill="#FFFFFF" d="M341.948,59.619h1.762c0.981,0,1.647,0.04,1.996,0.12c0.525,0.121,0.952,0.378,1.28,0.773
                                    c0.329,0.396,0.493,0.882,0.493,1.46c0,0.481-0.113,0.905-0.34,1.27s-0.55,0.641-0.971,0.828s-1.002,0.282-1.743,0.286l3.18,4.106
                                    h-1.093l-3.18-4.106h-0.5v4.106h-0.884V59.619z M342.832,60.484v3.005l1.523,0.012c0.59,0,1.026-0.056,1.31-0.168
                                    c0.283-0.112,0.504-0.292,0.662-0.538c0.159-0.247,0.238-0.522,0.238-0.827c0-0.297-0.081-0.566-0.241-0.809
                                    c-0.161-0.243-0.371-0.416-0.632-0.52c-0.261-0.104-0.694-0.156-1.3-0.156H342.832z" />
        <path fill="#FFFFFF" d="M349.396,59.619h1.743c0.702,0,1.241,0.083,1.617,0.25c0.377,0.166,0.674,0.422,0.893,0.766
                                    c0.219,0.345,0.328,0.728,0.328,1.148c0,0.393-0.096,0.75-0.287,1.073c-0.191,0.323-0.473,0.584-0.843,0.785
                                    c0.459,0.156,0.813,0.34,1.061,0.55c0.248,0.21,0.441,0.465,0.579,0.763c0.138,0.299,0.207,0.622,0.207,0.971
                                    c0,0.709-0.26,1.31-0.779,1.8s-1.215,0.736-2.089,0.736h-2.429V59.619z M350.262,60.484v2.831h0.506
                                    c0.615,0,1.066-0.057,1.355-0.171c0.289-0.114,0.518-0.294,0.687-0.541c0.168-0.246,0.253-0.52,0.253-0.82
                                    c0-0.405-0.142-0.722-0.425-0.953c-0.283-0.23-0.734-0.345-1.353-0.345H350.262z M350.262,64.205v3.391h1.096
                                    c0.646,0,1.12-0.063,1.421-0.189c0.301-0.126,0.543-0.323,0.726-0.592s0.274-0.559,0.274-0.872c0-0.393-0.128-0.735-0.385-1.028
                                    s-0.61-0.493-1.059-0.601c-0.301-0.072-0.825-0.108-1.572-0.108H350.262z" />
        <path fill="#FFFFFF" d="M356.315,59.619h0.884v8.843h-0.884V59.619z" />
        <path fill="#FFFFFF" d="M367.461,61.26l-0.698,0.535c-0.384-0.5-0.847-0.88-1.385-1.139c-0.539-0.258-1.131-0.388-1.776-0.388
                                    c-0.706,0-1.359,0.169-1.96,0.508c-0.601,0.338-1.067,0.793-1.397,1.364c-0.331,0.571-0.496,1.213-0.496,1.927
                                    c0,1.078,0.37,1.978,1.109,2.699c0.74,0.722,1.672,1.082,2.798,1.082c1.239,0,2.274-0.485,3.108-1.455l0.698,0.529
                                    c-0.441,0.561-0.991,0.995-1.65,1.302s-1.396,0.46-2.209,0.46c-1.547,0-2.768-0.515-3.661-1.545
                                    c-0.75-0.869-1.124-1.919-1.124-3.15c0-1.294,0.454-2.383,1.361-3.267s2.045-1.326,3.412-1.326c0.826,0,1.571,0.164,2.236,0.49
                                    C366.491,60.213,367.036,60.67,367.461,61.26z" />
        <path fill="#FFFFFF" d="M369.24,59.619h5.068v0.866h-4.184v2.771h4.148v0.866h-4.148v3.475h4.148v0.866h-5.032V59.619z
                                     M370.593,57.544c0.192,0,0.357,0.068,0.493,0.205s0.204,0.3,0.204,0.493s-0.068,0.357-0.204,0.493s-0.301,0.204-0.493,0.204
                                    s-0.356-0.068-0.493-0.204s-0.205-0.301-0.205-0.493s0.068-0.356,0.205-0.493S370.4,57.544,370.593,57.544z M373.045,57.544
                                    c0.192,0,0.357,0.068,0.493,0.205s0.204,0.3,0.204,0.493s-0.068,0.357-0.204,0.493s-0.301,0.204-0.493,0.204
                                    s-0.356-0.068-0.493-0.204s-0.205-0.301-0.205-0.493s0.068-0.356,0.205-0.493S372.853,57.544,373.045,57.544z" />
        <path fill="#FFFFFF" d="M322.956,80.724h5.068v0.866h-4.184v2.771h4.148v0.866h-4.148v3.475h4.148v0.866h-5.032V80.724z" />
        <path fill="#FFFFFF" d="M334.392,78.154v-1.22h6.664l-5.277,11.396h5.011v1.237h-6.965l5.323-11.413H334.392z" />
        <path fill="#FFFFFF" d="M342.85,80.724h0.884v3.709h4.502v-3.709h0.884v8.843h-0.884v-4.268h-4.502v4.268h-0.884V80.724z" />
        <path fill="#FFFFFF" d="M351.278,80.724h5.068v0.866h-4.184v2.771h4.148v0.866h-4.148v3.475h4.148v0.866h-5.032V80.724z" />
        <path fill="#FFFFFF" d="M366.403,82.209l-0.686,0.649c-0.493-0.485-1.033-0.853-1.62-1.103c-0.587-0.25-1.159-0.375-1.716-0.375
                                    c-0.693,0-1.354,0.17-1.98,0.511c-0.627,0.341-1.113,0.803-1.458,1.386s-0.517,1.199-0.517,1.849c0,0.665,0.179,1.297,0.535,1.896
                                    c0.357,0.599,0.85,1.07,1.479,1.413c0.629,0.343,1.318,0.514,2.068,0.514c0.91,0,1.679-0.256,2.309-0.77
                                    c0.629-0.513,1.001-1.178,1.118-1.996h-2.82v-0.854h3.812c-0.008,1.367-0.414,2.452-1.217,3.255
                                    c-0.804,0.804-1.878,1.206-3.225,1.206c-1.635,0-2.93-0.557-3.884-1.671c-0.733-0.857-1.1-1.85-1.1-2.976
                                    c0-0.838,0.21-1.617,0.631-2.339c0.421-0.721,0.998-1.285,1.731-1.692s1.563-0.61,2.489-0.61c0.75,0,1.455,0.135,2.116,0.406
                                    C365.128,81.178,365.773,81.612,366.403,82.209z" />
        <path fill="#FFFFFF" d="M372.82,80.501c1.339,0,2.46,0.447,3.362,1.341c0.902,0.894,1.354,1.994,1.354,3.3
                                    c0,1.294-0.45,2.393-1.35,3.294c-0.9,0.902-1.998,1.353-3.293,1.353c-1.312,0-2.418-0.449-3.321-1.347
                                    c-0.902-0.898-1.353-1.984-1.353-3.258c0-0.85,0.205-1.637,0.616-2.363c0.411-0.725,0.972-1.293,1.681-1.704
                                    C371.226,80.707,371.994,80.501,372.82,80.501z M372.859,81.361c-0.654,0-1.274,0.17-1.86,0.511
                                    c-0.586,0.341-1.044,0.8-1.373,1.378c-0.329,0.577-0.494,1.221-0.494,1.931c0,1.051,0.364,1.938,1.093,2.662
                                    s1.606,1.086,2.634,1.086c0.687,0,1.322-0.167,1.906-0.5c0.584-0.333,1.04-0.788,1.367-1.365c0.327-0.578,0.491-1.22,0.491-1.925
                                    c0-0.702-0.164-1.337-0.491-1.904s-0.788-1.022-1.382-1.363S373.526,81.361,372.859,81.361z" />
        <path fill="#FFFFFF" d="M387.545,82.365l-0.698,0.535c-0.384-0.5-0.847-0.88-1.385-1.139c-0.539-0.258-1.131-0.388-1.776-0.388
                                    c-0.706,0-1.359,0.169-1.96,0.508c-0.601,0.338-1.067,0.793-1.397,1.364c-0.331,0.571-0.496,1.213-0.496,1.927
                                    c0,1.078,0.37,1.978,1.109,2.699c0.74,0.722,1.672,1.082,2.798,1.082c1.239,0,2.274-0.485,3.108-1.455l0.698,0.529
                                    c-0.441,0.561-0.991,0.995-1.65,1.302s-1.396,0.46-2.209,0.46c-1.547,0-2.768-0.515-3.661-1.545
                                    c-0.75-0.869-1.124-1.919-1.124-3.15c0-1.294,0.454-2.383,1.361-3.267s2.045-1.326,3.412-1.326c0.826,0,1.571,0.164,2.236,0.49
                                    C386.575,81.318,387.121,81.776,387.545,82.365z" />
        <path fill="#FFFFFF" d="M389.192,80.724h0.884v8.843h-0.884V80.724z" />
        <path fill="#FFFFFF" d="M391.224,81.59v-0.866h4.845v0.866h-1.972v7.977h-0.902V81.59H391.224z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M600.82,262.683l-1.503,1.424c-1.081-1.063-2.266-1.87-3.554-2.42c-1.288-0.549-2.542-0.824-3.765-0.824
                                    c-1.521,0-2.969,0.374-4.345,1.121c-1.375,0.747-2.441,1.76-3.197,3.04c-0.756,1.279-1.134,2.63-1.134,4.054
                                    c0,1.459,0.391,2.846,1.174,4.16c0.782,1.314,1.863,2.347,3.244,3.099c1.38,0.751,2.892,1.127,4.536,1.127
                                    c1.995,0,3.683-0.563,5.063-1.688c1.38-1.125,2.198-2.584,2.453-4.378h-6.184v-1.872h8.36c-0.018,2.998-0.908,5.377-2.67,7.14
                                    c-1.763,1.762-4.121,2.644-7.075,2.644c-3.586,0-6.426-1.222-8.518-3.666c-1.608-1.881-2.413-4.057-2.413-6.527
                                    c0-1.837,0.461-3.547,1.384-5.129c0.923-1.583,2.189-2.82,3.797-3.712c1.609-0.892,3.429-1.338,5.459-1.338
                                    c1.644,0,3.191,0.296,4.642,0.89C598.025,260.421,599.44,261.373,600.82,262.683z" />
        <path fill="#FFFFFF" d="M609.4,265.245h1.357v9.166c0,1.409-0.109,2.389-0.328,2.94c-0.219,0.551-0.583,0.991-1.094,1.32
                                    s-1.129,0.494-1.855,0.494c-0.548,0-1.087-0.106-1.62-0.318c-0.533-0.212-1.122-0.586-1.768-1.121l0.72-1.08
                                    c0.709,0.499,1.298,0.849,1.767,1.052c0.308,0.135,0.61,0.203,0.906,0.203c0.389,0,0.742-0.117,1.059-0.351
                                    c0.317-0.233,0.54-0.544,0.666-0.932c0.126-0.388,0.189-1.138,0.189-2.252V265.245z" />
        <path fill="#FFFFFF" d="M613.868,265.245h1.357v13.578h-1.357V265.245z" />
        <path fill="#FFFFFF" d="M618.335,265.245h1.356v12.267h5.225v1.311h-6.581V265.245z" />
        <path fill="#FFFFFF" d="M632.614,265.245l6.332,13.578h-1.465l-2.136-4.467h-5.849l-2.115,4.467h-1.514l6.415-13.578H632.614z
                                     M632.443,268.129l-2.327,4.915h4.642L632.443,268.129z" />
        <path fill="#FFFFFF" d="M641.06,278.822v-13.578h0.296l9.035,10.408v-10.408h1.338v13.578h-0.303l-8.963-10.281v10.281H641.06z" />
        <path fill="#FFFFFF" d="M654.84,265.245h1.357v13.578h-1.357V265.245z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M343.518,142.447v-1.184h6.472l-5.125,11.068h4.867v1.201h-6.764l5.17-11.085H343.518z" />
        <path fill="#FFFFFF" d="M351.732,144.943h0.858v3.602h4.373v-3.602h0.858v8.588h-0.858v-4.146h-4.373v4.146h-0.858V144.943z" />
        <path fill="#FFFFFF" d="M359.918,144.943h4.922v0.841h-4.063v2.691h4.029v0.841h-4.029v3.375h4.029v0.841h-4.887V144.943z" />
        <path fill="#FFFFFF" d="M374.608,146.385l-0.666,0.631c-0.479-0.471-1.003-0.828-1.574-1.071c-0.57-0.244-1.126-0.365-1.667-0.365
                                    c-0.673,0-1.314,0.166-1.924,0.497c-0.609,0.331-1.081,0.779-1.416,1.346c-0.335,0.566-0.502,1.165-0.502,1.795
                                    c0,0.646,0.173,1.26,0.52,1.842c0.346,0.582,0.825,1.039,1.436,1.372c0.611,0.333,1.281,0.499,2.008,0.499
                                    c0.884,0,1.631-0.249,2.242-0.747c0.611-0.498,0.973-1.145,1.086-1.938h-2.738v-0.829h3.702c-0.008,1.328-0.402,2.381-1.182,3.162
                                    c-0.781,0.78-1.825,1.17-3.132,1.17c-1.588,0-2.846-0.541-3.772-1.623c-0.712-0.833-1.068-1.796-1.068-2.89
                                    c0-0.813,0.205-1.57,0.613-2.271s0.969-1.249,1.681-1.644s1.518-0.593,2.417-0.593c0.728,0,1.413,0.131,2.055,0.395
                                    C373.37,145.384,373.997,145.806,374.608,146.385z" />
        <path fill="#FFFFFF" d="M380.84,144.727c1.301,0,2.39,0.434,3.266,1.302c0.876,0.868,1.314,1.937,1.314,3.205
                                    c0,1.257-0.438,2.324-1.312,3.2c-0.875,0.876-1.941,1.313-3.199,1.313c-1.273,0-2.349-0.436-3.225-1.308s-1.314-1.927-1.314-3.165
                                    c0-0.825,0.2-1.59,0.599-2.294c0.399-0.705,0.944-1.256,1.633-1.655S380.038,144.727,380.84,144.727z M380.878,145.562
                                    c-0.635,0-1.238,0.166-1.807,0.497c-0.569,0.331-1.014,0.777-1.333,1.338c-0.32,0.561-0.479,1.186-0.479,1.875
                                    c0,1.021,0.354,1.883,1.061,2.586s1.561,1.055,2.559,1.055c0.667,0,1.284-0.162,1.851-0.485c0.567-0.323,1.009-0.765,1.327-1.326
                                    s0.477-1.184,0.477-1.87c0-0.682-0.159-1.298-0.477-1.849s-0.765-0.992-1.342-1.323
                                    C382.137,145.728,381.525,145.562,380.878,145.562z" />
        <path fill="#FFFFFF" d="M395.142,146.537l-0.677,0.52c-0.374-0.486-0.822-0.855-1.346-1.106c-0.524-0.251-1.099-0.376-1.726-0.376
                                    c-0.685,0-1.319,0.165-1.903,0.494c-0.584,0.329-1.036,0.771-1.357,1.325s-0.481,1.178-0.481,1.871
                                    c0,1.047,0.359,1.921,1.077,2.622s1.624,1.051,2.718,1.051c1.203,0,2.209-0.471,3.019-1.413l0.677,0.514
                                    c-0.428,0.545-0.962,0.966-1.603,1.264c-0.641,0.298-1.356,0.446-2.146,0.446c-1.502,0-2.688-0.5-3.556-1.5
                                    c-0.728-0.844-1.092-1.864-1.092-3.059c0-1.257,0.441-2.315,1.323-3.173c0.881-0.858,1.986-1.288,3.313-1.288
                                    c0.802,0,1.526,0.159,2.172,0.476C394.2,145.521,394.729,145.965,395.142,146.537z" />
        <path fill="#FFFFFF" d="M396.741,144.943h0.858v8.588h-0.858V144.943z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M635.172,333.523h0.781l2.38,5.548l2.419-5.548h0.78l-3.124,7.181h-0.156L635.172,333.523z" />
        <path fill="#FFFFFF" d="M642.479,335.677h2.881v0.492h-2.378v1.575h2.357v0.492h-2.357v1.975h2.357v0.492h-2.86V335.677z" />
        <path fill="#FFFFFF" d="M646.229,335.677h0.503v4.542h1.934v0.485h-2.437V335.677z" />
        <path fill="#FFFFFF" d="M649.465,335.677h2.881v0.492h-2.379v1.575h2.358v0.492h-2.358v1.975h2.358v0.492h-2.86V335.677z" />
        <path fill="#FFFFFF" d="M653.213,335.677h0.513v1.886l2.01-1.886h0.675l-2.414,2.255l2.602,2.771h-0.669l-2.203-2.341v2.341
                                    h-0.513V335.677z" />
        <path fill="#FFFFFF" d="M657.276,335.677h0.502v5.027h-0.502V335.677z" />
        <path fill="#FFFFFF" d="M658.935,340.704v-5.027h0.109l3.346,3.854v-3.854h0.495v5.027h-0.112l-3.318-3.807v3.807H658.935z" />
        <path fill="#FFFFFF" d="M668.789,336.61l-0.396,0.304c-0.218-0.285-0.48-0.501-0.787-0.648s-0.644-0.22-1.01-0.22
                                    c-0.401,0-0.772,0.096-1.114,0.289c-0.342,0.193-0.606,0.451-0.794,0.776c-0.188,0.325-0.282,0.69-0.282,1.095
                                    c0,0.613,0.21,1.125,0.63,1.534c0.421,0.41,0.951,0.615,1.591,0.615c0.704,0,1.293-0.275,1.767-0.827l0.396,0.301
                                    c-0.25,0.319-0.563,0.566-0.938,0.74c-0.375,0.174-0.794,0.261-1.256,0.261c-0.88,0-1.573-0.293-2.081-0.878
                                    c-0.426-0.494-0.64-1.091-0.64-1.791c0-0.736,0.259-1.355,0.774-1.857c0.516-0.502,1.162-0.753,1.939-0.753
                                    c0.469,0,0.893,0.093,1.271,0.279C668.238,336.015,668.548,336.275,668.789,336.61z" />
        <path fill="#FFFFFF" d="M671.851,335.677l2.345,5.027h-0.543l-0.79-1.654h-2.166l-0.783,1.654h-0.561l2.375-5.027H671.851z
                                     M671.787,336.745l-0.861,1.82h1.719L671.787,336.745z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M373.669,227.885l-1.305-0.114c0.05-0.958-0.065-1.857-0.345-2.697c-0.281-0.84-0.677-1.55-1.189-2.128
                                    c-0.638-0.72-1.422-1.249-2.353-1.587c-0.932-0.338-1.858-0.418-2.781-0.238c-0.923,0.178-1.721,0.566-2.396,1.164
                                    c-0.69,0.611-1.183,1.379-1.477,2.301c-0.293,0.922-0.329,1.866-0.105,2.836c0.223,0.968,0.679,1.842,1.369,2.619
                                    c0.837,0.945,1.812,1.508,2.923,1.689c1.111,0.182,2.146-0.044,3.101-0.676l-2.594-2.928l0.887-0.785l3.507,3.958
                                    c-1.427,1.249-2.927,1.826-4.5,1.731c-1.574-0.096-2.98-0.842-4.219-2.24c-1.504-1.698-2.118-3.555-1.838-5.57
                                    c0.216-1.551,0.908-2.844,2.078-3.881c0.87-0.77,1.873-1.27,3.009-1.496s2.253-0.146,3.351,0.24
                                    c1.097,0.388,2.071,1.063,2.923,2.023c0.689,0.777,1.198,1.635,1.526,2.57C373.567,225.612,373.71,226.682,373.669,227.885z" />
        <path fill="#FFFFFF" d="M376.516,233.542l-3.771,8.693l-0.615-0.694l1.219-2.885l-2.454-2.769l-3.002,0.872l-0.635-0.717
                                    l9.119-2.659L376.516,233.542z M375.079,234.671l-3.303,0.96l1.947,2.198L375.079,234.671z" />
        <path fill="#FFFFFF" d="M373.627,243.231l6.428-5.696l1.181,1.333c0.852,0.961,1.393,1.728,1.623,2.299
                                    c0.334,0.816,0.387,1.639,0.16,2.467c-0.229,0.83-0.715,1.574-1.461,2.234c-0.644,0.57-1.333,0.935-2.069,1.09
                                    c-0.736,0.155-1.417,0.114-2.044-0.124c-0.627-0.237-1.295-0.757-2.005-1.558L373.627,243.231z M374.781,243.31l0.658,0.742
                                    c0.788,0.889,1.389,1.456,1.804,1.701c0.585,0.344,1.206,0.474,1.86,0.389c0.654-0.086,1.276-0.391,1.867-0.914
                                    c0.62-0.549,1.017-1.169,1.19-1.858c0.174-0.689,0.104-1.375-0.208-2.056c-0.233-0.51-0.76-1.227-1.578-2.15l-0.403-0.454
                                    L374.781,243.31z" />
        <path fill="#FFFFFF" d="M385.875,244.103l0.569,0.643l-6.428,5.696l-0.569-0.643L385.875,244.103z" />
        <path fill="#FFFFFF" d="M381.931,250.188l0.812,0.256c-0.367,1.012-0.328,1.77,0.119,2.274c0.191,0.216,0.42,0.373,0.689,0.474
                                    c0.268,0.1,0.53,0.125,0.787,0.074s0.48-0.16,0.669-0.328c0.215-0.191,0.362-0.45,0.439-0.779
                                    c0.108-0.454,0.126-1.125,0.056-2.016c-0.071-0.895-0.073-1.488-0.009-1.779c0.102-0.494,0.329-0.898,0.681-1.211
                                    c0.28-0.248,0.594-0.407,0.943-0.477c0.348-0.07,0.697-0.043,1.045,0.083s0.648,0.331,0.902,0.617
                                    c0.269,0.304,0.444,0.653,0.528,1.049c0.084,0.397,0.055,0.921-0.087,1.571l-0.862-0.172c0.106-0.526,0.134-0.92,0.086-1.18
                                    c-0.049-0.262-0.163-0.492-0.341-0.693c-0.23-0.259-0.497-0.401-0.8-0.426c-0.303-0.025-0.569,0.063-0.8,0.268
                                    c-0.14,0.124-0.249,0.273-0.329,0.447c-0.08,0.175-0.128,0.407-0.146,0.698c-0.006,0.157,0.024,0.624,0.094,1.399
                                    c0.083,0.921,0.054,1.627-0.083,2.117c-0.137,0.49-0.367,0.879-0.69,1.166c-0.466,0.413-1.028,0.596-1.686,0.545
                                    c-0.657-0.049-1.21-0.327-1.66-0.834c-0.346-0.391-0.556-0.836-0.628-1.339C381.589,251.493,381.678,250.89,381.931,250.188z" />
        <path fill="#FFFFFF" d="M391.691,250.667l0.569,0.642l-2.696,2.389l2.9,3.272l2.696-2.389l0.569,0.643l-6.428,5.696l-0.569-0.643
                                    l3.103-2.749l-2.9-3.273l-3.103,2.75l-0.569-0.643L391.691,250.667z" />
        <path fill="#FFFFFF" d="M397.035,256.696l0.569,0.643l-6.428,5.695l-0.569-0.643L397.035,256.696z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M299.563,215.98l0.981,0.775l-2.854,3.612l6.703-0.571l1.292,1.021l-8.037,0.666l0.79,9.245l-1.281-1.013
                                    l-0.676-7.817l-3.543,4.483l-0.981-0.775L299.563,215.98z" />
        <path fill="#FFFFFF" d="M304.752,224.771l0.673,0.532l-5.325,6.738l-0.673-0.531L304.752,224.771z" />
        <path fill="#FFFFFF" d="M301.94,231.456l0.845,0.109c-0.184,1.061-0.011,1.8,0.517,2.217c0.226,0.18,0.479,0.294,0.762,0.346
                                    c0.281,0.051,0.544,0.029,0.788-0.065c0.243-0.095,0.444-0.242,0.601-0.44c0.178-0.227,0.277-0.508,0.296-0.846
                                    c0.025-0.466-0.074-1.129-0.3-1.993c-0.227-0.868-0.334-1.452-0.321-1.749c0.012-0.506,0.165-0.944,0.457-1.313
                                    c0.232-0.294,0.513-0.505,0.844-0.636c0.331-0.13,0.68-0.164,1.044-0.102c0.364,0.063,0.696,0.212,0.996,0.449
                                    c0.317,0.25,0.552,0.564,0.704,0.939c0.152,0.376,0.216,0.896,0.191,1.562l-0.879-0.018c0.012-0.536-0.029-0.928-0.123-1.177
                                    c-0.094-0.248-0.247-0.455-0.458-0.621c-0.272-0.215-0.56-0.309-0.862-0.279c-0.303,0.028-0.55,0.163-0.741,0.404
                                    c-0.116,0.146-0.197,0.313-0.245,0.499c-0.048,0.185-0.054,0.423-0.021,0.712c0.021,0.156,0.134,0.609,0.338,1.361
                                    c0.243,0.893,0.34,1.592,0.292,2.099c-0.048,0.507-0.206,0.931-0.474,1.27c-0.386,0.489-0.907,0.767-1.563,0.833
                                    c-0.656,0.068-1.25-0.108-1.781-0.528c-0.409-0.323-0.694-0.726-0.855-1.207C301.833,232.8,301.815,232.191,301.94,231.456z" />
        <path fill="#FFFFFF" d="M311.633,230.208l0.673,0.532l-2.233,2.826l3.431,2.712l2.233-2.826l0.674,0.531l-5.325,6.739
                                    l-0.674-0.532l2.57-3.253l-3.431-2.712l-2.57,3.254l-0.673-0.533L311.633,230.208z" />
        <path fill="#FFFFFF" d="M312.73,242.022l5.325-6.739l0.147,0.116l0.403,8.709l4.082-5.166l0.665,0.525l-5.325,6.738l-0.151-0.119
                                    l-0.416-8.617l-4.032,5.103L312.73,242.022z" />
        <path fill="#FFFFFF" d="M327.744,242.938l-2.182,9.223l-0.728-0.575l0.692-3.055l-2.903-2.294l-2.802,1.389l-0.751-0.594
                                    l8.508-4.224L327.744,242.938z M326.528,244.304l-3.082,1.527l2.304,1.82L326.528,244.304z" />
        <path fill="#FFFFFF" d="M331.926,246.243l1.342,1.061c0.77,0.609,1.263,1.053,1.478,1.332c0.31,0.398,0.471,0.842,0.482,1.33
                                    c0.011,0.487-0.159,0.954-0.512,1.4c-0.354,0.449-0.767,0.725-1.235,0.828c-0.468,0.104-0.951,0.041-1.449-0.189
                                    c-0.364-0.168-0.963-0.583-1.8-1.244l-0.481-0.38l-2.476,3.134l-0.673-0.532L331.926,246.243z M332.079,247.436l-1.806,2.286
                                    l1.129,0.914c0.461,0.365,0.832,0.59,1.112,0.675s0.555,0.081,0.825-0.009c0.27-0.091,0.498-0.252,0.681-0.484
                                    c0.178-0.225,0.279-0.479,0.306-0.764c0.025-0.284-0.03-0.545-0.167-0.782c-0.137-0.237-0.433-0.535-0.888-0.896L332.079,247.436z
                                    " />
        <path fill="#FFFFFF" d="M340.827,253c1.021,0.807,1.606,1.823,1.755,3.047c0.149,1.225-0.169,2.335-0.956,3.329
                                    c-0.78,0.987-1.784,1.553-3.013,1.698c-1.229,0.146-2.337-0.173-3.324-0.952c-0.999-0.789-1.573-1.798-1.719-3.025
                                    c-0.147-1.229,0.163-2.327,0.93-3.299c0.511-0.646,1.142-1.123,1.892-1.429c0.75-0.306,1.52-0.401,2.308-0.286
                                    C339.488,252.197,340.197,252.503,340.827,253z M340.339,253.679c-0.499-0.394-1.074-0.637-1.726-0.73
                                    c-0.652-0.092-1.277-0.019-1.875,0.225c-0.599,0.241-1.111,0.633-1.539,1.174c-0.632,0.801-0.89,1.696-0.771,2.687
                                    s0.57,1.795,1.354,2.414c0.523,0.413,1.108,0.669,1.753,0.767s1.266,0.025,1.863-0.218s1.108-0.634,1.534-1.172
                                    c0.422-0.535,0.68-1.116,0.772-1.747c0.092-0.629,0.015-1.252-0.232-1.869C341.224,254.59,340.847,254.081,340.339,253.679z" />
        <path fill="#FFFFFF" d="M345.638,257.077l0.673,0.533l-4.811,6.088l2.593,2.049l-0.514,0.65l-3.266-2.581L345.638,257.077z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M305.238,307.248l0.357-0.379c0.459,0.474,0.887,0.656,1.284,0.545c0.17-0.047,0.318-0.132,0.445-0.253
                                    c0.128-0.121,0.212-0.258,0.253-0.413c0.041-0.156,0.04-0.308-0.001-0.458c-0.048-0.169-0.151-0.32-0.312-0.451
                                    c-0.222-0.18-0.586-0.371-1.095-0.57c-0.512-0.201-0.84-0.359-0.982-0.473c-0.245-0.189-0.407-0.423-0.484-0.7
                                    c-0.062-0.221-0.065-0.437-0.01-0.647c0.055-0.211,0.164-0.396,0.326-0.553c0.163-0.158,0.356-0.268,0.582-0.331
                                    c0.238-0.066,0.479-0.07,0.719-0.01c0.241,0.061,0.522,0.217,0.843,0.469l-0.326,0.429c-0.262-0.199-0.471-0.32-0.627-0.364
                                    c-0.157-0.042-0.314-0.042-0.473,0.002c-0.205,0.057-0.354,0.165-0.45,0.326c-0.095,0.16-0.117,0.331-0.066,0.512
                                    c0.031,0.109,0.084,0.21,0.158,0.301c0.075,0.09,0.189,0.18,0.346,0.267c0.084,0.046,0.35,0.154,0.796,0.324
                                    c0.528,0.202,0.91,0.405,1.144,0.613c0.233,0.208,0.386,0.439,0.457,0.694c0.103,0.367,0.052,0.725-0.151,1.073
                                    c-0.204,0.35-0.506,0.579-0.905,0.69c-0.308,0.086-0.609,0.083-0.905-0.012C305.864,307.785,305.557,307.575,305.238,307.248z" />
        <path fill="#FFFFFF" d="M308.364,303.57l0.354-0.099l0.894,3.205l1.364-0.38l0.096,0.342l-1.719,0.479L308.364,303.57z" />
        <path fill="#FFFFFF" d="M310.646,302.935l0.354-0.099l0.894,3.205l1.364-0.38l0.096,0.342l-1.719,0.479L310.646,302.935z" />
        <path fill="#FFFFFF" d="M314.376,301.895l2.643,3.085l-0.383,0.107l-0.883-1.011l-1.528,0.426l-0.228,1.321l-0.396,0.11
                                    l0.688-4.014L314.376,301.895z M314.541,302.661l-0.25,1.453l1.213-0.338L314.541,302.661z" />
        <path fill="#FFFFFF" d="M316.58,301.28l0.361-0.101l0.371,1.331l1.047-1.726l0.477-0.133l-1.26,2.067l2.381,1.443l-0.473,0.131
                                    l-2.015-1.218l0.461,1.651l-0.362,0.101L316.58,301.28z" />
        <path fill="#FFFFFF" d="M321.161,299.906c0.537-0.149,1.037-0.095,1.499,0.162c0.462,0.258,0.767,0.648,0.912,1.173
                                    c0.145,0.519,0.087,1.011-0.174,1.473c-0.26,0.463-0.649,0.767-1.169,0.911c-0.526,0.146-1.021,0.09-1.482-0.169
                                    c-0.463-0.259-0.765-0.645-0.908-1.156c-0.095-0.341-0.1-0.679-0.017-1.016c0.084-0.337,0.245-0.628,0.484-0.872
                                    C320.545,300.167,320.83,299.999,321.161,299.906z M321.273,300.248c-0.263,0.073-0.492,0.211-0.689,0.413
                                    c-0.196,0.202-0.329,0.437-0.396,0.705c-0.067,0.27-0.062,0.545,0.019,0.831c0.117,0.422,0.362,0.738,0.735,0.945
                                    c0.373,0.209,0.766,0.256,1.178,0.141c0.276-0.077,0.513-0.214,0.709-0.414c0.197-0.199,0.329-0.432,0.396-0.7
                                    s0.061-0.544-0.019-0.827c-0.078-0.281-0.215-0.518-0.409-0.709c-0.195-0.192-0.431-0.322-0.707-0.393
                                    C321.813,300.171,321.541,300.173,321.273,300.248z" />
        <path fill="#FFFFFF" d="M327.277,299.007l-0.221,0.293c-0.21-0.157-0.438-0.258-0.684-0.302c-0.245-0.043-0.496-0.029-0.755,0.043
                                    c-0.283,0.079-0.526,0.219-0.729,0.423c-0.203,0.202-0.339,0.437-0.408,0.703c-0.069,0.265-0.063,0.542,0.017,0.828
                                    c0.121,0.433,0.369,0.752,0.747,0.959c0.377,0.208,0.792,0.248,1.243,0.122c0.496-0.139,0.858-0.449,1.084-0.932l0.339,0.135
                                    c-0.114,0.274-0.286,0.509-0.517,0.706c-0.23,0.196-0.509,0.341-0.835,0.432c-0.62,0.173-1.167,0.103-1.641-0.211
                                    c-0.398-0.265-0.666-0.645-0.804-1.138c-0.145-0.519-0.084-1.007,0.181-1.462c0.266-0.457,0.672-0.762,1.221-0.915
                                    c0.331-0.092,0.648-0.109,0.951-0.053C326.771,298.697,327.04,298.819,327.277,299.007z" />
        <path fill="#FFFFFF" d="M329.707,297.621l0.354-0.099l0.989,3.547l-0.354,0.099L329.707,297.621z" />
        <path fill="#FFFFFF" d="M332.586,295.179l1.009-0.281c0.579-0.161,0.977-0.245,1.192-0.25c0.31-0.009,0.587,0.071,0.832,0.242
                                    c0.246,0.171,0.415,0.423,0.509,0.759c0.095,0.337,0.082,0.64-0.036,0.91c-0.118,0.269-0.323,0.486-0.616,0.649
                                    c-0.215,0.119-0.637,0.266-1.267,0.441l-0.361,0.101l0.657,2.356l-0.507,0.141L332.586,295.179z M333.23,295.534l0.479,1.72
                                    l0.86-0.229c0.347-0.097,0.592-0.199,0.734-0.307c0.144-0.107,0.241-0.244,0.294-0.412c0.053-0.166,0.055-0.336,0.006-0.511
                                    c-0.047-0.17-0.137-0.313-0.268-0.428c-0.131-0.116-0.28-0.182-0.447-0.2c-0.167-0.017-0.422,0.021-0.764,0.117L333.23,295.534z" />
        <path fill="#FFFFFF" d="M338.667,295.026c0.537-0.15,1.037-0.096,1.499,0.162c0.462,0.257,0.767,0.648,0.912,1.173
                                    c0.145,0.519,0.087,1.01-0.174,1.472c-0.26,0.463-0.65,0.767-1.169,0.911c-0.526,0.147-1.021,0.09-1.482-0.168
                                    c-0.463-0.26-0.766-0.645-0.908-1.156c-0.095-0.341-0.1-0.68-0.017-1.017c0.084-0.337,0.245-0.628,0.483-0.871
                                    C338.051,295.287,338.336,295.118,338.667,295.026z M338.779,295.367c-0.263,0.073-0.492,0.211-0.689,0.413
                                    c-0.196,0.202-0.329,0.437-0.396,0.705c-0.067,0.27-0.062,0.545,0.019,0.831c0.117,0.422,0.362,0.738,0.735,0.945
                                    c0.373,0.209,0.766,0.256,1.178,0.141c0.276-0.077,0.513-0.214,0.709-0.414c0.197-0.199,0.329-0.432,0.396-0.699
                                    c0.066-0.269,0.061-0.544-0.019-0.828c-0.078-0.281-0.215-0.518-0.409-0.708c-0.195-0.192-0.431-0.322-0.707-0.393
                                    S339.047,295.292,338.779,295.367z" />
        <path fill="#FFFFFF" d="M341.733,297.379l0.251-0.266c0.321,0.333,0.621,0.458,0.899,0.381c0.118-0.033,0.223-0.092,0.312-0.176
                                    c0.089-0.084,0.148-0.181,0.177-0.29c0.028-0.108,0.028-0.214-0.001-0.32c-0.033-0.118-0.105-0.224-0.218-0.315
                                    c-0.155-0.127-0.41-0.26-0.767-0.4c-0.358-0.141-0.587-0.252-0.688-0.331c-0.172-0.132-0.285-0.295-0.339-0.49
                                    c-0.043-0.154-0.045-0.306-0.007-0.454c0.039-0.148,0.115-0.276,0.229-0.387c0.114-0.111,0.25-0.188,0.407-0.232
                                    c0.167-0.046,0.335-0.048,0.504-0.005c0.168,0.041,0.364,0.15,0.589,0.328l-0.229,0.299c-0.183-0.14-0.328-0.223-0.438-0.253
                                    c-0.109-0.03-0.22-0.03-0.331,0.001c-0.143,0.04-0.248,0.115-0.314,0.228c-0.066,0.113-0.082,0.231-0.047,0.358
                                    c0.021,0.077,0.059,0.149,0.111,0.212c0.052,0.063,0.133,0.125,0.241,0.187c0.06,0.033,0.245,0.107,0.557,0.228
                                    c0.371,0.141,0.638,0.283,0.802,0.428c0.163,0.145,0.27,0.307,0.319,0.485c0.071,0.257,0.036,0.508-0.106,0.751
                                    c-0.143,0.245-0.354,0.406-0.633,0.484c-0.216,0.06-0.428,0.057-0.634-0.009C342.172,297.754,341.957,297.608,341.733,297.379z" />
        <path fill="#FFFFFF" d="M343.75,293.706l0.354-0.099l0.415,1.488l1.807-0.504l-0.415-1.488l0.354-0.099l0.988,3.547l-0.354,0.099
                                    l-0.477-1.712l-1.807,0.504l0.478,1.712l-0.355,0.099L343.75,293.706z" />
        <path fill="#FFFFFF" d="M346.873,293.208l-0.097-0.347l1.943-0.542l0.097,0.347l-0.79,0.221l0.892,3.2l-0.361,0.101l-0.893-3.2
                                    L346.873,293.208z" />
        <path fill="#FFFFFF" d="M349.233,292.177l2.033-0.566l0.097,0.347l-1.679,0.468l0.31,1.112l1.664-0.464l0.097,0.347l-1.664,0.464
                                    l0.389,1.395l1.664-0.464l0.097,0.347l-2.018,0.563L349.233,292.177z M349.544,291.194c0.077-0.021,0.151-0.013,0.221,0.027
                                    c0.07,0.04,0.116,0.097,0.138,0.174s0.012,0.151-0.027,0.221s-0.098,0.116-0.175,0.137s-0.15,0.012-0.221-0.027
                                    c-0.07-0.039-0.115-0.098-0.137-0.175s-0.013-0.15,0.026-0.22C349.409,291.261,349.467,291.215,349.544,291.194z M350.528,290.919
                                    c0.077-0.021,0.15-0.013,0.221,0.027c0.069,0.04,0.115,0.097,0.137,0.174s0.013,0.151-0.027,0.221
                                    c-0.039,0.07-0.098,0.116-0.175,0.137s-0.15,0.013-0.221-0.027c-0.069-0.04-0.115-0.098-0.137-0.175s-0.012-0.15,0.027-0.22
                                    S350.451,290.941,350.528,290.919z" />
        <path fill="#FFFFFF" d="M352.706,295.031l-0.48-3.688l0.058-0.016l2.253,2.508l0.617-3.308l0.057-0.016l1.499,3.405l-0.347,0.097
                                    l-1.058-2.439l-0.548,2.887l-0.091,0.025l-1.981-2.202l0.364,2.653L352.706,295.031z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M350.271,339.469l0.333-0.649c0.802,0.456,1.448,0.531,1.938,0.226c0.21-0.131,0.376-0.302,0.499-0.515
                                    c0.123-0.212,0.182-0.43,0.176-0.654c-0.005-0.225-0.065-0.429-0.181-0.612c-0.131-0.21-0.33-0.371-0.596-0.484
                                    c-0.369-0.156-0.934-0.268-1.695-0.336c-0.766-0.068-1.268-0.151-1.504-0.247c-0.404-0.157-0.713-0.407-0.926-0.75
                                    c-0.169-0.271-0.259-0.56-0.268-0.865c-0.01-0.306,0.064-0.596,0.221-0.872c0.155-0.276,0.373-0.501,0.65-0.674
                                    c0.295-0.183,0.615-0.282,0.963-0.296c0.347-0.013,0.784,0.086,1.314,0.299l-0.27,0.703c-0.429-0.165-0.757-0.245-0.984-0.242
                                    c-0.228,0.004-0.439,0.068-0.634,0.19c-0.252,0.157-0.41,0.361-0.475,0.613c-0.064,0.253-0.027,0.491,0.112,0.715
                                    c0.085,0.136,0.195,0.25,0.331,0.342c0.136,0.092,0.326,0.167,0.57,0.224c0.131,0.027,0.53,0.067,1.196,0.121
                                    c0.79,0.062,1.381,0.187,1.777,0.373c0.395,0.187,0.69,0.437,0.886,0.75c0.282,0.453,0.356,0.955,0.22,1.503
                                    c-0.136,0.549-0.45,0.976-0.943,1.283c-0.379,0.236-0.787,0.349-1.222,0.339C351.323,339.944,350.827,339.782,350.271,339.469z" />
        <path fill="#FFFFFF" d="M353.021,333.301l0.438-0.272l2.461,3.951l1.683-1.048l0.263,0.422l-2.12,1.32L353.021,333.301z" />
        <path fill="#FFFFFF" d="M355.833,331.549l0.437-0.272l2.461,3.951l1.683-1.048l0.263,0.422l-2.12,1.32L355.833,331.549z" />
        <path fill="#FFFFFF" d="M360.433,328.684l4.764,3.103l-0.472,0.294l-1.585-1.011l-1.884,1.174l0.215,1.864l-0.487,0.304
                                    l-0.658-5.661L360.433,328.684z M360.957,329.646l0.237,2.05l1.496-0.932L360.957,329.646z" />
        <path fill="#FFFFFF" d="M363.15,326.991l0.446-0.278l1.022,1.641l0.726-2.73l0.587-0.366l-0.878,3.271l3.767,1l-0.583,0.363
                                    l-3.186-0.843l1.27,2.037l-0.446,0.278L363.15,326.991z" />
        <path fill="#FFFFFF" d="M368.763,323.342c0.662-0.413,1.354-0.538,2.076-0.373c0.721,0.164,1.283,0.568,1.686,1.215
                                    c0.398,0.64,0.515,1.322,0.348,2.046c-0.168,0.723-0.572,1.284-1.213,1.683c-0.648,0.404-1.334,0.522-2.057,0.356
                                    c-0.723-0.165-1.28-0.563-1.673-1.194c-0.262-0.42-0.402-0.873-0.423-1.357c-0.02-0.485,0.083-0.939,0.307-1.361
                                    C368.037,323.934,368.354,323.597,368.763,323.342z M369.046,323.755c-0.324,0.202-0.578,0.478-0.762,0.826
                                    c-0.186,0.349-0.271,0.717-0.255,1.104c0.016,0.388,0.132,0.757,0.351,1.107c0.324,0.52,0.778,0.847,1.361,0.979
                                    c0.583,0.134,1.129,0.042,1.637-0.274c0.339-0.211,0.602-0.489,0.789-0.834c0.186-0.344,0.271-0.709,0.255-1.096
                                    c-0.016-0.387-0.133-0.755-0.35-1.104c-0.216-0.347-0.493-0.61-0.83-0.79c-0.337-0.181-0.705-0.264-1.103-0.248
                                    C369.74,323.44,369.376,323.55,369.046,323.755z" />
        <path fill="#FFFFFF" d="M376.62,319.728l-0.18,0.479c-0.345-0.128-0.69-0.174-1.037-0.137c-0.346,0.039-0.679,0.157-0.998,0.356
                                    c-0.349,0.217-0.62,0.502-0.813,0.855c-0.192,0.353-0.283,0.722-0.271,1.105c0.012,0.385,0.128,0.753,0.349,1.105
                                    c0.332,0.533,0.792,0.865,1.379,0.993c0.588,0.13,1.161,0.02,1.718-0.327c0.612-0.381,0.975-0.94,1.089-1.676l0.508,0.047
                                    c-0.045,0.413-0.184,0.796-0.416,1.151c-0.231,0.355-0.548,0.659-0.95,0.909c-0.766,0.477-1.527,0.597-2.287,0.363
                                    c-0.639-0.199-1.147-0.603-1.526-1.211c-0.398-0.641-0.51-1.318-0.333-2.036c0.177-0.716,0.603-1.285,1.279-1.707
                                    c0.408-0.254,0.826-0.403,1.257-0.446C375.817,319.508,376.228,319.566,376.62,319.728z" />
        <path fill="#FFFFFF" d="M379.337,316.908l0.437-0.272l2.725,4.373l-0.437,0.272L379.337,316.908z" />
        <path fill="#FFFFFF" d="M382.249,312.492l3.58-2.23l0.381,0.611l-2.956,1.842l1.22,1.958l2.931-1.826l0.381,0.611l-2.931,1.826
                                    l1.529,2.456l2.931-1.826l0.382,0.611l-3.556,2.215L382.249,312.492z" />
        <path fill="#FFFFFF" d="M387.845,311.608l0.871-0.542c0.5-0.311,0.85-0.5,1.052-0.564c0.288-0.094,0.571-0.095,0.849-0.002
                                    c0.278,0.093,0.507,0.284,0.687,0.573c0.181,0.291,0.253,0.579,0.217,0.866c-0.037,0.285-0.17,0.546-0.401,0.779
                                    c-0.168,0.171-0.524,0.427-1.067,0.765l-0.312,0.195l1.267,2.033l-0.437,0.272L387.845,311.608z M388.548,311.764l0.924,1.483
                                    l0.746-0.453c0.3-0.187,0.501-0.35,0.606-0.491c0.105-0.14,0.16-0.296,0.163-0.467c0.003-0.17-0.042-0.332-0.136-0.482
                                    c-0.091-0.146-0.214-0.255-0.369-0.328c-0.154-0.072-0.313-0.093-0.476-0.063c-0.161,0.029-0.39,0.136-0.686,0.32L388.548,311.764
                                    z" />
        <path fill="#FFFFFF" d="M391.484,307.917c0.095-0.059,0.198-0.076,0.307-0.051c0.109,0.026,0.193,0.085,0.253,0.181
                                    s0.076,0.198,0.051,0.307c-0.025,0.109-0.086,0.193-0.181,0.252c-0.095,0.06-0.197,0.077-0.307,0.052
                                    c-0.109-0.026-0.193-0.086-0.253-0.182c-0.059-0.096-0.076-0.198-0.051-0.307C391.329,308.062,391.389,307.977,391.484,307.917z
                                     M391.454,309.36l2.507-1.562l0.267,0.428l-2.069,1.289l0.854,1.371l2.052-1.278l0.267,0.428l-2.052,1.278l1.07,1.718l2.052-1.278
                                    l0.267,0.429l-2.489,1.55L391.454,309.36z M392.697,307.162c0.095-0.06,0.198-0.076,0.307-0.051
                                    c0.109,0.025,0.194,0.085,0.253,0.181c0.06,0.096,0.076,0.198,0.051,0.307c-0.025,0.109-0.086,0.193-0.181,0.252
                                    c-0.095,0.059-0.197,0.077-0.307,0.051c-0.109-0.025-0.193-0.085-0.253-0.181c-0.059-0.096-0.076-0.198-0.051-0.307
                                    C392.542,307.306,392.602,307.221,392.697,307.162z" />
        <path fill="#FFFFFF" d="M394.739,307.313l0.872-0.542c0.485-0.302,0.827-0.488,1.024-0.556c0.297-0.102,0.588-0.106,0.872-0.012
                                    c0.285,0.094,0.515,0.285,0.694,0.57c0.148,0.238,0.223,0.483,0.224,0.733c0,0.25-0.075,0.486-0.226,0.708
                                    c-0.151,0.221-0.408,0.448-0.774,0.678l2.838,1.051l-0.541,0.337l-2.838-1.051l-0.248,0.154l1.266,2.031l-0.438,0.272
                                    L394.739,307.313z M395.443,307.469l0.926,1.486l0.758-0.463c0.292-0.182,0.49-0.344,0.596-0.487
                                    c0.105-0.143,0.159-0.299,0.161-0.47c0.003-0.171-0.043-0.331-0.137-0.481c-0.091-0.146-0.214-0.256-0.368-0.325
                                    c-0.154-0.071-0.312-0.092-0.474-0.063c-0.16,0.029-0.391,0.137-0.69,0.324L395.443,307.469z" />
        <path fill="#FFFFFF" d="M400.937,309.523l-2.098-4.763l0.071-0.044l4.014,2.48l-0.475-4.685l0.07-0.043l3.354,3.981l-0.428,0.267
                                    l-2.38-2.859l0.401,4.091l-0.111,0.069l-3.528-2.176l1.534,3.419L400.937,309.523z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M494.435,300.795l-1.484-0.288c0.206-1.065,0.167-2.093-0.114-3.08c-0.282-0.989-0.791-1.897-1.526-2.728
                                    c-0.804-0.907-1.766-1.554-2.887-1.942c-1.121-0.387-2.237-0.468-3.349-0.242c-1.112,0.225-2.126,0.745-3.044,1.558
                                    c-1.387,1.229-2.122,2.731-2.208,4.503c-0.084,1.774,0.515,3.385,1.798,4.833c1.412,1.594,3.216,2.373,5.414,2.34l0.115,1.5
                                    c-1.225,0.073-2.41-0.14-3.556-0.64c-1.146-0.498-2.183-1.271-3.11-2.317c-1.764-1.99-2.492-4.146-2.186-6.47
                                    c0.264-1.955,1.188-3.634,2.771-5.037c1.665-1.476,3.583-2.133,5.755-1.973c2.171,0.16,4.036,1.12,5.594,2.878
                                    c0.941,1.062,1.581,2.207,1.919,3.434C494.675,298.354,494.708,299.578,494.435,300.795z" />
        <path fill="#FFFFFF" d="M494.791,303.819l4.043,4.563l-0.779,0.691l-3.338-3.768l-2.495,2.211l3.31,3.735l-0.78,0.691l-3.31-3.735
                                    l-3.128,2.772l3.31,3.735l-0.78,0.691l-4.015-4.531L494.791,303.819z M497.737,303.382c0.153,0.174,0.224,0.376,0.21,0.607
                                    c-0.014,0.232-0.107,0.424-0.281,0.578c-0.173,0.154-0.376,0.223-0.607,0.209c-0.231-0.013-0.425-0.107-0.578-0.281
                                    c-0.153-0.173-0.223-0.375-0.209-0.606s0.107-0.424,0.281-0.578c0.173-0.153,0.375-0.223,0.607-0.208
                                    S497.584,303.209,497.737,303.382z M499.695,305.591c0.153,0.173,0.223,0.375,0.209,0.606c-0.014,0.232-0.107,0.424-0.281,0.578
                                    c-0.173,0.154-0.375,0.223-0.607,0.209c-0.231-0.013-0.424-0.107-0.577-0.28c-0.154-0.173-0.223-0.375-0.209-0.606
                                    c0.014-0.232,0.107-0.424,0.281-0.578c0.173-0.153,0.376-0.223,0.607-0.208C499.349,305.324,499.541,305.418,499.695,305.591z" />
        <path fill="#FFFFFF" d="M500.092,309.801l1.405,1.587c0.783,0.884,1.277,1.515,1.484,1.893c0.311,0.569,0.418,1.158,0.325,1.77
                                    c-0.094,0.611-0.4,1.148-0.921,1.609c-0.434,0.384-0.905,0.62-1.415,0.708c-0.509,0.087-1.016,0.015-1.52-0.214
                                    c-0.503-0.23-1.053-0.677-1.648-1.342l-1.16,6.14l-0.873-0.984l1.16-6.14l-0.398-0.45l-3.697,3.276l-0.705-0.796L500.092,309.801z
                                     M500.017,311.288l-2.707,2.398l1.205,1.381c0.471,0.531,0.87,0.879,1.197,1.044c0.326,0.166,0.664,0.222,1.013,0.167
                                    s0.66-0.203,0.935-0.446c0.267-0.236,0.445-0.524,0.536-0.862c0.09-0.338,0.078-0.666-0.037-0.984
                                    c-0.114-0.317-0.413-0.75-0.897-1.295L500.017,311.288z" />
        <path fill="#FFFFFF" d="M498.058,323.548l7.963-7.056l0.153,0.173l-1.408,10.708l6.104-5.409l0.695,0.785l-7.962,7.056
                                    l-0.159-0.18l1.372-10.599l-6.029,5.343L498.058,323.548z" />
        <path fill="#FFFFFF" d="M513.182,324.573l0.705,0.796l-7.962,7.056l-0.706-0.796L513.182,324.573z" />
        <path fill="#FFFFFF" d="M520.597,335.918l-1.039-0.2c0.145-0.746,0.118-1.465-0.08-2.157c-0.197-0.692-0.554-1.328-1.069-1.909
                                    c-0.563-0.636-1.236-1.087-2.021-1.359c-0.784-0.271-1.566-0.328-2.344-0.17c-0.778,0.159-1.488,0.522-2.13,1.091
                                    c-0.971,0.86-1.486,1.91-1.546,3.151c-0.06,1.242,0.36,2.37,1.259,3.384c0.989,1.115,2.251,1.661,3.79,1.638l0.08,1.049
                                    c-0.857,0.051-1.687-0.098-2.489-0.447c-0.802-0.349-1.527-0.89-2.177-1.623c-1.234-1.394-1.744-2.903-1.53-4.529
                                    c0.186-1.368,0.832-2.543,1.939-3.525c1.166-1.033,2.509-1.494,4.029-1.38c1.52,0.111,2.825,0.783,3.916,2.014
                                    c0.659,0.743,1.106,1.544,1.343,2.404C520.766,334.209,520.789,335.066,520.597,335.918z" />
        <path fill="#FFFFFF" d="M526.373,339.459l-4.673,10.769l-0.762-0.859l1.511-3.574l-3.04-3.431l-3.72,1.082l-0.786-0.888
                                    l11.296-3.294L526.373,339.459z M524.592,340.857l-4.092,1.189l2.413,2.723L524.592,340.857z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M462.916,332.684l0.391,0.441l-1.625,1.44l3.16,0.291l0.515,0.582l-3.787-0.357l-0.401,4.358l-0.511-0.577
                                    l0.335-3.687l-2.018,1.788l-0.391-0.441L462.916,332.684z" />
        <path fill="#FFFFFF" d="M464.647,337.256l0.536,0.604c0.298,0.336,0.486,0.577,0.565,0.722c0.118,0.216,0.159,0.44,0.124,0.673
                                    c-0.036,0.233-0.153,0.438-0.351,0.613c-0.165,0.146-0.345,0.236-0.539,0.27c-0.194,0.032-0.387,0.005-0.579-0.082
                                    c-0.191-0.087-0.401-0.258-0.628-0.511l-0.441,2.338l-0.333-0.374l0.441-2.339l-0.151-0.171l-1.408,1.248l-0.269-0.304
                                    L464.647,337.256z M464.62,337.823l-1.031,0.913l0.459,0.526c0.179,0.201,0.331,0.334,0.455,0.396
                                    c0.125,0.063,0.252,0.085,0.386,0.064c0.132-0.021,0.25-0.077,0.355-0.17c0.102-0.091,0.169-0.199,0.204-0.328
                                    c0.035-0.128,0.03-0.254-0.013-0.375c-0.044-0.121-0.158-0.285-0.342-0.493L464.62,337.823z" />
        <path fill="#FFFFFF" d="M468.001,341.04l-1.779,4.102l-0.29-0.327l0.575-1.361l-1.158-1.307l-1.416,0.413l-0.3-0.339l4.302-1.255
                                    L468.001,341.04z M467.323,341.573l-1.558,0.453l0.919,1.037L467.323,341.573z" />
        <path fill="#FFFFFF" d="M469.466,342.693l0.292,0.329l-1.452,3.081l3.248-1.055l0.292,0.329l-4.201,1.369l-0.059-0.066
                                    L469.466,342.693z" />
        <path fill="#FFFFFF" d="M473.396,347.127l-1.78,4.102l-0.29-0.327l0.575-1.361l-1.157-1.307l-1.416,0.413l-0.3-0.339l4.301-1.255
                                    L473.396,347.127z M472.717,347.66l-1.558,0.453l0.919,1.037L472.717,347.66z" />
        <path fill="#FFFFFF" d="M475.078,349.027l0.536,0.604c0.298,0.337,0.486,0.577,0.565,0.722c0.118,0.216,0.159,0.441,0.124,0.674
                                    c-0.036,0.232-0.152,0.438-0.351,0.613c-0.165,0.146-0.345,0.235-0.54,0.269c-0.193,0.033-0.387,0.006-0.578-0.082
                                    c-0.192-0.087-0.401-0.257-0.628-0.511l-0.441,2.339l-0.333-0.375l0.441-2.339l-0.151-0.171l-1.408,1.248l-0.269-0.303
                                    L475.078,349.027z M475.051,349.594l-1.031,0.913l0.459,0.526c0.179,0.202,0.331,0.334,0.456,0.397
                                    c0.124,0.063,0.253,0.084,0.386,0.064c0.132-0.021,0.25-0.077,0.355-0.17c0.102-0.091,0.169-0.2,0.205-0.329
                                    c0.034-0.128,0.03-0.253-0.014-0.374c-0.044-0.122-0.157-0.285-0.342-0.494L475.051,349.594z" />
        <path fill="#FFFFFF" d="M477.296,351.529l0.269,0.303l-3.032,2.688l-0.268-0.303L477.296,351.529z" />
        <path fill="#FFFFFF" d="M480.12,355.85l-0.396-0.077c0.055-0.283,0.045-0.558-0.03-0.82c-0.075-0.264-0.211-0.507-0.406-0.728
                                    c-0.214-0.241-0.471-0.414-0.77-0.518c-0.299-0.103-0.596-0.125-0.892-0.064c-0.296,0.061-0.567,0.199-0.812,0.415
                                    c-0.37,0.328-0.565,0.729-0.589,1.2c-0.022,0.474,0.138,0.903,0.48,1.289c0.376,0.425,0.857,0.633,1.443,0.623l0.031,0.4
                                    c-0.327,0.019-0.643-0.038-0.948-0.17c-0.305-0.134-0.582-0.34-0.829-0.618c-0.47-0.53-0.665-1.104-0.583-1.726
                                    c0.071-0.52,0.317-0.968,0.739-1.342c0.444-0.394,0.955-0.568,1.534-0.525c0.579,0.043,1.076,0.298,1.491,0.767
                                    c0.25,0.282,0.421,0.588,0.511,0.916C480.184,355.198,480.193,355.525,480.12,355.85z" />
        <path fill="#FFFFFF" d="M482.319,357.197l-1.78,4.102l-0.29-0.328l0.575-1.361l-1.157-1.306l-1.416,0.412l-0.3-0.338l4.301-1.255
                                    L482.319,357.197z M481.64,357.73l-1.558,0.452l0.919,1.037L481.64,357.73z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M503.124,362.129l0.417,0.472l-2.074,4.401l4.639-1.507l0.417,0.471l-6.001,1.954l-0.083-0.094
                                    L503.124,362.129z" />
        <path fill="#FFFFFF" d="M505.742,367.702l0.536,0.604c0.298,0.336,0.486,0.577,0.564,0.722c0.118,0.216,0.159,0.44,0.125,0.673
                                    c-0.036,0.233-0.153,0.438-0.351,0.613c-0.165,0.146-0.345,0.236-0.539,0.27c-0.194,0.032-0.387,0.006-0.579-0.082
                                    c-0.191-0.087-0.401-0.258-0.628-0.511l-0.441,2.338l-0.332-0.374l0.441-2.339l-0.152-0.171l-1.408,1.248l-0.269-0.304
                                    L505.742,367.702z M505.714,368.27l-1.031,0.913l0.459,0.526c0.179,0.201,0.331,0.334,0.455,0.396
                                    c0.125,0.063,0.252,0.085,0.386,0.064c0.132-0.021,0.25-0.077,0.355-0.17c0.102-0.091,0.169-0.199,0.204-0.328
                                    c0.035-0.128,0.03-0.254-0.014-0.375c-0.044-0.121-0.157-0.285-0.342-0.493L505.714,368.27z" />
        <path fill="#FFFFFF" d="M509.097,371.487l-1.779,4.102l-0.29-0.328l0.575-1.361l-1.158-1.306l-1.416,0.413l-0.3-0.339l4.301-1.255
                                    L509.097,371.487z M508.418,372.021l-1.558,0.452l0.919,1.037L508.418,372.021z" />
        <path fill="#FFFFFF" d="M510.764,373.369l0.535,0.604c0.307,0.347,0.499,0.594,0.576,0.742c0.111,0.21,0.149,0.43,0.113,0.656
                                    c-0.035,0.228-0.152,0.432-0.353,0.609c-0.202,0.179-0.417,0.271-0.643,0.281c-0.227,0.009-0.445-0.061-0.658-0.209
                                    c-0.155-0.108-0.399-0.351-0.732-0.727l-0.192-0.217l-1.41,1.25l-0.269-0.303L510.764,373.369z M510.736,373.936l-1.029,0.911
                                    l0.449,0.52c0.184,0.207,0.337,0.342,0.46,0.404c0.124,0.063,0.251,0.085,0.384,0.064c0.133-0.02,0.252-0.075,0.356-0.168
                                    c0.101-0.09,0.169-0.2,0.206-0.329c0.035-0.13,0.031-0.255-0.013-0.377c-0.045-0.122-0.157-0.285-0.338-0.489L510.736,373.936z" />
        <path fill="#FFFFFF" d="M511.1,379.857l0.161,0.181l-0.276,0.182c0.033,0.028,0.057,0.053,0.076,0.074
                                    c0.06,0.067,0.089,0.143,0.087,0.225s-0.035,0.151-0.098,0.208c-0.091,0.08-0.204,0.107-0.34,0.08
                                    c-0.136-0.026-0.271-0.115-0.403-0.265c-0.108-0.122-0.189-0.254-0.243-0.398l0.182-0.081c0.051,0.113,0.109,0.206,0.178,0.284
                                    c0.091,0.103,0.167,0.164,0.229,0.183c0.063,0.019,0.112,0.011,0.151-0.023c0.023-0.021,0.034-0.05,0.032-0.088
                                    c-0.002-0.039-0.021-0.079-0.056-0.118c-0.03-0.034-0.078-0.075-0.147-0.128L511.1,379.857z M514.918,379.191l-0.395-0.076
                                    c0.055-0.283,0.045-0.559-0.03-0.821s-0.211-0.506-0.406-0.727c-0.214-0.242-0.472-0.415-0.771-0.519
                                    c-0.299-0.103-0.596-0.124-0.892-0.063c-0.296,0.061-0.567,0.198-0.812,0.414c-0.37,0.328-0.565,0.729-0.588,1.201
                                    c-0.023,0.473,0.137,0.902,0.479,1.288c0.376,0.425,0.857,0.633,1.443,0.624l0.03,0.399c-0.326,0.019-0.642-0.038-0.947-0.17
                                    c-0.305-0.133-0.582-0.339-0.829-0.617c-0.47-0.531-0.664-1.105-0.583-1.726c0.07-0.521,0.317-0.969,0.739-1.343
                                    c0.444-0.394,0.955-0.567,1.534-0.524c0.579,0.042,1.076,0.297,1.491,0.766c0.25,0.283,0.421,0.589,0.511,0.916
                                    C514.983,378.541,514.992,378.867,514.918,379.191z" />
        <path fill="#FFFFFF" d="M515.982,379.258l0.268,0.303l-3.032,2.688l-0.268-0.303L515.982,379.258z" />
        <path fill="#FFFFFF" d="M516.415,385.191l-0.17,0.954l-0.331-0.373l0.119-0.656c-0.373-0.112-0.696-0.324-0.971-0.634
                                    c-0.398-0.449-0.58-0.965-0.546-1.546c0.034-0.582,0.27-1.066,0.707-1.454c0.292-0.258,0.625-0.427,0.999-0.507
                                    c0.375-0.078,0.74-0.06,1.097,0.061c0.356,0.12,0.663,0.325,0.921,0.615c0.398,0.45,0.58,0.965,0.546,1.545
                                    c-0.035,0.58-0.275,1.068-0.723,1.466c-0.234,0.207-0.484,0.355-0.753,0.442C517.041,385.19,516.743,385.22,516.415,385.191z
                                     M516.486,384.794c0.491,0.036,0.925-0.112,1.302-0.446c0.241-0.214,0.409-0.463,0.504-0.747c0.095-0.285,0.111-0.58,0.048-0.887
                                    c-0.064-0.308-0.195-0.574-0.395-0.799c-0.201-0.227-0.449-0.39-0.742-0.486c-0.294-0.099-0.59-0.115-0.889-0.053
                                    c-0.299,0.064-0.57,0.203-0.813,0.419c-0.36,0.319-0.554,0.714-0.582,1.183s0.114,0.878,0.426,1.229
                                    c0.213,0.24,0.466,0.409,0.76,0.505l0.258-1.435l0.327,0.368L516.486,384.794z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M420.577,203.033h2.606c1.495,0,2.503,0.065,3.024,0.196c0.748,0.184,1.358,0.562,1.833,1.134
                                    c0.474,0.572,0.711,1.292,0.711,2.157c0,0.872-0.231,1.591-0.694,2.157s-1.1,0.947-1.913,1.143
                                    c-0.593,0.143-1.702,0.213-3.327,0.213h-0.934v6.085h-1.308V203.033z M421.884,204.314v4.439l2.215,0.026
                                    c0.895,0,1.551-0.081,1.966-0.244c0.415-0.163,0.741-0.426,0.979-0.791c0.237-0.364,0.356-0.771,0.356-1.221
                                    c0-0.438-0.119-0.839-0.356-1.203c-0.237-0.364-0.55-0.623-0.938-0.777c-0.389-0.154-1.024-0.23-1.908-0.23H421.884z" />
        <path fill="#FFFFFF" d="M435.251,206.728c1.388,0,2.549,0.463,3.483,1.389s1.402,2.065,1.402,3.419
                                    c0,1.341-0.466,2.478-1.399,3.412s-2.07,1.401-3.412,1.401c-1.358,0-2.505-0.465-3.439-1.395c-0.935-0.93-1.402-2.055-1.402-3.375
                                    c0-0.88,0.213-1.696,0.639-2.447s1.006-1.34,1.742-1.766C433.6,206.941,434.396,206.728,435.251,206.728z M435.292,207.619
                                    c-0.678,0-1.32,0.177-1.927,0.53s-1.081,0.829-1.422,1.427c-0.341,0.598-0.512,1.265-0.512,2c0,1.088,0.377,2.008,1.132,2.757
                                    c0.754,0.75,1.664,1.125,2.729,1.125c0.711,0,1.369-0.172,1.974-0.517s1.077-0.816,1.416-1.415
                                    c0.339-0.599,0.508-1.263,0.508-1.995c0-0.727-0.169-1.384-0.508-1.972s-0.816-1.059-1.432-1.412S435.982,207.619,435.292,207.619
                                    z" />
        <path fill="#FFFFFF" d="M441.98,216.119v-9.16h0.199l6.096,7.021v-7.021h0.903v9.16h-0.206l-6.046-6.936v6.936H441.98z" />
        <path fill="#FFFFFF" d="M451.415,206.958h5.249v0.897h-4.334v2.871h4.297v0.896h-4.297v3.6h4.297v0.896h-5.212V206.958z" />
        <path fill="#FFFFFF" d="M457.299,214.413l0.778-0.467c0.548,1.009,1.181,1.513,1.899,1.513c0.307,0,0.596-0.071,0.866-0.215
                                    c0.27-0.143,0.475-0.335,0.616-0.576s0.212-0.496,0.212-0.766c0-0.307-0.104-0.608-0.312-0.903
                                    c-0.286-0.407-0.81-0.897-1.569-1.47c-0.764-0.577-1.239-0.994-1.426-1.251c-0.324-0.432-0.486-0.899-0.486-1.401
                                    c0-0.398,0.096-0.762,0.287-1.09c0.191-0.328,0.46-0.586,0.807-0.775c0.346-0.188,0.723-0.283,1.13-0.283
                                    c0.432,0,0.835,0.107,1.211,0.321c0.375,0.214,0.773,0.607,1.192,1.18l-0.747,0.566c-0.345-0.457-0.639-0.757-0.881-0.903
                                    c-0.243-0.145-0.507-0.218-0.794-0.218c-0.37,0-0.671,0.112-0.906,0.336c-0.234,0.224-0.352,0.5-0.352,0.829
                                    c0,0.199,0.042,0.392,0.125,0.579c0.083,0.187,0.234,0.39,0.455,0.61c0.12,0.117,0.515,0.421,1.183,0.916
                                    c0.793,0.585,1.337,1.106,1.631,1.563c0.295,0.457,0.442,0.916,0.442,1.376c0,0.664-0.252,1.241-0.757,1.731
                                    s-1.118,0.735-1.84,0.735c-0.557,0-1.061-0.148-1.513-0.445C458.098,215.607,457.681,215.11,457.299,214.413z" />
        <path fill="#FFFFFF" d="M464.584,206.958h0.916v3.842h4.664v-3.842h0.916v9.16h-0.916v-4.421H465.5v4.421h-0.916V206.958z" />
        <path fill="#FFFFFF" d="M473.178,206.958h0.916v9.16h-0.916V206.958z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M463.621,140.446h2.58c1.038,0,1.836,0.123,2.393,0.369c0.558,0.246,0.998,0.625,1.321,1.134
                                    c0.323,0.51,0.485,1.077,0.485,1.699c0,0.581-0.142,1.11-0.425,1.588c-0.284,0.478-0.7,0.864-1.249,1.161
                                    c0.68,0.231,1.203,0.502,1.57,0.814c0.367,0.311,0.652,0.688,0.856,1.129c0.204,0.442,0.306,0.921,0.306,1.437
                                    c0,1.049-0.384,1.938-1.152,2.664c-0.768,0.727-1.798,1.09-3.091,1.09h-3.594V140.446z M464.902,141.727v4.19h0.749
                                    c0.909,0,1.578-0.084,2.006-0.254c0.428-0.169,0.767-0.436,1.017-0.8c0.25-0.365,0.375-0.77,0.375-1.214
                                    c0-0.599-0.21-1.069-0.629-1.41c-0.419-0.341-1.086-0.511-2.001-0.511H464.902z M464.902,147.233v5.017h1.622
                                    c0.957,0,1.657-0.093,2.103-0.28c0.445-0.187,0.803-0.479,1.074-0.876s0.406-0.827,0.406-1.29c0-0.581-0.19-1.088-0.57-1.521
                                    s-0.902-0.729-1.567-0.89c-0.446-0.107-1.221-0.16-2.327-0.16H464.902z" />
        <path fill="#FFFFFF" d="M473.619,144.372h1.825c1.017,0,1.706,0.042,2.067,0.125c0.543,0.125,0.986,0.392,1.326,0.801
                                    c0.34,0.41,0.511,0.914,0.511,1.512c0,0.499-0.118,0.938-0.352,1.315c-0.234,0.378-0.57,0.664-1.005,0.857
                                    c-0.436,0.193-1.038,0.292-1.806,0.296l3.294,4.253h-1.133l-3.294-4.253h-0.517v4.253h-0.916V144.372z M474.535,145.269v3.113
                                    l1.578,0.013c0.611,0,1.063-0.058,1.356-0.174c0.293-0.116,0.522-0.302,0.687-0.558c0.164-0.255,0.246-0.541,0.246-0.856
                                    c0-0.308-0.083-0.586-0.25-0.838c-0.166-0.251-0.384-0.431-0.655-0.539c-0.27-0.108-0.719-0.162-1.347-0.162H474.535z" />
        <path fill="#FFFFFF" d="M481.316,144.372h5.249v0.897h-4.334v2.871h4.297v0.896h-4.297v3.6h4.297v0.896h-5.212V144.372z" />
        <path fill="#FFFFFF" d="M487.2,151.826l0.778-0.467c0.548,1.009,1.181,1.513,1.899,1.513c0.307,0,0.596-0.071,0.866-0.215
                                    c0.27-0.143,0.475-0.335,0.616-0.576s0.212-0.496,0.212-0.766c0-0.307-0.104-0.608-0.312-0.903
                                    c-0.286-0.407-0.81-0.897-1.569-1.47c-0.764-0.577-1.239-0.994-1.426-1.251c-0.324-0.432-0.486-0.899-0.486-1.401
                                    c0-0.398,0.096-0.762,0.287-1.09c0.191-0.328,0.46-0.586,0.807-0.775c0.346-0.188,0.723-0.283,1.13-0.283
                                    c0.432,0,0.835,0.107,1.211,0.321c0.375,0.214,0.773,0.607,1.192,1.18l-0.747,0.566c-0.345-0.457-0.639-0.757-0.881-0.903
                                    c-0.243-0.145-0.507-0.218-0.794-0.218c-0.37,0-0.671,0.112-0.906,0.336c-0.234,0.224-0.352,0.5-0.352,0.829
                                    c0,0.199,0.042,0.392,0.125,0.579c0.083,0.187,0.234,0.39,0.455,0.61c0.12,0.117,0.515,0.421,1.183,0.916
                                    c0.793,0.585,1.337,1.106,1.631,1.563c0.295,0.457,0.442,0.916,0.442,1.376c0,0.664-0.252,1.241-0.757,1.731
                                    s-1.118,0.735-1.84,0.735c-0.557,0-1.061-0.148-1.513-0.445C488,153.02,487.582,152.523,487.2,151.826z" />
        <path fill="#FFFFFF" d="M498.241,144.372l4.272,9.16h-0.989l-1.44-3.014h-3.946l-1.427,3.014h-1.021l4.328-9.16H498.241z
                                     M498.126,146.318l-1.57,3.316h3.132L498.126,146.318z" />
        <path fill="#FFFFFF" d="M503.933,144.372h0.916v8.276h3.524v0.884h-4.44V144.372z" />
        <path fill="#FFFFFF" d="M518.355,146.072l-0.723,0.554c-0.398-0.519-0.877-0.913-1.435-1.18c-0.559-0.268-1.172-0.402-1.84-0.402
                                    c-0.73,0-1.407,0.176-2.03,0.526c-0.623,0.351-1.105,0.822-1.448,1.414c-0.342,0.592-0.514,1.257-0.514,1.996
                                    c0,1.117,0.383,2.049,1.149,2.796c0.766,0.747,1.732,1.121,2.899,1.121c1.283,0,2.356-0.502,3.219-1.507l0.723,0.548
                                    c-0.457,0.582-1.027,1.031-1.709,1.348c-0.683,0.318-1.446,0.477-2.289,0.477c-1.603,0-2.867-0.534-3.792-1.601
                                    c-0.776-0.901-1.164-1.988-1.164-3.263c0-1.341,0.47-2.469,1.41-3.385c0.94-0.915,2.118-1.373,3.534-1.373
                                    c0.855,0,1.627,0.169,2.316,0.508C517.35,144.987,517.915,145.461,518.355,146.072z" />
        <path fill="#FFFFFF" d="M520.061,144.372h0.916v9.16h-0.916V144.372z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M529.128,268.159h0.926v8.374h3.566v0.895h-4.493V268.159z" />
        <path fill="#FFFFFF" d="M534.658,270.939h0.648v6.488h-0.648V270.939z" />
        <path fill="#FFFFFF" d="M536.298,270.939h0.706l2.15,5.013l2.186-5.013h0.706l-2.823,6.488h-0.141L536.298,270.939z" />
        <path fill="#FFFFFF" d="M546.225,270.776c0.982,0,1.805,0.328,2.467,0.984c0.662,0.655,0.993,1.463,0.993,2.421
                                    c0,0.95-0.33,1.755-0.991,2.417s-1.466,0.992-2.417,0.992c-0.962,0-1.774-0.329-2.437-0.988c-0.662-0.659-0.993-1.456-0.993-2.391
                                    c0-0.624,0.151-1.201,0.452-1.733c0.302-0.532,0.713-0.949,1.234-1.25C545.055,270.927,545.618,270.776,546.225,270.776z
                                     M546.253,271.407c-0.48,0-0.935,0.125-1.365,0.375c-0.43,0.25-0.766,0.587-1.007,1.011c-0.242,0.423-0.362,0.896-0.362,1.417
                                    c0,0.771,0.267,1.422,0.802,1.954s1.179,0.796,1.933,0.796c0.504,0,0.97-0.122,1.398-0.366c0.428-0.244,0.763-0.578,1.003-1.002
                                    c0.24-0.424,0.36-0.895,0.36-1.413c0-0.515-0.12-0.98-0.36-1.397c-0.24-0.417-0.578-0.75-1.014-1
                                    C547.204,271.532,546.742,271.407,546.253,271.407z" />
        <path fill="#FFFFFF" d="M556.423,276.723l0.962,1.217h-0.798l-0.661-0.839c-0.53,0.327-1.127,0.49-1.791,0.49
                                    c-0.96,0-1.771-0.329-2.432-0.988c-0.661-0.659-0.991-1.456-0.991-2.391c0-0.624,0.151-1.202,0.454-1.736
                                    c0.302-0.534,0.714-0.95,1.236-1.25c0.521-0.3,1.094-0.45,1.717-0.45c0.961,0,1.771,0.329,2.431,0.986s0.99,1.465,0.99,2.424
                                    c0,0.5-0.09,0.957-0.271,1.372C557.088,275.972,556.806,276.361,556.423,276.723z M556.022,276.215
                                    c0.565-0.55,0.848-1.229,0.848-2.035c0-0.515-0.12-0.981-0.359-1.397s-0.577-0.75-1.012-1c-0.436-0.25-0.894-0.375-1.376-0.375
                                    c-0.485,0-0.942,0.125-1.372,0.373s-0.765,0.585-1.005,1.011c-0.241,0.425-0.362,0.898-0.362,1.419
                                    c0,0.771,0.266,1.422,0.798,1.954s1.175,0.796,1.927,0.796c0.515,0,0.985-0.125,1.412-0.375l-1.445-1.834h0.787L556.022,276.215z" />
        <path fill="#FFFFFF" d="M562.334,270.939h0.648v6.488h-0.648V270.939z" />
        <path fill="#FFFFFF" d="M529.134,283.645h5.312v0.907h-4.385v2.905h4.348v0.907h-4.348v3.642h4.348v0.907h-5.274V283.645z" />
        <path fill="#FFFFFF" d="M535.704,286.425h1.292c0.741,0,1.241,0.033,1.5,0.097c0.371,0.091,0.673,0.279,0.909,0.563
                                    c0.235,0.284,0.353,0.64,0.353,1.069c0,0.433-0.115,0.789-0.344,1.07c-0.229,0.281-0.545,0.47-0.948,0.567
                                    c-0.294,0.07-0.844,0.105-1.65,0.105h-0.463v3.017h-0.648V286.425z M536.352,287.06v2.201l1.098,0.013
                                    c0.444,0,0.769-0.041,0.975-0.121c0.206-0.081,0.368-0.211,0.485-0.392c0.118-0.181,0.176-0.382,0.176-0.605
                                    c0-0.217-0.059-0.416-0.176-0.597c-0.118-0.18-0.273-0.309-0.465-0.385c-0.193-0.077-0.508-0.115-0.946-0.115H536.352z" />
        <path fill="#FFFFFF" d="M541.058,286.425h3.718v0.635h-3.07v2.033h3.043v0.635h-3.043v2.549h3.043v0.635h-3.692V286.425z" />
        <path fill="#FFFFFF" d="M545.932,286.425h1.292c0.72,0,1.208,0.03,1.464,0.088c0.385,0.088,0.698,0.278,0.939,0.567
                                    c0.241,0.29,0.362,0.647,0.362,1.071c0,0.353-0.083,0.664-0.25,0.932c-0.166,0.268-0.403,0.47-0.712,0.607
                                    c-0.309,0.137-0.735,0.207-1.279,0.209l2.333,3.013h-0.802l-2.333-3.013h-0.367v3.013h-0.648V286.425z M546.58,287.06v2.206
                                    l1.118,0.009c0.433,0,0.753-0.041,0.961-0.124s0.37-0.214,0.486-0.395c0.116-0.181,0.175-0.383,0.175-0.606
                                    c0-0.217-0.059-0.415-0.177-0.593c-0.118-0.178-0.272-0.305-0.464-0.381s-0.51-0.115-0.955-0.115H546.58z" />
        <path fill="#FFFFFF" d="M551.083,292.913l0.929-6.488h0.105l2.638,5.324l2.612-5.324h0.104l0.934,6.488h-0.636l-0.641-4.64
                                    l-2.294,4.64h-0.166l-2.321-4.675l-0.638,4.675H551.083z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M582.165,317.878h0.76v6.868h2.925v0.734h-3.685V317.878z" />
        <path fill="#FFFFFF" d="M586.7,320.159h0.532v5.321H586.7V320.159z" />
        <path fill="#FFFFFF" d="M588.045,320.159h0.579l1.763,4.111l1.792-4.111h0.579l-2.315,5.321h-0.116L588.045,320.159z" />
        <path fill="#FFFFFF" d="M596.186,320.025c0.806,0,1.48,0.269,2.023,0.807c0.543,0.538,0.814,1.2,0.814,1.986
                                    c0,0.779-0.271,1.439-0.813,1.982c-0.542,0.542-1.202,0.814-1.982,0.814c-0.789,0-1.455-0.27-1.998-0.81
                                    c-0.543-0.541-0.814-1.194-0.814-1.96c0-0.511,0.124-0.985,0.371-1.422c0.248-0.437,0.584-0.778,1.012-1.025
                                    S595.689,320.025,596.186,320.025z M596.21,320.542c-0.394,0-0.767,0.103-1.12,0.308c-0.353,0.205-0.628,0.481-0.826,0.829
                                    s-0.297,0.735-0.297,1.162c0,0.632,0.219,1.166,0.657,1.602c0.438,0.436,0.967,0.653,1.585,0.653c0.413,0,0.795-0.1,1.146-0.301
                                    c0.352-0.2,0.625-0.474,0.822-0.822c0.197-0.347,0.295-0.733,0.295-1.158c0-0.422-0.099-0.804-0.295-1.146
                                    c-0.197-0.341-0.474-0.615-0.832-0.82S596.611,320.542,596.21,320.542z" />
        <path fill="#FFFFFF" d="M604.55,324.901l0.79,0.998h-0.655l-0.542-0.688c-0.435,0.268-0.924,0.402-1.469,0.402
                                    c-0.788,0-1.453-0.27-1.995-0.81c-0.542-0.541-0.813-1.194-0.813-1.96c0-0.511,0.124-0.986,0.372-1.424
                                    c0.249-0.438,0.586-0.779,1.014-1.025s0.897-0.369,1.408-0.369c0.788,0,1.453,0.269,1.994,0.808s0.812,1.202,0.812,1.988
                                    c0,0.41-0.074,0.785-0.222,1.125S604.865,324.604,604.55,324.901z M604.222,324.485c0.463-0.451,0.695-1.008,0.695-1.669
                                    c0-0.422-0.098-0.804-0.294-1.146c-0.197-0.341-0.474-0.615-0.83-0.82c-0.357-0.205-0.733-0.308-1.129-0.308
                                    c-0.398,0-0.773,0.102-1.125,0.306c-0.352,0.204-0.627,0.48-0.825,0.829s-0.296,0.737-0.296,1.164
                                    c0,0.632,0.218,1.166,0.655,1.602c0.436,0.436,0.963,0.653,1.581,0.653c0.422,0,0.808-0.103,1.158-0.308l-1.185-1.504h0.646
                                    L604.222,324.485z" />
        <path fill="#FFFFFF" d="M609.398,320.159h0.532v5.321h-0.532V320.159z" />
        <path fill="#FFFFFF" d="M582.16,330.578h1.514c0.868,0,1.454,0.038,1.757,0.114c0.434,0.107,0.789,0.327,1.064,0.659
                                    c0.275,0.333,0.414,0.75,0.414,1.253c0,0.506-0.135,0.924-0.403,1.253c-0.269,0.329-0.639,0.55-1.111,0.664
                                    c-0.345,0.083-0.989,0.124-1.933,0.124h-0.543v3.535h-0.759V330.578z M582.919,331.322v2.579l1.287,0.016
                                    c0.52,0,0.901-0.047,1.142-0.142c0.241-0.095,0.431-0.248,0.569-0.459c0.138-0.211,0.207-0.448,0.207-0.709
                                    c0-0.254-0.069-0.487-0.207-0.699c-0.138-0.211-0.32-0.362-0.545-0.451s-0.595-0.134-1.108-0.134H582.919z" />
        <path fill="#FFFFFF" d="M590.685,332.725c0.806,0,1.48,0.269,2.023,0.807c0.543,0.538,0.814,1.2,0.814,1.986
                                    c0,0.779-0.271,1.439-0.813,1.982c-0.542,0.542-1.202,0.814-1.982,0.814c-0.789,0-1.455-0.27-1.998-0.81
                                    c-0.543-0.541-0.814-1.194-0.814-1.96c0-0.511,0.124-0.985,0.371-1.422c0.248-0.437,0.584-0.778,1.012-1.025
                                    S590.188,332.725,590.685,332.725z M590.708,333.242c-0.394,0-0.767,0.103-1.12,0.308c-0.353,0.205-0.628,0.481-0.826,0.829
                                    s-0.297,0.735-0.297,1.162c0,0.632,0.219,1.166,0.657,1.602c0.438,0.436,0.967,0.653,1.585,0.653c0.413,0,0.795-0.1,1.146-0.301
                                    c0.352-0.2,0.625-0.474,0.822-0.822c0.197-0.347,0.295-0.733,0.295-1.158c0-0.422-0.099-0.804-0.295-1.146
                                    c-0.197-0.341-0.474-0.615-0.832-0.82S591.109,333.242,590.708,333.242z" />
        <path fill="#FFFFFF" d="M594.04,337.188l0.452-0.271c0.318,0.586,0.686,0.879,1.103,0.879c0.179,0,0.346-0.042,0.503-0.125
                                    c0.157-0.083,0.276-0.195,0.358-0.334c0.082-0.14,0.123-0.288,0.123-0.445c0-0.179-0.06-0.354-0.181-0.524
                                    c-0.167-0.236-0.47-0.521-0.912-0.854c-0.444-0.335-0.72-0.578-0.828-0.727c-0.188-0.25-0.282-0.522-0.282-0.814
                                    c0-0.231,0.056-0.442,0.167-0.633s0.267-0.341,0.468-0.45c0.201-0.11,0.42-0.165,0.657-0.165c0.25,0,0.485,0.062,0.704,0.186
                                    c0.218,0.125,0.449,0.353,0.692,0.686l-0.434,0.329c-0.2-0.265-0.371-0.44-0.512-0.524s-0.295-0.126-0.461-0.126
                                    c-0.214,0-0.39,0.065-0.526,0.195c-0.137,0.13-0.205,0.291-0.205,0.481c0,0.116,0.024,0.228,0.072,0.336s0.136,0.227,0.264,0.354
                                    c0.07,0.067,0.299,0.245,0.687,0.532c0.461,0.34,0.777,0.643,0.948,0.908c0.171,0.266,0.257,0.532,0.257,0.799
                                    c0,0.386-0.146,0.721-0.439,1.006s-0.649,0.427-1.069,0.427c-0.323,0-0.616-0.086-0.879-0.259S594.261,337.593,594.04,337.188z" />
        <path fill="#FFFFFF" d="M598.271,332.858h0.532v2.231h2.709v-2.231h0.532v5.321h-0.532v-2.568h-2.709v2.568h-0.532V332.858z" />
        <path fill="#FFFFFF" d="M602.811,333.379v-0.521h2.916v0.521h-1.186v4.8h-0.543v-4.8H602.811z" />
        <path fill="#FFFFFF" d="M606.497,332.858h3.049v0.521h-2.518v1.668h2.496v0.521h-2.496v2.091h2.496v0.521h-3.028V332.858z
                                     M607.311,331.61c0.116,0,0.215,0.041,0.297,0.123s0.123,0.181,0.123,0.296s-0.041,0.215-0.123,0.297s-0.181,0.123-0.297,0.123
                                    s-0.214-0.041-0.296-0.123s-0.123-0.181-0.123-0.297s0.041-0.214,0.123-0.296S607.195,331.61,607.311,331.61z M608.787,331.61
                                    c0.116,0,0.214,0.041,0.296,0.123s0.123,0.181,0.123,0.296s-0.041,0.215-0.123,0.297s-0.181,0.123-0.296,0.123
                                    s-0.215-0.041-0.297-0.123s-0.123-0.181-0.123-0.297s0.041-0.214,0.123-0.296S608.671,331.61,608.787,331.61z" />
        <path fill="#FFFFFF" d="M610.223,338.179l0.762-5.321h0.086l2.163,4.366l2.142-4.366h0.085l0.766,5.321h-0.521l-0.526-3.805
                                    l-1.881,3.805h-0.136l-1.904-3.834l-0.522,3.834H610.223z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M663.027,227.157l0.763-0.458c0.537,0.989,1.157,1.483,1.861,1.483c0.301,0,0.584-0.07,0.849-0.21
                                    c0.264-0.141,0.466-0.329,0.604-0.564c0.139-0.236,0.208-0.486,0.208-0.751c0-0.301-0.102-0.596-0.306-0.885
                                    c-0.28-0.398-0.793-0.879-1.537-1.44c-0.749-0.565-1.215-0.974-1.398-1.227c-0.317-0.423-0.476-0.881-0.476-1.373
                                    c0-0.391,0.094-0.747,0.28-1.068c0.188-0.322,0.451-0.575,0.791-0.76c0.34-0.185,0.709-0.277,1.107-0.277
                                    c0.423,0,0.818,0.104,1.187,0.314c0.369,0.21,0.758,0.595,1.169,1.157l-0.732,0.555c-0.338-0.447-0.625-0.742-0.863-0.885
                                    s-0.497-0.213-0.778-0.213c-0.362,0-0.658,0.11-0.888,0.33c-0.229,0.219-0.345,0.49-0.345,0.812c0,0.195,0.04,0.384,0.122,0.567
                                    c0.081,0.183,0.229,0.383,0.445,0.598c0.118,0.114,0.505,0.413,1.159,0.897c0.777,0.574,1.311,1.084,1.6,1.532
                                    c0.289,0.447,0.433,0.897,0.433,1.349c0,0.651-0.247,1.216-0.741,1.697c-0.494,0.48-1.096,0.72-1.804,0.72
                                    c-0.545,0-1.039-0.146-1.482-0.436C663.811,228.328,663.401,227.84,663.027,227.157z" />
        <path fill="#FFFFFF" d="M669.843,222.545h0.628v2.636h3.2v-2.636h0.628v6.284h-0.628v-3.033h-3.2v3.033h-0.628V222.545z" />
        <path fill="#FFFFFF" d="M675.738,222.545h0.628v6.284h-0.628V222.545z" />
        <path fill="#FFFFFF" d="M677.807,222.545h0.628v5.678h2.418v0.606h-3.046V222.545z" />
        <path fill="#FFFFFF" d="M681.848,222.545h0.628v5.678h2.418v0.606h-3.046V222.545z" />
        <path fill="#FFFFFF" d="M688.882,222.387c0.952,0,1.749,0.318,2.39,0.953c0.642,0.635,0.962,1.417,0.962,2.346
                                    c0,0.92-0.319,1.7-0.959,2.341c-0.641,0.641-1.42,0.961-2.341,0.961c-0.932,0-1.719-0.319-2.359-0.957
                                    c-0.642-0.638-0.962-1.41-0.962-2.315c0-0.604,0.146-1.164,0.438-1.679c0.292-0.515,0.69-0.919,1.195-1.211
                                    C687.749,222.533,688.295,222.387,688.882,222.387z M688.91,222.998c-0.465,0-0.906,0.121-1.322,0.364
                                    c-0.417,0.242-0.742,0.568-0.976,0.979c-0.234,0.41-0.351,0.868-0.351,1.372c0,0.747,0.259,1.378,0.776,1.892
                                    c0.518,0.515,1.142,0.772,1.872,0.772c0.487,0,0.939-0.119,1.354-0.355c0.415-0.237,0.738-0.56,0.971-0.971
                                    c0.232-0.41,0.349-0.866,0.349-1.368c0-0.499-0.116-0.95-0.349-1.353s-0.56-0.726-0.981-0.968
                                    C689.831,223.119,689.384,222.998,688.91,222.998z" />
        <path fill="#FFFFFF" d="M693.015,222.545h0.684l2.083,4.855l2.116-4.855h0.684l-2.734,6.284h-0.137L693.015,222.545z" />
        <path fill="#FFFFFF" d="M702.204,222.545l2.931,6.284h-0.678l-0.989-2.068h-2.707l-0.979,2.068h-0.701l2.97-6.284H702.204z
                                     M702.125,223.88l-1.077,2.275h2.148L702.125,223.88z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M683.379,290.407l1.494-10.438h0.17l4.243,8.564l4.202-8.564h0.167l1.502,10.438h-1.022l-1.031-7.464
                                    l-3.69,7.464h-0.267l-3.735-7.521l-1.024,7.521H683.379z" />
        <path fill="#FFFFFF" d="M699.812,283.101l3.407,7.306h-0.788l-1.149-2.404h-3.147l-1.139,2.404h-0.814l3.452-7.306H699.812z
                                     M699.72,284.653l-1.252,2.645h2.498L699.72,284.653z" />
        <path fill="#FFFFFF" d="M704.352,283.101h0.73v6.601h2.812v0.705h-3.542V283.101z" />
        <path fill="#FFFFFF" d="M708.946,283.101h0.729v7.306h-0.729V283.101z" />
        <path fill="#FFFFFF" d="M710.595,289.046l0.621-0.373c0.438,0.805,0.942,1.207,1.515,1.207c0.245,0,0.476-0.057,0.69-0.171
                                    c0.216-0.114,0.38-0.268,0.492-0.459s0.169-0.396,0.169-0.611c0-0.245-0.083-0.485-0.249-0.72
                                    c-0.228-0.325-0.646-0.715-1.251-1.172c-0.609-0.46-0.988-0.793-1.138-0.999c-0.258-0.344-0.388-0.717-0.388-1.117
                                    c0-0.318,0.076-0.608,0.229-0.869c0.152-0.262,0.367-0.468,0.644-0.619c0.276-0.15,0.577-0.226,0.901-0.226
                                    c0.345,0,0.666,0.085,0.966,0.256c0.3,0.171,0.617,0.484,0.951,0.941l-0.596,0.452c-0.275-0.364-0.509-0.604-0.703-0.72
                                    c-0.193-0.116-0.404-0.174-0.633-0.174c-0.295,0-0.536,0.09-0.723,0.269c-0.188,0.179-0.281,0.399-0.281,0.661
                                    c0,0.159,0.033,0.313,0.1,0.462s0.188,0.311,0.362,0.487c0.097,0.093,0.411,0.336,0.944,0.73c0.632,0.467,1.066,0.882,1.301,1.247
                                    c0.235,0.364,0.353,0.73,0.353,1.098c0,0.53-0.201,0.99-0.603,1.381c-0.402,0.391-0.892,0.586-1.468,0.586
                                    c-0.444,0-0.847-0.118-1.207-0.355C711.232,289.999,710.899,289.602,710.595,289.046z" />
        <path fill="#FFFFFF" d="M716.406,283.101h0.73v3.064h3.72v-3.064h0.73v7.306h-0.73v-3.526h-3.72v3.526h-0.73V283.101z" />
        <path fill="#FFFFFF" d="M723.37,283.101h4.187v0.715H724.1v2.29h3.428v0.715H724.1v2.871h3.428v0.715h-4.157V283.101z" />
        <path fill="#FFFFFF" d="M728.263,283.101h0.795l2.421,5.645l2.461-5.645h0.795l-3.179,7.306h-0.159L728.263,283.101z" />
        <path fill="#FFFFFF" d="M738.946,283.101l3.407,7.306h-0.788l-1.149-2.404h-3.147l-1.139,2.404h-0.814l3.452-7.306H738.946z
                                     M738.854,284.653l-1.252,2.645h2.498L738.854,284.653z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M704.293,338.096h0.898v5.419c0,0.643,0.012,1.043,0.035,1.202c0.045,0.354,0.148,0.65,0.313,0.888
                                    c0.162,0.238,0.412,0.438,0.75,0.598s0.678,0.241,1.02,0.241c0.297,0,0.582-0.063,0.854-0.189c0.273-0.126,0.5-0.301,0.684-0.525
                                    c0.184-0.224,0.318-0.494,0.402-0.812c0.063-0.228,0.092-0.696,0.092-1.404v-5.419h0.898v5.419c0,0.802-0.078,1.45-0.236,1.944
                                    c-0.156,0.494-0.469,0.925-0.939,1.291c-0.469,0.366-1.039,0.549-1.705,0.549c-0.725,0-1.346-0.173-1.861-0.519
                                    c-0.518-0.346-0.863-0.803-1.037-1.373c-0.111-0.35-0.166-0.98-0.166-1.892V338.096z" />
        <path fill="#FFFFFF" d="M718.182,341.844l-0.488,0.461c-0.35-0.345-0.734-0.606-1.15-0.784c-0.418-0.178-0.824-0.267-1.221-0.267
                                    c-0.492,0-0.961,0.121-1.406,0.363c-0.447,0.242-0.791,0.57-1.037,0.985c-0.244,0.415-0.367,0.852-0.367,1.313
                                    c0,0.473,0.127,0.922,0.381,1.348c0.252,0.426,0.604,0.76,1.051,1.004c0.447,0.243,0.936,0.365,1.469,0.365
                                    c0.646,0,1.193-0.182,1.641-0.547s0.713-0.837,0.795-1.418h-2.004v-0.606h2.709c-0.006,0.971-0.295,1.742-0.865,2.313
                                    c-0.57,0.571-1.336,0.856-2.293,0.856c-1.162,0-2.082-0.396-2.76-1.188c-0.52-0.609-0.781-1.314-0.781-2.114
                                    c0-0.595,0.15-1.149,0.449-1.662s0.709-0.914,1.23-1.203s1.109-0.434,1.768-0.434c0.533,0,1.035,0.096,1.504,0.289
                                    C717.275,341.112,717.734,341.42,718.182,341.844z" />
        <path fill="#FFFFFF" d="M719.748,340.789h0.629v5.678h2.418v0.606h-3.047V340.789z" />
        <path fill="#FFFFFF" d="M726.357,340.789l2.932,6.284h-0.678l-0.99-2.068h-2.707l-0.979,2.068h-0.701l2.971-6.284H726.357z
                                     M726.279,342.124l-1.078,2.275h2.148L726.279,342.124z" />
        <path fill="#FFFFFF" d="M730.297,340.789h1.252c0.697,0,1.17,0.028,1.418,0.085c0.373,0.085,0.676,0.269,0.91,0.55
                                    c0.232,0.281,0.35,0.626,0.35,1.037c0,0.342-0.08,0.643-0.24,0.903c-0.162,0.259-0.393,0.456-0.691,0.588
                                    c-0.299,0.133-0.711,0.201-1.238,0.203l2.26,2.918h-0.777l-2.26-2.918h-0.355v2.918h-0.627V340.789z M730.924,341.404v2.136
                                    l1.084,0.009c0.418,0,0.729-0.04,0.93-0.12s0.357-0.207,0.471-0.382s0.17-0.371,0.17-0.587c0-0.211-0.059-0.402-0.172-0.575
                                    s-0.264-0.295-0.449-0.37c-0.186-0.074-0.494-0.111-0.924-0.111H730.924z" />
        <path fill="#FFFFFF" d="M735.482,340.789h0.629v6.284h-0.629V340.789z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M698.494,102.296l0.738,2.184c0.423,1.251,0.654,2.114,0.692,2.588c0.059,0.678-0.085,1.297-0.431,1.856
                                    c-0.345,0.56-0.88,0.963-1.605,1.208c-0.729,0.247-1.397,0.256-2.003,0.029c-0.605-0.227-1.105-0.653-1.499-1.278
                                    c-0.287-0.457-0.662-1.365-1.122-2.727L693,105.376l-5.096,1.724l-0.371-1.096L698.494,102.296z M697.791,103.755l-3.718,1.258
                                    l0.605,1.862c0.254,0.75,0.507,1.276,0.761,1.577c0.255,0.302,0.568,0.5,0.939,0.596c0.372,0.096,0.746,0.079,1.123-0.048
                                    c0.367-0.124,0.669-0.336,0.907-0.639c0.237-0.301,0.366-0.636,0.385-1.005c0.019-0.369-0.098-0.924-0.348-1.664L697.791,103.755z
                                    " />
        <path fill="#FFFFFF" d="M698.13,112.051l1.487,4.397l-0.751,0.254l-1.229-3.63l-2.404,0.814l1.218,3.598l-0.752,0.254
                                    l-1.217-3.598l-3.015,1.02l1.218,3.598l-0.751,0.254l-1.477-4.365L698.13,112.051z M700.326,112.616
                                    c0.057,0.168,0.045,0.33-0.033,0.488c-0.078,0.157-0.2,0.265-0.367,0.321c-0.167,0.057-0.33,0.045-0.488-0.032
                                    c-0.158-0.078-0.265-0.201-0.321-0.369c-0.057-0.166-0.046-0.329,0.032-0.487s0.201-0.266,0.368-0.323
                                    c0.167-0.056,0.329-0.045,0.487,0.033S700.27,112.45,700.326,112.616z M701.047,114.745c0.056,0.167,0.045,0.328-0.033,0.487
                                    c-0.078,0.158-0.201,0.266-0.367,0.322c-0.168,0.057-0.33,0.045-0.488-0.033c-0.158-0.079-0.266-0.201-0.322-0.368
                                    s-0.046-0.33,0.032-0.489c0.079-0.157,0.202-0.264,0.368-0.321c0.167-0.056,0.33-0.046,0.487,0.031
                                    C700.882,114.455,700.99,114.578,701.047,114.745z" />
        <path fill="#FFFFFF" d="M700.079,117.815l0.518,1.528c0.288,0.852,0.448,1.44,0.481,1.767c0.05,0.491-0.049,0.937-0.295,1.337
                                    c-0.247,0.401-0.621,0.687-1.122,0.856c-0.419,0.142-0.818,0.168-1.202,0.079c-0.383-0.09-0.717-0.29-1.003-0.6
                                    c-0.284-0.31-0.538-0.786-0.76-1.429l-2.628,3.965l-0.321-0.949l2.629-3.964l-0.147-0.434l-3.562,1.205l-0.26-0.767
                                    L700.079,117.815z M699.588,118.835l-2.607,0.883l0.437,1.326c0.173,0.511,0.35,0.874,0.53,1.086
                                    c0.181,0.213,0.4,0.352,0.661,0.416c0.261,0.065,0.522,0.053,0.786-0.036c0.258-0.087,0.469-0.236,0.632-0.446
                                    c0.163-0.21,0.251-0.444,0.266-0.701c0.014-0.257-0.068-0.649-0.246-1.174L699.588,118.835z" />
        <path fill="#FFFFFF" d="M702.259,124.255l0.259,0.768l-6.932,2.345l0.999,2.951l-0.74,0.25l-1.258-3.719L702.259,124.255z" />
        <path fill="#FFFFFF" d="M703.93,129.195l1.487,4.396l-0.751,0.254l-1.229-3.63l-2.404,0.814l1.218,3.599l-0.751,0.254
                                    l-1.218-3.599l-3.015,1.02l1.218,3.599l-0.751,0.254l-1.477-4.365L703.93,129.195z" />
        <path fill="#FFFFFF" d="M705.863,134.912l0.518,1.528c0.296,0.876,0.457,1.48,0.484,1.812c0.041,0.475-0.06,0.907-0.301,1.299
                                    c-0.241,0.392-0.616,0.674-1.124,0.846c-0.511,0.173-0.979,0.179-1.402,0.021c-0.423-0.159-0.773-0.457-1.049-0.894
                                    c-0.202-0.319-0.464-0.956-0.786-1.909l-0.185-0.548l-3.567,1.207l-0.26-0.766L705.863,134.912z M705.372,135.931l-2.603,0.881
                                    l0.424,1.304c0.178,0.525,0.355,0.893,0.533,1.104c0.178,0.212,0.396,0.351,0.657,0.417c0.26,0.068,0.522,0.057,0.786-0.033
                                    c0.257-0.087,0.469-0.236,0.635-0.448c0.166-0.211,0.256-0.446,0.27-0.704c0.013-0.259-0.068-0.647-0.244-1.165L705.372,135.931z" />
        <path fill="#FFFFFF" d="M700.334,143.838l7.672-2.596l0.057,0.166l-4.154,7.096l5.881-1.99l0.257,0.757l-7.672,2.596l-0.059-0.173
                                    l4.096-7.029l-5.81,1.965L700.334,143.838z" />
        <path fill="#FFFFFF" d="M710.641,149.03l0.259,0.767l-7.672,2.596l-0.259-0.767L710.641,149.03z" />
        <path fill="#FFFFFF" d="M712.488,159.182l-0.67-0.449c0.322-0.48,0.516-0.993,0.582-1.535c0.066-0.545,0.005-1.096-0.185-1.656
                                    c-0.208-0.612-0.546-1.128-1.016-1.551c-0.471-0.422-1.002-0.693-1.595-0.813c-0.592-0.118-1.198-0.073-1.816,0.136
                                    c-0.936,0.316-1.607,0.901-2.017,1.754c-0.409,0.854-0.448,1.768-0.118,2.747c0.364,1.073,1.089,1.83,2.175,2.268l-0.255,0.761
                                    c-0.615-0.218-1.153-0.567-1.613-1.049c-0.459-0.482-0.808-1.076-1.047-1.782c-0.454-1.342-0.365-2.553,0.266-3.629
                                    c0.535-0.906,1.336-1.539,2.402-1.9c1.124-0.38,2.202-0.306,3.235,0.223c1.032,0.527,1.75,1.385,2.151,2.569
                                    c0.242,0.717,0.319,1.412,0.231,2.084C713.112,158.033,712.875,158.64,712.488,159.182z" />
        <path fill="#FFFFFF" d="M715.493,163.373l-6.462,6.173l-0.28-0.828l2.116-2.06l-1.118-3.305l-2.929-0.341l-0.289-0.856l8.898,1.03
                                    L715.493,163.373z M713.83,163.828l-3.223-0.375l0.888,2.622L713.83,163.828z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M713.671,191.766h0.915v3.369l3.589-3.369h1.205l-4.312,4.028l4.647,4.95h-1.195l-3.935-4.182v4.182
                                    h-0.915V191.766z" />
        <path fill="#FFFFFF" d="M720.441,200.743l0.899-6.284h0.103l2.555,5.156l2.53-5.156h0.101l0.904,6.284h-0.616l-0.621-4.494
                                    l-2.222,4.494h-0.16l-2.249-4.528l-0.617,4.528H720.441z" />
        <path fill="#FFFFFF" d="M728.771,194.459h3.602v0.615h-2.974v1.969h2.948v0.615h-2.948v2.469h2.948v0.615h-3.576V194.459z" />
        <path fill="#FFFFFF" d="M732.834,195.074v-0.615h3.443v0.615h-1.401v5.669h-0.641v-5.669H732.834z" />
        <path fill="#FFFFFF" d="M740.176,194.301c0.952,0,1.749,0.318,2.39,0.953c0.642,0.635,0.962,1.417,0.962,2.346
                                    c0,0.92-0.319,1.7-0.959,2.341c-0.641,0.641-1.42,0.961-2.341,0.961c-0.932,0-1.719-0.319-2.359-0.957
                                    c-0.642-0.638-0.962-1.41-0.962-2.315c0-0.604,0.146-1.164,0.438-1.679c0.292-0.515,0.69-0.919,1.195-1.211
                                    C739.043,194.447,739.589,194.301,740.176,194.301z M740.204,194.912c-0.465,0-0.906,0.121-1.322,0.364
                                    c-0.417,0.242-0.742,0.568-0.976,0.979c-0.234,0.41-0.351,0.868-0.351,1.372c0,0.747,0.259,1.378,0.776,1.892
                                    c0.518,0.515,1.142,0.772,1.872,0.772c0.487,0,0.939-0.119,1.354-0.355c0.415-0.237,0.738-0.56,0.971-0.971
                                    c0.232-0.41,0.349-0.866,0.349-1.368c0-0.499-0.116-0.95-0.349-1.353s-0.56-0.726-0.981-0.968
                                    C741.125,195.033,740.678,194.912,740.204,194.912z" />
        <path fill="#FFFFFF" d="M750.64,195.625l-0.495,0.38c-0.273-0.356-0.602-0.626-0.985-0.81c-0.383-0.184-0.804-0.275-1.262-0.275
                                    c-0.502,0-0.966,0.12-1.393,0.361c-0.428,0.241-0.759,0.564-0.993,0.97c-0.235,0.406-0.353,0.862-0.353,1.369
                                    c0,0.766,0.263,1.406,0.788,1.918s1.188,0.769,1.988,0.769c0.88,0,1.616-0.345,2.209-1.034l0.495,0.376
                                    c-0.313,0.399-0.704,0.707-1.173,0.925c-0.468,0.218-0.991,0.327-1.569,0.327c-1.1,0-1.967-0.366-2.602-1.098
                                    c-0.533-0.618-0.799-1.364-0.799-2.238c0-0.92,0.322-1.694,0.967-2.322c0.646-0.628,1.453-0.942,2.425-0.942
                                    c0.587,0,1.116,0.116,1.589,0.348C749.95,194.881,750.338,195.207,750.64,195.625z" />
        <path fill="#FFFFFF" d="M751.811,194.459h0.628v6.284h-0.628V194.459z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M724.15,219.285h0.408l1.244,2.9l1.264-2.9h0.408l-1.633,3.753h-0.081L724.15,219.285z" />
        <path fill="#FFFFFF" d="M727.97,220.411h1.506v0.257h-1.243v0.823h1.232v0.257h-1.232v1.032h1.232v0.257h-1.495V220.411z" />
        <path fill="#FFFFFF" d="M729.943,220.411h0.523c0.292,0,0.489,0.012,0.593,0.036c0.156,0.036,0.283,0.112,0.381,0.229
                                    c0.098,0.118,0.146,0.262,0.146,0.434c0,0.143-0.034,0.269-0.102,0.377s-0.163,0.19-0.288,0.246
                                    c-0.125,0.055-0.298,0.083-0.518,0.085l0.944,1.22h-0.325l-0.944-1.22h-0.148v1.22h-0.263V220.411z M730.206,220.668v0.893
                                    l0.452,0.003c0.176,0,0.306-0.017,0.39-0.05s0.149-0.086,0.196-0.16s0.071-0.155,0.071-0.246c0-0.088-0.024-0.168-0.072-0.24
                                    c-0.048-0.072-0.11-0.124-0.188-0.155c-0.077-0.031-0.206-0.046-0.387-0.046H730.206z" />
        <path fill="#FFFFFF" d="M732.157,220.411h0.518c0.208,0,0.368,0.025,0.48,0.074s0.2,0.125,0.266,0.228
                                    c0.064,0.102,0.097,0.216,0.097,0.341c0,0.117-0.028,0.223-0.085,0.319s-0.141,0.174-0.251,0.233
                                    c0.137,0.047,0.242,0.101,0.315,0.164s0.131,0.138,0.172,0.227c0.041,0.088,0.062,0.185,0.062,0.288
                                    c0,0.211-0.077,0.389-0.231,0.535s-0.361,0.219-0.62,0.219h-0.722V220.411z M732.414,220.668v0.841h0.15
                                    c0.183,0,0.316-0.017,0.402-0.051c0.086-0.034,0.154-0.088,0.204-0.161c0.051-0.073,0.075-0.154,0.075-0.244
                                    c0-0.12-0.042-0.214-0.126-0.283c-0.084-0.068-0.218-0.103-0.401-0.103H732.414z M732.414,221.773v1.007h0.325
                                    c0.192,0,0.333-0.019,0.423-0.056c0.089-0.038,0.161-0.096,0.216-0.176c0.054-0.08,0.081-0.166,0.081-0.259
                                    c0-0.117-0.038-0.218-0.114-0.305s-0.182-0.146-0.314-0.179c-0.09-0.021-0.246-0.032-0.468-0.032H732.414z" />
        <path fill="#FFFFFF" d="M734.212,220.411h0.263v2.627h-0.263V220.411z" />
        <path fill="#FFFFFF" d="M737.523,220.898l-0.207,0.159c-0.114-0.148-0.252-0.261-0.412-0.338c-0.16-0.077-0.336-0.115-0.527-0.115
                                    c-0.21,0-0.404,0.05-0.582,0.151c-0.179,0.101-0.317,0.236-0.416,0.406c-0.098,0.169-0.147,0.36-0.147,0.572
                                    c0,0.32,0.11,0.588,0.33,0.802c0.22,0.214,0.497,0.322,0.831,0.322c0.368,0,0.676-0.144,0.924-0.432l0.207,0.157
                                    c-0.131,0.167-0.295,0.295-0.49,0.387c-0.196,0.091-0.415,0.136-0.656,0.136c-0.46,0-0.822-0.153-1.088-0.459
                                    c-0.223-0.258-0.334-0.57-0.334-0.936c0-0.385,0.135-0.708,0.404-0.971c0.27-0.263,0.607-0.394,1.014-0.394
                                    c0.245,0,0.467,0.048,0.665,0.146C737.235,220.587,737.397,220.723,737.523,220.898z" />
        <path fill="#FFFFFF" d="M739.124,220.411l1.225,2.627h-0.283l-0.413-0.864h-1.132l-0.409,0.864h-0.293l1.241-2.627H739.124z
                                     M739.091,220.969l-0.45,0.951h0.897L739.091,220.969z" />
        <path fill="#FFFFFF" d="M724.301,226.681h1.506v0.257h-1.243v0.823h1.232v0.257h-1.232v1.032h1.232v0.257h-1.495V226.681z" />
        <path fill="#FFFFFF" d="M727.845,225.555h0.383v1.409l1.5-1.409h0.504l-1.803,1.684l1.943,2.069h-0.5l-1.645-1.748v1.748h-0.383
                                    V225.555z" />
        <path fill="#FFFFFF" d="M730.675,229.309l0.376-2.627h0.043l1.067,2.156l1.059-2.156h0.042l0.378,2.627h-0.258l-0.26-1.879
                                    l-0.929,1.879h-0.067l-0.939-1.893l-0.258,1.893H730.675z" />
        <path fill="#FFFFFF" d="M734.157,226.681h1.506v0.257h-1.243v0.823h1.232v0.257h-1.232v1.032h1.232v0.257h-1.495V226.681z" />
        <path fill="#FFFFFF" d="M735.855,226.938v-0.257h1.439v0.257h-0.585v2.37h-0.269v-2.37H735.855z" />
        <path fill="#FFFFFF" d="M738.926,226.615c0.397,0,0.73,0.133,0.999,0.398c0.268,0.266,0.401,0.592,0.401,0.98
                                    c0,0.385-0.134,0.711-0.401,0.979c-0.267,0.268-0.593,0.402-0.979,0.402c-0.389,0-0.718-0.133-0.986-0.4
                                    c-0.268-0.267-0.402-0.589-0.402-0.968c0-0.252,0.062-0.486,0.184-0.702s0.289-0.384,0.5-0.506S738.68,226.615,738.926,226.615z
                                     M738.937,226.871c-0.194,0-0.378,0.051-0.553,0.152c-0.174,0.102-0.31,0.238-0.407,0.41c-0.098,0.171-0.147,0.363-0.147,0.574
                                    c0,0.312,0.108,0.576,0.325,0.791c0.217,0.215,0.478,0.322,0.782,0.322c0.204,0,0.393-0.049,0.566-0.148
                                    c0.174-0.099,0.309-0.234,0.406-0.406c0.098-0.171,0.146-0.362,0.146-0.572c0-0.208-0.048-0.397-0.146-0.566
                                    c-0.098-0.168-0.234-0.303-0.41-0.405C739.322,226.921,739.135,226.871,738.937,226.871z" />
        <path fill="#FFFFFF" d="M743.3,227.169l-0.207,0.159c-0.114-0.148-0.252-0.261-0.412-0.338c-0.16-0.077-0.336-0.115-0.527-0.115
                                    c-0.21,0-0.404,0.05-0.582,0.151c-0.179,0.101-0.317,0.236-0.416,0.406c-0.098,0.169-0.147,0.36-0.147,0.572
                                    c0,0.32,0.11,0.588,0.33,0.802c0.22,0.214,0.497,0.322,0.831,0.322c0.368,0,0.676-0.144,0.924-0.432l0.207,0.157
                                    c-0.131,0.167-0.295,0.295-0.49,0.387c-0.196,0.091-0.415,0.136-0.656,0.136c-0.46,0-0.822-0.153-1.088-0.459
                                    c-0.223-0.258-0.334-0.57-0.334-0.936c0-0.385,0.135-0.708,0.404-0.971c0.27-0.263,0.607-0.394,1.014-0.394
                                    c0.245,0,0.467,0.048,0.665,0.146C743.012,226.858,743.174,226.994,743.3,227.169z" />
        <path fill="#FFFFFF" d="M743.789,226.681h0.263v2.627h-0.263V226.681z" />
        <path fill="#FFFFFF" d="M744.393,226.938v-0.257h1.439v0.257h-0.585v2.37h-0.269v-2.37H744.393z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M771.468,243.12v-9.754h2.023c1.458,0,2.518,0.117,3.176,0.352c0.946,0.332,1.686,0.906,2.219,1.724
                                    c0.532,0.818,0.799,1.792,0.799,2.924c0,0.977-0.211,1.836-0.634,2.58c-0.422,0.743-0.97,1.291-1.645,1.645
                                    c-0.674,0.354-1.619,0.53-2.835,0.53H771.468z M772.403,242.198h1.127c1.349,0,2.283-0.084,2.806-0.251
                                    c0.733-0.239,1.311-0.668,1.73-1.289c0.42-0.621,0.63-1.379,0.63-2.276c0-0.94-0.228-1.745-0.683-2.412
                                    c-0.456-0.667-1.09-1.124-1.903-1.372c-0.61-0.186-1.616-0.278-3.018-0.278h-0.689V242.198z" />
        <path fill="#FFFFFF" d="M784.47,236.12c1.035,0,1.9,0.345,2.597,1.035c0.697,0.69,1.045,1.54,1.045,2.548
                                    c0,1-0.348,1.848-1.042,2.544c-0.695,0.696-1.543,1.044-2.543,1.044c-1.013,0-1.868-0.347-2.564-1.04
                                    c-0.696-0.693-1.045-1.532-1.045-2.516c0-0.656,0.158-1.264,0.476-1.824s0.75-0.999,1.299-1.316
                                    C783.239,236.278,783.832,236.12,784.47,236.12z M784.5,236.784c-0.505,0-0.983,0.131-1.437,0.395
                                    c-0.452,0.264-0.806,0.618-1.06,1.064c-0.255,0.446-0.382,0.943-0.382,1.491c0,0.812,0.281,1.497,0.844,2.056
                                    s1.241,0.838,2.034,0.838c0.53,0,1.021-0.128,1.472-0.385c0.451-0.257,0.803-0.609,1.056-1.055s0.379-0.941,0.379-1.487
                                    c0-0.542-0.126-1.032-0.379-1.47c-0.253-0.438-0.608-0.789-1.067-1.052C785.502,236.915,785.015,236.784,784.5,236.784z" />
        <path fill="#FFFFFF" d="M789.499,236.292h1.346c0.542,0,0.958,0.064,1.249,0.192c0.291,0.128,0.521,0.326,0.689,0.592
                                    c0.168,0.266,0.253,0.562,0.253,0.886c0,0.303-0.074,0.58-0.222,0.829c-0.148,0.249-0.365,0.451-0.651,0.606
                                    c0.354,0.121,0.628,0.262,0.819,0.425c0.19,0.162,0.34,0.359,0.446,0.589s0.159,0.48,0.159,0.75c0,0.548-0.2,1.011-0.601,1.39
                                    c-0.4,0.379-0.938,0.569-1.613,0.569h-1.875V236.292z M790.167,236.96v2.186h0.391c0.475,0,0.824-0.044,1.047-0.132
                                    c0.224-0.088,0.4-0.227,0.53-0.417c0.131-0.19,0.195-0.401,0.195-0.634c0-0.313-0.109-0.558-0.328-0.736
                                    c-0.218-0.178-0.566-0.267-1.044-0.267H790.167z M790.167,239.833v2.618h0.847c0.499,0,0.864-0.049,1.098-0.146
                                    c0.232-0.098,0.419-0.25,0.56-0.458c0.142-0.207,0.212-0.432,0.212-0.673c0-0.303-0.1-0.568-0.298-0.794
                                    c-0.198-0.226-0.471-0.38-0.817-0.464c-0.232-0.056-0.638-0.084-1.214-0.084H790.167z" />
        <path fill="#FFFFFF" d="M794.944,236.292h3.913v0.668h-3.231v2.14h3.203v0.668h-3.203v2.683h3.203v0.668h-3.885V236.292z
                                     M795.988,234.69c0.148,0,0.275,0.053,0.381,0.158c0.105,0.105,0.157,0.232,0.157,0.381s-0.052,0.275-0.157,0.38
                                    c-0.105,0.105-0.232,0.158-0.381,0.158s-0.275-0.053-0.381-0.158c-0.104-0.105-0.157-0.232-0.157-0.38s0.053-0.275,0.157-0.381
                                    C795.713,234.743,795.84,234.69,795.988,234.69z M797.882,234.69c0.149,0,0.275,0.053,0.381,0.158
                                    c0.105,0.105,0.158,0.232,0.158,0.381s-0.053,0.275-0.158,0.38c-0.105,0.105-0.231,0.158-0.381,0.158
                                    c-0.148,0-0.275-0.053-0.38-0.158c-0.105-0.105-0.158-0.232-0.158-0.38s0.053-0.275,0.158-0.381
                                    C797.606,234.743,797.733,234.69,797.882,234.69z" />
        <path fill="#FFFFFF" d="M800.073,236.292h1.36c0.758,0,1.271,0.031,1.541,0.093c0.405,0.093,0.734,0.292,0.988,0.597
                                    s0.381,0.681,0.381,1.127c0,0.372-0.088,0.699-0.263,0.98c-0.175,0.282-0.425,0.495-0.749,0.639
                                    c-0.325,0.144-0.774,0.218-1.347,0.221l2.456,3.17h-0.845l-2.455-3.17h-0.386v3.17h-0.683V236.292z M800.756,236.96v2.321
                                    l1.176,0.009c0.456,0,0.793-0.043,1.012-0.13c0.218-0.086,0.389-0.225,0.511-0.416c0.123-0.19,0.184-0.403,0.184-0.638
                                    c0-0.229-0.062-0.437-0.186-0.625c-0.124-0.187-0.287-0.321-0.488-0.401s-0.536-0.121-1.004-0.121H800.756z" />
        <path fill="#FFFFFF" d="M812.166,237.559l-0.539,0.413c-0.297-0.387-0.653-0.68-1.069-0.879s-0.874-0.299-1.372-0.299
                                    c-0.545,0-1.049,0.13-1.513,0.392c-0.465,0.262-0.824,0.613-1.079,1.054c-0.256,0.441-0.384,0.937-0.384,1.488
                                    c0,0.833,0.286,1.527,0.856,2.084c0.571,0.557,1.291,0.835,2.161,0.835c0.956,0,1.756-0.374,2.399-1.123l0.539,0.408
                                    c-0.341,0.434-0.766,0.769-1.274,1.005c-0.509,0.237-1.078,0.355-1.706,0.355c-1.194,0-2.137-0.398-2.827-1.193
                                    c-0.578-0.672-0.867-1.482-0.867-2.433c0-1,0.35-1.84,1.051-2.523c0.701-0.682,1.579-1.023,2.635-1.023
                                    c0.637,0,1.213,0.126,1.727,0.378S811.838,237.104,812.166,237.559z M808.735,243.12h0.408l-0.078,0.552
                                    c0.07-0.009,0.13-0.014,0.176-0.014c0.151,0,0.278,0.047,0.381,0.142c0.103,0.094,0.153,0.212,0.153,0.355
                                    c0,0.204-0.093,0.377-0.278,0.52c-0.186,0.142-0.447,0.213-0.785,0.213c-0.275,0-0.533-0.046-0.774-0.139l0.102-0.32
                                    c0.198,0.062,0.384,0.093,0.558,0.093c0.231,0,0.395-0.029,0.487-0.086s0.139-0.129,0.139-0.216c0-0.053-0.025-0.099-0.076-0.139
                                    c-0.051-0.041-0.122-0.061-0.211-0.061c-0.075,0-0.183,0.014-0.325,0.042L808.735,243.12z" />
        <path fill="#FFFFFF" d="M816.325,236.292l3.184,6.828h-0.736l-1.074-2.247h-2.941l-1.064,2.247h-0.761l3.226-6.828H816.325z
                                     M816.238,237.742l-1.17,2.472h2.335L816.238,237.742z" />
        <path fill="#FFFFFF" d="M820.572,243.12v-6.828h0.148l4.544,5.234v-5.234h0.673v6.828h-0.153l-4.507-5.17v5.17H820.572z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M762.088,273.232h1.923c0.773,0,1.368,0.092,1.783,0.275c0.416,0.184,0.744,0.465,0.985,0.846
                                    s0.361,0.802,0.361,1.267c0,0.433-0.105,0.828-0.316,1.184c-0.212,0.356-0.521,0.645-0.931,0.865
                                    c0.507,0.172,0.896,0.375,1.17,0.607s0.486,0.513,0.638,0.842c0.152,0.329,0.229,0.686,0.229,1.071
                                    c0,0.782-0.286,1.444-0.858,1.986c-0.573,0.542-1.341,0.813-2.305,0.813h-2.679V273.232z M763.042,274.187v3.124h0.559
                                    c0.678,0,1.176-0.063,1.495-0.189s0.571-0.325,0.758-0.597c0.186-0.272,0.279-0.574,0.279-0.905c0-0.447-0.156-0.797-0.469-1.051
                                    c-0.313-0.254-0.81-0.381-1.492-0.381H763.042z M763.042,278.292v3.74h1.209c0.713,0,1.236-0.069,1.568-0.208
                                    c0.332-0.14,0.599-0.357,0.8-0.653c0.202-0.296,0.303-0.617,0.303-0.961c0-0.434-0.142-0.812-0.425-1.134
                                    c-0.283-0.322-0.673-0.543-1.169-0.663c-0.332-0.08-0.91-0.119-1.734-0.119H763.042z" />
        <path fill="#FFFFFF" d="M769.526,276.158h0.682v4.122c0,0.489,0.01,0.793,0.028,0.914c0.034,0.27,0.112,0.495,0.236,0.676
                                    c0.124,0.181,0.314,0.333,0.571,0.455c0.257,0.123,0.516,0.184,0.775,0.184c0.226,0,0.442-0.048,0.649-0.144
                                    c0.207-0.096,0.381-0.229,0.521-0.399c0.139-0.17,0.241-0.376,0.306-0.618c0.047-0.173,0.07-0.529,0.07-1.067v-4.122h0.682v4.122
                                    c0,0.609-0.06,1.102-0.179,1.479c-0.119,0.376-0.357,0.703-0.715,0.981c-0.357,0.279-0.79,0.418-1.297,0.418
                                    c-0.551,0-1.023-0.132-1.416-0.395c-0.393-0.263-0.656-0.611-0.789-1.044c-0.084-0.266-0.125-0.746-0.125-1.439V276.158z" />
        <path fill="#FFFFFF" d="M775.729,276.158h0.696v2.563l2.729-2.563h0.917l-3.28,3.063l3.535,3.765h-0.909l-2.992-3.181v3.181
                                    h-0.696V276.158z" />
        <path fill="#FFFFFF" d="M784.596,275.986c1.035,0,1.9,0.345,2.597,1.035c0.697,0.69,1.045,1.54,1.045,2.548
                                    c0,1-0.348,1.848-1.042,2.544c-0.695,0.696-1.543,1.044-2.543,1.044c-1.013,0-1.868-0.347-2.564-1.04
                                    c-0.696-0.693-1.045-1.532-1.045-2.516c0-0.656,0.158-1.264,0.476-1.824s0.75-0.999,1.299-1.316
                                    C783.365,276.145,783.958,275.986,784.596,275.986z M784.626,276.65c-0.505,0-0.983,0.131-1.437,0.395
                                    c-0.452,0.264-0.806,0.618-1.06,1.064c-0.255,0.446-0.382,0.943-0.382,1.491c0,0.812,0.281,1.497,0.844,2.056
                                    s1.241,0.838,2.034,0.838c0.53,0,1.021-0.128,1.472-0.385c0.451-0.257,0.803-0.609,1.056-1.055s0.379-0.941,0.379-1.487
                                    c0-0.542-0.126-1.032-0.379-1.47c-0.253-0.438-0.608-0.789-1.067-1.052C785.628,276.782,785.141,276.65,784.626,276.65z" />
        <path fill="#FFFFFF" d="M789.087,276.158h0.743l2.263,5.275l2.3-5.275h0.743l-2.971,6.828h-0.148L789.087,276.158z" />
        <path fill="#FFFFFF" d="M796.185,276.158h0.683v6.828h-0.683V276.158z" />
        <path fill="#FFFFFF" d="M798.432,276.158h0.696v2.563l2.729-2.563h0.917l-3.28,3.063l3.535,3.765h-0.909l-2.992-3.181v3.181
                                    h-0.696V276.158z" />
        <path fill="#FFFFFF" d="M804.071,276.158h0.682v4.122c0,0.489,0.01,0.793,0.028,0.914c0.034,0.27,0.112,0.495,0.236,0.676
                                    c0.124,0.181,0.314,0.333,0.571,0.455c0.257,0.123,0.516,0.184,0.775,0.184c0.226,0,0.442-0.048,0.649-0.144
                                    c0.207-0.096,0.381-0.229,0.521-0.399c0.139-0.17,0.241-0.376,0.306-0.618c0.047-0.173,0.07-0.529,0.07-1.067v-4.122h0.682v4.122
                                    c0,0.609-0.06,1.102-0.179,1.479c-0.119,0.376-0.357,0.703-0.715,0.981c-0.357,0.279-0.79,0.418-1.297,0.418
                                    c-0.551,0-1.023-0.132-1.416-0.395c-0.393-0.263-0.656-0.611-0.789-1.044c-0.084-0.266-0.125-0.746-0.125-1.439V276.158z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M776.404,326.598l2.734-0.62c1.568-0.355,2.642-0.526,3.221-0.514c0.827,0.015,1.559,0.267,2.192,0.753
                                    c0.634,0.489,1.054,1.187,1.261,2.095c0.207,0.915,0.135,1.724-0.215,2.428c-0.352,0.705-0.93,1.257-1.735,1.654
                                    c-0.588,0.291-1.735,0.63-3.439,1.017l-0.98,0.222l1.448,6.384l-1.372,0.311L776.404,326.598z M778.081,327.631l1.057,4.656
                                    l2.331-0.498c0.938-0.213,1.606-0.455,2.004-0.725c0.396-0.269,0.676-0.624,0.838-1.062c0.163-0.437,0.19-0.893,0.084-1.365
                                    c-0.104-0.46-0.324-0.853-0.66-1.178c-0.336-0.325-0.726-0.522-1.17-0.591c-0.443-0.07-1.13,0.001-2.057,0.212L778.081,327.631z" />
        <path fill="#FFFFFF" d="M792.681,326.983c1.456-0.33,2.784-0.121,3.985,0.628c1.201,0.748,1.962,1.833,2.284,3.252
                                    c0.319,1.407,0.101,2.711-0.655,3.913c-0.757,1.202-1.838,1.963-3.246,2.282c-1.425,0.324-2.738,0.109-3.94-0.645
                                    c-1.202-0.753-1.96-1.823-2.274-3.208c-0.21-0.924-0.18-1.829,0.088-2.719c0.268-0.89,0.736-1.645,1.406-2.267
                                    C790.998,327.599,791.783,327.187,792.681,326.983z M792.936,327.907c-0.711,0.161-1.344,0.5-1.896,1.016
                                    c-0.553,0.515-0.937,1.126-1.152,1.835c-0.216,0.709-0.235,1.448-0.061,2.22c0.26,1.143,0.874,2.018,1.845,2.624
                                    c0.97,0.607,2.014,0.784,3.13,0.53c0.746-0.169,1.396-0.506,1.948-1.013c0.552-0.505,0.936-1.112,1.149-1.82
                                    c0.213-0.709,0.232-1.446,0.059-2.214c-0.174-0.763-0.508-1.413-1.003-1.948c-0.496-0.537-1.108-0.916-1.838-1.14
                                    C794.387,327.773,793.659,327.743,792.936,327.907z" />
        <path fill="#FFFFFF" d="M809.426,325.135l-0.585,0.875c-0.655-0.405-1.333-0.672-2.033-0.8c-0.699-0.127-1.353-0.122-1.958,0.016
                                    c-0.753,0.171-1.429,0.519-2.026,1.043c-0.598,0.524-1.012,1.146-1.243,1.865c-0.23,0.719-0.266,1.43-0.105,2.136
                                    c0.164,0.724,0.514,1.366,1.049,1.93s1.188,0.954,1.955,1.171c0.769,0.218,1.561,0.233,2.374,0.049
                                    c0.989-0.225,1.763-0.692,2.319-1.405c0.558-0.713,0.799-1.527,0.724-2.444l-3.064,0.695l-0.21-0.928l4.142-0.939
                                    c0.328,1.487,0.155,2.766-0.521,3.837c-0.675,1.071-1.744,1.773-3.208,2.105c-1.777,0.403-3.321,0.117-4.632-0.859
                                    c-1.009-0.75-1.652-1.738-1.93-2.963c-0.207-0.91-0.17-1.809,0.109-2.697c0.279-0.888,0.768-1.644,1.465-2.267
                                    c0.696-0.622,1.548-1.047,2.554-1.276c0.815-0.185,1.615-0.212,2.399-0.081C807.786,324.329,808.595,324.642,809.426,325.135z" />
        <path fill="#FFFFFF" d="M811.509,322.966l1.915-0.434c1.066-0.242,1.8-0.362,2.198-0.361c0.601,0.002,1.128,0.177,1.583,0.525
                                    c0.454,0.349,0.752,0.836,0.895,1.465c0.119,0.522,0.101,1.01-0.056,1.463s-0.439,0.832-0.852,1.139
                                    c-0.411,0.306-1.019,0.554-1.824,0.74l4.469,3.678l-1.188,0.27l-4.468-3.678l-0.543,0.123l1.013,4.462l-0.961,0.218
                                    L811.509,322.966z M812.684,323.689l0.741,3.267l1.657-0.361c0.642-0.146,1.102-0.315,1.382-0.508
                                    c0.28-0.191,0.476-0.439,0.588-0.747c0.111-0.308,0.13-0.626,0.054-0.957c-0.072-0.322-0.226-0.596-0.461-0.819
                                    c-0.233-0.224-0.506-0.361-0.814-0.41c-0.309-0.049-0.793,0.002-1.452,0.151L812.684,323.689z" />
        <path fill="#FFFFFF" d="M823.504,320.245l6.662,8.594l-1.037,0.235l-2.229-2.818l-4.141,0.939l-0.78,3.501l-1.071,0.243
                                    l2.361-10.64L823.504,320.245z M823.846,322.315l-0.857,3.853l3.286-0.745L823.846,322.315z" />
        <path fill="#FFFFFF" d="M839.112,318.401l-0.585,0.875c-0.654-0.405-1.332-0.672-2.032-0.8c-0.7-0.127-1.353-0.122-1.958,0.016
                                    c-0.753,0.171-1.429,0.519-2.026,1.043c-0.599,0.525-1.012,1.146-1.243,1.865c-0.23,0.719-0.266,1.431-0.105,2.137
                                    c0.164,0.724,0.513,1.366,1.049,1.929c0.535,0.563,1.187,0.954,1.955,1.171c0.768,0.218,1.56,0.233,2.374,0.049
                                    c0.988-0.224,1.763-0.692,2.319-1.405c0.558-0.712,0.799-1.527,0.724-2.445l-3.064,0.695l-0.211-0.928l4.143-0.939
                                    c0.328,1.487,0.154,2.766-0.521,3.837c-0.676,1.071-1.744,1.774-3.208,2.106c-1.777,0.403-3.321,0.117-4.632-0.859
                                    c-1.01-0.751-1.652-1.739-1.93-2.963c-0.207-0.91-0.17-1.809,0.109-2.697c0.279-0.888,0.768-1.644,1.464-2.267
                                    c0.697-0.622,1.549-1.047,2.555-1.275c0.814-0.185,1.614-0.212,2.399-0.082C837.474,317.596,838.281,317.908,839.112,318.401z" />
        <path fill="#FFFFFF" d="M844.293,315.53l0.961-0.218l1.472,6.488c0.226,0.997,0.306,1.709,0.239,2.133
                                    c-0.066,0.425-0.253,0.794-0.563,1.11c-0.309,0.314-0.72,0.531-1.233,0.647c-0.388,0.088-0.787,0.1-1.198,0.035
                                    c-0.41-0.065-0.887-0.234-1.431-0.509l0.337-0.881c0.581,0.238,1.055,0.393,1.419,0.461c0.239,0.047,0.464,0.045,0.674-0.002
                                    c0.275-0.063,0.506-0.202,0.692-0.418c0.188-0.216,0.296-0.472,0.322-0.767c0.027-0.295-0.049-0.836-0.227-1.625L844.293,315.53z" />
        <path fill="#FFFFFF" d="M851.52,313.891l6.662,8.594l-1.038,0.235l-2.229-2.818l-4.141,0.939l-0.78,3.501l-1.071,0.243
                                    l2.361-10.64L851.52,313.891z M851.861,315.96l-0.857,3.853l3.285-0.745L851.861,315.96z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M845.634,434.617l0.926-0.556c0.652,1.201,1.406,1.801,2.261,1.801c0.365,0,0.709-0.085,1.03-0.255
                                    c0.321-0.171,0.565-0.399,0.733-0.686c0.168-0.287,0.252-0.591,0.252-0.912c0-0.365-0.123-0.724-0.37-1.074
                                    c-0.341-0.484-0.964-1.067-1.868-1.749c-0.909-0.687-1.475-1.184-1.696-1.489c-0.386-0.514-0.578-1.07-0.578-1.668
                                    c0-0.474,0.113-0.906,0.341-1.297c0.227-0.39,0.547-0.697,0.959-0.922c0.413-0.226,0.861-0.338,1.346-0.338
                                    c0.514,0,0.994,0.128,1.441,0.382c0.447,0.255,0.92,0.723,1.419,1.404l-0.89,0.675c-0.41-0.544-0.76-0.902-1.048-1.075
                                    c-0.289-0.173-0.604-0.259-0.945-0.259c-0.439,0-0.799,0.133-1.078,0.399c-0.279,0.268-0.419,0.596-0.419,0.986
                                    c0,0.237,0.05,0.467,0.148,0.688c0.099,0.223,0.279,0.465,0.541,0.727c0.143,0.139,0.612,0.502,1.408,1.09
                                    c0.943,0.696,1.591,1.316,1.941,1.859c0.351,0.544,0.526,1.09,0.526,1.638c0,0.791-0.301,1.478-0.9,2.061
                                    c-0.601,0.583-1.331,0.875-2.19,0.875c-0.662,0-1.262-0.177-1.801-0.53C846.585,436.039,846.088,435.447,845.634,434.617z" />
        <path fill="#FFFFFF" d="M853.163,429.765v-0.747h4.182v0.747h-1.702v6.884h-0.777v-6.884H853.163z" />
        <path fill="#FFFFFF" d="M858.47,429.018h0.763v4.606c0,0.546,0.011,0.887,0.031,1.021c0.038,0.301,0.126,0.553,0.265,0.755
                                    s0.351,0.372,0.638,0.509s0.576,0.205,0.867,0.205c0.252,0,0.494-0.054,0.726-0.161s0.426-0.256,0.581-0.446
                                    s0.27-0.42,0.343-0.689c0.052-0.194,0.077-0.592,0.077-1.193v-4.606h0.763v4.606c0,0.682-0.066,1.231-0.199,1.652
                                    c-0.134,0.42-0.399,0.785-0.799,1.097s-0.883,0.467-1.45,0.467c-0.615,0-1.143-0.146-1.582-0.44s-0.733-0.684-0.882-1.167
                                    c-0.094-0.298-0.141-0.834-0.141-1.608V429.018z" />
        <path fill="#FFFFFF" d="M865.422,429.018h1.505c0.604,0,1.07,0.071,1.395,0.215c0.325,0.144,0.582,0.364,0.771,0.662
                                    c0.188,0.297,0.283,0.627,0.283,0.99c0,0.339-0.083,0.647-0.248,0.926s-0.408,0.505-0.728,0.678
                                    c0.396,0.135,0.701,0.293,0.915,0.475s0.38,0.4,0.499,0.658s0.179,0.537,0.179,0.838c0,0.612-0.224,1.13-0.672,1.554
                                    s-1.049,0.636-1.803,0.636h-2.096V429.018z M866.169,429.765v2.443h0.437c0.53,0,0.92-0.05,1.17-0.148
                                    c0.249-0.099,0.447-0.254,0.593-0.467s0.218-0.448,0.218-0.708c0-0.35-0.122-0.623-0.366-0.822
                                    c-0.244-0.198-0.633-0.298-1.167-0.298H866.169z M866.169,432.976v2.926h0.945c0.559,0,0.967-0.055,1.227-0.164
                                    c0.26-0.108,0.469-0.278,0.626-0.511c0.158-0.231,0.237-0.482,0.237-0.752c0-0.339-0.111-0.635-0.333-0.887
                                    c-0.222-0.253-0.526-0.426-0.914-0.52c-0.26-0.062-0.712-0.093-1.356-0.093H866.169z" />
        <path fill="#FFFFFF" d="M871.502,429.018h0.763v6.894h2.936v0.737h-3.698V429.018z" />
        <path fill="#FFFFFF" d="M876.3,429.018h0.763v7.631H876.3V429.018z" />
        <path fill="#FFFFFF" d="M878.815,436.648v-7.631h0.166l5.079,5.85v-5.85h0.752v7.631h-0.171l-5.037-5.778v5.778H878.815z" />
        <path fill="#FFFFFF" d="M889.787,429.018l3.559,7.631h-0.823l-1.2-2.511h-3.287l-1.189,2.511h-0.851l3.605-7.631H889.787z
                                     M889.691,430.639l-1.308,2.762h2.608L889.691,430.639z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M854.27,362.794h2.91c1.171,0,2.071,0.139,2.7,0.417c0.628,0.277,1.125,0.704,1.49,1.279
                                    c0.364,0.575,0.547,1.214,0.547,1.916c0,0.656-0.16,1.253-0.479,1.792c-0.319,0.538-0.789,0.975-1.408,1.31
                                    c0.767,0.261,1.357,0.566,1.771,0.918c0.414,0.351,0.735,0.776,0.966,1.274s0.345,1.038,0.345,1.62
                                    c0,1.185-0.433,2.187-1.299,3.006c-0.867,0.819-2.029,1.229-3.487,1.229h-4.055V362.794z M855.715,364.239v4.727h0.845
                                    c1.025,0,1.78-0.096,2.263-0.286s0.865-0.492,1.146-0.903c0.282-0.411,0.423-0.868,0.423-1.37c0-0.675-0.236-1.205-0.709-1.59
                                    s-1.226-0.577-2.258-0.577H855.715z M855.715,370.45v5.66h1.83c1.078,0,1.869-0.105,2.372-0.316
                                    c0.502-0.21,0.906-0.54,1.211-0.988s0.458-0.933,0.458-1.455c0-0.655-0.215-1.228-0.644-1.716s-1.018-0.823-1.768-1.004
                                    c-0.503-0.12-1.378-0.181-2.625-0.181H855.715z" />
        <path fill="#FFFFFF" d="M865.345,367.223h1.032v10.333h-1.032V367.223z" />
        <path fill="#FFFFFF" d="M868.745,367.223h1.032v9.335h3.976v0.998h-5.008V367.223z" />
        <path fill="#FFFFFF" d="M875.242,367.223h1.032v10.333h-1.032V367.223z" />
        <path fill="#FFFFFF" d="M878.649,377.556v-10.333h0.225l6.877,7.921v-7.921h1.019v10.333h-0.231l-6.821-7.824v7.824H878.649z" />
        <path fill="#FFFFFF" d="M889.137,367.223h1.032v10.333h-1.032V367.223z" />
        <path fill="#FFFFFF" d="M902.16,369.14l-0.814,0.626c-0.45-0.586-0.989-1.029-1.619-1.331c-0.63-0.303-1.322-0.453-2.076-0.453
                                    c-0.824,0-1.588,0.197-2.29,0.593c-0.702,0.396-1.247,0.928-1.633,1.595c-0.387,0.668-0.58,1.418-0.58,2.252
                                    c0,1.26,0.433,2.311,1.296,3.153c0.864,0.843,1.954,1.265,3.271,1.265c1.447,0,2.657-0.566,3.632-1.7l0.814,0.618
                                    c-0.516,0.656-1.158,1.163-1.928,1.521c-0.771,0.357-1.631,0.537-2.582,0.537c-1.808,0-3.233-0.602-4.277-1.806
                                    c-0.876-1.016-1.314-2.243-1.314-3.681c0-1.513,0.531-2.785,1.592-3.817c1.061-1.033,2.389-1.549,3.986-1.549
                                    c0.965,0,1.835,0.19,2.613,0.572C901.026,367.917,901.664,368.452,902.16,369.14z" />
        <path fill="#FFFFFF" d="M908.454,367.223l4.818,10.333h-1.115l-1.625-3.4h-4.452l-1.609,3.4h-1.152l4.883-10.333H908.454z
                                     M908.323,369.418l-1.771,3.74h3.532L908.323,369.418z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M797.49,379.068l0.872,0.269l-2.427,7.887l3.358,1.034l-0.26,0.843l-4.23-1.302L797.49,379.068z" />
        <path fill="#FFFFFF" d="M801.979,383.316l0.61,0.188l-1.699,5.521l2.351,0.724l-0.182,0.59l-2.961-0.911L801.979,383.316z" />
        <path fill="#FFFFFF" d="M808.865,385.268c0.927,0.285,1.606,0.832,2.039,1.642c0.435,0.81,0.512,1.665,0.234,2.568
                                    c-0.275,0.895-0.82,1.557-1.635,1.989c-0.813,0.431-1.667,0.509-2.563,0.233c-0.906-0.279-1.577-0.824-2.009-1.636
                                    c-0.434-0.813-0.514-1.659-0.242-2.54c0.18-0.587,0.49-1.087,0.929-1.501s0.946-0.688,1.523-0.82
                                    C807.721,385.07,808.296,385.092,808.865,385.268z M808.71,385.869c-0.451-0.139-0.916-0.152-1.395-0.041
                                    c-0.478,0.11-0.892,0.33-1.241,0.659c-0.35,0.33-0.601,0.739-0.752,1.229c-0.224,0.727-0.161,1.417,0.188,2.072
                                    c0.351,0.655,0.88,1.092,1.59,1.311c0.475,0.146,0.949,0.166,1.424,0.06c0.474-0.105,0.886-0.323,1.234-0.652
                                    s0.598-0.738,0.748-1.227c0.149-0.484,0.171-0.958,0.066-1.419c-0.105-0.461-0.327-0.874-0.666-1.235
                                    C809.57,386.264,809.17,386.011,808.71,385.869z" />
        <path fill="#FFFFFF" d="M812.837,386.658l0.665,0.205l0.572,5.344l3.511-4.087l0.665,0.204l-4.539,5.292l-0.134-0.041
                                    L812.837,386.658z" />
        <path fill="#FFFFFF" d="M824.617,391.524l-0.595,0.222c-0.159-0.429-0.397-0.789-0.716-1.082c-0.317-0.293-0.7-0.509-1.145-0.646
                                    c-0.488-0.15-0.976-0.172-1.462-0.066c-0.488,0.107-0.906,0.322-1.256,0.646c-0.352,0.324-0.602,0.732-0.753,1.226
                                    c-0.229,0.745-0.165,1.445,0.191,2.101c0.357,0.656,0.927,1.103,1.705,1.343c0.854,0.263,1.673,0.148,2.456-0.344l0.369,0.514
                                    c-0.424,0.294-0.896,0.476-1.417,0.548c-0.521,0.072-1.062,0.021-1.623-0.151c-1.07-0.33-1.804-0.944-2.202-1.847
                                    c-0.334-0.76-0.369-1.565-0.107-2.415c0.275-0.895,0.82-1.551,1.637-1.968c0.814-0.417,1.694-0.481,2.639-0.19
                                    c0.57,0.175,1.052,0.447,1.441,0.814S824.449,391.026,824.617,391.524z" />
        <path fill="#FFFFFF" d="M828.688,391.536l0.969,6.987l-0.659-0.203l-0.342-2.307l-2.633-0.81l-1.571,1.718l-0.681-0.209
                                    l4.768-5.222L828.688,391.536z M828.212,392.811l-1.728,1.889l2.089,0.643L828.212,392.811z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M799.769,429.018h0.778v2.863l3.05-2.863h1.024l-3.665,3.424l3.95,4.207h-1.016l-3.344-3.555v3.555h-0.778
                                    V429.018z" />
        <path fill="#FFFFFF" d="M809.679,428.825c1.155,0,2.123,0.386,2.901,1.157s1.168,1.721,1.168,2.848
                                    c0,1.117-0.389,2.064-1.165,2.843c-0.777,0.778-1.725,1.167-2.842,1.167c-1.132,0-2.087-0.387-2.865-1.162
                                    c-0.779-0.774-1.168-1.712-1.168-2.812c0-0.732,0.177-1.412,0.531-2.038c0.355-0.626,0.839-1.116,1.451-1.471
                                    S808.966,428.825,809.679,428.825z M809.712,429.567c-0.564,0-1.1,0.147-1.605,0.441s-0.9,0.69-1.185,1.188
                                    c-0.284,0.499-0.426,1.054-0.426,1.667c0,0.906,0.314,1.672,0.943,2.297c0.628,0.625,1.386,0.938,2.272,0.938
                                    c0.593,0,1.141-0.144,1.645-0.432c0.504-0.287,0.897-0.68,1.18-1.178c0.282-0.499,0.424-1.053,0.424-1.662
                                    c0-0.605-0.142-1.153-0.424-1.643c-0.282-0.49-0.68-0.882-1.192-1.176S810.287,429.567,809.712,429.567z" />
        <path fill="#FFFFFF" d="M815.279,429.018h0.778v2.863l3.05-2.863h1.024l-3.665,3.424l3.95,4.207h-1.016l-3.344-3.555v3.555h-0.778
                                    V429.018z" />
        <path fill="#FFFFFF" d="M824.673,429.018l3.559,7.631h-0.823l-1.2-2.511h-3.287l-1.189,2.511h-0.851l3.605-7.631H824.673z
                                     M824.577,430.639l-1.308,2.762h2.608L824.577,430.639z" />
        <path fill="#FFFFFF" d="M831.915,429.018h0.763v5.151c0,0.792-0.062,1.343-0.184,1.651c-0.123,0.31-0.328,0.558-0.615,0.742
                                    c-0.287,0.186-0.635,0.277-1.043,0.277c-0.308,0-0.611-0.06-0.91-0.179s-0.63-0.329-0.993-0.63l0.404-0.607
                                    c0.398,0.28,0.729,0.478,0.993,0.592c0.173,0.076,0.343,0.114,0.509,0.114c0.219,0,0.417-0.066,0.596-0.197
                                    c0.179-0.132,0.303-0.307,0.374-0.524s0.106-0.64,0.106-1.266V429.018z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M781.862,407.193l0.148,1.494c0.06,0.601,0.035,1.07-0.075,1.406c-0.11,0.337-0.305,0.613-0.581,0.83
                                    s-0.595,0.344-0.955,0.379c-0.337,0.034-0.652-0.018-0.944-0.154c-0.293-0.137-0.541-0.355-0.744-0.655
                                    c-0.096,0.406-0.222,0.725-0.381,0.955s-0.361,0.417-0.605,0.56c-0.244,0.145-0.515,0.232-0.813,0.262
                                    c-0.607,0.061-1.145-0.111-1.609-0.515c-0.465-0.402-0.734-0.978-0.809-1.727l-0.207-2.081L781.862,407.193z M778.006,408.326
                                    l-2.904,0.289l0.093,0.939c0.056,0.553,0.15,0.953,0.283,1.201c0.134,0.246,0.324,0.437,0.569,0.571
                                    c0.246,0.133,0.503,0.187,0.771,0.16c0.336-0.034,0.619-0.173,0.849-0.418c0.228-0.245,0.37-0.563,0.425-0.959
                                    c0.035-0.264,0.021-0.716-0.042-1.355L778.006,408.326z M781.194,408.009l-2.426,0.241l0.043,0.434
                                    c0.052,0.526,0.14,0.909,0.263,1.147c0.122,0.236,0.296,0.418,0.522,0.542c0.225,0.124,0.467,0.173,0.725,0.146
                                    c0.346-0.034,0.605-0.184,0.779-0.445c0.173-0.262,0.233-0.657,0.181-1.188L781.194,408.009z" />
        <path fill="#FFFFFF" d="M780.164,413.197l0.053,0.53l-3.202,0.318c-0.379,0.038-0.615,0.069-0.708,0.092
                                    c-0.206,0.048-0.375,0.127-0.506,0.237s-0.234,0.27-0.31,0.478c-0.075,0.209-0.103,0.415-0.082,0.617
                                    c0.018,0.175,0.071,0.339,0.162,0.493s0.207,0.277,0.351,0.374c0.143,0.094,0.311,0.158,0.503,0.188
                                    c0.138,0.023,0.416,0.014,0.834-0.028l3.202-0.318l0.053,0.53l-3.202,0.318c-0.473,0.048-0.86,0.04-1.161-0.024
                                    c-0.302-0.063-0.574-0.223-0.818-0.479c-0.244-0.256-0.386-0.581-0.425-0.976c-0.043-0.428,0.023-0.804,0.197-1.129
                                    c0.174-0.327,0.424-0.558,0.75-0.694c0.2-0.086,0.569-0.155,1.107-0.209L780.164,413.197z" />
        <path fill="#FFFFFF" d="M780.646,418.044l0.105,1.056c0.059,0.589,0.074,0.991,0.047,1.205c-0.042,0.322-0.171,0.593-0.389,0.813
                                    c-0.217,0.221-0.498,0.349-0.845,0.383c-0.289,0.028-0.55-0.015-0.782-0.127c-0.232-0.114-0.418-0.292-0.555-0.534
                                    c-0.137-0.24-0.229-0.584-0.275-1.028l-2.272,2.153l-0.065-0.656l2.272-2.151l-0.029-0.301l-2.463,0.245l-0.053-0.529
                                    L780.646,418.044z M780.18,418.625l-1.803,0.18l0.084,0.914c0.035,0.355,0.095,0.612,0.179,0.775
                                    c0.085,0.163,0.206,0.285,0.362,0.365c0.157,0.08,0.327,0.111,0.51,0.094c0.178-0.018,0.335-0.082,0.471-0.193
                                    c0.137-0.109,0.228-0.246,0.274-0.41c0.047-0.163,0.052-0.426,0.017-0.789L780.18,418.625z" />
        <path fill="#FFFFFF" d="M775.786,423.028l5.304-0.528l0.012,0.116l-3.715,3.934l4.066-0.404l0.052,0.522l-5.304,0.528
                                    l-0.012-0.118l3.668-3.902l-4.017,0.4L775.786,423.028z" />
        <path fill="#FFFFFF" d="M781.141,432.996l-0.363-0.386c0.278-0.261,0.479-0.562,0.601-0.899c0.124-0.338,0.165-0.702,0.127-1.089
                                    c-0.042-0.423-0.183-0.805-0.422-1.145s-0.539-0.593-0.901-0.757s-0.758-0.226-1.186-0.183c-0.646,0.064-1.164,0.34-1.553,0.826
                                    s-0.549,1.068-0.481,1.743c0.073,0.742,0.426,1.334,1.058,1.777l-0.275,0.449c-0.363-0.23-0.656-0.534-0.88-0.911
                                    c-0.223-0.377-0.358-0.811-0.407-1.299c-0.093-0.928,0.144-1.689,0.709-2.287c0.476-0.501,1.083-0.789,1.821-0.862
                                    c0.776-0.077,1.457,0.13,2.041,0.622c0.584,0.491,0.917,1.147,0.999,1.967c0.049,0.495-0.004,0.952-0.16,1.37
                                    C781.71,432.354,781.468,432.706,781.141,432.996z" />
        <path fill="#FFFFFF" d="M782.446,436.129l-5.058,3.002l-0.057-0.572l1.662-1.008l-0.228-2.285l-1.827-0.652l-0.06-0.591
                                    l5.554,1.977L782.446,436.129z M781.313,436.175l-2.01-0.718l0.18,1.813L781.313,436.175z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M747.996,418.424l0.345-0.827l7.486,3.12l1.33-3.188l0.799,0.334l-1.674,4.016L747.996,418.424z" />
        <path fill="#FFFFFF" d="M752.543,414.518l0.241-0.58l5.801,2.418l-0.242,0.58L752.543,414.518z" />
        <path fill="#FFFFFF" d="M753.337,412.613l0.481-1.155c0.276-0.663,0.491-1.098,0.646-1.306c0.22-0.296,0.5-0.498,0.842-0.602
                                    c0.342-0.104,0.704-0.077,1.088,0.083c0.387,0.161,0.662,0.396,0.828,0.706c0.165,0.31,0.217,0.662,0.152,1.059
                                    c-0.046,0.289-0.219,0.794-0.52,1.515l-0.172,0.414l2.696,1.124l-0.241,0.58L753.337,412.613z M754.146,412.27l1.968,0.82
                                    l0.421-0.977c0.165-0.396,0.251-0.703,0.255-0.917c0.005-0.214-0.052-0.407-0.169-0.579c-0.117-0.173-0.276-0.301-0.476-0.384
                                    c-0.194-0.081-0.394-0.103-0.599-0.064c-0.206,0.038-0.378,0.13-0.519,0.272c-0.14,0.145-0.291,0.412-0.455,0.804L754.146,412.27z
                                    " />
        <path fill="#FFFFFF" d="M756.336,405.008c0.366-0.879,0.967-1.492,1.799-1.84c0.834-0.348,1.678-0.343,2.535,0.015
                                    c0.85,0.354,1.446,0.949,1.792,1.786c0.346,0.838,0.341,1.681-0.014,2.531c-0.358,0.859-0.955,1.463-1.791,1.809
                                    c-0.836,0.348-1.672,0.346-2.508-0.003c-0.557-0.232-1.018-0.582-1.381-1.05s-0.582-0.991-0.658-1.569
                                    C756.035,406.109,756.11,405.549,756.336,405.008z M756.911,405.216c-0.179,0.43-0.237,0.884-0.174,1.361s0.24,0.903,0.529,1.276
                                    c0.288,0.375,0.665,0.658,1.131,0.852c0.689,0.288,1.371,0.291,2.045,0.012c0.675-0.279,1.152-0.757,1.434-1.431
                                    c0.188-0.45,0.252-0.913,0.193-1.387c-0.059-0.475-0.232-0.897-0.522-1.27c-0.289-0.373-0.665-0.655-1.129-0.849
                                    c-0.46-0.191-0.921-0.258-1.383-0.198c-0.462,0.059-0.886,0.237-1.271,0.533C757.377,404.412,757.093,404.779,756.911,405.216z" />
        <path fill="#FFFFFF" d="M758.073,401.253l0.263-0.632l5.283-0.054l-3.667-3.822l0.263-0.631l4.748,4.942l-0.053,0.127
                                    L758.073,401.253z" />
        <path fill="#FFFFFF" d="M760.587,395.224l0.241-0.58l5.8,2.418l-0.241,0.58L760.587,395.224z" />
        <path fill="#FFFFFF" d="M764.71,388.362l0.16,0.603c-0.434,0.116-0.809,0.315-1.126,0.599c-0.316,0.283-0.563,0.636-0.739,1.059
                                    c-0.193,0.463-0.262,0.938-0.203,1.424c0.058,0.487,0.229,0.918,0.514,1.29c0.283,0.374,0.66,0.657,1.128,0.852
                                    c0.707,0.295,1.398,0.299,2.073,0.011c0.676-0.288,1.168-0.801,1.476-1.54c0.338-0.812,0.304-1.625-0.104-2.437l0.537-0.313
                                    c0.248,0.443,0.382,0.922,0.402,1.439c0.021,0.516-0.08,1.041-0.302,1.574c-0.424,1.015-1.095,1.674-2.015,1.979
                                    c-0.775,0.254-1.567,0.212-2.374-0.124c-0.849-0.354-1.439-0.949-1.771-1.786c-0.332-0.838-0.311-1.704,0.063-2.601
                                    c0.226-0.542,0.536-0.985,0.933-1.333C763.759,388.712,764.208,388.479,764.71,388.362z" />
        <path fill="#FFFFFF" d="M765.106,384.38l6.929-0.287l-0.261,0.625l-2.289,0.118l-1.042,2.499l1.532,1.698l-0.27,0.647
                                    l-4.658-5.159L765.106,384.38z M766.309,384.967l1.686,1.869l0.827-1.982L766.309,384.967z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M764.29,471.496l1.108-7.742h0.125l3.147,6.353l3.117-6.353h0.124l1.114,7.742h-0.759l-0.765-5.537
                                    l-2.737,5.537h-0.198l-2.77-5.579l-0.761,5.579H764.29z" />
        <path fill="#FFFFFF" d="M774.283,466.077h0.542v3.271c0,0.388,0.007,0.63,0.021,0.726c0.027,0.214,0.09,0.393,0.188,0.536
                                    c0.098,0.144,0.249,0.264,0.453,0.36c0.203,0.098,0.409,0.146,0.615,0.146c0.179,0,0.351-0.038,0.516-0.114
                                    c0.164-0.075,0.302-0.182,0.412-0.316c0.111-0.135,0.192-0.299,0.243-0.49c0.037-0.138,0.056-0.42,0.056-0.847v-3.271h0.542v3.271
                                    c0,0.483-0.048,0.875-0.143,1.173c-0.095,0.299-0.283,0.559-0.567,0.779c-0.283,0.221-0.627,0.332-1.029,0.332
                                    c-0.438,0-0.812-0.104-1.124-0.313c-0.312-0.209-0.521-0.485-0.626-0.829c-0.066-0.211-0.1-0.592-0.1-1.142V466.077z" />
        <path fill="#FFFFFF" d="M783.747,470.907l0.804,1.017h-0.667l-0.552-0.701c-0.442,0.273-0.941,0.41-1.495,0.41
                                    c-0.803,0-1.479-0.275-2.032-0.825c-0.552-0.551-0.828-1.216-0.828-1.997c0-0.521,0.127-1.004,0.38-1.45
                                    c0.253-0.445,0.597-0.794,1.032-1.044c0.436-0.251,0.914-0.376,1.435-0.376c0.803,0,1.479,0.274,2.03,0.823
                                    s0.826,1.224,0.826,2.024c0,0.418-0.075,0.8-0.227,1.146C784.303,470.28,784.066,470.604,783.747,470.907z M783.412,470.483
                                    c0.472-0.46,0.708-1.026,0.708-1.7c0-0.43-0.101-0.819-0.301-1.167s-0.481-0.626-0.845-0.835
                                    c-0.364-0.209-0.747-0.313-1.149-0.313c-0.405,0-0.788,0.104-1.146,0.312c-0.358,0.207-0.639,0.488-0.84,0.844
                                    s-0.302,0.75-0.302,1.186c0,0.644,0.222,1.188,0.667,1.632c0.444,0.443,0.98,0.665,1.609,0.665c0.43,0,0.823-0.104,1.18-0.313
                                    l-1.207-1.532h0.657L783.412,470.483z" />
        <path fill="#FFFFFF" d="M785.7,466.077h0.542v5.419H785.7V466.077z" />
        <path fill="#FFFFFF" d="M787.497,466.077h1.068c0.43,0,0.761,0.051,0.991,0.152c0.231,0.103,0.413,0.259,0.547,0.47
                                    c0.134,0.212,0.201,0.446,0.201,0.704c0,0.24-0.059,0.46-0.176,0.657c-0.117,0.198-0.29,0.358-0.518,0.48
                                    c0.282,0.097,0.499,0.209,0.65,0.338c0.152,0.129,0.271,0.284,0.354,0.468c0.085,0.183,0.127,0.381,0.127,0.595
                                    c0,0.435-0.159,0.803-0.478,1.104c-0.317,0.301-0.744,0.451-1.28,0.451h-1.488V466.077z M788.028,466.607v1.735h0.31
                                    c0.377,0,0.653-0.035,0.831-0.105c0.177-0.069,0.317-0.181,0.421-0.331c0.104-0.151,0.155-0.319,0.155-0.503
                                    c0-0.248-0.087-0.443-0.261-0.584c-0.174-0.142-0.45-0.212-0.829-0.212H788.028z M788.028,468.888v2.078h0.671
                                    c0.396,0,0.687-0.039,0.871-0.116s0.333-0.198,0.445-0.363c0.111-0.164,0.168-0.343,0.168-0.534c0-0.24-0.079-0.45-0.236-0.63
                                    c-0.157-0.179-0.374-0.302-0.649-0.368c-0.185-0.044-0.506-0.066-0.964-0.066H788.028z" />
        <path fill="#FFFFFF" d="M794.03,466.077l2.526,5.419h-0.585l-0.852-1.783h-2.335l-0.844,1.783h-0.604l2.561-5.419H794.03z
                                     M793.962,467.229l-0.929,1.961h1.853L793.962,467.229z" />
        <path fill="#FFFFFF" d="M797.411,466.077h1.068c0.43,0,0.761,0.051,0.991,0.152c0.231,0.103,0.413,0.259,0.547,0.47
                                    c0.134,0.212,0.201,0.446,0.201,0.704c0,0.24-0.059,0.46-0.176,0.657c-0.117,0.198-0.29,0.358-0.518,0.48
                                    c0.282,0.097,0.499,0.209,0.65,0.338c0.152,0.129,0.271,0.284,0.354,0.468c0.085,0.183,0.127,0.381,0.127,0.595
                                    c0,0.435-0.159,0.803-0.478,1.104c-0.317,0.301-0.744,0.451-1.28,0.451h-1.488V466.077z M797.942,466.607v1.735h0.31
                                    c0.377,0,0.653-0.035,0.831-0.105c0.177-0.069,0.317-0.181,0.421-0.331c0.104-0.151,0.155-0.319,0.155-0.503
                                    c0-0.248-0.087-0.443-0.261-0.584c-0.174-0.142-0.45-0.212-0.829-0.212H797.942z M797.942,468.888v2.078h0.671
                                    c0.396,0,0.687-0.039,0.871-0.116s0.333-0.198,0.445-0.363c0.111-0.164,0.168-0.343,0.168-0.534c0-0.24-0.079-0.45-0.236-0.63
                                    c-0.157-0.179-0.374-0.302-0.649-0.368c-0.185-0.044-0.506-0.066-0.964-0.066H797.942z" />
        <path fill="#FFFFFF" d="M803.944,466.077l2.526,5.419h-0.585l-0.852-1.783h-2.335l-0.844,1.783h-0.604l2.561-5.419H803.944z
                                     M803.876,467.229l-0.929,1.961h1.853L803.876,467.229z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M679.028,443.781h1.043v9.43h4.016v1.008h-5.059V443.781z" />
        <path fill="#FFFFFF" d="M685.359,446.912h0.73v6.602h2.812v0.705h-3.542V446.912z" />
        <path fill="#FFFFFF" d="M693.043,446.912l3.407,7.307h-0.788l-1.149-2.404h-3.147l-1.139,2.404h-0.814l3.452-7.307H693.043z
                                     M692.951,448.465l-1.252,2.645h2.498L692.951,448.465z" />
        <path fill="#FFFFFF" d="M696.827,452.857l0.621-0.373c0.438,0.805,0.942,1.207,1.515,1.207c0.245,0,0.476-0.057,0.69-0.171
                                    c0.216-0.114,0.38-0.268,0.492-0.46c0.112-0.191,0.169-0.395,0.169-0.61c0-0.245-0.083-0.485-0.249-0.72
                                    c-0.228-0.325-0.646-0.716-1.251-1.173c-0.609-0.46-0.988-0.793-1.138-0.999c-0.258-0.344-0.388-0.717-0.388-1.117
                                    c0-0.317,0.076-0.607,0.229-0.869s0.367-0.467,0.644-0.618c0.276-0.15,0.577-0.226,0.901-0.226c0.345,0,0.666,0.085,0.966,0.256
                                    c0.3,0.17,0.617,0.484,0.951,0.941l-0.596,0.451c-0.275-0.363-0.509-0.604-0.703-0.721c-0.193-0.115-0.404-0.174-0.633-0.174
                                    c-0.295,0-0.536,0.09-0.723,0.27c-0.188,0.178-0.281,0.398-0.281,0.66c0,0.158,0.033,0.313,0.1,0.462s0.188,0.312,0.362,0.487
                                    c0.097,0.092,0.411,0.336,0.944,0.729c0.632,0.467,1.066,0.882,1.301,1.247c0.235,0.363,0.353,0.729,0.353,1.098
                                    c0,0.529-0.201,0.99-0.603,1.381c-0.402,0.391-0.892,0.586-1.468,0.586c-0.444,0-0.847-0.119-1.207-0.355
                                    C697.465,453.811,697.132,453.414,696.827,452.857z" />
        <path fill="#FFFFFF" d="M702.639,446.912h0.73v3.064h3.72v-3.064h0.73v7.307h-0.73v-3.527h-3.72v3.527h-0.73V446.912z" />
        <path fill="#FFFFFF" d="M708.873,447.627v-0.715h4.003v0.715h-1.629v6.592h-0.745v-6.592H708.873z" />
        <path fill="#FFFFFF" d="M713.825,446.912h0.729v7.307h-0.729V446.912z" />
        <path fill="#FFFFFF" d="M723.033,448.268l-0.576,0.442c-0.317-0.414-0.699-0.728-1.145-0.941s-0.935-0.32-1.468-0.32
                                    c-0.583,0-1.122,0.14-1.619,0.42s-0.882,0.655-1.154,1.128c-0.273,0.471-0.41,1.002-0.41,1.592c0,0.891,0.306,1.634,0.916,2.229
                                    c0.611,0.597,1.382,0.894,2.313,0.894c1.023,0,1.879-0.4,2.567-1.201l0.576,0.438c-0.364,0.463-0.818,0.821-1.363,1.074
                                    c-0.545,0.254-1.153,0.381-1.825,0.381c-1.278,0-2.286-0.426-3.024-1.277c-0.619-0.718-0.929-1.586-0.929-2.602
                                    c0-1.07,0.375-1.97,1.125-2.7c0.75-0.729,1.689-1.095,2.818-1.095c0.682,0,1.298,0.135,1.848,0.404
                                    S722.683,447.781,723.033,448.268z" />
        <path fill="#FFFFFF" d="M727.483,446.912l3.407,7.307h-0.788l-1.149-2.404h-3.147l-1.139,2.404h-0.814l3.452-7.307H727.483z
                                     M727.392,448.465l-1.252,2.645h2.498L727.392,448.465z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M617.364,426.61h0.638v5.765h2.456v0.616h-3.093V426.61z" />
        <path fill="#FFFFFF" d="M621.235,428.524h0.446v4.035h1.719v0.432h-2.165V428.524z" />
        <path fill="#FFFFFF" d="M625.933,428.524l2.083,4.467h-0.482l-0.703-1.47h-1.924l-0.696,1.47h-0.498l2.11-4.467H625.933z
                                     M625.876,429.474l-0.765,1.616h1.527L625.876,429.474z" />
        <path fill="#FFFFFF" d="M628.708,432.991v-4.467h0.926c0.668,0,1.153,0.054,1.455,0.161c0.433,0.151,0.772,0.415,1.016,0.789
                                    c0.244,0.375,0.366,0.821,0.366,1.339c0,0.448-0.097,0.842-0.29,1.182s-0.444,0.591-0.753,0.753
                                    c-0.309,0.162-0.741,0.243-1.298,0.243H628.708z M629.136,432.569h0.516c0.618,0,1.046-0.039,1.285-0.115
                                    c0.336-0.109,0.6-0.307,0.792-0.591s0.289-0.631,0.289-1.042c0-0.431-0.104-0.799-0.313-1.104
                                    c-0.208-0.305-0.499-0.515-0.871-0.628c-0.28-0.085-0.74-0.127-1.382-0.127h-0.316V432.569z" />
        <path fill="#FFFFFF" d="M635.463,428.412c0.676,0,1.243,0.226,1.698,0.677c0.456,0.452,0.684,1.008,0.684,1.667
                                    c0,0.654-0.227,1.209-0.682,1.664c-0.455,0.456-1.009,0.684-1.664,0.684c-0.662,0-1.221-0.227-1.677-0.68
                                    c-0.456-0.454-0.684-1.003-0.684-1.646c0-0.429,0.104-0.827,0.312-1.193s0.491-0.653,0.849-0.86
                                    C634.658,428.516,635.046,428.412,635.463,428.412z M635.483,428.847c-0.331,0-0.644,0.086-0.94,0.258
                                    c-0.296,0.172-0.527,0.404-0.693,0.696c-0.166,0.291-0.25,0.616-0.25,0.976c0,0.53,0.184,0.979,0.552,1.345
                                    c0.368,0.365,0.812,0.548,1.331,0.548c0.347,0,0.667-0.084,0.962-0.252c0.295-0.168,0.525-0.398,0.69-0.689
                                    c0.166-0.292,0.248-0.616,0.248-0.973c0-0.354-0.083-0.676-0.248-0.962c-0.165-0.287-0.398-0.517-0.698-0.688
                                    C636.138,428.933,635.819,428.847,635.483,428.847z" />
        <path fill="#FFFFFF" d="M638.401,428.524h0.486l1.48,3.451l1.504-3.451h0.485l-1.943,4.467h-0.097L638.401,428.524z" />
        <path fill="#FFFFFF" d="M644.933,428.524l2.084,4.467h-0.482l-0.703-1.47h-1.924l-0.696,1.47h-0.498l2.11-4.467H644.933z
                                     M644.877,429.474l-0.766,1.616h1.527L644.877,429.474z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M585.31,458.464l-3.708-5.193l0.113-0.081l6.299,1.514l-2.842-3.98l0.512-0.365l3.707,5.193l-0.116,0.082
                                    l-6.235-1.484l2.807,3.932L585.31,458.464z" />
        <path fill="#FFFFFF" d="M589.355,450.088l4.291,2.425l-0.393,0.28l-1.426-0.789l-1.566,1.119l0.288,1.6l-0.405,0.289l-0.878-4.861
                                    L589.355,450.088z M589.861,450.893l0.316,1.76l1.242-0.887L589.861,450.893z" />
        <path fill="#FFFFFF" d="M593.351,451.701l0.177-0.405c0.504,0.245,0.896,0.266,1.182,0.062c0.122-0.086,0.217-0.196,0.283-0.33
                                    c0.066-0.133,0.094-0.268,0.081-0.403c-0.012-0.136-0.056-0.257-0.132-0.364c-0.088-0.121-0.215-0.212-0.38-0.27
                                    c-0.229-0.08-0.575-0.127-1.04-0.139c-0.466-0.014-0.772-0.043-0.92-0.093c-0.251-0.079-0.447-0.22-0.59-0.418
                                    c-0.112-0.158-0.178-0.33-0.195-0.515c-0.017-0.184,0.017-0.361,0.101-0.536c0.085-0.173,0.207-0.317,0.368-0.433
                                    c0.172-0.122,0.362-0.193,0.572-0.215c0.209-0.021,0.479,0.021,0.807,0.13l-0.136,0.437c-0.267-0.084-0.468-0.119-0.605-0.109
                                    c-0.138,0.012-0.263,0.059-0.376,0.139c-0.146,0.105-0.235,0.234-0.266,0.391c-0.029,0.155,0.003,0.298,0.096,0.428
                                    c0.057,0.079,0.128,0.145,0.213,0.195c0.086,0.051,0.204,0.088,0.354,0.113c0.081,0.012,0.324,0.021,0.729,0.028
                                    c0.479,0.007,0.843,0.061,1.09,0.157c0.247,0.099,0.436,0.239,0.565,0.422c0.188,0.264,0.252,0.564,0.19,0.901
                                    s-0.235,0.608-0.522,0.813c-0.221,0.157-0.463,0.242-0.727,0.253C594.006,451.949,593.699,451.87,593.351,451.701z" />
        <path fill="#FFFFFF" d="M595.621,445.615l4.291,2.426l-0.393,0.279l-1.426-0.788l-1.566,1.118l0.287,1.601l-0.404,0.289
                                    l-0.878-4.861L595.621,445.615z M596.127,446.42l0.315,1.761l1.243-0.888L596.127,446.42z" />
        <path fill="#FFFFFF" d="M597.88,444.003l0.363-0.259l2.345,3.283l1.398-0.998l0.251,0.352l-1.763,1.258L597.88,444.003z" />
        <path fill="#FFFFFF" d="M600.221,442.332l2.084-1.487l0.254,0.356l-1.721,1.228l0.813,1.14l1.706-1.218l0.255,0.356l-1.706,1.217
                                    l1.02,1.428l1.706-1.217l0.254,0.355l-2.068,1.477L600.221,442.332z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M652.242,509.158v-1.625h8.88l-7.032,15.187h6.678v1.647h-9.281l7.094-15.209H652.242z" />
        <path fill="#FFFFFF" d="M663.513,512.584h1.178v4.942h6v-4.942h1.177v11.783h-1.177v-5.688h-6v5.688h-1.178V512.584z" />
        <path fill="#FFFFFF" d="M674.744,512.584h6.753v1.153h-5.576v3.692h5.527v1.154h-5.527v4.63h5.527v1.153h-6.704V512.584z" />
        <path fill="#FFFFFF" d="M694.898,514.563l-0.913,0.865c-0.657-0.646-1.377-1.137-2.159-1.471c-0.782-0.333-1.545-0.5-2.287-0.5
                                    c-0.924,0-1.804,0.227-2.639,0.681c-0.836,0.454-1.483,1.069-1.943,1.847c-0.459,0.776-0.688,1.598-0.688,2.463
                                    c0,0.887,0.237,1.729,0.713,2.527c0.476,0.799,1.132,1.426,1.971,1.883c0.838,0.456,1.757,0.685,2.756,0.685
                                    c1.212,0,2.237-0.342,3.076-1.025c0.838-0.684,1.335-1.57,1.489-2.659h-3.757v-1.138h5.079c-0.011,1.821-0.552,3.267-1.622,4.338
                                    c-1.071,1.07-2.504,1.606-4.298,1.606c-2.179,0-3.904-0.743-5.175-2.228c-0.978-1.143-1.466-2.465-1.466-3.965
                                    c0-1.116,0.28-2.155,0.841-3.116c0.561-0.962,1.33-1.713,2.307-2.255c0.978-0.542,2.083-0.813,3.316-0.813
                                    c0.999,0,1.939,0.181,2.82,0.541S694.061,513.767,694.898,514.563z" />
        <path fill="#FFFFFF" d="M697.902,512.584h2.347c1.309,0,2.195,0.053,2.66,0.16c0.699,0.16,1.268,0.504,1.706,1.03
                                    c0.438,0.527,0.657,1.176,0.657,1.945c0,0.642-0.151,1.206-0.453,1.692s-0.732,0.854-1.294,1.103
                                    c-0.561,0.249-1.335,0.376-2.322,0.381l4.237,5.472h-1.457l-4.238-5.472h-0.665v5.472h-1.178V512.584z M699.08,513.737v4.005
                                    l2.029,0.017c0.787,0,1.368-0.075,1.745-0.225c0.378-0.149,0.672-0.389,0.883-0.717c0.212-0.328,0.317-0.695,0.317-1.102
                                    c0-0.396-0.107-0.754-0.321-1.077s-0.495-0.555-0.843-0.693s-0.925-0.208-1.732-0.208H699.08z" />
        <path fill="#FFFFFF" d="M712.609,512.584l5.495,11.783h-1.271l-1.854-3.877h-5.076l-1.836,3.877h-1.313l5.567-11.783H712.609z
                                     M712.461,515.087l-2.02,4.266h4.029L712.461,515.087z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M674.189,577.033l-0.48,0.482c-0.365-0.34-0.764-0.592-1.191-0.761c-0.43-0.169-0.844-0.246-1.246-0.234
                                    c-0.5,0.015-0.973,0.152-1.418,0.41c-0.445,0.26-0.785,0.603-1.021,1.03c-0.236,0.429-0.348,0.877-0.334,1.345
                                    c0.014,0.479,0.156,0.933,0.426,1.357s0.637,0.753,1.098,0.987c0.461,0.233,0.961,0.342,1.502,0.325
                                    c0.656-0.02,1.205-0.22,1.648-0.603c0.443-0.384,0.697-0.872,0.764-1.465l-2.033,0.061l-0.018-0.615l2.748-0.081
                                    c0.023,0.985-0.246,1.777-0.809,2.373c-0.563,0.597-1.328,0.909-2.299,0.938c-1.18,0.035-2.127-0.339-2.838-1.122
                                    c-0.549-0.603-0.834-1.311-0.857-2.122c-0.018-0.604,0.117-1.172,0.406-1.701c0.287-0.528,0.691-0.948,1.213-1.258
                                    c0.52-0.309,1.113-0.474,1.781-0.493c0.541-0.017,1.053,0.066,1.535,0.248C673.248,576.316,673.723,576.616,674.189,577.033z" />
        <path fill="#FFFFFF" d="M677.695,577.66c0.676-0.021,1.25,0.188,1.719,0.626c0.469,0.439,0.713,0.987,0.732,1.646
                                    c0.02,0.654-0.191,1.216-0.633,1.683c-0.441,0.47-0.988,0.714-1.643,0.733c-0.662,0.02-1.229-0.19-1.697-0.631
                                    c-0.469-0.439-0.713-0.981-0.732-1.625c-0.012-0.429,0.08-0.829,0.277-1.201c0.195-0.373,0.471-0.668,0.822-0.886
                                    C676.895,577.787,677.279,577.672,677.695,577.66z M677.729,578.094c-0.33,0.01-0.641,0.105-0.932,0.286s-0.516,0.42-0.674,0.717
                                    c-0.156,0.295-0.23,0.622-0.219,0.981c0.016,0.53,0.211,0.974,0.592,1.328c0.377,0.354,0.826,0.523,1.346,0.508
                                    c0.346-0.01,0.664-0.104,0.953-0.28c0.291-0.176,0.514-0.413,0.67-0.709c0.158-0.297,0.23-0.623,0.221-0.979
                                    c-0.012-0.354-0.104-0.674-0.277-0.954c-0.174-0.282-0.412-0.505-0.717-0.668C678.385,578.16,678.064,578.084,677.729,578.094z" />
        <path fill="#FFFFFF" d="M681.107,582.141l-0.131-4.465l0.926-0.028c0.668-0.02,1.152,0.021,1.459,0.118
                                    c0.436,0.139,0.783,0.393,1.037,0.76c0.256,0.367,0.391,0.81,0.406,1.327c0.014,0.448-0.072,0.845-0.256,1.189
                                    s-0.426,0.604-0.73,0.774c-0.303,0.172-0.734,0.266-1.289,0.282L681.107,582.141z M681.523,581.706l0.516-0.016
                                    c0.617-0.019,1.045-0.07,1.281-0.153c0.332-0.119,0.59-0.323,0.773-0.613c0.186-0.29,0.271-0.64,0.258-1.051
                                    c-0.012-0.431-0.127-0.795-0.346-1.094c-0.217-0.299-0.514-0.5-0.889-0.603c-0.281-0.076-0.744-0.104-1.385-0.086l-0.316,0.01
                                    L681.523,581.706z" />
        <path fill="#FFFFFF" d="M685.605,577.538l2.559-0.075l0.012,0.438l-2.111,0.063l0.041,1.398l2.094-0.063l0.014,0.438l-2.094,0.063
                                    l0.051,1.754l2.096-0.063l0.012,0.438l-2.541,0.075L685.605,577.538z" />
        <path fill="#FFFFFF" d="M689.068,581.904l-0.131-4.465l0.098-0.002l3.072,3.335l-0.102-3.423l0.441-0.014l0.131,4.465l-0.1,0.003
                                    l-3.049-3.293l0.102,3.381L689.068,581.904z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M704.008,590.178l1.823-0.054c1.047-0.03,1.754-0.006,2.122,0.075c0.526,0.113,0.962,0.364,1.306,0.755
                                    s0.524,0.89,0.543,1.496c0.018,0.609-0.129,1.117-0.441,1.523c-0.312,0.407-0.75,0.687-1.315,0.841
                                    c-0.411,0.111-1.187,0.185-2.323,0.218l-0.654,0.02l0.126,4.259l-0.915,0.027L704.008,590.178z M704.949,591.048l0.092,3.107
                                    l1.551-0.027c0.627-0.019,1.084-0.089,1.371-0.212s0.51-0.314,0.669-0.574c0.158-0.26,0.232-0.546,0.224-0.86
                                    c-0.009-0.307-0.101-0.586-0.274-0.836c-0.173-0.25-0.397-0.424-0.673-0.524c-0.274-0.099-0.722-0.14-1.34-0.121L704.949,591.048z
                                    " />
        <path fill="#FFFFFF" d="M711.216,592.715l0.641-0.02l0.189,6.412l-0.641,0.02L711.216,592.715z" />
        <path fill="#FFFFFF" d="M713.515,599.064l-0.189-6.412l1.329-0.039c0.959-0.028,1.656,0.028,2.095,0.169
                                    c0.628,0.2,1.125,0.563,1.49,1.091c0.367,0.527,0.561,1.162,0.583,1.906c0.019,0.643-0.104,1.211-0.366,1.708
                                    c-0.264,0.496-0.612,0.867-1.049,1.113c-0.437,0.245-1.054,0.38-1.853,0.403L713.515,599.064z M714.111,598.439l0.74-0.021
                                    c0.887-0.026,1.499-0.1,1.839-0.22c0.478-0.172,0.849-0.465,1.112-0.881c0.265-0.416,0.388-0.918,0.37-1.508
                                    c-0.019-0.619-0.184-1.142-0.496-1.571c-0.312-0.43-0.737-0.719-1.277-0.864c-0.404-0.11-1.067-0.152-1.988-0.125l-0.453,0.013
                                    L714.111,598.439z" />
        <path fill="#FFFFFF" d="M719.875,592.459l0.641-0.02l0.189,6.412l-0.641,0.02L719.875,592.459z" />
        <path fill="#FFFFFF" d="M727.526,597.952l0.986,1.174l-0.789,0.023l-0.677-0.809c-0.514,0.339-1.099,0.518-1.755,0.536
                                    c-0.949,0.028-1.76-0.273-2.433-0.905c-0.672-0.632-1.022-1.408-1.05-2.333c-0.018-0.616,0.115-1.192,0.398-1.729
                                    s0.679-0.96,1.186-1.272c0.506-0.311,1.067-0.475,1.683-0.493c0.949-0.028,1.761,0.272,2.432,0.902
                                    c0.67,0.631,1.021,1.419,1.048,2.366c0.015,0.494-0.062,0.948-0.228,1.363S727.895,597.584,727.526,597.952z M727.114,597.463
                                    c0.543-0.561,0.803-1.238,0.779-2.035c-0.015-0.51-0.147-0.968-0.396-1.371c-0.249-0.404-0.592-0.724-1.029-0.959
                                    c-0.438-0.234-0.894-0.346-1.371-0.331c-0.479,0.014-0.928,0.15-1.345,0.409c-0.416,0.259-0.738,0.602-0.964,1.028
                                    s-0.331,0.898-0.315,1.413c0.022,0.762,0.304,1.397,0.846,1.906c0.541,0.51,1.185,0.754,1.928,0.731
                                    c0.509-0.015,0.97-0.152,1.384-0.412l-1.48-1.771l0.777-0.022L727.114,597.463z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M700.267,627.949l-0.494,0.402c-0.289-0.355-0.632-0.62-1.029-0.797c-0.396-0.176-0.828-0.257-1.296-0.243
                                    c-0.512,0.016-0.981,0.152-1.409,0.411c-0.43,0.259-0.758,0.599-0.984,1.02c-0.228,0.42-0.334,0.89-0.318,1.407
                                    c0.022,0.782,0.311,1.426,0.861,1.934c0.552,0.507,1.236,0.749,2.053,0.725c0.897-0.026,1.639-0.401,2.222-1.122l0.517,0.369
                                    c-0.308,0.416-0.696,0.742-1.168,0.979c-0.472,0.235-1.002,0.363-1.592,0.38c-1.122,0.033-2.018-0.313-2.688-1.041
                                    c-0.562-0.615-0.856-1.368-0.883-2.261c-0.027-0.938,0.278-1.737,0.918-2.397c0.639-0.66,1.453-1.004,2.444-1.033
                                    c0.599-0.018,1.143,0.083,1.632,0.307C699.541,627.211,699.946,627.531,700.267,627.949z M697.2,633.266l0.384-0.011l-0.06,0.52
                                    c0.067-0.011,0.122-0.017,0.166-0.018c0.143-0.005,0.263,0.036,0.361,0.122s0.149,0.196,0.153,0.33
                                    c0.006,0.191-0.076,0.356-0.247,0.496c-0.171,0.139-0.414,0.212-0.73,0.222c-0.259,0.008-0.502-0.029-0.732-0.109l0.088-0.304
                                    c0.188,0.053,0.363,0.076,0.525,0.071c0.219-0.006,0.37-0.037,0.455-0.094c0.085-0.056,0.127-0.126,0.125-0.207
                                    c-0.002-0.049-0.026-0.092-0.076-0.128c-0.049-0.036-0.115-0.054-0.199-0.051c-0.07,0.002-0.171,0.019-0.305,0.048L697.2,633.266z
                                    " />
        <path fill="#FFFFFF" d="M701.521,626.721l3.674-0.109l0.019,0.628l-3.033,0.09l0.06,2.009l3.007-0.089l0.019,0.628l-3.007,0.089
                                    l0.074,2.52l3.008-0.089l0.019,0.628l-3.648,0.108L701.521,626.721z" />
        <path fill="#FFFFFF" d="M706.303,626.579l0.641-0.02l0.171,5.793l2.467-0.072l0.019,0.619l-3.107,0.092L706.303,626.579z" />
        <path fill="#FFFFFF" d="M710.334,626.46l0.641-0.02l0.189,6.412l-0.641,0.02L710.334,626.46z" />
        <path fill="#FFFFFF" d="M712.443,626.397l0.654-0.02l0.07,2.406l2.492-2.481l0.86-0.025l-2.994,2.968l3.424,3.437l-0.854,0.025
                                    l-2.898-2.903l0.089,2.986l-0.654,0.02L712.443,626.397z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M728.766,655.469l0.736-0.724c0.875,0.969,1.71,1.359,2.504,1.167c0.341-0.081,0.641-0.238,0.9-0.468
                                    c0.261-0.23,0.438-0.497,0.529-0.803c0.092-0.304,0.102-0.604,0.03-0.903c-0.082-0.34-0.277-0.646-0.585-0.915
                                    c-0.426-0.374-1.136-0.776-2.128-1.208c-0.999-0.435-1.636-0.77-1.912-1.004c-0.473-0.392-0.776-0.866-0.91-1.422
                                    c-0.106-0.44-0.098-0.868,0.026-1.281c0.124-0.414,0.352-0.771,0.686-1.072c0.332-0.302,0.725-0.506,1.174-0.615
                                    c0.479-0.114,0.953-0.105,1.426,0.031c0.473,0.138,1.018,0.467,1.634,0.987l-0.675,0.827c-0.504-0.413-0.909-0.668-1.216-0.764
                                    c-0.308-0.097-0.62-0.105-0.937-0.029c-0.408,0.098-0.713,0.303-0.913,0.612c-0.199,0.312-0.256,0.647-0.169,1.01
                                    c0.054,0.222,0.151,0.425,0.293,0.608c0.142,0.185,0.363,0.369,0.666,0.554c0.164,0.097,0.682,0.328,1.553,0.697
                                    c1.032,0.437,1.773,0.867,2.221,1.294c0.449,0.428,0.733,0.896,0.856,1.405c0.177,0.734,0.052,1.44-0.376,2.116
                                    c-0.427,0.677-1.04,1.111-1.84,1.304c-0.615,0.147-1.213,0.118-1.792-0.089C729.968,656.577,729.373,656.138,728.766,655.469z" />
        <path fill="#FFFFFF" d="M735.205,648.408l0.709-0.171l0.717,2.976l3.612-0.87l-0.717-2.976l0.709-0.171l1.709,7.094l-0.709,0.171
                                    l-0.825-3.423l-3.611,0.87l0.824,3.423l-0.709,0.171L735.205,648.408z" />
        <path fill="#FFFFFF" d="M741.985,646.774l0.709-0.171l1.032,4.283c0.122,0.508,0.208,0.822,0.257,0.942
                                    c0.104,0.271,0.241,0.485,0.416,0.642c0.173,0.158,0.409,0.268,0.706,0.331c0.299,0.063,0.582,0.062,0.852-0.004
                                    c0.234-0.057,0.448-0.161,0.639-0.313c0.191-0.151,0.339-0.332,0.441-0.544c0.102-0.212,0.156-0.451,0.163-0.718
                                    c0.005-0.191-0.06-0.567-0.194-1.126l-1.032-4.283l0.709-0.171l1.032,4.283c0.152,0.633,0.213,1.159,0.184,1.581
                                    c-0.029,0.419-0.195,0.818-0.496,1.198c-0.303,0.379-0.716,0.631-1.243,0.758c-0.573,0.139-1.097,0.12-1.57-0.055
                                    c-0.474-0.176-0.834-0.471-1.081-0.888c-0.153-0.256-0.316-0.743-0.49-1.463L741.985,646.774z" />
        <path fill="#FFFFFF" d="M748.467,645.213l1.412-0.341c0.788-0.189,1.329-0.286,1.625-0.289c0.443-0.004,0.836,0.121,1.177,0.374
                                    c0.339,0.252,0.565,0.612,0.678,1.075c0.093,0.387,0.083,0.747-0.027,1.084c-0.111,0.337-0.317,0.621-0.619,0.852
                                    c-0.302,0.231-0.749,0.42-1.343,0.566l3.344,2.679l-0.877,0.211l-3.344-2.678l-0.401,0.097l0.794,3.293l-0.709,0.171
                                    L748.467,645.213z M749.343,645.737l0.581,2.41l1.225-0.284c0.473-0.113,0.812-0.244,1.018-0.389
                                    c0.205-0.144,0.348-0.331,0.428-0.559c0.079-0.229,0.09-0.465,0.031-0.71c-0.058-0.237-0.175-0.438-0.35-0.603
                                    c-0.177-0.163-0.379-0.261-0.608-0.294s-0.587,0.009-1.073,0.126L749.343,645.737z" />
        <path fill="#FFFFFF" d="M756.131,650.871l-1.709-7.094l1.471-0.354c1.062-0.256,1.852-0.355,2.372-0.301
                                    c0.746,0.075,1.384,0.364,1.915,0.865c0.531,0.503,0.895,1.164,1.094,1.987c0.171,0.711,0.168,1.373-0.009,1.986
                                    c-0.177,0.614-0.479,1.109-0.907,1.484c-0.429,0.375-1.086,0.669-1.969,0.882L756.131,650.871z M756.65,650.037l0.819-0.197
                                    c0.98-0.236,1.646-0.461,1.995-0.675c0.492-0.303,0.836-0.716,1.033-1.24s0.217-1.113,0.059-1.766
                                    c-0.164-0.685-0.471-1.229-0.918-1.634c-0.449-0.405-0.99-0.627-1.625-0.664c-0.476-0.027-1.224,0.081-2.243,0.326l-0.501,0.121
                                    L756.65,650.037z" />
        <path fill="#FFFFFF" d="M761.762,642.009l0.709-0.171l0.717,2.976l3.611-0.87l-0.717-2.976l0.709-0.171l1.709,7.094l-0.709,0.171
                                    l-0.824-3.423l-3.612,0.87l0.825,3.423l-0.709,0.171L761.762,642.009z" />
        <path fill="#FFFFFF" d="M771.416,639.683l5.018,6.296l-0.766,0.185l-1.679-2.063l-3.056,0.736l-0.543,2.6l-0.791,0.19l1.643-7.901
                                    L771.416,639.683z M771.689,641.212l-0.597,2.86l2.425-0.584L771.689,641.212z" />
        <path fill="#FFFFFF" d="M777.537,645.713l-1.709-7.094l0.154-0.037l6.031,4.301l-1.311-5.438l0.699-0.168l1.709,7.094
                                    l-0.158,0.038l-5.977-4.243l1.294,5.371L777.537,645.713z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M775.489,710.849l0.932-11.635l2.413,0.193c1.739,0.14,2.99,0.38,3.753,0.723
                                    c1.098,0.486,1.925,1.242,2.482,2.269c0.557,1.026,0.78,2.215,0.673,3.564c-0.094,1.165-0.427,2.171-1.002,3.016
                                    c-0.573,0.846-1.28,1.447-2.118,1.805s-1.981,0.479-3.432,0.362L775.489,710.849z M776.692,709.839l1.344,0.107
                                    c1.608,0.129,2.732,0.118,3.37-0.032c0.898-0.214,1.627-0.672,2.188-1.372c0.56-0.7,0.883-1.585,0.969-2.654
                                    c0.09-1.122-0.104-2.103-0.584-2.941s-1.193-1.445-2.14-1.817c-0.71-0.279-1.9-0.486-3.572-0.62l-0.822-0.066L776.692,709.839z" />
        <path fill="#FFFFFF" d="M787.798,703.638l0.814,0.065l-0.394,4.916c-0.046,0.584-0.064,0.948-0.054,1.094
                                    c0.014,0.324,0.087,0.601,0.218,0.828c0.129,0.228,0.342,0.427,0.636,0.598c0.295,0.17,0.599,0.268,0.907,0.292
                                    c0.27,0.021,0.533-0.015,0.79-0.109c0.256-0.094,0.476-0.236,0.658-0.427c0.182-0.189,0.323-0.425,0.425-0.706
                                    c0.071-0.203,0.133-0.625,0.184-1.268l0.394-4.917l0.814,0.065l-0.394,4.917c-0.058,0.727-0.176,1.31-0.354,1.746
                                    c-0.178,0.438-0.493,0.805-0.946,1.103c-0.452,0.299-0.982,0.424-1.587,0.375c-0.657-0.053-1.208-0.255-1.65-0.605
                                    c-0.445-0.352-0.726-0.792-0.842-1.321c-0.074-0.325-0.078-0.901-0.013-1.729L787.798,703.638z" />
        <path fill="#FFFFFF" d="M794.549,712.375l0.651-8.145l0.177,0.015l4.922,6.677l0.499-6.243l0.803,0.064l-0.651,8.145l-0.183-0.015
                                    l-4.884-6.598l-0.493,6.167L794.549,712.375z" />
        <path fill="#FFFFFF" d="M806.909,705.168l3.146,8.448l-0.879-0.07l-1.067-2.782l-3.508-0.28l-1.483,2.578l-0.907-0.073
                                    l4.499-7.836L806.909,705.168z M806.669,706.891l-1.632,2.836l2.783,0.223L806.669,706.891z" />
        <path fill="#FFFFFF" d="M811.35,705.523l0.886,0.071l2.196,6.508l3.246-6.072l0.887,0.071l-4.195,7.86l-0.177-0.015
                                    L811.35,705.523z" />
    </g>
    <g>
        <path fill="#FFFFFF" d="M712.964,721.217l1.037-0.514c0.594,1.337,1.346,2.042,2.258,2.115c0.391,0.031,0.765-0.03,1.123-0.185
                                    c0.357-0.154,0.638-0.378,0.841-0.669c0.204-0.291,0.319-0.608,0.347-0.951c0.031-0.391-0.069-0.783-0.303-1.179
                                    c-0.323-0.546-0.938-1.222-1.845-2.026c-0.911-0.811-1.473-1.389-1.684-1.734c-0.368-0.581-0.525-1.191-0.475-1.829
                                    c0.04-0.506,0.199-0.958,0.475-1.355c0.276-0.396,0.644-0.698,1.104-0.902c0.459-0.205,0.947-0.286,1.465-0.245
                                    c0.548,0.044,1.049,0.221,1.505,0.531c0.455,0.31,0.921,0.849,1.395,1.619l-1.007,0.645c-0.392-0.615-0.733-1.027-1.027-1.236
                                    s-0.622-0.329-0.986-0.358c-0.47-0.037-0.864,0.074-1.185,0.335s-0.498,0.6-0.531,1.017c-0.021,0.253,0.013,0.502,0.1,0.748
                                    c0.086,0.245,0.258,0.52,0.516,0.821c0.141,0.16,0.61,0.588,1.409,1.283c0.947,0.824,1.584,1.541,1.913,2.151
                                    c0.328,0.609,0.469,1.207,0.422,1.793c-0.068,0.844-0.447,1.551-1.138,2.121c-0.69,0.571-1.494,0.819-2.411,0.746
                                    c-0.707-0.057-1.333-0.296-1.877-0.719C713.858,722.816,713.38,722.142,712.964,721.217z" />
        <path fill="#FFFFFF" d="M721.417,716.681l0.063-0.797l4.463,0.357l-0.063,0.797l-1.817-0.146l-0.588,7.348l-0.83-0.066
                                    l0.588-7.348L721.417,716.681z" />
        <path fill="#FFFFFF" d="M730.443,716.602l3.146,8.448l-0.879-0.07l-1.067-2.782l-3.508-0.281l-1.483,2.578l-0.907-0.072
                                    l4.499-7.837L730.443,716.602z M730.203,718.323l-1.632,2.837l2.784,0.223L730.203,718.323z" />
        <path fill="#FFFFFF" d="M734.858,725.151l0.651-8.145l0.178,0.014l4.921,6.678l0.499-6.243l0.803,0.064l-0.651,8.145l-0.183-0.015
                                    l-4.884-6.598l-0.493,6.167L734.858,725.151z" />
        <path fill="#FFFFFF" d="M751.356,719.798l-0.683,0.44c-0.317-0.49-0.714-0.873-1.192-1.151c-0.477-0.277-1.013-0.44-1.607-0.488
                                    c-0.649-0.052-1.263,0.056-1.843,0.323c-0.577,0.268-1.04,0.653-1.387,1.154c-0.347,0.502-0.547,1.081-0.599,1.738
                                    c-0.08,0.992,0.194,1.849,0.822,2.566c0.628,0.72,1.46,1.121,2.497,1.204c1.141,0.091,2.131-0.279,2.97-1.111l0.604,0.539
                                    c-0.447,0.484-0.986,0.843-1.615,1.076c-0.631,0.234-1.32,0.321-2.069,0.262c-1.425-0.114-2.511-0.679-3.257-1.693
                                    c-0.627-0.856-0.895-1.851-0.805-2.984c0.096-1.191,0.595-2.161,1.496-2.908c0.9-0.747,1.98-1.07,3.239-0.97
                                    c0.76,0.062,1.436,0.267,2.023,0.616C750.54,718.762,751.008,719.223,751.356,719.798z M746.733,726.103l0.487,0.038l-0.146,0.652
                                    c0.086-0.005,0.155-0.005,0.211,0c0.182,0.015,0.327,0.082,0.44,0.205c0.112,0.122,0.162,0.269,0.148,0.438
                                    c-0.019,0.243-0.146,0.441-0.381,0.594c-0.235,0.151-0.554,0.211-0.957,0.179c-0.328-0.026-0.633-0.105-0.911-0.239l0.153-0.373
                                    c0.229,0.093,0.448,0.147,0.655,0.164c0.277,0.022,0.474,0.004,0.589-0.056c0.117-0.06,0.179-0.141,0.187-0.244
                                    c0.005-0.063-0.021-0.121-0.077-0.173c-0.057-0.054-0.14-0.084-0.247-0.093c-0.088-0.007-0.219-0.001-0.391,0.019L746.733,726.103
                                    z" />
        <path fill="#FFFFFF" d="M752.994,718.406l0.813,0.065l-0.651,8.145l-0.813-0.065L752.994,718.406z" />
        <path fill="#FFFFFF" d="M763.138,720.74l-0.683,0.441c-0.316-0.49-0.714-0.873-1.191-1.151s-1.014-0.44-1.607-0.488
                                    c-0.65-0.052-1.264,0.056-1.843,0.323c-0.578,0.268-1.041,0.652-1.388,1.153c-0.347,0.502-0.546,1.082-0.598,1.739
                                    c-0.08,0.992,0.193,1.849,0.821,2.566c0.628,0.72,1.46,1.12,2.498,1.204c1.14,0.091,2.131-0.279,2.969-1.111l0.604,0.538
                                    c-0.446,0.485-0.986,0.844-1.615,1.077c-0.631,0.234-1.32,0.321-2.068,0.262c-1.425-0.114-2.512-0.679-3.258-1.693
                                    c-0.627-0.856-0.895-1.851-0.805-2.984c0.096-1.191,0.595-2.162,1.496-2.908c0.9-0.748,1.98-1.07,3.239-0.97
                                    c0.76,0.061,1.436,0.267,2.023,0.616C762.321,719.705,762.79,720.166,763.138,720.74z M758.516,727.046l0.486,0.038l-0.146,0.652
                                    c0.086-0.005,0.156-0.005,0.212,0c0.181,0.015,0.328,0.082,0.439,0.205c0.113,0.122,0.163,0.269,0.15,0.438
                                    c-0.02,0.243-0.147,0.441-0.382,0.593c-0.236,0.152-0.555,0.212-0.957,0.18c-0.328-0.026-0.633-0.106-0.911-0.24l0.152-0.372
                                    c0.23,0.093,0.449,0.147,0.655,0.164c0.277,0.022,0.474,0.003,0.589-0.056c0.117-0.06,0.18-0.141,0.188-0.244
                                    c0.005-0.063-0.021-0.121-0.078-0.173c-0.057-0.054-0.139-0.084-0.246-0.093c-0.089-0.007-0.219-0.001-0.392,0.019
                                    L758.516,727.046z" />
    </g>
</g>

</svg>`;