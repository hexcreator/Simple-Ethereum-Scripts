let p = '0x0';

let raw = p.substring(2); 
let c = 0;
for (let i=0; i<p.length; i+=64)
{
    let offset = 64;
    let str = `0x${raw.substring(i, i + 64)}`;
    console.log(`${c}: ${str}`);
    c++;
}
