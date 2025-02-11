interface StatusPageSettingsBrandIdentity {
  base_font: string;
  base_color: string;
  link_color: string;
  heading_font: string;
  body_bg_color: string;
  divider_color: string;
  heading_color: string;
  secondary_font: string;
  button_bg_color: string;
  footer_bg_color: string;
  header_bg_color: string;
  secondary_color: string;
  link_hover_color: string;
  tab_active_color: string;
  tab_inactive_color: string;
  tab_active_bg_color: string;
  tab_inactive_bg_color: string;
}

export default interface StatusPageSettings {
  brand_identity: StatusPageSettingsBrandIdentity;
  copyright_disclaimer: string;
  description: string;
  footers: string[];
  google_analytics_tracking_id: string;
  headers: string[];
  home_page_url: string;
  seo_meta: {
    title: string;
    keywords: string;
    description: string;
  };
  show_rss: boolean;
  show_title: boolean;
  social_links: string[];
  support: {
    portal_url: string;
    phone_number: string;
    report_problem_url: string;
  };
  top_status_message: string;
  uptime_history_day_count: number;
}