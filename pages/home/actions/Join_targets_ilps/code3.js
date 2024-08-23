const targets = {{steps.load4.data}}
const students = {{steps.get_all_ilps.data}}

const result = [];

targets.forEach(target => {
  students.forEach(student => {
    if(student.student_id == target.student_id){
 result.push({
      target_id: target.id,        
      ilp_header_id: student.id 
    });
}
   
  });
});

return result;
