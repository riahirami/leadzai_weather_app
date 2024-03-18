export interface Countries {
  name: string;
  lat: number;
  lon: number;
  image: string;
}

export type PopupParams = {
  title?: string;
  message?: string;
  confirmText?: string;
  confirmCallback?: () => void;
};
