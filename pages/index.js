import React, { Component } from "react"
import factory from "../ethereum/factory"

class CampaignIndex extends Component {
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call()

    console.log(campaigns)
  }

  render() {
    return <div>Campaigns Index!</div>
  }
}

export default CampaignIndex

// To-do's for the campaign list page

// 1 - configure web3 with a provider from metamask - web3.js
// 2 - tell web3 a deployed copy of the 'CampaignFactory' exists - factory.js
// 3 - use Factory instance to retrieve a list of deployed campaigns
// 4 - use React to show something about each campaign
