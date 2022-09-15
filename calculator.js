function calculator(weight,height) {
    const bmi = weight/Math.pow(height,2.0);
    return bmi;
    
}
module.exports=calculator