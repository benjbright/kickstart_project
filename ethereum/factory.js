import web3 from "./web3"
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xC8FA8d0DF845762e81E518375a0f0E285479338C"
)

export default instance
