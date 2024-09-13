# CS240 NOTES

## Markdown

### Headers
```
# H1
## H2
### H3
#### H4
##### H5
###### H6
      ^This space is important
```
#### H4
##### H5
###### H6

```
An alternate way to do H1 and H2
H1
==

H2
--
```

### Paragraphs
```
Put a blank line in between paragraphs to seperate them.

You can add a line break by putting two spaces  
at the end of a line and then pushing enter.

Otherwise it might
not work
the way
you think.
```

Put a blank line in between paragraphs to seperate them.

You can add a line break by putting two spaces  
at the end of a line and then pushing enter.

Otherwise it might
not work
the way
you think.

### Emphasis

```
*italics* or _italics_
**bold** or __bold__
Combine **bold and _italics_**
**This _doesn't** work_
```

*italics* or _italics_
**bold** or __bold__
Combine **bold and _italics_**
**Does _this** work?_

```
~~Strikethrough~~
```
~~Strikethrough~~

### Links

```
[Link](churchofjesuschrist.org)
```

[Link](https://churchofjesuschrist.org)

###Tables

```
Table | Right-Aligned | Centered
--- | :-: | ----------:
a | This column| This 
b | is aligned | column
c | to the | is
d | right | centered
```

Table | Right-Aligned | Centered
--- | --: | :-:
a | This column| This 
b | is aligned | column
c | to the | is
d | right | centered

### Blockquote
```
>This is a block quote
>You can write is across different lines

>Even if you writ a really long quote all on one line, it will still appear at the end as having wrapped onto multiple lines. Also, you can use **Markdown** ~~stuff~~ in a block quote and it works just fine.
```

>This is a block quote
>You can write is across different lines

>Even if you writ a really long quote all on one line, it will still appear at the end as having wrapped onto multiple lines. Also, you can use **Markdown** ~~stuff~~ in a block quote and it works just fine.

### Horizontal Rule

```
Three or more
---
Hyphens
***
Asterisks
___
Underscores

```

Three or more
---
Hyphens
***
Asterisks
___
Underscores

### Code

``Inline code has `backticks` around it``
Put backticks in code with ``double` backticks``

Inline code has `backticks` around it

Escape backticks with ``double backticks``

```
\`\`\`
Multiline code is marked with three backticks at the beginning and end.
\`\`\`
```

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

My domain name is <http://websitethatbeatsyouattictactoe.click>
