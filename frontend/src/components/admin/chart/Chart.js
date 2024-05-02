import "./chart.scss";
import React, { Component } from "react";
import Chart from 'react-apexcharts';


class CmdChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      options: {
        xaxis: {
          categories: ["avril", "Juin"]
                
        },
        stroke: {
          width: 1
          },

      fill: {
        type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 1,
            colorStops: [
              {
                offset: 0,
                color: "#61dbdb",
                opacity: 0.9
              },
              {
                offset: 20,
                color: "#32E5A4",
                opacity:  0.6
              },
              {
                offset: 60,
                color: "#61dbdb",
                opacity:  0.4
              },
              {
                offset: 100,
                color: "#61dbdb",
                opacity:  0.2
              }
            ]
          }
      },

        dataLabels: {
          enabled: false
        },  
      },

      series: [
        {
          name: "Commandes",
          data: [5,4] /*count nbr commandes/mois*/
        }
      ],
     
    };
  }

  render() {
    return (
      <div className="chart"           style={{maxWidth:'100%',minWidth:'100%'}}
>
      <h1 className="title">monthly reservations</h1>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height="300"/>
      </div> 
    );
  }
}

export default CmdChart;    
