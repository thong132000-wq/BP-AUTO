const fs=require('fs'),path=require('path');
const dir=path.join(__dirname,'data','cars');
let cars=[];
if(fs.existsSync(dir)) for(const f of fs.readdirSync(dir).filter(x=>x.endsWith('.json'))){try{cars.push(JSON.parse(fs.readFileSync(path.join(dir,f),'utf8')))}catch(e){console.error('Invalid JSON:',f,e.message)}}
fs.writeFileSync(path.join(__dirname,'cars.json'),JSON.stringify(cars,null,2));
console.log(`Generated cars.json with ${cars.length} cars`);
