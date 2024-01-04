import { Horizon } from '@stellar/stellar-sdk'

const horizon = new Horizon.Server('https://horizon-testnet.stellar.org')

export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		const account = await horizon.loadAccount('GAE2NBKSFTICKYNGXXCEWMOHZHEZPX23NWSCX5MBTVRNXL6RWHTETY3B')
		return account
	},
};
