let yourYear = prompt("What is your age? ", "0");

if (+yourYear <= 17){
    confirm("Do you study at school?");
}else if (+yourYear < 25){
    confirm("Do you study at university?");
}else if (+yourYear < 60){
    confirm("Do you have a job?");
}else {
    confirm("What are you doing?");
}