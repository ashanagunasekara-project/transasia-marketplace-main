export interface StoreLocation {
  id: string;
  name: string;
  badge: string;
  isMain: boolean;
  companyName: string;
  address: string;
  city: string;
  phone: string;
  phoneRaw: string;
  email: string;
  mapUrl: string;
  embedUrl: string;
  openingHours?: string;
}

export const contactInfo = {
  phone: "+94 773 392 727",
  phoneRaw: "+94773392727",
  landline: "+94 112 332 162",
  email: "info@transasiacellular.com",
  emailHref: "mailto:info@transasiacellular.com",
  telegram: "https://t.me/94773392727",
  messenger: "https://m.me/transasia.lk",
};

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: "colombo",
    name: "Colombo Store",
    badge: "Main Location",
    isMain: true,
    companyName: "Trans Asia Cellular (Pvt) Ltd",
    address: "61 1st Cross St, Colombo 00110",
    city: "Colombo",
    phone: "+94773 392 727",
    phoneRaw: "+94773392727",
    email: "info@transasiacellular.com",
    mapUrl: "https://maps.app.goo.gl/Rmj9CMCfW6YYpfRV7",
    embedUrl:
      "https://maps.google.com/maps?q=Trans+Asia+Cellular+(Pvt)+Ltd,+61+1st+Cross+St,+Colombo+00110&t=&z=17&ie=UTF8&iwloc=&output=embed",
    openingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
  },
  {
    id: "kurunegala",
    name: "Kurunegala Store",
    badge: "Branch Location",
    isMain: false,
    companyName: "Trans Asia Cellular (Pvt) Ltd",
    address: "19 Katugastota-Kurunegala-Puttalam Hwy, Kurunegala",
    city: "Kurunegala",
    phone: "+94372 056 240",
    phoneRaw: "+94372056240",
    email: "info@transasiacellular.com",
    mapUrl: "https://maps.app.goo.gl/FG5XxKbbqLwswM758",
    embedUrl:
      "https://maps.google.com/maps?q=Trans+Asia+Cellular,+19+Katugastota-Kurunegala-Puttalam+Hwy,+Kurunegala&t=&z=17&ie=UTF8&iwloc=&output=embed",
    openingHours: "Mon - Sat: 9:00 AM - 6:30 PM",
  },
];
