import type StatusPageSettings from './status-page-settings';

export default interface StatusPage {
  custom_domain: string;
  domain: string;
  favicon: string;
  flags: string[];  
  id: number;
  logo: string;
  name: string;
  private: boolean;
  settings: StatusPageSettings;
}