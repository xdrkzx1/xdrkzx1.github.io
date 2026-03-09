export interface Partner {
  name: string;
  type: 'SAP' | 'Technology' | 'Delivery' | 'Geographic';
  description: string;
  certifications?: string[];
}

export const partners: Partner[] = [
  { name: 'SAP', type: 'SAP', description: 'SAP Gold Partner with recognised expertise in SAP S/4HANA Finance, BRIM, FPSL, PaPM, and SAP BTP.', certifications: ['SAP S/4HANA Finance', 'SAP BRIM', 'SAP BTP', 'SAP PaPM'] },
  { name: 'Microsoft Azure', type: 'Technology', description: 'Microsoft technology partner for SAP on Azure deployments and hybrid cloud integration.' },
  { name: 'AWS', type: 'Technology', description: 'Amazon Web Services partner for SAP on AWS infrastructure and cloud-native AI workloads.' },
  { name: 'Convista Asia', type: 'Delivery', description: 'Strategic delivery partner providing SAP technical and functional resources across APAC markets.' },
  { name: 'Noshtek Canada', type: 'Geographic', description: 'Noshtek\'s Canadian operations serving utility, insurance, and telecom clients across all provinces.' },
  { name: 'Noshtek Singapore', type: 'Geographic', description: 'APAC hub covering Singapore, Australia, and Southeast Asian markets.' },
  { name: 'Noshtek Taiwan', type: 'Geographic', description: 'Noshtek\'s Taiwan affiliate supporting manufacturing and financial services clients.' },
];
