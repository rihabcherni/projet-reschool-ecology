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

const Barchart = () => {
    const [quantitemois, setQuantiteMois] = React.useState([])
    useEffect(() => {
        ;(async function getStatus() {
        const response = await fetch('http://ami.monconstat.tech/api/somme-dechets-par-mois')
        const json = await response.json()

        setTimeout(getStatus, 60000)
        setQuantiteMois(json)
        })()
    }, [])

    var options = []
    const [annee, setAnnee] = useState()
    const [dataplastique, setDataplastique] = useState([])
    const [datapapier, setDatapapier] = useState([])
    const [datacomposte, setDatacomposte] = useState([])
    const [datacanette, setDatacanette] = useState([])

    if (quantitemois.length !== 0) {
        var plastique = quantitemois.plastique
        var papier = quantitemois.papier
        var composte = quantitemois.composte
        var canette = quantitemois.canette
        var annees = quantitemois.annee

        if (annee === undefined) {
        setAnnee(annees[0])
        setDatapapier(papier[0])
        setDataplastique(plastique[0])
        setDatacomposte(composte[0])
        setDatacanette(canette[0])
        } else {
        for (let i = 0; i < annees.length; i++) {
            options.push({
            value: annees[i],
            datapapier: papier[i],
            dataplastique: plastique[i],
            datacomposte: composte[i],
            datacanette: canette[i],
            })
        }
        if (options.length !== 0) {
            var onchangeSelect = (item) => {
            setAnnee(item.value)
            setDatapapier(item.datapapier)
            setDataplastique(item.dataplastique)
            setDatacomposte(item.datacomposte)
            setDatacanette(item.datacanette)
            }
        }
        }
    }

    return (
        <div>
            <Card sx={{backgroundColor:"white"}}>
                <Container>
                    <Typography>
                        <h4 id="traffic" className="card-title mb-0" align="center">
                        Quantitées collectées totales par mois/année
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
                <Bar 
                options={{ 
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: false,
                            text: 'Quantitées collectées totales par mois/année et par établissement',
                        },
                    },
                }} 
                data={{ 
                    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre','Octobre','Novembre','Decembre'],
                    datasets: [
                        {
                            label: 'Plastique',
                            data: dataplastique,
                            backgroundColor: '#321fdb',
                        },
                        {
                            label: 'Papier',
                            data: datapapier,
                            backgroundColor: '#f9b115',
                        },
                        {
                            label: 'Composte',
                            data: datacomposte,
                            backgroundColor: '#2eb85c',
                        },
                        {
                            label: 'Canette',
                            data: datacanette,
                            backgroundColor: '#e55353',
                        },
                    ],
                }} 
                />
            </Card>
        </div>
    );
}

export default Barchart;