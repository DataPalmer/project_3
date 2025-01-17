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
    const entries = Object.entries(totalEmissionsByCountry);
    const sorted = entries.sort((a, b) => a[1] - b[1]).slice(-5);
    // const sorted = Object.entries(totalEmissionsByCountry).slice(-5);
    // const sorted = Object.fromEntries( Object.entries(totalEmissionsByCountry).slice(-5)
    console.log(sorted);
  })



  