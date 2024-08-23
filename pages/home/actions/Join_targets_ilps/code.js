const targets = {{ui.tbl_targets.selectedRows.data}}
const students = {{steps.load2.data}}

const result = [];

targets.forEach(target => {
  students.forEach(student => {
    result.push({
      target_cache_id: target.id, 
  		display_target: target.target,       
      student_id: student.student_id,
      type:"Pillar",
      service_id: {{ui.slct_service.value}}
    });
  });
});

return result;
