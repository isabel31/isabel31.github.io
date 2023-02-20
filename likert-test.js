const jsPsych = initJsPsych({
    on_finish: function () { 
        var finaldata = jsPsych.data.get();
    finaldata.localSave('csv','filtered_data.csv'); 
    }
});

const trial1 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q1.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial2 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q2.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial3 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q3.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial4 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q4.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial5 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q5.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial6 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q6.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial7 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q7.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial8 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q8.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial9 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q9.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial10 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q10.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial11 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q11.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial12 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q12.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial13 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q13.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial14 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q14.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial15 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q15.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial16 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q16.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial17 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q17.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial18 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q18.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial19 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q19.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial20 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q20.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial21 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q21.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const trial22 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'q22.jpg',
    prompt: "",
    labels: [1,7],
    min: 100,
    max: 700,
    slider_start: 400,
};

const spot_the_difference = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="food1.jpg">',
    prompt: "Click on any difference on either image then press continue",
    choices: ["Continue"]
};

const spot_the_difference2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="food2.jpg">',
    prompt: "Click on any difference on either image then press continue",
    choices: ["Continue"]
};

const spot_the_difference3 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="food3.jpg">',
    prompt: "Click on any difference on either image then press continue",
    choices: ["Continue"]
};

const info = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="consent.jpg">',
    prompt: "",
    choices: ["Continue"]
};

const consent1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="consent1.jpg">',
    prompt: "",
    choices: ["Continue"]
};

const consent2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="consent2.jpg">',
    prompt: "",
    choices: ["Continue"]
};

const consent3 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="consent3.jpg">',
    prompt: "",
    choices: ["Continue"]
};

const consent4 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="consent4.jpg">',
    prompt: "",
    choices: ["Continue"]
};

const consent5 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="consent5.jpg">',
    prompt: "",
    choices: ["Continue"]
};

const contactinfo = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="contactinfo.jpg">',
    prompt: "",
    choices: ["Continue"]
};

const spotdiffintro = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="spotdiffintro.jpg">',
    prompt: "",
    choices: ["Continue"]
};

const slideintro = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="slideintro.jpg">',
    prompt: "",
    choices: ["Continue"]
};

const control1 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'control1.jpg',
    prompt: "",
    labels: [1,2, 3, 4, 5, 6, 7, 8, 9, 10],
    min: 100,
    max: 1000,
    slider_start: 400,
};

const control2 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'control2.jpg',
    prompt: "",
    labels: [1,2, 3, 4, 5, 6, 7, 8, 9, 10],
    min: 100,
    max: 1000,
    slider_start: 400,
};

const control3 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'control3.jpg',
    prompt: "",
    labels: [1,2, 3, 4, 5, 6, 7, 8, 9, 10],
    min: 100,
    max: 1000,
    slider_start: 400,
};

const control4 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'control4.jpg',
    prompt: "",
    labels: [1,2, 3, 4, 5, 6, 7, 8, 9, 10],
    min: 100,
    max: 1000,
    slider_start: 400,
};

const control5 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'control5.jpg',
    prompt: "",
    labels: [1,2, 3, 4, 5, 6, 7, 8, 9, 10],
    min: 100,
    max: 1000,
    slider_start: 400,
};

const control6 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'control6.jpg',
    prompt: "",
    labels: [1,2, 3, 4, 5, 6, 7, 8, 9, 10],
    min: 100,
    max: 1000,
    slider_start: 400,
};

const control7 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'control7.jpg',
    prompt: "",
    labels: [1,2, 3, 4, 5, 6, 7, 8, 9, 10],
    min: 100,
    max: 1000,
    slider_start: 400,
};

const control8 = {
    type: jsPsychImageSliderResponse,
    stimulus: 'control8.jpg',
    prompt: "",
    labels: [1,2, 3, 4, 5, 6, 7, 8, 9, 10],
    min: 100,
    max: 1000,
    slider_start: 400,
};

const section3 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="section3.jpg">',
    prompt: "",
    choices: ["Continue"]
};

const thanks = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="thanks.jpg">',
    prompt: "",
    choices: ["Continue"]
}


jsPsych.run([info, consent1, consent2, consent3, consent4, consent5, contactinfo, spotdiffintro, spot_the_difference, spot_the_difference2, spot_the_difference3, slideintro, trial1, trial2, trial3, trial4, trial5,trial6,trial7,trial8, trial9, trial10, trial11, trial12, trial13, trial14, trial15, trial16, trial17, trial18, trial19, trial20, trial21, trial22, section3, control1, control2, control3, control4, control5, control6, control7, control8,  thanks]);