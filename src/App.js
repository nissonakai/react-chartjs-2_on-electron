import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
import './App.css';

const useStyles = makeStyles({
  chartbox: {
    width: "80%"
  }
});

export const App = () => {
  const classes = useStyles();
  const data = {
    labels: ['April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [
      {
        label: "開封率",
        data: [67, 100, 52, 41, 66, 43],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
      }
    ]
  };
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  return (
    <div className={classes.chartbox}>
      <Bar
        data={data}
        options={options}
        width={100}
        height={50}
      />
    </div>
  );
};

