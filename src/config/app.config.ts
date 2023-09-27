interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Maxui',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own profile',
    'Apply for jobs',
    'Create and manage contracts',
    'View job and company details',
  ],
  ownerAbilities: ['Manage contracts', 'Manage applications', 'Manage jobs', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/bdc5f92b-8536-4339-93f6-dd1bb9f68e0f',
};
