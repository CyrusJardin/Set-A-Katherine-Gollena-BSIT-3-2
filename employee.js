const fs = require('fs')

const employee = function(oldNote){
    let employeeNote = JSON.parse(oldNote);

    let mNote = employeeNote.map(function(n){
        return n.employee;
    })
    console.log("Employee: " + mNote)
}
module.exports = employee