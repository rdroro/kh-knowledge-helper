# Kh - Knowledge helper

Un outil qui permet de se faire des fiches en disposant d'un espace sur lequel il est possible de placer des éléments. En plus de la rédaction, il est possible de parcourir les aide-mémoires des autres utilisateurs, de Waouter lorsque la fiche plaît et de l'ajouter à notre espace pour pouvoir la modifiervenir

Knowledge Helper est un application utilisant NodeJS et le framework SailsJS

## Installation DEV version

### Prérequis

Pour installer la version de développement vours devez d'abord installer :

* [Vagrant](http://downloads.vagrantup.com/tags/v1.3.5)
* [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
* [Le pack d'extension virtualbox](https://www.virtualbox.org/wiki/Downloads)

### Récupération des sources

Via https 
	$ git clone https://github.com/rdroro/kh-knowledge-helper.git
	$ cd kh-knowledge-helper

Ou via ssh (Pensez à ajouter une clé publique à votre compte GitHub)

	$ git clone git@github.com:rdroro/kh-knowledge-helper.git
	$ cd kh-knowledge-helper

### Installation environnement de développement

Le fichier Vagrantfile contient toutes les informations nécessaires à la mise en place de l'environnement de développement.
Une fois dans le dossier kh-knowledgde-helper lancer la commande :

	$ vagrant up

Cette commande se charge de récupérer une machine virtuelle vierge, de la configurer et d'installer les librairies nécessaires au développement.

En cas de problème, vous pouvez exécuter la commande @vagrant destroy@ qui supprimera la machine virtuelle. Réglez les problèmes puis relancer l'installation via vagrant up.

### Lancement du serveur NodeJS

Vérifiez que la machine virtuelle est correctement lancée via la commande :

	$ vagrant status

Nous pouvons maintenant nous connecter en SSH à la machine virtuelle pour lancer le serveur via la commande :

	$ vagrant ssh
	$ cd /vagrant && nodemon app.js

L'application est désormais disponible via un navigateur à l'URL [http://localhost:1337](http://localhost:1337)

### Fonctionnement

Maintenant que le serveur est lancé, vous pouvez éditer le code source de l'application via votre éditeur ou IDE préféré. Les sources sont en effet partagés entre la machine hôte et la machine virtuelle.


