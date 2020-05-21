const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const SquareVerifier = artifacts.require('SquareVerifier');
const validProof = require('./valid-proof.json');

// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

contract('TestSolnSquareVerifier', accounts => {

  describe('verify proofs and mint tokens', function () {
    beforeEach(async function () {
      const squareContract = await SquareVerifier.new({ from: accounts[0] });
      this.solnSquareContract = await SolnSquareVerifier.new(squareContract.address, { from: accounts[0] });
    })

    it('should mint a new token with correct proofs', async function () {
      try {
        const success = await this.solnSquareContract.mintToken(accounts[2], 99, validProof.proof.a, validProof.proof.b, validProof.proof.c, validProof.inputs, { from: accounts[0] });
      } catch (e) {
        console.log(e)
      }
    })
  });
  
})