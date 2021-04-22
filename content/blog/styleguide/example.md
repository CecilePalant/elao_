---
type:               "post"
title:              "Petit guide de style du blog"
date:               "2020-09-23"
publishdate:        "2020-09-23"
draft:              true
tableOfContent:     2

description:        "Tour d'horizon de ce qu'on a pour faire de beaux articles. Et quelques bonnes pratiques de rédaction."

thumbnail:          https://images.unsplash.com/photo-1533142266415-ac591a4deae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
credits:            { name: "Jon Tyson", url: "https://unsplash.com/@jontyson" }
tags:               ["Tag 1", "Tag 2"]
categories:         ["Dev", "Symfony"]
authors:            ["adefrance","tjarrand"]
tweetId: "1369737350830583811"
---

## Les titres

1 page = 1 titre principal `h1`.

Dans le blog, le `h1` est le titre de l'article. Dans le corps de l'article, on commence donc par des `h2`.

##h2 laceat quas odio atque molestiae
###h3 laceat quas odio atque molestiae
####h4 laceat quas odio atque molestiae
#####h5 laceat quas odio atque molestiae
######h6 laceat quas odio atque molestiae

## Les éléments typographiques

Nous avons des paragraphes, [des liens](https://www.elao.com/fr/), parfois du `code inline`.

- des listes de choses
- des listes de choses
- des listes de choses

> Nous avons aussi des citations.
> <cite>- Jane Doe</cite>

Un coup sur deux, on a un style différent de citation, sinon on s'ennuie.

> Quoi ? Un deuxième style de citation ? Eos officia, vel corporis eaque architecto eveniet voluptatibus, ullam impedit excepturi quis quidem sint facere laboriosam harum error esse iusto. Asperiores, placeat.
> <cite>John Doe</cite>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur.

!!! Titre
    Nous avons des `admonition` pour les informations à faire ressortir.

Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

!!! Titre success
    Le même composant dans le style "success".

Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

!!! Titre danger
    Le même composant dans le style "danger".

## Les images

Une image (qui a du sens, ça n'inclut pas les gifs rigolos) a toujours une légende, et si possible on crédite son auteur·ice.

<figure>
    <img src="https://images.unsplash.com/photo-1530023868717-cdb5554aea96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=788&q=80" alt="vivamus bibendum">
    <figcaption>
      <span class="figure__legend">David sous l'eau 🐬</span>
      <span class="figure__credits">Crédit photo : <a href="https://unsplash.com/@jbsinger1970">Jonathan Singer</a></span>
    </figcaption>
</figure>

```html
<!-- Comme ceci -->
<figure>
    <img src="photo.png" alt="photo de ...">
    <figcaption>
      <span class="figure__legend">Photo de ...</span>
      <span class="figure__credits">Crédit photo : <a href="">Nom de l'auteur</a></span>
    </figcaption>
</figure>
```

## Le code

Pensez à préciser dans le markdown le langage dans lequel est votre code, si vous voulez des couleurs ! 🌈

```
<html>
  <head></head>
  <body>
    Oups
  </body>
</html>
```

```html
<html>
  <head></head>
  <body>
    C'est mieux
  </body>
</html>
```

## Bonus

Comme toujours, on essaie tant que possible de choisir des photos libres de droit et d'en créditer les auteurs. Quelques sites de photos libres de droit : [Unsplash](https://unsplash.com/) (chouchou ❤️), [Pexels](https://www.pexels.com/), etc...

Pour créditer l'auteur de la photo de couverture, renseignez la clée `credits` dans le header de l'article:

```yaml
credits: { name: 'Jane Doe', url: 'https://unsplash.com/@janedoe' }
```
