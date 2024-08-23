function filterItems(array, key) {
  return array.filter(item => {
    return !item[key].startsWith("DO NOT USE");
  });
}


function filterArray(array1, array2) {
    return array1.filter(obj1 => {
        return !array2.some(obj2 => 
            obj1.target_id === obj2.target_cache_id && 
            obj1.student === obj2.student_id
        );
    });
}


function filterArrayByMatchingFields(mainArray, excludeArray) {
    return mainArray.filter(mainObj => {
        return !excludeArray.some(excludeObj => 
            mainObj.target_id === excludeObj.target_id && 
            mainObj.ilp_header_id === excludeObj.ilp_header_id
        );
    });
}


function findUncreatedTargets(targets, students, createdTargets) {
  const uncreated = [];
  // Iterate through each student
  students.forEach(student => {
    // Iterate through each target
    targets.forEach(target => {
      // Check if the target is not already created for this student
      const exists = createdTargets.some(ct => ct.student_id === student.student_id && ct.target_cache_id === target.id);
      
      if (!exists) {
        uncreated.push({
      target_cache_id: target.id, 
  		display_target: target.target,       
      student_id: student.student_id,
      type:"Pillar"
        });
      }
    });
  });

  return uncreated;
}


function getOldestRecords(records) {
  // Group by student_id, target_cache_id, and service_id
  const grouped = records.reduce((acc, record) => {
    const key = `${record.student_id}-${record.target_cache_id}-${record.service_id}`;
    
    if (!acc[key]) {
      acc[key] = [];
    }
    
    acc[key].push(record);
    
    return acc;
  }, {});

  // Get the oldest record from each group
  const oldestRecords = Object.values(grouped).map(group => {
    return group.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))[0];
  });

  return oldestRecords;
}