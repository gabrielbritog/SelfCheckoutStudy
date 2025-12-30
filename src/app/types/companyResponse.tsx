export interface DeliveryLocation {
  location: string;
  price: number;
}

export interface DeliveryRadius {
  distance: number;
  price: number;
}

export interface DeliveryMapAreaPath {
  lat: number;
  lng: number;
}

export interface DeliveryMapArea {
  name: string;
  price: number;
  disable: boolean;
  paths: DeliveryMapAreaPath[];
}

export interface DeliveryFee {
  minimumValue: number;
  deliveryFeePrice: number;
  deliveryFeeKm: number;
  maxKm: number;
  maxDeliveryFeePrice: number;
  deliveryType: number;
  deliveryLocations: DeliveryLocation[];
  deliveryRadius: DeliveryRadius[];
  deliveryMapArea: DeliveryMapArea[];
}

export interface MotoBoy {
  name: string;
  phone: string;
}

export interface Address {
  companyId: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;
  cep: string;
}

export interface CompanyData {
  id: string;
  name: string;
  numberOfTables: number;
  adressId: string;
  email: string;
  phone: string;
  cpfCnpj: string | null;
  motoBoys: MotoBoy[];
  deliveryFee: DeliveryFee;
  indexOrder: string[];
  logoImage: string;
  heroImage: string[];
  routeName: string;
  renovationDate: string;
  open: boolean;
  instagramURL: string;
  facebookURL: string;
  mondayOpeningTime: string;
  mondayClosingTime: string;
  tuesdayOpeningTime: string;
  tuesdayClosingTime: string;
  wednesdayOpeningTime: string;
  wednesdayClosingTime: string;
  thursdayOpeningTime: string;
  thursdayClosingTime: string;
  fridayOpeningTime: string;
  fridayClosingTime: string;
  saturdayOpeningTime: string;
  saturdayClosingTime: string;
  sundayOpeningTime: string;
  sundayClosingTime: string;
  adress: Address;
}

export interface GetByRouteResponse {
  success: boolean;
  message: string;
  data: CompanyData;
}
