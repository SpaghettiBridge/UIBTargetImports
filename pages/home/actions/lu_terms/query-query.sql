select public.terms.id as term_id, public.terms.name as term, ac.name as academic_year from public.join_service_terms jst
join public.terms on public.terms.id = jst.term_id
join public.academic_years ac on public.terms.academic_year_id = ac.id

where jst.service_id = {{ui.slct_service.value}}
order by jst.start_date desc