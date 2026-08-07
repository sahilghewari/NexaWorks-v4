import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tally ERP Automated Data Extraction for BI Dashboards',
  description: 'NexaWorks automates Tally Prime ODBC XML data extraction into PowerBI and Tableau dashboards, eliminating manual CSV exports and saving 40+ hours per month.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
