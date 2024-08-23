select * from GetServices
WHERE email = {{state.User.email || user.email   }}
order by service_name
