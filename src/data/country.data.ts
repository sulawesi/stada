// Data from https://stefangabos.github.io/world_countries/

const countryData = [
    {
        "Name": "Afghanistan",
        "Alpha2Code": "AF",
        "Alpha3Code": "AFG",
        "NumericCode": "004"
    },
    {
        "Name": "Albania",
        "Alpha2Code": "AL",
        "Alpha3Code": "ALB",
        "NumericCode": "008"
    },
    {
        "Name": "Algeria",
        "Alpha2Code": "DZ",
        "Alpha3Code": "DZA",
        "NumericCode": "012"
    },
    {
        "Name": "Andorra",
        "Alpha2Code": "AD",
        "Alpha3Code": "AND",
        "NumericCode": "020"
    },
    {
        "Name": "Angola",
        "Alpha2Code": "AO",
        "Alpha3Code": "AGO",
        "NumericCode": "024"
    },
    {
        "Name": "Antigua and Barbuda",
        "Alpha2Code": "AG",
        "Alpha3Code": "ATG",
        "NumericCode": "028"
    },
    {
        "Name": "Argentina",
        "Alpha2Code": "AR",
        "Alpha3Code": "ARG",
        "NumericCode": "032"
    },
    {
        "Name": "Armenia",
        "Alpha2Code": "AM",
        "Alpha3Code": "ARM",
        "NumericCode": "051"
    },
    {
        "Name": "Australia",
        "Alpha2Code": "AU",
        "Alpha3Code": "AUS",
        "NumericCode": "036"
    },
    {
        "Name": "Austria",
        "Alpha2Code": "AT",
        "Alpha3Code": "AUT",
        "NumericCode": "040"
    },
    {
        "Name": "Azerbaijan",
        "Alpha2Code": "AZ",
        "Alpha3Code": "AZE",
        "NumericCode": "031"
    },
    {
        "Name": "Bahamas",
        "Alpha2Code": "BS",
        "Alpha3Code": "BHS",
        "NumericCode": "044"
    },
    {
        "Name": "Bahrain",
        "Alpha2Code": "BH",
        "Alpha3Code": "BHR",
        "NumericCode": "048"
    },
    {
        "Name": "Bangladesh",
        "Alpha2Code": "BD",
        "Alpha3Code": "BGD",
        "NumericCode": "050"
    },
    {
        "Name": "Barbados",
        "Alpha2Code": "BB",
        "Alpha3Code": "BRB",
        "NumericCode": "052"
    },
    {
        "Name": "Belarus",
        "Alpha2Code": "BY",
        "Alpha3Code": "BLR",
        "NumericCode": "112"
    },
    {
        "Name": "Belgium",
        "Alpha2Code": "BE",
        "Alpha3Code": "BEL",
        "NumericCode": "056"
    },
    {
        "Name": "Belize",
        "Alpha2Code": "BZ",
        "Alpha3Code": "BLZ",
        "NumericCode": "084"
    },
    {
        "Name": "Benin",
        "Alpha2Code": "BJ",
        "Alpha3Code": "BEN",
        "NumericCode": "204"
    },
    {
        "Name": "Bhutan",
        "Alpha2Code": "BT",
        "Alpha3Code": "BTN",
        "NumericCode": "064"
    },
    {
        "Name": "Bolivia (Plurinational State of)",
        "Alpha2Code": "BO",
        "Alpha3Code": "BOL",
        "NumericCode": "068"
    },
    {
        "Name": "Bosnia and Herzegovina",
        "Alpha2Code": "BA",
        "Alpha3Code": "BIH",
        "NumericCode": "070"
    },
    {
        "Name": "Botswana",
        "Alpha2Code": "BW",
        "Alpha3Code": "BWA",
        "NumericCode": "072"
    },
    {
        "Name": "Brazil",
        "Alpha2Code": "BR",
        "Alpha3Code": "BRA",
        "NumericCode": "076"
    },
    {
        "Name": "Brunei Darussalam",
        "Alpha2Code": "BN",
        "Alpha3Code": "BRN",
        "NumericCode": "096"
    },
    {
        "Name": "Bulgaria",
        "Alpha2Code": "BG",
        "Alpha3Code": "BGR",
        "NumericCode": "100"
    },
    {
        "Name": "Burkina Faso",
        "Alpha2Code": "BF",
        "Alpha3Code": "BFA",
        "NumericCode": "854"
    },
    {
        "Name": "Burundi",
        "Alpha2Code": "BI",
        "Alpha3Code": "BDI",
        "NumericCode": "108"
    },
    {
        "Name": "Cabo Verde",
        "Alpha2Code": "CV",
        "Alpha3Code": "CPV",
        "NumericCode": "132"
    },
    {
        "Name": "Cambodia",
        "Alpha2Code": "KH",
        "Alpha3Code": "KHM",
        "NumericCode": "116"
    },
    {
        "Name": "Cameroon",
        "Alpha2Code": "CM",
        "Alpha3Code": "CMR",
        "NumericCode": "120"
    },
    {
        "Name": "Canada",
        "Alpha2Code": "CA",
        "Alpha3Code": "CAN",
        "NumericCode": "124"
    },
    {
        "Name": "Central African Republic",
        "Alpha2Code": "CF",
        "Alpha3Code": "CAF",
        "NumericCode": "140"
    },
    {
        "Name": "Chad",
        "Alpha2Code": "TD",
        "Alpha3Code": "TCD",
        "NumericCode": "148"
    },
    {
        "Name": "Chile",
        "Alpha2Code": "CL",
        "Alpha3Code": "CHL",
        "NumericCode": "152"
    },
    {
        "Name": "China",
        "Alpha2Code": "CN",
        "Alpha3Code": "CHN",
        "NumericCode": "156"
    },
    {
        "Name": "Colombia",
        "Alpha2Code": "CO",
        "Alpha3Code": "COL",
        "NumericCode": "170"
    },
    {
        "Name": "Comoros",
        "Alpha2Code": "KM",
        "Alpha3Code": "COM",
        "NumericCode": "174"
    },
    {
        "Name": "Congo",
        "Alpha2Code": "CG",
        "Alpha3Code": "COG",
        "NumericCode": "178"
    },
    {
        "Name": "Costa Rica",
        "Alpha2Code": "CR",
        "Alpha3Code": "CRI",
        "NumericCode": "188"
    },
    {
        "Name": "Côte d'Ivoire",
        "Alpha2Code": "CI",
        "Alpha3Code": "CIV",
        "NumericCode": "384"
    },
    {
        "Name": "Croatia",
        "Alpha2Code": "HR",
        "Alpha3Code": "HRV",
        "NumericCode": "191"
    },
    {
        "Name": "Cuba",
        "Alpha2Code": "CU",
        "Alpha3Code": "CUB",
        "NumericCode": "192"
    },
    {
        "Name": "Cyprus",
        "Alpha2Code": "CY",
        "Alpha3Code": "CYP",
        "NumericCode": "196"
    },
    {
        "Name": "Czech Republic",
        "Alpha2Code": "CZ",
        "Alpha3Code": "CZE",
        "NumericCode": "203"
    },
    {
        "Name": "Democratic People's Republic of Korea",
        "Alpha2Code": "KP",
        "Alpha3Code": "PRK",
        "NumericCode": "408"
    },
    {
        "Name": "Democratic Republic of the Congo",
        "Alpha2Code": "CD",
        "Alpha3Code": "COD",
        "NumericCode": "180"
    },
    {
        "Name": "Denmark",
        "Alpha2Code": "DK",
        "Alpha3Code": "DNK",
        "NumericCode": "208"
    },
    {
        "Name": "Djibouti",
        "Alpha2Code": "DJ",
        "Alpha3Code": "DJI",
        "NumericCode": "262"
    },
    {
        "Name": "Dominica",
        "Alpha2Code": "DM",
        "Alpha3Code": "DMA",
        "NumericCode": "212"
    },
    {
        "Name": "Dominican Republic",
        "Alpha2Code": "DO",
        "Alpha3Code": "DOM",
        "NumericCode": "214"
    },
    {
        "Name": "Ecuador",
        "Alpha2Code": "EC",
        "Alpha3Code": "ECU",
        "NumericCode": "218"
    },
    {
        "Name": "Egypt",
        "Alpha2Code": "EG",
        "Alpha3Code": "EGY",
        "NumericCode": "818"
    },
    {
        "Name": "El Salvador",
        "Alpha2Code": "SV",
        "Alpha3Code": "SLV",
        "NumericCode": "222"
    },
    {
        "Name": "Equatorial Guinea",
        "Alpha2Code": "GQ",
        "Alpha3Code": "GNQ",
        "NumericCode": "226"
    },
    {
        "Name": "Eritrea",
        "Alpha2Code": "ER",
        "Alpha3Code": "ERI",
        "NumericCode": "232"
    },
    {
        "Name": "Estonia",
        "Alpha2Code": "EE",
        "Alpha3Code": "EST",
        "NumericCode": "233"
    },
    {
        "Name": "Eswatini",
        "Alpha2Code": "SZ",
        "Alpha3Code": "SWZ",
        "NumericCode": "748"
    },
    {
        "Name": "Ethiopia",
        "Alpha2Code": "ET",
        "Alpha3Code": "ETH",
        "NumericCode": "231"
    },
    {
        "Name": "Fiji",
        "Alpha2Code": "FJ",
        "Alpha3Code": "FJI",
        "NumericCode": "242"
    },
    {
        "Name": "Finland",
        "Alpha2Code": "FI",
        "Alpha3Code": "FIN",
        "NumericCode": "246"
    },
    {
        "Name": "France",
        "Alpha2Code": "FR",
        "Alpha3Code": "FRA",
        "NumericCode": "250"
    },
    {
        "Name": "Gabon",
        "Alpha2Code": "GA",
        "Alpha3Code": "GAB",
        "NumericCode": "266"
    },
    {
        "Name": "Gambia",
        "Alpha2Code": "GM",
        "Alpha3Code": "GMB",
        "NumericCode": "270"
    },
    {
        "Name": "Georgia",
        "Alpha2Code": "GE",
        "Alpha3Code": "GEO",
        "NumericCode": "268"
    },
    {
        "Name": "Germany",
        "Alpha2Code": "DE",
        "Alpha3Code": "DEU",
        "NumericCode": "276"
    },
    {
        "Name": "Ghana",
        "Alpha2Code": "GH",
        "Alpha3Code": "GHA",
        "NumericCode": "288"
    },
    {
        "Name": "Greece",
        "Alpha2Code": "GR",
        "Alpha3Code": "GRC",
        "NumericCode": "300"
    },
    {
        "Name": "Grenada",
        "Alpha2Code": "GD",
        "Alpha3Code": "GRD",
        "NumericCode": "308"
    },
    {
        "Name": "Guatemala",
        "Alpha2Code": "GT",
        "Alpha3Code": "GTM",
        "NumericCode": "320"
    },
    {
        "Name": "Guinea",
        "Alpha2Code": "GN",
        "Alpha3Code": "GIN",
        "NumericCode": "324"
    },
    {
        "Name": "Guinea-Bissau",
        "Alpha2Code": "GW",
        "Alpha3Code": "GNB",
        "NumericCode": "624"
    },
    {
        "Name": "Guyana",
        "Alpha2Code": "GY",
        "Alpha3Code": "GUY",
        "NumericCode": "328"
    },
    {
        "Name": "Haiti",
        "Alpha2Code": "HT",
        "Alpha3Code": "HTI",
        "NumericCode": "332"
    },
    {
        "Name": "Honduras",
        "Alpha2Code": "HN",
        "Alpha3Code": "HND",
        "NumericCode": "340"
    },
    {
        "Name": "Hungary",
        "Alpha2Code": "HU",
        "Alpha3Code": "HUN",
        "NumericCode": "348"
    },
    {
        "Name": "Iceland",
        "Alpha2Code": "IS",
        "Alpha3Code": "ISL",
        "NumericCode": "352"
    },
    {
        "Name": "India",
        "Alpha2Code": "IN",
        "Alpha3Code": "IND",
        "NumericCode": "356"
    },
    {
        "Name": "Indonesia",
        "Alpha2Code": "ID",
        "Alpha3Code": "IDN",
        "NumericCode": "360"
    },
    {
        "Name": "Iran (Islamic Republic of)",
        "Alpha2Code": "IR",
        "Alpha3Code": "IRN",
        "NumericCode": "364"
    },
    {
        "Name": "Iraq",
        "Alpha2Code": "IQ",
        "Alpha3Code": "IRQ",
        "NumericCode": "368"
    },
    {
        "Name": "Ireland",
        "Alpha2Code": "IE",
        "Alpha3Code": "IRL",
        "NumericCode": "372"
    },
    {
        "Name": "Israel",
        "Alpha2Code": "IL",
        "Alpha3Code": "ISR",
        "NumericCode": "376"
    },
    {
        "Name": "Italy",
        "Alpha2Code": "IT",
        "Alpha3Code": "ITA",
        "NumericCode": "380"
    },
    {
        "Name": "Jamaica",
        "Alpha2Code": "JM",
        "Alpha3Code": "JAM",
        "NumericCode": "388"
    },
    {
        "Name": "Japan",
        "Alpha2Code": "JP",
        "Alpha3Code": "JPN",
        "NumericCode": "392"
    },
    {
        "Name": "Jordan",
        "Alpha2Code": "JO",
        "Alpha3Code": "JOR",
        "NumericCode": "400"
    },
    {
        "Name": "Kazakhstan",
        "Alpha2Code": "KZ",
        "Alpha3Code": "KAZ",
        "NumericCode": "398"
    },
    {
        "Name": "Kenya",
        "Alpha2Code": "KE",
        "Alpha3Code": "KEN",
        "NumericCode": "404"
    },
    {
        "Name": "Kiribati",
        "Alpha2Code": "KI",
        "Alpha3Code": "KIR",
        "NumericCode": "296"
    },
    {
        "Name": "Kuwait",
        "Alpha2Code": "KW",
        "Alpha3Code": "KWT",
        "NumericCode": "414"
    },
    {
        "Name": "Kyrgyzstan",
        "Alpha2Code": "KG",
        "Alpha3Code": "KGZ",
        "NumericCode": "417"
    },
    {
        "Name": "Lao People's Democratic Republic",
        "Alpha2Code": "LA",
        "Alpha3Code": "LAO",
        "NumericCode": "418"
    },
    {
        "Name": "Latvia",
        "Alpha2Code": "LV",
        "Alpha3Code": "LVA",
        "NumericCode": "428"
    },
    {
        "Name": "Lebanon",
        "Alpha2Code": "LB",
        "Alpha3Code": "LBN",
        "NumericCode": "422"
    },
    {
        "Name": "Lesotho",
        "Alpha2Code": "LS",
        "Alpha3Code": "LSO",
        "NumericCode": "426"
    },
    {
        "Name": "Liberia",
        "Alpha2Code": "LR",
        "Alpha3Code": "LBR",
        "NumericCode": "430"
    },
    {
        "Name": "Libya",
        "Alpha2Code": "LY",
        "Alpha3Code": "LBY",
        "NumericCode": "434"
    },
    {
        "Name": "Liechtenstein",
        "Alpha2Code": "LI",
        "Alpha3Code": "LIE",
        "NumericCode": "438"
    },
    {
        "Name": "Lithuania",
        "Alpha2Code": "LT",
        "Alpha3Code": "LTU",
        "NumericCode": "440"
    },
    {
        "Name": "Luxembourg",
        "Alpha2Code": "LU",
        "Alpha3Code": "LUX",
        "NumericCode": "442"
    },
    {
        "Name": "Madagascar",
        "Alpha2Code": "MG",
        "Alpha3Code": "MDG",
        "NumericCode": "450"
    },
    {
        "Name": "Malawi",
        "Alpha2Code": "MW",
        "Alpha3Code": "MWI",
        "NumericCode": "454"
    },
    {
        "Name": "Malaysia",
        "Alpha2Code": "MY",
        "Alpha3Code": "MYS",
        "NumericCode": "458"
    },
    {
        "Name": "Maldives",
        "Alpha2Code": "MV",
        "Alpha3Code": "MDV",
        "NumericCode": "462"
    },
    {
        "Name": "Mali",
        "Alpha2Code": "ML",
        "Alpha3Code": "MLI",
        "NumericCode": "466"
    },
    {
        "Name": "Malta",
        "Alpha2Code": "MT",
        "Alpha3Code": "MLT",
        "NumericCode": "470"
    },
    {
        "Name": "Marshall Islands",
        "Alpha2Code": "MH",
        "Alpha3Code": "MHL",
        "NumericCode": "584"
    },
    {
        "Name": "Mauritania",
        "Alpha2Code": "MR",
        "Alpha3Code": "MRT",
        "NumericCode": "478"
    },
    {
        "Name": "Mauritius",
        "Alpha2Code": "MU",
        "Alpha3Code": "MUS",
        "NumericCode": "480"
    },
    {
        "Name": "Mexico",
        "Alpha2Code": "MX",
        "Alpha3Code": "MEX",
        "NumericCode": "484"
    },
    {
        "Name": "Micronesia (Federated States of)",
        "Alpha2Code": "FM",
        "Alpha3Code": "FSM",
        "NumericCode": "583"
    },
    {
        "Name": "Monaco",
        "Alpha2Code": "MC",
        "Alpha3Code": "MCO",
        "NumericCode": "492"
    },
    {
        "Name": "Mongolia",
        "Alpha2Code": "MN",
        "Alpha3Code": "MNG",
        "NumericCode": "496"
    },
    {
        "Name": "Montenegro",
        "Alpha2Code": "ME",
        "Alpha3Code": "MNE",
        "NumericCode": "499"
    },
    {
        "Name": "Morocco",
        "Alpha2Code": "MA",
        "Alpha3Code": "MAR",
        "NumericCode": "504"
    },
    {
        "Name": "Mozambique",
        "Alpha2Code": "MZ",
        "Alpha3Code": "MOZ",
        "NumericCode": "508"
    },
    {
        "Name": "Myanmar",
        "Alpha2Code": "MM",
        "Alpha3Code": "MMR",
        "NumericCode": "104"
    },
    {
        "Name": "Namibia",
        "Alpha2Code": "NA",
        "Alpha3Code": "NAM",
        "NumericCode": "516"
    },
    {
        "Name": "Nauru",
        "Alpha2Code": "NR",
        "Alpha3Code": "NRU",
        "NumericCode": "520"
    },
    {
        "Name": "Nepal",
        "Alpha2Code": "NP",
        "Alpha3Code": "NPL",
        "NumericCode": "524"
    },
    {
        "Name": "Netherlands",
        "Alpha2Code": "NL",
        "Alpha3Code": "NLD",
        "NumericCode": "528"
    },
    {
        "Name": "New Zealand",
        "Alpha2Code": "NZ",
        "Alpha3Code": "NZL",
        "NumericCode": "554"
    },
    {
        "Name": "Nicaragua",
        "Alpha2Code": "NI",
        "Alpha3Code": "NIC",
        "NumericCode": "558"
    },
    {
        "Name": "Niger",
        "Alpha2Code": "NE",
        "Alpha3Code": "NER",
        "NumericCode": "562"
    },
    {
        "Name": "Nigeria",
        "Alpha2Code": "NG",
        "Alpha3Code": "NGA",
        "NumericCode": "566"
    },
    {
        "Name": "North Macedonia",
        "Alpha2Code": "MK",
        "Alpha3Code": "MKD",
        "NumericCode": "807"
    },
    {
        "Name": "Norway",
        "Alpha2Code": "NO",
        "Alpha3Code": "NOR",
        "NumericCode": "578"
    },
    {
        "Name": "Oman",
        "Alpha2Code": "OM",
        "Alpha3Code": "OMN",
        "NumericCode": "512"
    },
    {
        "Name": "Pakistan",
        "Alpha2Code": "PK",
        "Alpha3Code": "PAK",
        "NumericCode": "586"
    },
    {
        "Name": "Palau",
        "Alpha2Code": "PW",
        "Alpha3Code": "PLW",
        "NumericCode": "585"
    },
    {
        "Name": "Panama",
        "Alpha2Code": "PA",
        "Alpha3Code": "PAN",
        "NumericCode": "591"
    },
    {
        "Name": "Papua New Guinea",
        "Alpha2Code": "PG",
        "Alpha3Code": "PNG",
        "NumericCode": "598"
    },
    {
        "Name": "Paraguay",
        "Alpha2Code": "PY",
        "Alpha3Code": "PRY",
        "NumericCode": "600"
    },
    {
        "Name": "Peru",
        "Alpha2Code": "PE",
        "Alpha3Code": "PER",
        "NumericCode": "604"
    },
    {
        "Name": "Philippines",
        "Alpha2Code": "PH",
        "Alpha3Code": "PHL",
        "NumericCode": "608"
    },
    {
        "Name": "Poland",
        "Alpha2Code": "PL",
        "Alpha3Code": "POL",
        "NumericCode": "616"
    },
    {
        "Name": "Portugal",
        "Alpha2Code": "PT",
        "Alpha3Code": "PRT",
        "NumericCode": "620"
    },
    {
        "Name": "Qatar",
        "Alpha2Code": "QA",
        "Alpha3Code": "QAT",
        "NumericCode": "634"
    },
    {
        "Name": "Republic of Korea",
        "Alpha2Code": "KR",
        "Alpha3Code": "KOR",
        "NumericCode": "410"
    },
    {
        "Name": "Republic of Moldova",
        "Alpha2Code": "MD",
        "Alpha3Code": "MDA",
        "NumericCode": "498"
    },
    {
        "Name": "Romania",
        "Alpha2Code": "RO",
        "Alpha3Code": "ROU",
        "NumericCode": "642"
    },
    {
        "Name": "Russian Federation",
        "Alpha2Code": "RU",
        "Alpha3Code": "RUS",
        "NumericCode": "643"
    },
    {
        "Name": "Rwanda",
        "Alpha2Code": "RW",
        "Alpha3Code": "RWA",
        "NumericCode": "646"
    },
    {
        "Name": "Saint Kitts and Nevis",
        "Alpha2Code": "KN",
        "Alpha3Code": "KNA",
        "NumericCode": "659"
    },
    {
        "Name": "Saint Lucia",
        "Alpha2Code": "LC",
        "Alpha3Code": "LCA",
        "NumericCode": "662"
    },
    {
        "Name": "Saint Vincent and the Grenadines",
        "Alpha2Code": "VC",
        "Alpha3Code": "VCT",
        "NumericCode": "670"
    },
    {
        "Name": "Samoa",
        "Alpha2Code": "WS",
        "Alpha3Code": "WSM",
        "NumericCode": "882"
    },
    {
        "Name": "San Marino",
        "Alpha2Code": "SM",
        "Alpha3Code": "SMR",
        "NumericCode": "674"
    },
    {
        "Name": "Sao Tome and Principe",
        "Alpha2Code": "ST",
        "Alpha3Code": "STP",
        "NumericCode": "678"
    },
    {
        "Name": "Saudi Arabia",
        "Alpha2Code": "SA",
        "Alpha3Code": "SAU",
        "NumericCode": "682"
    },
    {
        "Name": "Senegal",
        "Alpha2Code": "SN",
        "Alpha3Code": "SEN",
        "NumericCode": "686"
    },
    {
        "Name": "Serbia",
        "Alpha2Code": "RS",
        "Alpha3Code": "SRB",
        "NumericCode": "688"
    },
    {
        "Name": "Seychelles",
        "Alpha2Code": "SC",
        "Alpha3Code": "SYC",
        "NumericCode": "690"
    },
    {
        "Name": "Sierra Leone",
        "Alpha2Code": "SL",
        "Alpha3Code": "SLE",
        "NumericCode": "694"
    },
    {
        "Name": "Singapore",
        "Alpha2Code": "SG",
        "Alpha3Code": "SGP",
        "NumericCode": "702"
    },
    {
        "Name": "Slovakia",
        "Alpha2Code": "SK",
        "Alpha3Code": "SVK",
        "NumericCode": "703"
    },
    {
        "Name": "Slovenia",
        "Alpha2Code": "SI",
        "Alpha3Code": "SVN",
        "NumericCode": "705"
    },
    {
        "Name": "Solomon Islands",
        "Alpha2Code": "SB",
        "Alpha3Code": "SLB",
        "NumericCode": "090"
    },
    {
        "Name": "Somalia",
        "Alpha2Code": "SO",
        "Alpha3Code": "SOM",
        "NumericCode": "706"
    },
    {
        "Name": "South Africa",
        "Alpha2Code": "ZA",
        "Alpha3Code": "ZAF",
        "NumericCode": "710"
    },
    {
        "Name": "South Sudan",
        "Alpha2Code": "SS",
        "Alpha3Code": "SSD",
        "NumericCode": "728"
    },
    {
        "Name": "Spain",
        "Alpha2Code": "ES",
        "Alpha3Code": "ESP",
        "NumericCode": "724"
    },
    {
        "Name": "Sri Lanka",
        "Alpha2Code": "LK",
        "Alpha3Code": "LKA",
        "NumericCode": "144"
    },
    {
        "Name": "Sudan",
        "Alpha2Code": "SD",
        "Alpha3Code": "SDN",
        "NumericCode": "729"
    },
    {
        "Name": "Suriname",
        "Alpha2Code": "SR",
        "Alpha3Code": "SUR",
        "NumericCode": "740"
    },
    {
        "Name": "Sweden",
        "Alpha2Code": "SE",
        "Alpha3Code": "SWE",
        "NumericCode": "752"
    },
    {
        "Name": "Switzerland",
        "Alpha2Code": "CH",
        "Alpha3Code": "CHE",
        "NumericCode": "756"
    },
    {
        "Name": "Syrian Arab Republic",
        "Alpha2Code": "SY",
        "Alpha3Code": "SYR",
        "NumericCode": "760"
    },
    {
        "Name": "Tajikistan",
        "Alpha2Code": "TJ",
        "Alpha3Code": "TJK",
        "NumericCode": "762"
    },
    {
        "Name": "Thailand",
        "Alpha2Code": "TH",
        "Alpha3Code": "THA",
        "NumericCode": "764"
    },
    {
        "Name": "Timor-Leste",
        "Alpha2Code": "TL",
        "Alpha3Code": "TLS",
        "NumericCode": "626"
    },
    {
        "Name": "Togo",
        "Alpha2Code": "TG",
        "Alpha3Code": "TGO",
        "NumericCode": "768"
    },
    {
        "Name": "Tonga",
        "Alpha2Code": "TO",
        "Alpha3Code": "TON",
        "NumericCode": "776"
    },
    {
        "Name": "Trinidad and Tobago",
        "Alpha2Code": "TT",
        "Alpha3Code": "TTO",
        "NumericCode": "780"
    },
    {
        "Name": "Tunisia",
        "Alpha2Code": "TN",
        "Alpha3Code": "TUN",
        "NumericCode": "788"
    },
    {
        "Name": "Turkey",
        "Alpha2Code": "TR",
        "Alpha3Code": "TUR",
        "NumericCode": "792"
    },
    {
        "Name": "Turkmenistan",
        "Alpha2Code": "TM",
        "Alpha3Code": "TKM",
        "NumericCode": "795"
    },
    {
        "Name": "Tuvalu",
        "Alpha2Code": "TV",
        "Alpha3Code": "TUV",
        "NumericCode": "798"
    },
    {
        "Name": "Uganda",
        "Alpha2Code": "UG",
        "Alpha3Code": "UGA",
        "NumericCode": "800"
    },
    {
        "Name": "Ukraine",
        "Alpha2Code": "UA",
        "Alpha3Code": "UKR",
        "NumericCode": "804"
    },
    {
        "Name": "United Arab Emirates",
        "Alpha2Code": "AE",
        "Alpha3Code": "ARE",
        "NumericCode": "784"
    },
    {
        "Name": "United Kingdom of Great Britain and Northern Ireland",
        "Alpha2Code": "GB",
        "Alpha3Code": "GBR",
        "NumericCode": "826"
    },
    {
        "Name": "United Republic of Tanzania",
        "Alpha2Code": "TZ",
        "Alpha3Code": "TZA",
        "NumericCode": "834"
    },
    {
        "Name": "United States of America",
        "Alpha2Code": "US",
        "Alpha3Code": "USA",
        "NumericCode": "840"
    },
    {
        "Name": "Uruguay",
        "Alpha2Code": "UY",
        "Alpha3Code": "URY",
        "NumericCode": "858"
    },
    {
        "Name": "Uzbekistan",
        "Alpha2Code": "UZ",
        "Alpha3Code": "UZB",
        "NumericCode": "860"
    },
    {
        "Name": "Vanuatu",
        "Alpha2Code": "VU",
        "Alpha3Code": "VUT",
        "NumericCode": "548"
    },
    {
        "Name": "Venezuela (Bolivarian Republic of)",
        "Alpha2Code": "VE",
        "Alpha3Code": "VEN",
        "NumericCode": "862"
    },
    {
        "Name": "Viet Nam",
        "Alpha2Code": "VN",
        "Alpha3Code": "VNM",
        "NumericCode": "704"
    },
    {
        "Name": "Yemen",
        "Alpha2Code": "YE",
        "Alpha3Code": "YEM",
        "NumericCode": "887"
    },
    {
        "Name": "Zambia",
        "Alpha2Code": "ZM",
        "Alpha3Code": "ZMB",
        "NumericCode": "894"
    },
    {
        "Name": "Zimbabwe",
        "Alpha2Code": "ZW",
        "Alpha3Code": "ZWE",
        "NumericCode": "716"
    }
]


export default countryData;