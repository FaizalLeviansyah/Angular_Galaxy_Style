import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.scss']
})

/**
 * E-chart component
 */
export class EchartComponent implements OnInit {

  constructor() { }

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  LineChart:any;
  StackedLineChart:any;
  AreaChart:any;
  StackedAreaChart:any;
  StepLineChart:any;
  LineYChart:any;
  BasicBarChart:any;
  HorizontalBarChart:any;
  StackedHorizontalBarChart:any;
  PieChart:any;
  DoughnutChart:any;
  CandleStickChart:any;
  GraphChart:any;
  TreemapChart:any;
  sunburstChart:any;
  ParallelChart:any;
  SankeyChart:any;
  FunnelChart:any;
  GaugeChart:any;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'E - Chart', active: true }];

    // Chart Color Data Get Function
    this._lineAreaChart('["--vz-success"]');
    this._StackedLineChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]');
    this._AreaChart('["--vz-success"]');
    this._StackedAreaChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]');
    this._StepLineChart('["--vz-primary", "--vz-success", "--vz-warning"]');
    this._LineYChart('["--vz-success"]');
    this._BasicBarChart('["--vz-success"]');
    this._HorizontalBarChart('["--vz-primary", "--vz-success"]');
    this._StackedHorizontalBarChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]');
    this._PieChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]');
    this._DoughnutChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]');
    this._CandleStickChart('["--vz-danger", "--vz-success"]');
    this._GraphChart('["--vz-primary"]');
    this._TreemapChart('["--vz-primary", "--vz-success"]');
    this._sunburstChart('["--vz-warning", "--vz-success"]');
    this._ParallelChart('["--vz-success"]');
    this._SankeyChart('["--vz-info", "--vz-success", "--vz-warning", "--vz-danger", "--vz-primary"]');
    this._FunnelChart('["--vz-info", "--vz-success", "--vz-warning", "--vz-danger", "--vz-primary"]');
    this._GaugeChart('["--vz-primary", "--vz-warning"]');
  }

    // Chart Colors Set
    private getChartColorsArray(colors:any) {
    colors = JSON.parse(colors);
    return colors.map(function (value:any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
            if (color) {
            color = color.replace(" ", "");
            return color;
            }
            else return newValue;;
        } else {
            var val = value.split(',');
            if (val.length == 2) {
                var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                return rgbaColor;
            } else {
                return newValue;
            }
        }
    });
    }

    // LineChart
    private _lineAreaChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.LineChart = {
            grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '4%',
            containLabel: true
            },
            xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: '#858d98'
                },
            },
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(133, 141, 152, 0.1)"
                    }
                }
            },
            series: [{
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }],
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
            color: colors
        };
    }

    // StackedLineChart
    private _StackedLineChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.StackedLineChart = {
        tooltip: {
        trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
            textStyle: { //The style of the legend text
                color: '#858d98',
            },
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        textStyle: {
            fontFamily: 'Poppins, sans-serif'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: '#858d98'
                },
            },
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#858d98'
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(133, 141, 152, 0.1)"
                }
            }
        },
        series: [{
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
        ],
        color: colors
        };
    }

    // StackedLineChart
    private _AreaChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.AreaChart = {
            grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '4%',
            containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(133, 141, 152, 0.1)"
                    }
                }
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }],
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
            color: colors,
            backgroundColor: "#f3f6f9",
        };
    }

    // StackedAreaChart
    private _StackedAreaChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.StackedAreaChart = {
            tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
            },
            legend: {
                data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
                textStyle: { //The style of the legend text
                    color: '#858d98',
                },
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
            }],
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(133, 141, 152, 0.1)"
                    }
                }
            },
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
            color: colors,
            series: [{
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
            ]
        };
    }

    // StepLineChart
    private _StepLineChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.StepLineChart = {
            tooltip: {
            trigger: 'axis'
            },
            legend: {
                data: ['Step Start', 'Step Middle', 'Step End'],
                textStyle: { //The style of the legend text
                    color: '#858d98',
                },
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(133, 141, 152, 0.1)"
                    }
                }
            },
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
            color: colors,
            series: [{
                name: 'Step Start',
                type: 'line',
                step: 'start',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Step Middle',
                type: 'line',
                step: 'middle',
                data: [220, 282, 201, 234, 290, 430, 410]
            },
            {
                name: 'Step End',
                type: 'line',
                step: 'end',
                data: [450, 432, 401, 454, 590, 530, 510]
            }
            ]
        };
    }

    // LineYChart
    private _LineYChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.LineYChart = {
            legend: {
            data: ['Altitude (km) vs. temperature (°C)'],
            textStyle: { //The style of the legend text
                color: '#858d98',
            },
            },
            tooltip: {
                trigger: 'axis',
                formatter: 'Temperature : <br/>{b}km : {c}°C'
            },
            grid: {
                left: '1%',
                right: '0%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                },
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(133, 141, 152, 0.1)"
                    }
                }
            },
            yAxis: {
                type: 'category',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#858d98'
                    },
                },
                axisLabel: {
                    formatter: '{value} km'
                },
                boundaryGap: false,
                data: ['0', '10', '20', '30', '40', '50', '60', '70', '80'],
                splitLine: {
                    lineStyle: {
                        color: "rgba(133, 141, 152, 0.1)"
                    }
                }
            },
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
            color: colors,
            series: [{
                name: 'Altitude (km) vs. temperature (°C)',
                type: 'line',
                symbolSize: 10,
                symbol: 'circle',
                smooth: true,
                lineStyle: {
                    width: 3,
                    shadowColor: 'rgba(0,0,0,0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 8
                },
                data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
            }]
        };
    }

    // BasicBarChart
    private _BasicBarChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.BasicBarChart = {
            grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '3%',
            containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(133, 141, 152, 0.1)"
                    }
                }
            },
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
            color: colors,
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
        };
    }

    // HorizontalBarChart
    private _HorizontalBarChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.HorizontalBarChart = {
            tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
            },
            legend: {
                textStyle: { //The style of the legend text
                    color: '#858d98',
                },
            },
            grid: {
                left: '0%',
                right: '4%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(133, 141, 152, 0.1)"
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(133, 141, 152, 0.1)"
                    }
                }
            },
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
            color: colors,
            series: [{
                    name: '2011',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '2012',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };
    }

    // StackedHorizontalBarChart
    private _StackedHorizontalBarChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.StackedHorizontalBarChart = {
            tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {
            textStyle: { //The style of the legend text
                color: '#858d98',
            },
        },
        grid: {
            left: '1%',
            right: '3%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#858d98'
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(133, 141, 152, 0.1)"
                }
            }
        },
        color: colors,
        yAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: '#858d98'
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(133, 141, 152, 0.1)"
                }
            }
        },
        textStyle: {
            fontFamily: 'Poppins, sans-serif'
        },
        series: [{
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: 'Mail Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: 'Search Engine',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
            ]
        };
    }

     // PieChart
     private _PieChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.PieChart = {
            tooltip: {
            trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                textStyle: { //The style of the legend text
                    color: '#858d98',
                },
            },
            color: colors,
            series: [{
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [{
                        value: 1048,
                        name: 'Search Engine'
                    },
                    {
                        value: 735,
                        name: 'Direct'
                    },
                    {
                        value: 580,
                        name: 'Email'
                    },
                    {
                        value: 484,
                        name: 'Union Ads'
                    },
                    {
                        value: 300,
                        name: 'Video Ads'
                    }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }],
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
        };
    }

     // DoughnutChart
     private _DoughnutChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.DoughnutChart = {
            tooltip: {
            trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center',
                textStyle: { //The style of the legend text
                    color: '#858d98',
                },
            },
            color: colors,
            series: [{
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [{
                        value: 1048,
                        name: 'Search Engine'
                    },
                    {
                        value: 735,
                        name: 'Direct'
                    },
                    {
                        value: 580,
                        name: 'Email'
                    },
                    {
                        value: 484,
                        name: 'Union Ads'
                    },
                    {
                        value: 300,
                        name: 'Video Ads'
                    }
                ]
            }],
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
        };
    }

    // CandleStickChart
    private _CandleStickChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.CandleStickChart = {
            grid: {
            left: '1%',
            right: '0%',
            bottom: '0%',
            top: '2%',
            containLabel: true
            },
            xAxis: {
                data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(133, 141, 152, 0.1)"
                    }
                }
            },
            yAxis: {
                axisLine: {
                    lineStyle: {
                        color: '#858d98'
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(133, 141, 152, 0.1)"
                    }
                }
            },
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
            series: [{
                type: 'candlestick',
                data: [
                    [20, 34, 10, 38],
                    [40, 35, 30, 50],
                    [31, 38, 33, 44],
                    [38, 15, 5, 42]
                ],
                itemStyle: {

                }
            }]
        };
    }

    // GraphChart
    private _GraphChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.GraphChart = {
            tooltip: {},
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                color: colors,
                series: [{
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: {
                        show: true
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        fontSize: 20
                    },
                    data: [{
                            name: 'Node 1',
                            x: 300,
                            y: 300
                        },
                        {
                            name: 'Node 2',
                            x: 800,
                            y: 300
                        },
                        {
                            name: 'Node 3',
                            x: 550,
                            y: 100
                        },
                        {
                            name: 'Node 4',
                            x: 550,
                            y: 500
                        }
                    ],
                    // links: [],
                    links: [{
                            source: 0,
                            target: 1,
                            symbolSize: [5, 20],
                            label: {
                                show: true
                            },
                            lineStyle: {
                                width: 5,
                                curveness: 0.2
                            }
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 1',
                            label: {
                                show: true
                            },
                            lineStyle: {
                                curveness: 0.2
                            }
                        },
                        {
                            source: 'Node 1',
                            target: 'Node 3'
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 3'
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 4'
                        },
                        {
                            source: 'Node 1',
                            target: 'Node 4'
                        }
                    ],
                    lineStyle: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0
                    }
                }],
                textStyle: {
                    fontFamily: 'Poppins, sans-serif'
                },
        };
    }

    // TreemapChart
    private _TreemapChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.TreemapChart = {
            color: colors,
            series: [{
                type: 'treemap',
                data: [{
                        name: 'nodeA',
                        value: 10,
                        children: [{
                                name: 'nodeAa',
                                value: 4
                            },
                            {
                                name: 'nodeAb',
                                value: 6
                            }
                        ]
                    },
                    {
                        name: 'nodeB',
                        value: 20,
                        children: [{
                            name: 'nodeBa',
                            value: 20,
                            children: [{
                                name: 'nodeBa1',
                                value: 20
                            }]
                        }]
                    }
                ]
            }],
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
        };
    }
    
    // sunburstChart
    private _sunburstChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.sunburstChart = {
            color: colors,
            series: {
                type: 'sunburst',
                data: [{
                        name: 'Grandpa',
                        children: [{
                                name: 'Uncle Leo',
                                value: 15,
                                children: [{
                                        name: 'Cousin Jack',
                                        value: 2
                                    },
                                    {
                                        name: 'Cousin Mary',
                                        value: 5,
                                        children: [{
                                            name: 'Jackson',
                                            value: 2
                                        }]
                                    },
                                    {
                                        name: 'Cousin Ben',
                                        value: 4
                                    }
                                ]
                            },
                            {
                                name: 'Father',
                                value: 10,
                                children: [{
                                        name: 'Me',
                                        value: 5
                                    },
                                    {
                                        name: 'Brother Peter',
                                        value: 1
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Nancy',
                        children: [{
                            name: 'Uncle Nike',
                            children: [{
                                    name: 'Cousin Betty',
                                    value: 1
                                },
                                {
                                    name: 'Cousin Jenny',
                                    value: 2
                                }
                            ]
                        }]
                    }
                ],
                radius: [0, '90%'],
                label: {
                    rotate: 'radial'
                }
            },
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
        }
    }

    // ParallelChart
    private _ParallelChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.ParallelChart = {
    parallelAxis: [{
      dim: 0,
      name: 'Price'
    },
    {
        dim: 1,
        name: 'Net Weight'
    },
    {
        dim: 2,
        name: 'Amount'
    },
    {
        dim: 3,
        name: 'Score',
        type: 'category',
        data: ['Excellent', 'Good', 'OK', 'Bad']
    }
  ],
  grid: {
    left: '0%',
    right: '0%',
    bottom: '0%',
    top: '2%',
    containLabel: true
  },
  color: colors,
  series: {
    type: 'parallel',
    lineStyle: {
        width: 4
    },
    data: [
        [12.99, 100, 82, 'Good'],
        [9.99, 80, 77, 'OK'],
        [20, 120, 60, 'Excellent']
    ]
  },
  textStyle: {
    fontFamily: 'Poppins, sans-serif'
  },
        }
    }

    // SankeyChart
    private _SankeyChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.SankeyChart = {
            colors: colors,
            series: {
                type: 'sankey',
                layout: 'none',
                emphasis: {
                    focus: 'adjacency'
                },
                data: [{
                        name: 'a'
                    },
                    {
                        name: 'b'
                    },
                    {
                        name: 'a1'
                    },
                    {
                        name: 'a2'
                    },
                    {
                        name: 'b1'
                    },
                    {
                        name: 'c'
                    }
                ],
                links: [{
                        source: 'a',
                        target: 'a1',
                        value: 5
                    },
                    {
                        source: 'a',
                        target: 'a2',
                        value: 3
                    },
                    {
                        source: 'b',
                        target: 'b1',
                        value: 8
                    },
                    {
                        source: 'a',
                        target: 'b1',
                        value: 3
                    },
                    {
                        source: 'b1',
                        target: 'a1',
                        value: 1
                    },
                    {
                        source: 'b1',
                        target: 'c',
                        value: 2
                    }
                ]
            },
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
        }
    }

    // FunnelChart
    private _FunnelChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.FunnelChart = {
            tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}%'
            },
            toolbox: {
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
                data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
                textStyle: { //The style of the legend text
                    color: '#858d98',
                },
            },
            color: colors,
            series: [{
                name: 'Funnel',
                type: 'funnel',
                left: '10%',
                top: 60,
                bottom: 60,
                width: '80%',
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    show: true,
                    position: 'inside'
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                data: [{
                        value: 60,
                        name: 'Visit'
                    },
                    {
                        value: 40,
                        name: 'Inquiry'
                    },
                    {
                        value: 20,
                        name: 'Order'
                    },
                    {
                        value: 80,
                        name: 'Click'
                    },
                    {
                        value: 100,
                        name: 'Show'
                    }
                ]
            }],
            textStyle: {
                fontFamily: 'Poppins, sans-serif'
            },
        }
    }

    // GaugeChart
    private _GaugeChart(colors:any) {
        colors = this.getChartColorsArray(colors);
        this.GaugeChart = {
            tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        color: colors,
        textStyle: {
            fontFamily: 'Poppins, sans-serif',
        },
        series: [{
            name: 'Pressure',
            type: 'gauge',
            progress: {
                show: true
            },
            detail: {
                valueAnimation: true,
                formatter: '{value}',
                color: '#858d98',
            },
            axisLabel: {
                color: '#858d98',
            },
            data: [{
                title: {
                    color: '#858d98',
                },
                value: 50,
                name: 'SCORE',
            }]
        }]
        }
    }

}
