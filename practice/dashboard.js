// const ctx = document.getElementById("myChart").getContext("2d");
// const myChart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["22", "23", "24", "25", "26", "27", "28"], // X-axis labels (dates)
//     datasets: [
//       {
//         label: "Product views",
//         data: [25, 20, 27, 22, 27, 18, 23], // Y-axis data (views)
//         backgroundColor: [
//           "#A5D6A7", // green
//           "#FFAB91", // orange
//           "#A5D6A7",
//           "#FFAB91",
//           "#A5D6A7",
//           "#FFAB91",
//           "#A5D6A7",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 30, // Maximum value for y-axis
//       },
//     },
//   },
// });

// const ctx = document.getElementById("myChart").getContext("2d");
// const myChart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["22", "23", "24", "25", "26", "27", "28"], // X-axis labels (dates)
//     datasets: [
//       {
//         data: [25, 20, 27, 22, 27, 18, 23], // Y-axis data (views)
//         backgroundColor: [
//           "#A5D6A7", // green
//           "#FFAB91", // orange
//           "#A5D6A7",
//           "#FFAB91",
//           "#A5D6A7",
//           "#FFAB91",
//           "#A5D6A7",
//         ],
//         hoverBackgroundColor: "blue", // Hover color for bars
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     plugins: {
//       legend: {
//         display: false, // Hide the label for the dataset
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false, // Hide grid lines on x-axis
//         },
//         barPercentage: 0.5, // Reduce bar width
//         categoryPercentage: 0.7, // Increase spacing between bars
//       },
//       y: {
//         beginAtZero: true,
//         max: 30, // Maximum value for y-axis
//         grid: {
//           color: "rgba(0, 0, 0, 0.1)", // Grid line color
//           borderDash: [5, 5], // Make grid lines dotted
//         },
//       },
//     },
//   },
// });

const ctx = document.getElementById("myChart")
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["22", "23", "24", "25", "26", "27", "28"], // X-axis labels (dates)
    datasets: [
      {
        data: [25, 20, 27, 22, 27, 18, 23], // Y-axis data (views)
        backgroundColor: [
          "#A5D6A7",
          "#FFAB91",
          "#A5D6A7",
          "#FFAB91",
          "#A5D6A7",
          "#FFAB91",
          "#A5D6A7",
        ],
        hoverBackgroundColor: "#2c76d5", // Set hover color to red
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false, // Hide the dataset label
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
        barPercentage: 0.5, // Adjust bar width
        categoryPercentage: 0.6, // Add more spacing between bars
      },
      y: {
        beginAtZero: true,
        max: 30, // Set y-axis max value
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Set light gray for grid lines
          borderDash: [3, 3], // Make y-axis grid lines dotted
        },
      },
    },
    // onHover: (event, chartElement) => {
    //   event.native.target.style.cursor = chartElement[0]
    //     ? "pointer"
    //     : "default";
    // },
  },
});
