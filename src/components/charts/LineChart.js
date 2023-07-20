import React from "react";
import ReactApexChart from "react-apexcharts";
// import updatedChartData from "C:\Users\sylee\Documents\GitHub\ndjs_test\src\views\admin\default\components\TotalTraffic.js"


class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount = (event) => {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }
  // componentDidUpdate(prevProps) {
  //   if (this.props.chartData !== prevProps.chartData) {
  //     this.setState({
  //       chartData: this.props.chartData,
  //       chartOptions: this.props.chartOptions,
  //     });
  //     console.log("componentDidUpdate의 render가 실행됐다.");
  //     console.log("componentDidUpdate의 render 후의 chartData: ",this.props.chartData )
  //   }
  // }
  // componentDidUpdate(prevProps) {
  //   if (this.props.chartData !== prevProps.chartData){
  //     this.setState({
  //       chartData: this.props.updatedChartData,
  //       chartOptions: this.props.chartOptions,
  //     });
  //     console.log("componentDidUpdate의 render가 실행됐다.")
  //   }
  // }

  render() {
    
    console.log("render : LineChart 지금 실행된다. 그리고 이때의 chartData는 ",this.state.chartData)
    return (
      <div><ReactApexChart
      options={this.state.chartOptions}
      series={this.state.chartData}
      type='line'
      width='100%'
      height='100%'
    />
    </div>
        
      
      
    );
  }
}

export default LineChart;

