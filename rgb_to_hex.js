function rgb(r, g, b){
    const rgb = [r, g, b];
    let hex = "";
    for(value of rgb){
        if (value <= 0){
            hex += "00";
        }
        else if (value >= 255){
            hex += "FF";
        }
        else if (value.toString(16).length == 1){
            hex += ("0" + value.toString(16).toUpperCase());
        }
        else
        {
            hex += value.toString(16).toUpperCase();
        }
    }
    console.log(hex)
    return hex;
}

rgb(0, 0, 0)//, '000000')
rgb(0, 0, -20)//, '000000')
rgb(300,255,255)//, 'FFFFFF')
rgb(173,255,47)//, 'ADFF2F')
rgb(167,210,13)

function rgb2(r, g, b){
    console.log( [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }))//.join('').toUpperCase();
  }

rgb2(0, 0, 0)//, '000000')
rgb2(0, 0, -20)//, '000000')
rgb2(300,255,255)//, 'FFFFFF')
rgb2(173,255,47)//, 'ADFF2F')

rgb2(167,210,13)

x = 13
console.log(('0' + Math.max(0, Math.min(255, x)).toString(16)).slice(-2));

