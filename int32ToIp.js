
function int32ToIp(int32){
    d = int32%100
    console.log("d: " + d)
    c = Math.floor(int32/100)
    console.log("c: " + c)
  }

  int32ToIp(3232235810)
//192.168.1.34 == 
// (32322358/256)-168
// 10
console.log(((192 * 256 + 168) * 256 + 1) * 256 + 32)
// ((192 * 256 + 168) * 256 + 1) * 256 + 32)

console.log(128*256)
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals( int32ToIp(2154959208), "128.114.17.104", "wrong ip for interger: 2154959208") 
//   Test.assertEquals( int32ToIp(0), "0.0.0.0", "wrong ip for integer: 0")
//   Test.assertEquals( int32ToIp(2149583361), "128.32.10.1", "wrong ip for integer: 2149583361")
//     });
//   });