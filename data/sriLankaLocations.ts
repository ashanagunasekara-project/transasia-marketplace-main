export interface SriLankaDistrictData {
  id: string;
  name: string;
  code: string;
  cities: Array<{
    name: string;
    postalCode: string;
  }>;
}

export const SRI_LANKA_DISTRICTS: SriLankaDistrictData[] = [
  {
    id: "colombo",
    name: "Colombo",
    code: "CMB",
    cities: [
      { name: "Colombo 01 - Fort", postalCode: "00100" },
      { name: "Colombo 02 - Slave Island", postalCode: "00200" },
      { name: "Colombo 03 - Kollupitiya", postalCode: "00300" },
      { name: "Colombo 04 - Bambalapitiya", postalCode: "00400" },
      { name: "Colombo 05 - Havelock Town", postalCode: "00500" },
      { name: "Colombo 06 - Wellawatte", postalCode: "00600" },
      { name: "Colombo 07 - Cinnamon Gardens", postalCode: "00700" },
      { name: "Colombo 08 - Borella", postalCode: "00800" },
      { name: "Colombo 09 - Dematagoda", postalCode: "00900" },
      { name: "Colombo 10 - Maradana", postalCode: "01000" },
      { name: "Colombo 11 - Pettah", postalCode: "01100" },
      { name: "Colombo 12 - Hultsdorf", postalCode: "01200" },
      { name: "Colombo 13 - Kotahena", postalCode: "01300" },
      { name: "Colombo 14 - Grandpass", postalCode: "01400" },
      { name: "Colombo 15 - Mutwal", postalCode: "01500" },
      { name: "Dehiwala", postalCode: "10350" },
      { name: "Mount Lavinia", postalCode: "10370" },
      { name: "Moratuwa", postalCode: "10400" },
      { name: "Nugegoda", postalCode: "10250" },
      { name: "Maharagama", postalCode: "10280" },
      { name: "Kottawa", postalCode: "10230" },
      { name: "Homagama", postalCode: "10200" },
      { name: "Battaramulla", postalCode: "10120" },
      { name: "Rajagiriya", postalCode: "10107" },
      { name: "Malabe", postalCode: "10115" },
      { name: "Piliyandala", postalCode: "10300" },
      { name: "Kesbewa", postalCode: "10305" },
      { name: "Hanwella", postalCode: "10650" },
      { name: "Avissawella", postalCode: "10700" },
    ],
  },
  {
    id: "gampaha",
    name: "Gampaha",
    code: "GMP",
    cities: [
      { name: "Negombo", postalCode: "11500" },
      { name: "Gampaha City", postalCode: "11000" },
      { name: "Kelaniya", postalCode: "11600" },
      { name: "Kadawatha", postalCode: "11850" },
      { name: "Kiribathgoda", postalCode: "11600" },
      { name: "Ja-Ela", postalCode: "11350" },
      { name: "Wattala", postalCode: "11300" },
      { name: "Kandana", postalCode: "11320" },
      { name: "Minuwangoda", postalCode: "11550" },
      { name: "Mirigama", postalCode: "11200" },
      { name: "Nittambuwa", postalCode: "11880" },
      { name: "Veyangoda", postalCode: "11100" },
      { name: "Ragama", postalCode: "11010" },
      { name: "Divulapitiya", postalCode: "11250" },
      { name: "Katunayake", postalCode: "11450" },
      { name: "Biyagama", postalCode: "11650" },
      { name: "Delgoda", postalCode: "11700" },
      { name: "Ganemulla", postalCode: "11020" },
    ],
  },
  {
    id: "kalutara",
    name: "Kalutara",
    code: "KLT",
    cities: [
      { name: "Panadura", postalCode: "12500" },
      { name: "Kalutara North", postalCode: "12000" },
      { name: "Kalutara South", postalCode: "12000" },
      { name: "Horana", postalCode: "12400" },
      { name: "Bandaragama", postalCode: "12530" },
      { name: "Beruwala", postalCode: "12070" },
      { name: "Aluthgama", postalCode: "12080" },
      { name: "Matugama", postalCode: "12100" },
      { name: "Wadduwa", postalCode: "12560" },
      { name: "Ingiriya", postalCode: "12440" },
      { name: "Agalawatta", postalCode: "12200" },
      { name: "Dodangoda", postalCode: "12020" },
    ],
  },
  {
    id: "kandy",
    name: "Kandy",
    code: "KDY",
    cities: [
      { name: "Kandy City", postalCode: "20000" },
      { name: "Peradeniya", postalCode: "20400" },
      { name: "Katugastota", postalCode: "20800" },
      { name: "Gampola", postalCode: "20500" },
      { name: "Nawalapitiya", postalCode: "20650" },
      { name: "Kundasale", postalCode: "20168" },
      { name: "Akurana", postalCode: "20850" },
      { name: "Digana", postalCode: "20180" },
      { name: "Teldeniya", postalCode: "20900" },
      { name: "Gelioya", postalCode: "20570" },
      { name: "Wattegama", postalCode: "20810" },
      { name: "Pilimathalawa", postalCode: "20450" },
      { name: "Kadugannawa", postalCode: "20300" },
    ],
  },
  {
    id: "matale",
    name: "Matale",
    code: "MTL",
    cities: [
      { name: "Matale City", postalCode: "21000" },
      { name: "Dambulla", postalCode: "21100" },
      { name: "Sigiriya", postalCode: "21120" },
      { name: "Galewela", postalCode: "21200" },
      { name: "Ukuwela", postalCode: "21300" },
      { name: "Rattota", postalCode: "21400" },
      { name: "Naula", postalCode: "21250" },
      { name: "Yatawatta", postalCode: "21070" },
    ],
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    code: "NUE",
    cities: [
      { name: "Nuwara Eliya City", postalCode: "22200" },
      { name: "Hatton", postalCode: "22000" },
      { name: "Talawakelle", postalCode: "22100" },
      { name: "Ginigathena", postalCode: "22050" },
      { name: "Maskeliya", postalCode: "22070" },
      { name: "Kotagala", postalCode: "22080" },
      { name: "Walapane", postalCode: "22350" },
      { name: "Ragala", postalCode: "22220" },
      { name: "Norwood", postalCode: "22090" },
    ],
  },
  {
    id: "galle",
    name: "Galle",
    code: "GLE",
    cities: [
      { name: "Galle Fort / City", postalCode: "80000" },
      { name: "Hikkaduwa", postalCode: "80240" },
      { name: "Karapitiya", postalCode: "80000" },
      { name: "Ambalangoda", postalCode: "80300" },
      { name: "Elpitiya", postalCode: "80400" },
      { name: "Bentota", postalCode: "80500" },
      { name: "Baddegama", postalCode: "80200" },
      { name: "Ahangama", postalCode: "80650" },
      { name: "Koggala", postalCode: "80630" },
      { name: "Batapola", postalCode: "80320" },
      { name: "Neluwa", postalCode: "80082" },
    ],
  },
  {
    id: "matara",
    name: "Matara",
    code: "MTR",
    cities: [
      { name: "Matara City", postalCode: "81000" },
      { name: "Weligama", postalCode: "81700" },
      { name: "Akuressa", postalCode: "81400" },
      { name: "Dickwella", postalCode: "81200" },
      { name: "Hakmana", postalCode: "81300" },
      { name: "Kamburupitiya", postalCode: "81100" },
      { name: "Deniyaya", postalCode: "81500" },
      { name: "Mirissa", postalCode: "81740" },
      { name: "Devinuwara", postalCode: "81160" },
    ],
  },
  {
    id: "hambantota",
    name: "Hambantota",
    code: "HBT",
    cities: [
      { name: "Hambantota City", postalCode: "82000" },
      { name: "Tangalle", postalCode: "82200" },
      { name: "Beliatta", postalCode: "82400" },
      { name: "Tissamaharama", postalCode: "82600" },
      { name: "Ambalantota", postalCode: "82100" },
      { name: "Walasmulla", postalCode: "82450" },
      { name: "Weeraketiya", postalCode: "82240" },
      { name: "Angunukolapelessa", postalCode: "82220" },
    ],
  },
  {
    id: "jaffna",
    name: "Jaffna",
    code: "JAF",
    cities: [
      { name: "Jaffna City", postalCode: "40000" },
      { name: "Nallur", postalCode: "40000" },
      { name: "Chavakachcheri", postalCode: "40500" },
      { name: "Point Pedro", postalCode: "40600" },
      { name: "Karainagar", postalCode: "40730" },
      { name: "Chunnakam", postalCode: "40000" },
      { name: "Valvettithurai", postalCode: "40650" },
      { name: "Kopay", postalCode: "40000" },
      { name: "Manipay", postalCode: "40000" },
    ],
  },
  {
    id: "kilinochchi",
    name: "Kilinochchi",
    code: "KIL",
    cities: [
      { name: "Kilinochchi City", postalCode: "44000" },
      { name: "Paranthan", postalCode: "44000" },
      { name: "Poonakary", postalCode: "44000" },
      { name: "Pallai", postalCode: "44000" },
      { name: "Dharmapuram", postalCode: "44000" },
    ],
  },
  {
    id: "mannar",
    name: "Mannar",
    code: "MNR",
    cities: [
      { name: "Mannar Town", postalCode: "41000" },
      { name: "Murunkan", postalCode: "41000" },
      { name: "Pesalai", postalCode: "41000" },
      { name: "Thalaimannar", postalCode: "41000" },
      { name: "Madhu", postalCode: "41000" },
    ],
  },
  {
    id: "vavuniya",
    name: "Vavuniya",
    code: "VAV",
    cities: [
      { name: "Vavuniya Town", postalCode: "43000" },
      { name: "Cheddikulam", postalCode: "43000" },
      { name: "Nedunkeni", postalCode: "43000" },
      { name: "Omanthai", postalCode: "43000" },
      { name: "Puliyankulam", postalCode: "43000" },
    ],
  },
  {
    id: "mullaitivu",
    name: "Mullaitivu",
    code: "MUL",
    cities: [
      { name: "Mullaitivu Town", postalCode: "42000" },
      { name: "Puthukkudiyiruppu", postalCode: "42000" },
      { name: "Oddusuddan", postalCode: "42000" },
      { name: "Mankulam", postalCode: "42000" },
      { name: "Mallavi", postalCode: "42000" },
    ],
  },
  {
    id: "batticaloa",
    name: "Batticaloa",
    code: "BAT",
    cities: [
      { name: "Batticaloa City", postalCode: "30000" },
      { name: "Kattankudy", postalCode: "30100" },
      { name: "Eravur", postalCode: "30300" },
      { name: "Valachchenai", postalCode: "30400" },
      { name: "Kaluwanchikudy", postalCode: "30200" },
      { name: "Chenkalady", postalCode: "30350" },
      { name: "Vakarai", postalCode: "30450" },
    ],
  },
  {
    id: "ampara",
    name: "Ampara",
    code: "AMP",
    cities: [
      { name: "Ampara Town", postalCode: "32000" },
      { name: "Kalmunai", postalCode: "32300" },
      { name: "Sammanthurai", postalCode: "32200" },
      { name: "Akkaraipattu", postalCode: "32400" },
      { name: "Pottuvil", postalCode: "32500" },
      { name: "Sainthamaruthu", postalCode: "32280" },
      { name: "Dehiattakandiya", postalCode: "32150" },
      { name: "Uhana", postalCode: "32060" },
    ],
  },
  {
    id: "trincomalee",
    name: "Trincomalee",
    code: "TRN",
    cities: [
      { name: "Trincomalee City", postalCode: "31000" },
      { name: "Kinniya", postalCode: "31100" },
      { name: "Mutur", postalCode: "31200" },
      { name: "Kantale", postalCode: "31300" },
      { name: "Nilaveli", postalCode: "31010" },
      { name: "Kuchchaveli", postalCode: "31015" },
    ],
  },
  {
    id: "kurunegala",
    name: "Kurunegala",
    code: "KRN",
    cities: [
      { name: "Kurunegala City", postalCode: "60000" },
      { name: "Kuliyapitiya", postalCode: "60200" },
      { name: "Narammala", postalCode: "60100" },
      { name: "Wariyapola", postalCode: "60400" },
      { name: "Pannala", postalCode: "60160" },
      { name: "Polgahawela", postalCode: "60300" },
      { name: "Alawwa", postalCode: "60280" },
      { name: "Mawathagama", postalCode: "60060" },
      { name: "Ibbagamuwa", postalCode: "60500" },
      { name: "Giriulla", postalCode: "60140" },
      { name: "Hettipola", postalCode: "60430" },
      { name: "Nikaweratiya", postalCode: "60470" },
      { name: "Maho", postalCode: "60600" },
    ],
  },
  {
    id: "puttalam",
    name: "Puttalam",
    code: "PUT",
    cities: [
      { name: "Puttalam Town", postalCode: "61300" },
      { name: "Chilaw", postalCode: "61000" },
      { name: "Marawila", postalCode: "61150" },
      { name: "Wennappuwa", postalCode: "61170" },
      { name: "Dankotuwa", postalCode: "61180" },
      { name: "Anamaduwa", postalCode: "61500" },
      { name: "Kalpitiya", postalCode: "61360" },
      { name: "Mahawewa", postalCode: "61220" },
      { name: "Nattandiya", postalCode: "61140" },
    ],
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura",
    code: "ANU",
    cities: [
      { name: "Anuradhapura City", postalCode: "50000" },
      { name: "Kekirawa", postalCode: "50100" },
      { name: "Medawachchiya", postalCode: "50500" },
      { name: "Tambuttegama", postalCode: "50150" },
      { name: "Eppawala", postalCode: "50180" },
      { name: "Mihintale", postalCode: "50300" },
      { name: "Galnewa", postalCode: "50170" },
      { name: "Nochchiyagama", postalCode: "50200" },
      { name: "Habarana", postalCode: "50142" },
    ],
  },
  {
    id: "polonnaruwa",
    name: "Polonnaruwa",
    code: "POL",
    cities: [
      { name: "Polonnaruwa City", postalCode: "51000" },
      { name: "Kaduruwela", postalCode: "51000" },
      { name: "Hingurakgoda", postalCode: "51400" },
      { name: "Medirigiriya", postalCode: "51500" },
      { name: "Minneriya", postalCode: "51410" },
      { name: "Giritale", postalCode: "51026" },
      { name: "Welikanda", postalCode: "51070" },
    ],
  },
  {
    id: "badulla",
    name: "Badulla",
    code: "BDL",
    cities: [
      { name: "Badulla City", postalCode: "90000" },
      { name: "Bandarawela", postalCode: "90100" },
      { name: "Hali-Ela", postalCode: "90060" },
      { name: "Welimada", postalCode: "90200" },
      { name: "Mahiyanganaya", postalCode: "90700" },
      { name: "Haputale", postalCode: "90160" },
      { name: "Ella", postalCode: "90090" },
      { name: "Diyatalawa", postalCode: "90150" },
      { name: "Passara", postalCode: "90070" },
    ],
  },
  {
    id: "monaragala",
    name: "Monaragala",
    code: "MON",
    cities: [
      { name: "Monaragala Town", postalCode: "91200" },
      { name: "Wellawaya", postalCode: "91270" },
      { name: "Buttala", postalCode: "91100" },
      { name: "Bibile", postalCode: "91500" },
      { name: "Kataragama", postalCode: "91400" },
      { name: "Siyambalanduwa", postalCode: "91450" },
    ],
  },
  {
    id: "ratnapura",
    name: "Ratnapura",
    code: "RAT",
    cities: [
      { name: "Ratnapura City", postalCode: "70000" },
      { name: "Embilipitiya", postalCode: "70300" },
      { name: "Balangoda", postalCode: "70100" },
      { name: "Pelmadulla", postalCode: "70070" },
      { name: "Kuruwita", postalCode: "70500" },
      { name: "Eheliyagoda", postalCode: "70600" },
      { name: "Kahawatta", postalCode: "70150" },
      { name: "Rakwana", postalCode: "70330" },
    ],
  },
  {
    id: "kegalle",
    name: "Kegalle",
    code: "KEG",
    cities: [
      { name: "Kegalle Town", postalCode: "71000" },
      { name: "Mawanella", postalCode: "71500" },
      { name: "Warakapola", postalCode: "71600" },
      { name: "Ruwanwella", postalCode: "71700" },
      { name: "Yatiyantota", postalCode: "71720" },
      { name: "Rambukkana", postalCode: "71100" },
      { name: "Dehiowita", postalCode: "71400" },
      { name: "Deraniyagala", postalCode: "71430" },
    ],
  },
];

export function getAllDistricts() {
  return SRI_LANKA_DISTRICTS.map((d) => ({
    id: d.id,
    name: d.name,
    code: d.code,
  }));
}

export function getCitiesForDistrict(districtId: string) {
  const norm = districtId.trim().toLowerCase();
  const district = SRI_LANKA_DISTRICTS.find(
    (d) =>
      d.id.toLowerCase() === norm ||
      d.name.toLowerCase() === norm ||
      d.code.toLowerCase() === norm
  );
  if (!district) return [];

  return district.cities.map((c, idx) => ({
    id: `${district.id}-${idx}`,
    name: c.name,
    postalCode: c.postalCode,
    districtId: district.id,
    districtName: district.name,
    displayName: `${c.name} (${district.name})`,
  }));
}

export function findLocationByPostalCode(postalCode: string): {
  district: string;
  districtId: string;
  city: string;
  postalCode: string;
} | null {
  const code = postalCode.trim();
  if (!code) return null;

  for (const district of SRI_LANKA_DISTRICTS) {
    for (const city of district.cities) {
      if (city.postalCode === code) {
        return {
          district: district.name,
          districtId: district.id,
          city: city.name,
          postalCode: city.postalCode,
        };
      }
    }
  }
  return null;
}
