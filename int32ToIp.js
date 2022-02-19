
function int32ToIp(int32){
    let ip =`${Math.floor(int32/(2**24))}.${Math.floor((int32%(2**24))/(2**16))}.${Math.floor(((int32%(2**24))%(2**16))/2**8)}.${Math.floor(int32%(2**8))}`
    return ip
  }

//   2149583361 ==> "128.32.10.1"
  int32ToIp(2149583361)

// Cool solution:
// function int32ToIp(int32){

//     return (
//              ((int32 >> 24) & 0xFF) + "." +
//              ((int32 >> 16) & 0xFF) + "." +
//              ((int32 >>  8) & 0xFF) + "." +
//              ((int32) & 0xFF)
//            );
    
//    }