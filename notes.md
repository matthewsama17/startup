# CS240 NOTES
## github
`git pull` to pull from github

`git push` to push to github

`git mv` and `git rm` to move, rename, and delete files in a way git can recognize

`git add FILENAME` to stage changes to a file

`git add .` to stage all changes

`git commit -m "DESCRIPTION"` to commit staged changes

`git commit -am "DESCRIPTION"` to stage and commit all changes

`git status` to see changes

`git log` to see past commits

`git checkout SHA` to look at a previous commit

`git diff SHA SHA` to compare two commits

`git diff HEAD~1 HEAD` to compare current Head to the preceding commit

## EC2
Elastic IP allows you to keep your IP address, even when you turn your server off.

Elastic IPs cost money, but only when the attached server is off.

My server's Elastic IP is 3.224.78.77

You can get to my server by going to [here](http://3.224.78.77)

I can ssh into my server using the command `ssh -i [key pair file] ubuntu@3.224.78.77`

## Domain Name
After you buy a Domain Name, you attach records to it.

The records determine where a person goes when they visit the domain name.

My domain name is <websitethatbeatsyouattictactoe.click>
