fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    sortDataByPopulation(data);
    var top30Pays = data.slice(0, 30);
    var Nompays = top30Pays.map((country) => country.country);
    var Popupays = top30Pays.map((country) => country.population);
    var tracer = {
        x: Nompays,
        y: Popupays,
        type: 'bar',
        marker: {color: 'Pink'},
        title:"Top 30 population"
    };
    Plotly.newPlot('data-viz', [tracer]);
}

function sortDataByPopulation(data) {
    data.sort((a, b) => b.population - a.population);
}