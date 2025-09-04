export interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface AdMockup {
  caption: string;
  imageUrl: string;
}

export interface Tool {
  name: string;
  logoUrl: string;
  colorLogoUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

export interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}
