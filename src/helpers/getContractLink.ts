export const getContractLink = (chainId: number, contractAddress: string) => {
  if (chainId === 1) {
    return `https://etherscan.io/address/${contractAddress}`;
  }

  if (chainId === 137) {
    return `https://polygonscan.com//address/${contractAddress}`;
  }

  if (chainId === 56) {
    return `https://bscscan.com/address/${contractAddress}`;
  }
  
  return `https://etherscan.io/address/${contractAddress}`;
}