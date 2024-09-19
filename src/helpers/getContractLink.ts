export const getContractLink = (chainId: number, contractAddress: string) => {
  if (chainId === 1) {
    return `https://etherscan.io/address/${contractAddress}`;
  }
  
  return `https://etherscan.io/address/${contractAddress}`;
}