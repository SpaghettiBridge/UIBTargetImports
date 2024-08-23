Select DISTINCT join_account_services.service_id, accounts.name,accounts.id from Accounts
join join_account_services on join_account_services.account_id = Accounts.id
where join_account_services.service_id in (?)
order by accounts.name ASC
