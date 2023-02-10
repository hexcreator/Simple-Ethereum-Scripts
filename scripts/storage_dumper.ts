/**
 * Read storage from an EVM network contract address. No error checking, so if you use this, ensure you add that.
 * @param providerURL The provider URL that will be used to access an EVM-based network.
 * @param at The base address that we want to begin reading storage at, in hex.
 * @param until The number of slots to read, offsetted from the base address.
 * @returns An object with a string description of the storage and buffer values.
 */
async function storage(providerURL: string, at: string, until: number)
{

    // Init the network type
    const provider = new ethers.providers.JsonRpcProvider(providerURL);

    // Utils
    const toHex = (inp: number) => ethers.utils.hexlify(inp);
    const toDec = (hex: string) => BigInt(hex).toString();

    // One index takes 256 bytes ant it fits 64 symbols
    let str = ``;
    let buffers = [];
    for (let ind = 0; ind < until; ind++)
    {
        const storage = await provider.getStorageAt(at, toHex(ind), "latest");
        str += `#${ind} = ${storage} = ${toDec(storage)}\n`;
        buffers.push(storage);
    }
    log(`${at} storage slots: \n${str}`);
    return { str: str, buffers: buffers };

}
