let viz;

const vizUrls = {
 
  SampleSuperStore: "https://public.tableau.com/views/dashboardd_17509251665780/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  BarChart: "https://public.tableau.com/views/PenjualanTerendahdanTertinggi/Dashboard4?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  LineChart: "https://public.tableau.com/views/TotalPenjualanPertahun/Dashboard3?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  PieChart: "https://public.tableau.com/views/DonatChart_17460218932840/Dashboard5?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  MapChart: "https://public.tableau.com/views/MAPGEOSPASIAL/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  ScatterPlot: "https://public.tableau.com/views/SCATTERPLOT_17417879254070/Dashboard2?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  BubbleChart: "https://public.tableau.com/views/BUBBLECHART_17417882765170/Dashboard4?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  TreeMap: "https://public.tableau.com/views/TREEMAPS_17417882317090/Dashboard3?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  GanttChart: "https://public.tableau.com/views/GanttChart_17417905819630/Dashboard6?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  LollipopChart: "https://public.tableau.com/views/lolipopchart_17417902410000/Dashboard5?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  WordCloud: "https://public.tableau.com/views/world_17509260386670/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  BoxPilot: "https://public.tableau.com/views/forbox/Dashboard5?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  Histogram: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Histogram_Chart/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
};

function loadViz(chartType) {
  const containerDiv = document.getElementById("vizContainer");
  const chartTitle = document.getElementById("chartTitle");

  chartTitle.innerText = chartType.replace(/([A-Z])/g, " $1").trim();

  // Hapus visualisasi sebelumnya
  if (viz) {
    viz.dispose();
  }

  const url = vizUrls[chartType];
  if (!url) {
    containerDiv.innerHTML = `<p>Chart "${chartType}" belum memiliki URL Tableau.</p>`;
    return;
  }

  const options = {
    hideTabs: true,
    width: "100%",
    height: "800px"
  };

  viz = new tableau.Viz(containerDiv, url, options);
}
