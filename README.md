# stada
* Stada - Standard Data
* Standard data server for ISO country data
* Query country data in GraphQL mode


## Installation
1. Clone the repository
2. Optional: Create a .env file in the root folder and specify a port ```PORT = 3000```
3. Install using npm 
```
npm i
```

## Usage
Run in debug mode 
```
npm run dev
```

Transpile
```
npm run build
```

Query using Postman or Insomnia
```
query {
  countries {
    Name
    Alpha2Code
    Alpha3Code
    NumericCode
  }
}
```

The above query returns data in the following manner: 
```
{
  "data": {
    "countries": [
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
      ......
    ]
  }
}
```
