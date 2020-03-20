declare type Corporation = {
  id: number;
  name: string;
  icon: string;
};

declare type AddCorporationRequest = {
  name: string;
  icon: string;
  [index: string]: string;
};
