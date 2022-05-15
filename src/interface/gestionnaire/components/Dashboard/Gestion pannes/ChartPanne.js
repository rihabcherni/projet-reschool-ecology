import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { Card, Container, Typography, Grid } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ChartPanne = ({url ,titre, labelNbr ,labelCout }) => {
    const [quantitemois, setQuantiteMois] = React.useState([])
    useEffect(() => {
        ;(async function getStatus() {
        const response = await fetch(url)
        const json = await response.json()

        setTimeout(getStatus, 60000)
        setQuantiteMois(json)
        console.log(json)        })()
    }, [])

    var options = []
    const [annee, setAnnee] = useState()
    const [dataPanneNbr, setDataPanneNbr] = useState([])
    const [dataPanneCout, setDataPanneCout] = useState([])
    if (quantitemois.length !== 0) {
        var annees = quantitemois.annee
        if (annee === undefined) {
        setAnnee(annees[0])
        setDataPanneNbr(quantitemois.nbr[0])
        setDataPanneCout(quantitemois.cout[0])
        } else {
        for (let i = 0; i < annees.length; i++) {
            options.push({
                value: annees[i],
                dataPanneNbr: quantitemois.nbr[i],
                dataPanneCout: quantitemois.cout[i],
            })
        }
        if (options.length !== 0) {
            var onchangeSelect = (item) => {
                setAnnee(item.value)
                setDataPanneNbr(item.dataPanneNbr)
                setDataPanneCout(item.dataPanneCout)
            }
        }
        }
    }

    return (
       
            <Card sx={{width:"98%"}} >
                    <Container>
                        <Typography>
                            <h4 id="traffic" className="card-title mb-0" align="center">
                            {titre}
                            </h4>
                        </Typography>
                        <Grid container sm={15} >
                            <Select
                                className="float-end me-3"
                                onChange={onchangeSelect}
                                value={annee}
                                options={options}
                                getOptionValue={(option) => option.value}
                                getOptionLabel={(option) => option.value}
                                placeholder={annee}
                            />
                        </Grid>
                    </Container>
                    <Bar options={{ 
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: false,
                            },
                        },
                        scales: {
                            y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            },
                            y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            grid: {
                                drawOnChartArea: false,
                            },
                            },
                        },
                    }} 
                    data={{ 
                        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre','Octobre','Novembre','Decembre'],
                        datasets: [
                            {
                                label: labelNbr,
                                data: dataPanneNbr,
                                backgroundColor: '#f421f0',
                                yAxisID: 'y',
                            },
                            {
                                label: labelCout,
                                data: dataPanneCout,
                                backgroundColor: '#f9b115',
                                yAxisID: 'y1',
                            },
                        
                        ],
                    }} 
                    />
            </Card>   
    );
}

export default ChartPanne;



