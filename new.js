const url = "https://raw.githubusercontent.com/johnsonjulien/project_3/main/emissions.json";

fetch(url)

  .then(response => response.json())
  .then(data => {
    // console.log(data);
    const totalEmissionsByCountry = {};
    for (const entry of data) {
      const country = entry.Country;
      const year = entry.Year;
      const total = parseFloat(entry.Total);
      if (!totalEmissionsByCountry[country]) {
        totalEmissionsByCountry[country] = 0;
      }
      totalEmissionsByCountry[country] += total;
    }
    const sorted = Object.entries(totalEmissionsByCountry).slice(-5);
    console.log(sorted);
  })



  