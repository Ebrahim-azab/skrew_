function calculatesums() {
    const column1IDs = ['row6_co11','row5_co11','row4_co11','row3_co11','row2_co11'];
    const column2IDs = ['row6_co12','row5_co12','row4_co12','row3_co12','row2_co12'];
    const column3IDs = ['row6_co13','row5_co13','row4_co11','row3_co13','row2_co13'];
    const column4IDs = ['row6_co14','row5_co14','row4_co14','row3_co14','row2_co14'];
    const column5IDs = ['row6_co15','row5_co15','row4_co15','row3_co15','row2_co15'];
    const column6IDs = ['row6_co16','row5_co16','row4_co16','row3_co16','row2_co16'];
    const column7IDs = ['row6_co17','row5_co17','row4_co17','row3_co17','row2_co17'];
    const column8IDs = ['row6_co18','row5_co18','row4_co18','row3_co18','row2_co18'];
    let sum1 =0;
    let sum2 =0;
    let sum3 =0;
    let sum4 =0;
    let sum5 =0;
    let sum6 =0;
    let sum7 =0;
    let sum8 =0
    for (let i = 0; i < column1IDs.length; i++) {
        const value1 = parseFloat(document.getElementById(column1IDs[i]).value)||0;
        const value2 = parseFloat(document.getElementById(column2IDs[i]).value)||0;
        const value3 = parseFloat(document.getElementById(column3IDs[i]).value)||0;
        const value4 = parseFloat(document.getElementById(column4IDs[i]).value)||0;
        const value5 = parseFloat(document.getElementById(column5IDs[i]).value)||0;
        const value6 = parseFloat(document.getElementById(column6IDs[i]).value)||0;
        const value7 = parseFloat(document.getElementById(column7IDs[i]).value)||0;
        const value8 = parseFloat(document.getElementById(column8IDs[i]).value)||0;
        sum1 +=value1;
        sum2 +=value2;
        sum3 +=value3;
        sum4 +=value4;
        sum5 +=value5;
        sum6 +=value6;
        sum7 +=value7;
        sum8 +=value8;
    }
    document.getElementById('score1').textContent = sum1;
    document.getElementById('score2').textContent = sum2;
    document.getElementById('score3').textContent = sum3;
    document.getElementById('score4').textContent = sum4;
    document.getElementById('score5').textContent = sum5;
    document.getElementById('score6').textContent = sum6;
    document.getElementById('score7').textContent = sum7;
    document.getElementById('score8').textContent = sum8;
    
    checkandcolorscore3();
    const score1Backgroundcolor = document.getElementById('score1').style.background;
    const mmrinput = document.querySelector('.mmr');
    const mnrinput = document.querySelector('.mnr');
    const score1 = parseFloat(document.getElementById('score1').textContent);
    const score2 = parseFloat(document.getElementById('score2').textContent);
    const score3 = parseFloat(document.getElementById('score3').textContent);
    const score4 = parseFloat(document.getElementById('score4').textContent);
    const score5 = parseFloat(document.getElementById('score5').textContent);
    const score6 = parseFloat(document.getElementById('score6').textContent);
    const score7 = parseFloat(document.getElementById('score7').textContent);
    const score8 = parseFloat(document.getElementById('score8').textContent);
    const thScore1 = document.querySelector('th#score1');
    const thScore2 = document.querySelector('th#score2');
    const thScore3 = document.querySelector('th#score3');
    const thScore4 = document.querySelector('th#score4');
    const thScore5 = document.querySelector('th#score5');
    const thScore6 = document.querySelector('th#score6');
    const thScore7 = document.querySelector('th#score7');
    const thScore8 = document.querySelector('th#score8');
    function checkandcolorscore3() {
        const score1 = parseFloat(document.getElementById('score1').textContent);
        const score2 = parseFloat(document.getElementById('score2').textContent);
        const score3 = parseFloat(document.getElementById('score3').textContent);
        const score4 = parseFloat(document.getElementById('score4').textContent);
        const score5 = parseFloat(document.getElementById('score5').textContent);
        const score6 = parseFloat(document.getElementById('score6').textContent);
        const score7 = parseFloat(document.getElementById('score7').textContent);
        const score8 = parseFloat(document.getElementById('score8').textContent);
        const thScore1 = document.querySelector('th#score1');
        const thScore2 = document.querySelector('th#score2');
        const thScore3 = document.querySelector('th#score3');
        const thScore4 = document.querySelector('th#score4');
        const thScore5 = document.querySelector('th#score5');
        const thScore6 = document.querySelector('th#score6');
        const thScore7 = document.querySelector('th#score7');
        const thScore8 = document.querySelector('th#score8');
        const scores = [score1,score2,score3,score4,score5,score6,score7,score8];
        const thscores = [thscore1,thscore2,thscore3,thscore4,thscore5,thscore6,thscore7,thscore8];
        const minScore = Math.min(...scores);
        const minScoreIndices = scores.reduce((indices, score, index) =>{
            if (score === minScore) indices.push(index);
            return indices;
        },[]);
        for (let i = 0; i < scores.length; i++) {
            if (minScoreIndices.includes(i)){
                thScores[i].style.backgroundColor = '#58a404';
            } else {
                thScores[i].style.backgroundColor = '#24183e';
            }
            
        }

    }
    const inputFildes = 
    document.querySelectorAll('input[type="number"]');
    inputFildes.forEach(
        input => {
            input.addEventListener(
                'input',calculatesums);
        });
        calculatesums();
        const numberInputs = 
        document.querySelectorAll('input[type="number"]');
            const textInputs = document.querySelectorAll('input[type="text"]');

        function UpdateBackgroundColor(input) {
            const inputValue = parseInt(input.value);
            if (inputValue === 0) {
                input.style.backgroundColor = '#58a404';
                input.parentElement.style.backgroundColor = '#58a404';
            }
            else{
                
                input.style.backgroundColor = '#24183e';
                input.parentElement.style.backgroundColor = '#24183e';
        }    
        }    
        numberInputs.forEach( input => {
            input.addEventListener('input',() => {
                input.value = input.value.replace(/[^0-9]/g,'#24183e');
                UpdateBackgroundColor(input);
            });
        });
        textInputs.forEach(input => {
            input.addEventListener('input',() =>{
                input.value = input.value.replace(/[0-9]/g,'');
            });
        });
        numberInputs.forEach(input => {
            UpdateBackgroundColor(input);
        });
}
function calculateSums() {
    const column1IDs = ['row6_col1', 'row5_col1', 'row4_col1', 'row3_col1', 'row2_col1'];
    const column2IDs = ['row6_col2', 'row5_col2', 'row4_col2', 'row3_col2', 'row2_col2'];
    const column3IDs = ['row6_col3', 'row5_col3', 'row4_col3', 'row3_col3', 'row2_col3'];
    const column4IDs = ['row6_col4', 'row5_col4', 'row4_col4', 'row3_col4', 'row2_col4'];
    const column5IDs = ['row6_col5', 'row5_col5', 'row4_col5', 'row3_col5', 'row2_col5'];
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0
    for (let i = 0; i < column1IDs.length; i++) {
        const value1 = parseFloat(document.getElementById(column1IDs[i]).value) || 0;
        const value2 = parseFloat(document.getElementById(column2IDs[i]).value) || 0;
        const value3 = parseFloat(document.getElementById(column3IDs[i]).value) || 0;
        const value4 = parseFloat(document.getElementById(column4IDs[i]).value) || 0;
        const value5 = parseFloat(document.getElementById(column5IDs[i]).value) || 0;

        sum1 += value1;
        sum2 += value2;
        sum3 += value3;
        sum4 += value4;
        sum5 += value5;
        
    }

    document.getElementById('score1').textContent = sum1;
    document.getElementById('score2').textContent = sum2;
    document.getElementById('score3').textContent = sum3;
    document.getElementById('score4').textContent = sum4;
    document.getElementById('score5').textContent = sum5;

    checkAndColorScore3();

    const score1BackgroundColor = document.getElementById('score1').style.backgroundColor;
    const mmrInput = document.querySelector('.mmr');
    const mnrInput = document.querySelector('.mnr');
    const score1 = parseFloat(document.getElementById('score1').textContent);
    const score2 = parseFloat(document.getElementById('score2').textContent);
    const score3 = parseFloat(document.getElementById('score3').textContent);
    const score4 = parseFloat(document.getElementById('score4').textContent);
    const score5 = parseFloat(document.getElementById('score5').textContent);
    const thScore1 = document.querySelector('th#score1');
    const thScore2 = document.querySelector('th#score2');
    const thScore3 = document.querySelector('th#score3');
    const thScore4 = document.querySelector('th#score4');
    const thScore5 = document.querySelector('th#score5');
    }

