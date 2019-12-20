import { CampaignTypes } from '../types';

const getCampaigns = (page) => ({
  type: CampaignTypes.GET_CAMPAIGNS, page
})

const getCampaignsByName = (name) => ({
  type: CampaignTypes.GET_CAMPAIGNS_BY_NAME, name
})

export { getCampaigns, getCampaignsByName }