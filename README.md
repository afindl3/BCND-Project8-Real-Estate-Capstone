# Project Requirements

* SquareVerifier: https://rinkeby.etherscan.io/address/0xcbad0c3459b7aa211ffdb4a486a56cf45ac894a9
* SolnSquareVerifier: https://rinkeby.etherscan.io/address/0x906f1983026fbaf7d62717e608f500c8719b13db
* SolnSquareVerifier Contract ABI (note this file is a copy of the file generated after running truffle compile in eth-contracts/build/contracts/SolnSquareVerifier.json abi array): https://github.com/afindl3/BCND-Project8-Real-Estate-Capstone/blob/feature/project-updates/soln-square-verifier-abi.txt
* 10 tokens were minted on MyEtherWallet
    - Contract address = SolnSquareVerifier (0x906f1983026fbaf7d62717e608f500c8719b13db)
    - Function = mint (note this does not require proof's unlike mintToken)
    - To = Account1 (0x4EA55452B992b81C95f2077c15C09aCa1c6Fdaed)
    - Token Id = 11, 22, 33, 44, 55, 66, 77, 88, 99, 111
* OpenSea Marketplace was created for the SolnSquareVerifier contract: https://rinkeby.opensea.io/category/unidentified-contract-v386/
* 5 tokens (Token Id's 11, 22, 33, 44, 55) were put on sale for various prices (in ether) by Account1 (0x4EA55452B992b81C95f2077c15C09aCa1c6Fdaed)
* The same 5 tokens were purchased by Account2 (0xBD75FB68308cA7712Dcfc04884931d5797079140)
* For further details, please view the steps followed in: https://github.com/afindl3/BCND-Project8-Real-Estate-Capstone/blob/master/Project%208%20-%20Real%20Estate%20Capstone.docx

# Project Setup

## Install

To install, download or clone the repo, then:

    npm install
    cd eth-contracts/
    truffle compile
    
## Test

To run truffle tests run the following commands from the /eth-contracts folder:

    truffle test ./test/ERC721Mintable.js
    truffle test ./test/TestSquareVerifier.js
    truffle test ./test/TestSolnSquareVerifier.js
    
## Deploying

Create a .mnemonic-secret and .infura-secret file in the root of /eth-contracts with your menmonic and infura key respectively:

    truffle compile
    truffle migrate --rest --network rinkeby

## Zokrates

Refer to the [Zokrates howto](./zokrates/howto.md)

# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
