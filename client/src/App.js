import logo from './logo.svg';
import './App.css';

function App() {

  const gradient = [
    [
        0,
        [255,156,0]
    ],
    [
        28,
        [255,2,0]
    ],
    [
        72,
        [166,7,128]
    ],
    [
        100,
        [5,112,251]
    ]
];

// var sliderWidth = 50;

// $( "#slider" ).slider({
//     min: 1,
//     slide: function( event, ui ) {
        
//         var colorRange = []
//         $.each(gradient, function( index, value ) {
//             if(ui.value<=value[0]) {
//                 colorRange = [index-1,index]
//                 return false;
//             }
//         });
        
//         //Get the two closest colors
//         var firstcolor = gradient[colorRange[0]][1];
//         var secondcolor = gradient[colorRange[1]][1];
        
//         //Calculate ratio between the two closest colors
//         var firstcolor_x = sliderWidth*(gradient[colorRange[0]][0]/100);
//         var secondcolor_x = sliderWidth*(gradient[colorRange[1]][0]/100)-firstcolor_x;
//         var slider_x = sliderWidth*(ui.value/100)-firstcolor_x;
//         var ratio = slider_x/secondcolor_x
        
//         //Get the color with pickHex(thx, less.js's mix function!)
//         var result = pickHex( secondcolor,firstcolor, ratio );
                       
//         $('#result').css("background-color", 'rgb('+result.join()+')');
        
//     }
// });

function pickHex(color1, color2, weight) {
    var p = weight;
    var w = p * 2 - 1;
    var w1 = (w/1+1) / 2;
    var w2 = 1 - w1;
    var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)];
    return rgb;
}

  return (
    <div className="App">
      <div className="header">
        <h1 className="header__title">"I'm going to make them an app they can't refuse"</h1>
        <p className="header__sub-title">- the Appfather</p>
      </div>
      <input type="range" id="slider" className="theme-color-slider" />
      <div className="header-change-theme">
        <div className="header-change-theme__logo">
          <h2>logo</h2>
        </div>
        <div className="header-change-theme__title">
          <h1>header</h1>
        </div>
        <ul className="header-change-theme__nav-list">
          <li className="nav-list__list-item">nav item 1</li>
          <li className="nav-list__list-item">nav item 2</li>
          <li className="nav-list__list-item">nav item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
