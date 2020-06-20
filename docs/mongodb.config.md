##Install docker##
https://docs.docker.com/get-docker/

##Command line##

#Baixar img do mongo
sudo docker pull mongo

#Rodar mongo
sudo docker run --name mongodb -p 27017:27017 -d mongo

#status img docker exited (stoped)
docker ps -a

#start img docker
docker start mongodb
