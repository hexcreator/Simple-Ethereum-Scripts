let p = '0x0';
let types = {};


if (p.startsWith('0x')) p = p.substring(2);
ind = 0;

console.log(`uint16: 0x${p.substring(0, ind+4)}`);
ind+=4;

console.log(`uint32: 0x${p.substring(ind, ind+8)}`);
ind+=8;

console.log(`uint64: 0x${p.substring(ind, ind+16)}`);
ind+=16;

console.log(`uint128: 0x${p.substring(ind, ind+32)}`);
ind+=32;

console.log(`uint256: 0x${p.substring(ind, ind+64)}`);
ind+=64;

console.log(`address: 0x${p.substring(ind, ind+64)}`);
