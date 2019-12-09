import { CampaignTypes } from '../types';

const getCampaigns = () => ({
  type: CampaignTypes.GET_CAMPAIGNS
})

const getCampaignsByName = (name) => ({
  type: CampaignTypes.GET_CAMPAIGNS_BY_NAME, name
})

export { getCampaigns, getCampaignsByName }