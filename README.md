<h1 align="center"> 🦆 Back-End-Site-Clube-de-Programação 🦆 </h1>

<div align="center">
&emsp;<a href="https://github.com/ClubeProgramacaoSSA">
&emsp;<img height = "250em" src = "https://user-images.githubusercontent.com/80331486/174205946-fca931d0-ce3c-419c-9eec-2e6bddc4b1d6.png"/>
</a>
</div>

---
## Related Projects

- [SENAI CIMATEC Programming Clube Database](https://github.com/ClubeProgramacaoSSA/Programing-Club-Relational-Database#the-future)
- [Front End Site do Clube de Programação](https://github.com/ClubeProgramacaoSSA/Front-End-Site-Clube-de-Programacao)

---

## Developed by

- [Pedro Facundes](https://github.com/FacundesPedro) - _Project Leader_ (06/30/2022 - now)
- [Antônio Horácio](https://github.com/AntonioHoracio77) (06/30/2022 - now)
- [Bernardo Resende](https://github.com/BernardoSResende) (12/01/2023 - now)
- [Orlando Mota Pires](https://github.com/orlandomotapires) (06/30/2022 - now)
- [Fernando Antonio Marques Schettini](https://github.com/FernandoSchett) (06/30/2022 - now)
- [Orlando Mota Pires](https://github.com/orlandomotapires) (06/30/2022 - now)
- [Pedro Barros](https://github.com/pedrobarros01) - (06/30/2022 - 12/13/2022)

---

## Description

<div align = "justify">
&emsp;&emsp;&emsp; The Gangnam Style project consists of the development of a website for the <a href = "https://github.com/ClubeProgramacaoSSA">SENAI CIMATEC Programming Club</a>. The site will function as an exhibition banner for the club's advertising activities and as an integration tool between the Relational Database Project previously developed.
by other club members.</br>
&emsp;&emsp;&emsp; This repository contains the API responsible for answering requests from other services made by other club services and is a central product at Gangnam Style Project. All documentation related to the project will be available <a href ="https://drive.google.com/drive/folders/1RJ7gmUiI1yTD119yCH66UnsJEl0hF3kf?usp=sharing">here</a> on Google Drive and <a href= "https://app.swaggerhub.com/apis/orlandomotapires/ClubeDeProgramacao/2.0")>here</a> at swagger.</br>
</div>

---

## Technologies

&emsp;&emsp;&emsp;The technologies used to build this API are:

- [NODE.js](https://github.com/nodejs/node)
- [Express](https://github.com/expressjs/express)
- [Knex](https://github.com/knex/knex)
- [Docker](https://github.com/docker/cli)
- [Yarn](https://github.com/yarnpkg/yarn)
- [NPM](https://github.com/npm/cli)

---

## API Functionalities and Resources

&emsp;&emsp;&emsp; Some of the main functionalities of this application are:

- Creation of accounts and projects and registration in tournaments by club members, done through queries using PUT, POST and GET routes implemented in the code. These routes interact with [SENAI CIMATEC Programming Clube Database](https://github.com/ClubeProgramacaoSSA/Programing-Club-Relational-Database#the-future) whenever there are any requests by the [front-end screens](https://github.com/ClubeProgramacaoSSA/Front-End-Site-Clube-de-Programacao) from the programming club website.

---

## Quick Start

To run this API, let's create the application image and then the container, the only software needed is Docker.

1. After cloning the repository, inside the directory run the command:

        docker build -t test:0.0.1 .

&emsp;&emsp;&emsp;The `-t` parameter is used to give a name (test) and tag (0.0.1) to our image (feel free to change the name and tag of your image).

2. You can now run: </br>
   
        docker images

&emsp;&emsp;&emsp;And check if the image has been created correctly. If the process was successful an image called "test" is gonna appear in the docker images.

3. At last, run the command below to create the container.

        docker run -d -P test:0.0.1

&emsp;&emsp;&emsp;Caution the name you used to create the image, must be the same here after the `-P` parameter to create the container. The `-d` parameter is used to set the container to run in the background of your machine, not using your current command line. The `-P` parameter says to the container to use the already determined port (8080) as a port to your docker host, mapping the port.

4. That is it, now you have your container active. Type `docker ps` to check to active containers then type `localhost:{PORT}` at your browser to access the running container, the PORT must be the number where `49158` is at the following image below

<div align="center">
&emsp;<img src = "https://user-images.githubusercontent.com/80331468/212176925-4de4d089-70f5-4934-a300-ecdaa9480dbd.png"/>
</a>
</div>

---
