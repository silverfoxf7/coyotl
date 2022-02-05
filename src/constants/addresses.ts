import { ChainId } from '@usedapp/core';

export type AddressMap = { [chainId: number]: string };

export const NFT_ADDRESSES: AddressMap = {
	// [ChainId.Rinkeby]: '0x4A3C736EA193e7C83b9A59577952aAB300d17852',
	[ChainId.Rinkeby]: '0x6b8ed6acc663d8fa58a2e758e12e04e880adbbf1',
};
