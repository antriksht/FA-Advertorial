export interface FormData {
  zipCode: string;
  needLocalAdvisor: boolean | null;
  retirementHorizon: string;
  homeOwnership: boolean | null;
  businessOwnership: boolean | null;
  income: string;
  portfolioSize: string;
  hasAdvisor: boolean | null;
  switchReason: string[];
  services: string[];
  email: string;
  name: string;
  phone: string;
  agreeToTerms: boolean;
  additionalInfo: string;
}

export interface ValidationState {
  zipCode: boolean;
  email: boolean;
  phone: boolean;
  agreeToTerms: boolean;
}