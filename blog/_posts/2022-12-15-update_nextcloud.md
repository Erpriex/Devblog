---
title: Nextcloud - Mettre à jour son serveur
date: 2022-12-15
author: Clément Trempé
---

Nextcloud Hub 3 est sorti, et voici une méthode pour mettre à jour votre serveur vers la dernière version !


Tout d'abord, téléchargez la dernière version de Nextcloud
```sh
wget https://download.nextcloud.com/server/releases/latest.tar.bz2
```

<br>

Ensuite, décompressez l'archive téléchargée
```sh
tar -xf latest.tar.bz2
```

<br>

Et on copie les nouveaux fichiers vers notre serveur Nextcloud
```sh
rsync -a nextcloud/ /chemin/vers/votre/nextcloud/
```

<br>

A présent, en retournant sur votre Nextcloud, vous serez invité à mettre à jour votre serveur 😉
![](/assets/2022-12-15-update_nextcloud/update.PNG)