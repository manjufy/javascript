const companies = [ {}
    ];

// const companiesMeta =  companies.map(company => ({ id: company.id, name: company.name, merimen_name: company.merimen_name }) )
// // console.log(companiesMeta)

// const dd =  companiesMeta.filter(company => "Tune Protect HQ".includes(company.merimen_name));
// // const dd =  companiesMeta.filter(company => company.merimen_name == "Tune Protect KL");
// console.log(dd);

// console.log(['TMB', 'TMB1', 'TMB2' ,"TM"].filter(name => "TMB2".includes(name)));

const consignors = {
};

const ddd = Object.keys(consignors).filter(consignor => consignor.includes("Allianz"));
console.log(ddd);
console.log('DDDD', consignors[ddd[0]]);