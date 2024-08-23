select students.id as student_id, students.display_student_name as child_name from students
join public.student_admissions sa on sa.student_id = public.students.id

where students.service_id = ?
and sa.status = 'On Roll'
order by students.display_student_name