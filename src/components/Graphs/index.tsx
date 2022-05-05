import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from "apexcharts";

const chartStaticData: { options: ApexOptions, series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined } = {
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }
}

function LineChart() {
    const [chartData] = useState(chartStaticData);
    const navigate = useNavigate();

    const onTableClick = () => {
        navigate("/table")
    }

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: "right" }}>
                <Button onClick={onTableClick}>Table</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: "space-around" }}>
                <ReactApexChart options={chartData.options} series={chartData.series} type="bar" width={800} height={400} />
                <ReactApexChart options={chartData.options} series={chartData.series} type="line" width={800} height={400} />
            </Box>
        </div>
    )
}

export default LineChart;