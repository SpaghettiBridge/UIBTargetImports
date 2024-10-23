select
  lptc.id as id,
  lptc.topic_id,
  lptc.level,
  lptc.category,
  lptc.target,
  lptc.subject_id,
  lptc.pillar_id,
  ptc.topic,
  ptc.pillar,
  CONCAT (ptc.pillar, ': ', ptc.topic) AS display
from
  public.lu_pillar_target_cache lptc
  join public.lu_pillar_topic_cache ptc on lptc.topic_id = ptc.id
where
  lptc.topic_id in ({{data}})