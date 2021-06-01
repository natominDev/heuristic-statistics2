import React from 'react';
import { Bar } from 'react-chartjs-2';
import './App.css';

function Graph (props) {

    const distribution = [];

    for(let i = 0; i < props.distData.length; ++i){
        distribution.push(props.distData[i].number);
    }
/*
    useEffect(() => {
        let rating = -1;
        for(let i = 0; i < props.distData.length; ++i){
            if(props.ratingData[i].name == props.userName){
                rating = props.ratingData[i].performance;
            }
        }
        if(rating == -1) rating = 0;
        props.setRating(rating);
    })
*/
    const graphData = {
        labels: [
            ['0'],['100'],['200'],['300'],['400'],['500'],['600'],['700'],['800'],['900'],
            ['1000'],['1100'],['1200'],['1300'],['1400'],['1500'],['1600'],['1700'],['1800'],['1900'],
            ['2000'],['2100'],['2200'],['2300'],['2400'],['2500'],['2600'],['2700'],['2800'],['2900'],
        ],
        datasets: [
            {
                data: distribution
                /*[
                    421,293,194,138,99,86,106,87,79,84,
                    57,64,37,49,26,14,14,7,9,9,
                    7,5,4,0,2,1,0,1,0,0,
                ]
                */,
                backgroundColor: [
                    //gray
                    `rgba(130, 130, 130, ${(0 <= props.userRating && props.userRating < 100) ? 1 : 0.5})`,
                    `rgba(130, 130, 130, ${(100 <= props.userRating && props.userRating < 200) ? 1 : 0.5})`,
                    `rgba(130, 130, 130, ${(200 <= props.userRating && props.userRating < 300) ? 1 : 0.5})`,
                    `rgba(130, 130, 130, ${(300 <= props.userRating && props.userRating < 400) ? 1 : 0.5})`,
                    //brown
                    `rgba(136, 41, 1, ${(400 <= props.userRating && props.userRating < 500) ? 1 : 0.5})`,
                    `rgba(136, 41, 1, ${(500 <= props.userRating && props.userRating < 600) ? 1 : 0.5})`,
                    `rgba(136, 41, 1, ${(600 <= props.userRating && props.userRating < 700) ? 1 : 0.5})`,
                    `rgba(136, 41, 1, ${(700 <= props.userRating && props.userRating < 800) ? 1 : 0.5})`,
                    //green
                    `rgba(0, 137, 0, ${(800 <= props.userRating && props.userRating < 900) ? 1 : 0.5})`,
                    `rgba(0, 137, 0, ${(900 <= props.userRating && props.userRating < 1000) ? 1 : 0.5})`,
                    `rgba(0, 137, 0, ${(1000 <= props.userRating && props.userRating < 1100) ? 1 : 0.5})`,
                    `rgba(0, 137, 0, ${(1100 <= props.userRating && props.userRating < 1200) ? 1 : 0.5})`,
                    //cyan
                    `rgba(0, 198, 182, ${(1200 <= props.userRating && props.userRating < 1300) ? 1 : 0.5})`,
                    `rgba(0, 198, 182, ${(1300 <= props.userRating && props.userRating < 1400) ? 1 : 0.5})`,
                    `rgba(0, 198, 182, ${(1400 <= props.userRating && props.userRating < 1500) ? 1 : 0.5})`,
                    `rgba(0, 198, 182, ${(1500 <= props.userRating && props.userRating < 1600) ? 1 : 0.5})`,
                    //blue
                    `rgba(0, 0, 137, ${(1600 <= props.userRating && props.userRating < 1700) ? 1 : 0.5})`,
                    `rgba(0, 0, 137, ${(1700 <= props.userRating && props.userRating < 1800) ? 1 : 0.5})`,
                    `rgba(0, 0, 137, ${(1800 <= props.userRating && props.userRating < 1900) ? 1 : 0.5})`,
                    `rgba(0, 0, 137, ${(1900 <= props.userRating && props.userRating < 2000) ? 1 : 0.5})`,
                    //yellow
                    `rgba(252, 248, 7, ${(2000 <= props.userRating && props.userRating < 2100) ? 1 : 0.5})`,
                    `rgba(252, 248, 7, ${(2100 <= props.userRating && props.userRating < 2200) ? 1 : 0.5})`,
                    `rgba(252, 248, 7, ${(2200 <= props.userRating && props.userRating < 2300) ? 1 : 0.5})`,
                    `rgba(252, 248, 7, ${(2300 <= props.userRating && props.userRating < 2400) ? 1 : 0.5})`,
                    //orange
                    `rgba(252, 125, 7, ${(2400 <= props.userRating && props.userRating < 2500) ? 1 : 0.5})`,
                    `rgba(252, 125, 7, ${(2500 <= props.userRating && props.userRating < 2600) ? 1 : 0.5})`,
                    `rgba(252, 125, 7, ${(2600 <= props.userRating && props.userRating < 2700) ? 1 : 0.5})`,
                    `rgba(252, 125, 7, ${(2700 <= props.userRating && props.userRating < 2800) ? 1 : 0.5})`,
                    //red
                    `rgba(252, 7, 7, ${(2800 <= props.userRating && props.userRating < 2900) ? 1 : 0.5})`,
                    `rgba(252, 7, 7, ${(2900 <= props.userRating && props.userRating < 3000) ? 1 : 0.5})`,
                ],
                label: '',
            },
        ],
    };

    const graphOption = {};

    return (
        <div>
            <Bar data={graphData} options={graphOption} />
        </div>
    );
}

export default Graph;