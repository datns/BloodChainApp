import { CampaignTypes } from '../types';

const getCampaigns = () => ({
  type: CampaignTypes.GET_CAMPAIGNS
})

export { getCampaigns }