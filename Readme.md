
**Problem1** \
Fix "Add New Notice" Page \
<mark>/app/notices/add</mark> \
When click the 'Save' button, 'description' doesn't be saved. \
<b>Fix it.</b>

**Problem2** \
Complete CRUD operation in Student management page. \
<mark>/src/modules/students/students-controller.js</mark>

============
**RESULT**

The main challenges took me 1 hour:

The first challenge, regarding saving the description, is complete; I just had to change ‘content’ to ‘description’.
The second challenge was a bit more complicated since I had to implement all the endpoints in student-controller.js.
However, I would like to add the following, as this was the real challenge for me and took the most time — around 3 hours:

The frontend project wouldn’t run because I needed to create a new Git project from scratch.
The backend project wasn’t working when making requests. I later realized that I needed to create a database in PostgreSQL and run the scripts from the “seed_db” folder. This was never mentioned anywhere in the challenge, so I had to figure it out on my own.
Most importantly, I couldn’t debug with console.log because a file in the project contained this nonsensical code: require("./.svn").

