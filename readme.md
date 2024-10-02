##Add new Project on Git Hub

…or create a new repository on the command line
echo "# Post-App-Project" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/AkshayKothule/Post-App-Project.git
git push -u origin main

###Environment variable

```javascript
create use react app

These environment variables will be defined for you on process.env. For example, having an environment variable named REACT_APP_NOT_SECRET_CODE will be access in your JS as process.env.REACT_APP_NOT_SECRET_CODE.

create app wite vite app
To prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code

Only VITE_SOME_KEY will be access as import.meta.env.VITE_SOME_KEY to your client source code

```
