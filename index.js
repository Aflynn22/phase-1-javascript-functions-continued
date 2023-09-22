function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`)
}


function mondayWork(work = 'go to the office'){
    return (`This Monday, I will ${work}.`)
}



function wrapAdjective(wrapper="*"){
    return function(STR){
    return `You are ${wrapper}${STR}${wrapper}!`
     }
}
console.log(emphatic)