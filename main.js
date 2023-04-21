const knowledgeBase = [
  // WEATHER...
  {
    rainy: "Rainy:",
    rainyResult: "Event-Centers, Town-Halls",
    sunny: "Sunny:",
    sunnyResult: "Garden, Event-center(If it's too sunny)"
  },

  //   FOOD-TYPE
  {
    african: "African:",
    africaFood:
      "Fufu/Pounded Yam/Garri and Egusi Soup, Jollof Rice, Amala and Ewedu, Tuwoshinkafa, Fried Rice, Red-Wine(Drink), Palm-Wine(Drink), Malt(Drink) ",
    foreign: "Foreign:",
    foreignFood:
      "Pasta and Sauce, Lasagna and Soda, Chimichanga, Chinese Chicken salad, Fajitas, Fortune cookies, Irish Potatoe Candy"
  },

  //   LOCATION...
  {
    africa: "Africa:",
    africanCountries:
      "South-Africa, Nigeria, Ghana, Uganda, Cameroun, Namibia, Kenya",
    europe: "Europe:",
    europeCountries:
      "England, Germany, France, Finland, Netherland, Spain, Belgium, Italy",
    asian: "Asia:",
    asianCountries:
      "China, India, South-korea, Indonesia, Russia, Kuwait, United Arab Emirates(UAE)",
    northAmerica: "North-America:",
    northAmericanCountries: "Canada, USA, Greenland, Mexico"
  },
  //   WEDDING-TYPE...
  {
    white: "White-Wedding:",
    whiteWedPlaces: "Church, Royal Palace, Blackberry Farms, Hayfields",
    court: "Court-Wedding:",
    courtWedPlaces: "Court Registry"
  },
];

// let userInput = document.getElementsByClassName("test");

// Variables...
let outputBox = document.getElementById("outputContainer");

// BUTTONS....
let resultOutput = document.getElementById("resultBtn");
let clearOutput = document.getElementById("clearBtn");

// Text-box Variables...
let weatherBox = document.getElementById("weatherInput");
let foodTypeBox = document.getElementById("foodInput");
let locationBox = document.getElementById("locationInput");
let wedTypeBox = document.getElementById("wedTypeInput");

// Label Variables...
let weatherLab = document.getElementById("weatherLabel");
let foodTypeLab = document.getElementById("foodTypeLabel");
let locationLab = document.getElementById("locationLabel");
let wedTypeLab = document.getElementById("wedTypeLabel");

// Text outputs...
let weatherOutput = document.getElementById("weatherText");
let foodTypeOutput = document.getElementById("foodTypeText");
let locationOutput = document.getElementById("locationText");
let wedTypeOutput = document.getElementById("wedTypeText");

// Clear Button....
clearOutput.addEventListener("click", () => {
  //   outputBox.classList.add("hidden");
  //   outputBox.classList.remove("visible");

  weatherBox.value = "";
  foodTypeBox.value = "";
  locationBox.value = "";
  wedTypeBox.value = "";

  weatherLab.innerText = "Weather:";
  foodTypeLab.innerText = "Food-Type:";
  locationLab.innerText = "Location:";
  wedTypeLab.innerText = "Wed-Type:";

  weatherOutput.innerText = " ";
  foodTypeOutput.innerText = "";
  locationOutput.innerText = "";
  wedTypeOutput.innerText = "";
});

