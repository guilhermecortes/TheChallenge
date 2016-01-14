// Hack a Rails app, that:
//   Lets you search for Venues by a city name
//   You type in "London" and it returns the list of venues in London
//   You type in "Stockholm" etc.
//
//   * It should only work with London and Stockholm
//
//   Use anything you like. Ask, tell, have fun.
 
// Venues JSON to import to your database
// 10 venues in London mixed with 10 venues in Stockholm below
[
  {"name":"Papercut","lat":59.317159,"lng":18.054939},
  {"name":"New Image Car Hi-Fi","lat":51.58875,"lng":-0.363208},
  {"name":"Halfords","lat":51.514127,"lng":-0.100986},
  {"name":"Carpet World","lat":51.555871,"lng":-0.072559},
  {"name":"Harrow Breakers","lat":51.5938,"lng":-0.3529},
  {"name":"Carpet World","lat":51.549684,"lng":-0.239651},
  {"name":"Caf Pascal","lat":59.341935,"lng":18.052073},
  {"name":"SACHAJUAN","lat":59.340186,"lng":18.076286},
  {"name":"Heather Bird Health of Knightsbridge Ltd","lat":51.497593,"lng":-0.164862},
  {"name":"Marks \u0026 Spencer","lat":51.530506,"lng":-0.12563},
  {"name":"Ac bergs Mat \u0026 Catering","lat":59.337147,"lng":18.028672},
  {"name":"Vita","lat":59.334045,"lng":18.076777},
  {"name":"Herr Judit","lat":59.31758,"lng":18.053943},
  {"name":"Nitty Gritty","lat":59.317155,"lng":18.054099},
  {"name":"Jupiter AB","lat":59.318283,"lng":18.059026},
  {"name":"Haberdash","lat":59.342045,"lng":18.048814},
  {"name":"P J Car Audio","lat":51.593823,"lng":-0.334988},
  {"name":"Car Audio and Security","lat":51.517904,"lng":-0.13134},
  {"name":"Citysounds","lat":51.518881,"lng":-0.132556},
  {"name":"Salong Fogde","lat":59.276748,"lng":18.126838}
]
 
// It might help to know that this venue is in London
"Citysounds"
// This one is in Stockholm
"Salong Fogde"

// Both of these venues are also in the JSON above.