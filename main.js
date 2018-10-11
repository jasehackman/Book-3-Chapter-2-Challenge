const eliz = {
  name: "Elizabeth Sanger",
  district: 205,
  platforms: {
    taxes: "lower taxes",
    jobs: "create more jobs",
    infrastructure: "more infrastructure",
    heathCare: "better health care",
    crime: "less crime"
  }
  ,
  donationForm: "givemeallyourmoney.gov",
  cal: [{
    eventName: "Kiss all the babies",
    startTime: "10:00am",
    endTime: "3:00pm",
    location: "near the babies"
  }],
  bio: "she is a really nice lady",
  photo: [{
      headShot: "url",
      family: "url",
      constituents: "url"
  }],
  mission: "rule the world",
  vote: "url"
}

const vol = {
  name: "Fred",
  address: [{
    street: "111 South Bend St.",
    city: "Nashville",
    state: "TN",
    zip: "37201"
  }],
  email: "email",
  phone: "334-234-2343",
  availability: [{
    mon: "10:00am - 10:00pm",
    tue: "10:00am - 10:00pm",
    wed: "10:00am - 10:00pm",
    thur: "10:00am - 10:00pm",
    fri: "10:00am - 10:00pm",
    sat: "10:00am - 10:00pm",
    sun: "10:00am - 10:00pm"
  }]
}

function taxes(newStatment) {
  eliz.platforms.taxes = newStatment;
}

taxes ("more taxes");

console.log(eliz.platforms.taxes);

function newvol(name, street, city, state, zip) {
  vol.name = name;
  vol.address.street = street;
  vol.address.city = city;
  vol.address.state = state;
  vol.address.zip = zip;
}

newvol("steve", "west south st.", "Nashville","tn",34323);

console.table(vol);


function addplat (key, descrip) {
  eliz.platforms[key] = descrip;

}

addplat("war", "war is great!");

console.table(eliz.platforms);
console.log(eliz.platforms);