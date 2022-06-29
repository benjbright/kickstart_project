// Delete entire 'build' directory
// Read 'Campaign.sol' from the 'contracts' folder
// Compile both contracts with Solidity compiler
// Write output to the 'build' directory

const path = require("path")
const solc = require("solc")
const fs = require("fs-extra")
// access to filesystem on local computer

const buildPath = path.resolve(__dirname, "build")
fs.removeSync(buildPath)
// deletes the build folder

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol")
const source = fs.readFileSync(campaignPath, "utf8")
// reference to the Campaign.sol file

const output = solc.compile(source, 1).contracts

fs.ensureDirSync(buildPath)
// Checks to see if a directory exists - if not builds it for us

for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  )
}
