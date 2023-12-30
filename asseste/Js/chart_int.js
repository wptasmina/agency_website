//Bar Chart
const ctx = document.getElementById("barChart");

const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "USA",
      "Japan",
      "UK",
      "India",
      "Netherlands",
      "South korea",
      "Brazil",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [2000, 1800, 1100, 900, 650, 440, 400],
        borderWidth: 1,
      },
      {
        label: "# of Votes",
        data: [1900, 1300, 1100, 700, 550, 440],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
