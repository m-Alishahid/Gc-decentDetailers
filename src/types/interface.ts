// utils/interfaces.ts

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    timeSlot: string;
    vehicleLength?: string;
    notes?: string;
  }
  
  export interface EmailTemplateProps {
    formData: FormData;
    formattedDate: string;
    vehicleTypeInfo: string;
    vehicleDetails: string;
    selectedPackagesInfo: string;
    addonsList?: string;
  }
  