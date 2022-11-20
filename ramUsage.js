const os=require('os')


setInterval(()=>{ 
const {arch,platform,totalmem,freemem}=os;
const TRam=totalmem() /1024 /1024;
const FRam=freemem() /1024  /1024;
const usage= FRam/TRam *100;
const stats={
  OS:platform(),
  Arch:arch(),
  TotalRam:+parseInt(TRam)+"MB",
  FreeRam:+parseInt(FRam)+"MB",
  Usage:+(usage).toFixed(2)+"%",
}
console.clear();
console.table(stats);
exports.stats=stats;
},1000)
