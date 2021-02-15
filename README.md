# Getting Started with Relation Manager

 There is no any database support in our app. I am using static data and storege for just development purpose.\
 I used `Node.js` and `Express` for `backend support`.\
 When user open website it's redirected to add `ManageUser` page where user can add users to manage relationships.\
 After adding users they can manage relations between them in `ManageRelation` Page.\
 Afetr adding relationships user can check how one user can relate to onother user using every posiible links between them on `TrackRelation` page.\
 While using this `don't refresh` page or you will loss your saved data.\
 I am using `express` for making `api requests` to add users, relations and check relation between them.\
 I am using concept of `graphs` and `graph searching techniques (BFS)` to solve problem of `searching connection between users`.