function checkAndColorScore3() {
    const score1 = parseFloat(document.getElementById('score1').textContent);
    const score2 = parseFloat(document.getElementById('score2').textContent);
    const score3 = parseFloat(document.getElementById('score3').textContent);
    const score4 = parseFloat(document.getElementById('score4').textContent);
    const score5 = parseFloat(document.getElementById('score5').textContent);
    const thScore1 = document.querySelector('th#score1');
    const thScore2 = document.querySelector('th#score2');
    const thScore3 = document.querySelector('th#score3');
    const thScore4 = document.querySelector('th#score4');
    const thScore5 = document.querySelector('th#score5');
    const scores = [score1, score2, score3, score4, score5];
    const thScores = [thScore1, thScore2, thScore3, thScore4, thScore5];

const minScore = Math.min(...scores);
const minScoreIndices = scores.reduce((indices, score, index) => {
if (score === minScore) indices.push(index);
return indices;
}, []);

for (let i = 0; i < scores.length; i++) {
if (minScoreIndices.includes(i)) {
    thScores[i].style.backgroundColor = '#58a404';
} else {
    thScores[i].style.backgroundColor = '';
}
}

}

const inputFields = document.querySelectorAll('input[type="number"]');
inputFields.forEach(input => {
    input.addEventListener('input', calculateSums);
});

calculateSums();

const numberInputs = document.querySelectorAll('input[type="number"]');
const textInputs = document.querySelectorAll('input[type="text"]');

function updateBackgroundColor(input) {
    const inputValue = parseInt(input.value);
    if(inputValue === 0) {
        input.style.backgroundColor = '#58a404';
        input.parentElement.style.backgroundColor = '#58a404';
    } else {
        input.style.backgroundColor = '';
        input.parentElement.style.backgroundColor = '';
    }
}

numberInputs.forEach(input => {
    input.addEventListener('input', () => {
        input.value = input.value.replace(/[^0-9]/g, '');
        updateBackgroundColor(input);
    });
});

textInputs.forEach(input => {
    input.addEventListener('input', () => {
        input.value = input.value.replace(/[0-9]/g, '');
    });
});

numberInputs.forEach(input => {
    updateBackgroundColor(input);
});
