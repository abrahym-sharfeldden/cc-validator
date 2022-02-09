# Credit Card Validator

<!--
Finally, in your readme file, explain why (100-500 words) you preferred to implement the luhn algorithm with javascript for parsing user input as opposed to another language such as scheme.
In particular, address how the JavaScript syntax has some weaknesses with concrete examples and
describe some ways that people/orgs have tried to overcome the weaknesses?
 -->

This project is the second assignment for the C.S. class, CISC.3140. This assignment uses mainly vanilla javascript to perform Luhn's Algorithm in order to verify credit card numbers.

I chose javascript over scheme because of it's revelance to my interests as a Web Developer. I haven't had much practice coding in vanillaJS which made this assignment all the more fun, and frustrating. I feel a lot more comfortable using javascript's plethora of options when it comes to parsing in user input. This can often be a weakness as there are many functions available to perform one task, some being marginally better than others with how they interact with your code (e.g. textContent vs innerHTML) or simply the speed (e.g. getElementById vs querySelector). Another issue with javascript is its challenging to create a scalable javascript file without having extensive knowledge of the programming language and also a concept of programming paradigms. This has been overcome by the influx of JS frameworks and libraries. Facebook's React library, Google's Angular, and NodeJS are some of the more popular javascript developments.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

What things you need to install the software and how to install them

1. Install python

```
brew install python
```

2. Install Flask using pip3

```
pip3 install flask
```

### Installing

A step by step series of examples that tell you how to get a development environment running on MacOS:

1. Clone the repo

```
git clone https://github.com/abrahym-sharfeldden/cc-validator
```

2. Navigate to the folder and run the local host

```
cd [~/ToClone/Location]
```

```
export FLASK_APP=app.py
```

```
flask run
```

## Built With

-   [HTML/CSS]() - User Interface
-   [Javascript]() - Scripting Language
-   [Flask](http://flask.pocoo.org/) - The web server used
-   [Python](https://www.python.org/) - Programming Language
