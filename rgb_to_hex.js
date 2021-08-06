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