// Result Button....
resultOutput.addEventListener("click", () => {
  if (
    weatherBox.value == "" &&
    foodTypeBox.value == "" &&
    locationBox.value == "" &&
    wedTypeBox.value == ""
  ) {
    alert("Please fill the required details...");
  } else {
    // let rainyProps = knowledgeBase.map(({ rainyProp, ...rest }) => ({
    //   ...rest,
    //   rainy: rainy.replace(/,/g, ""),
    // }));
    // outputBox.classList.add("visible");
    // outputBox.classList.remove("hidden");

    //  WEATHER.....
    let rainyProps = knowledgeBase.map((rainyProp) => rainyProp.rainy);
    

    let rainyPropsValue = knowledgeBase.map(
      (rainyPropValue) => rainyPropValue.rainyResult
    );
    let sunnyProps = knowledgeBase.map((sunnyProp) => sunnyProp.sunny);
    let sunnyPropsValue = knowledgeBase.map(
      (sunnyPropValue) => sunnyPropValue.sunnyResult
    );
    if (weatherBox.value == "Rainy" || weatherBox.value == "rainy") {
      weatherLab.innerText = rainyProps;
      weatherOutput.innerText = rainyPropsValue;
    } else if (weatherBox.value == "Sunny" || weatherBox.value == "sunny") {
      weatherLab.innerText = sunnyProps;
      weatherOutput.innerText = sunnyPropsValue;
    } else {
      alert("Invalid Weather Input!");
    }
    // WEATHER ENDS....

    // FOOD-TYPE STARTS...
    let africanFoodProps = knowledgeBase.map(
      (africanFoodProp) => africanFoodProp.african
    );
    let africanFoodPropsValue = knowledgeBase.map(
      (africanFoodPropValue) => africanFoodPropValue.africaFood
    );
    let foreignFoodProps = knowledgeBase.map(
      (foreignFoodProp) => foreignFoodProp.foreign
    );
    let foreignFoodPropsValue = knowledgeBase.map(
      (foreignFoodPropValue) => foreignFoodPropValue.foreignFood
    );

    if (foodTypeBox.value == "African" || foodTypeBox.value == "african") {
      foodTypeLab.innerText = africanFoodProps;
      foodTypeOutput.innerText = africanFoodPropsValue;
    } else if (
      (weatherBox.value = "Foreign" || weatherBox.value == "foreign")
    ) {
      foodTypeLab.innerText = foreignFoodProps;
      foodTypeOutput.innerText = foreignFoodPropsValue;
    } else {
      alert("Invalid Food-Type Input!");
    }
    // FOOD-TYPE ENDS...

    // LOCATION STARTS....

    // AFRICAN LOCATIONS...
    let africanLocationProps = knowledgeBase.map(
      (africanLocationProp) => africanLocationProp.africa
    );
    let africanLocationPropsValue = knowledgeBase.map(
      (africanLocationPropValue) => africanLocationPropValue.africanCountries
    );

    // EUROPEAN LOCATIONS...
    let europeLocationProps = knowledgeBase.map(
      (europeLocationProp) => europeLocationProp.europe
    );
    let europeLocationPropsValue = knowledgeBase.map(
      (europeLocationPropValue) => europeLocationPropValue.europeCountries
    );

    // ASIAN LOCATIONS...
    let asianLocationProps = knowledgeBase.map(
      (asianLocationProp) => asianLocationProp.asian
    );
    let asianLocationPropsValue = knowledgeBase.map(
      (asianLocationPropValue) => asianLocationPropValue.asianCountries
    );

    // NORTH-AMERICA LOCATIONS...
    let northAmericaLocationProps = knowledgeBase.map(
      (northAmericaLocationProp) => northAmericaLocationProp.northAmerica
    );
    let northAmericaLocationPropsValue = knowledgeBase.map(
      (northAmericaLocationPropValue) =>
        northAmericaLocationPropValue.northAmericanCountries
    );

    if (locationBox.value == "africa" || locationBox.value == "Africa") {
      locationLab.innerText = africanLocationProps;
      locationOutput.innerText = africanLocationPropsValue;
    } else if (locationBox.value == "europe" || locationBox.value == "Europe") {
      locationLab.innerText = europeLocationProps;
      locationOutput.innerText = europeLocationPropsValue;
    } else if (locationBox.value == "asia" || locationBox.value == "Asia") {
      locationLab.innerText = asianLocationProps;
      locationOutput.innerText = asianLocationPropsValue;
    } else if (
      locationBox.value == "north-america" ||
      locationBox.value == "North-America"
    ) {
      locationLab.innerText = northAmericaLocationProps;
      locationOutput.innerText = northAmericaLocationPropsValue;
    } else {
      alert("Invalid Location Input!");
    }

    // LOCATION ENDS....

    // WED-TYPE STARTS...
    let whiteWedTypeProps = knowledgeBase.map(
      (whiteWedTypeProp) => whiteWedTypeProp.white
    );
    let whiteWedTypePropsValue = knowledgeBase.map(
      (whiteWedTypePropValue) => whiteWedTypePropValue.whiteWedPlaces
    );
    let courtWedTypeProps = knowledgeBase.map(
      (courtWedTypeProp) => courtWedTypeProp.court
    );
    let courtWedTypePropsValue = knowledgeBase.map(
      (courtWedTypePropValue) => courtWedTypePropValue.courtWedPlaces
    );

    if (wedTypeBox.value == "white" || wedTypeBox.value == "White") {
      wedTypeLab.innerText = whiteWedTypeProps;
      wedTypeOutput.innerText = whiteWedTypePropsValue;
    } else if (wedTypeBox.value == "court" || wedTypeBox.value == "Court") {
      wedTypeLab.innerText = courtWedTypeProps;
      wedTypeOutput.innerText = courtWedTypePropsValue;
    } else {
      alert("Invalid Wed-Type Input!");
    }
    // WED-TYPE ENDS...
  }
});
