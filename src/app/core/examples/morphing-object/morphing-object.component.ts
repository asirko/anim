import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './morphing-object.component.html',
  styleUrls: ['./morphing-object.component.scss']
})
export class MorphingObjectComponent {

  description = `
### Objet mutant

Admettons que l'on ait un objet dont l'état est géré par un service, et que cet objet change
au cours du temps. Par exemple&nbsp;: un carrousel dont le contenu évolu.

Une animation classique pour montrer les transition entre 2 valeurs successives serait
un fade-out pour sortir l'élément précédent et un fade-in pour afficher le nouvel élément.

Ce contenu peut être manipulé par d'autre portion de l'application, dans ce cas, il a de forte chance
d'être géré par un observable. Avec l'usage du pipe async, le contenu est mis à jour directement.
`;

  coreIdea = `
### Principe général

Le mécanisme est centré sur l'utilisation de l'opérateur \`delayWhen\` de RxJS.
Il permet de retarder l'envoie de la donnée.

Ainsi, il est possible, à la réception d'une nouvelle valeur par l'observable, de retarder la propagation
de cette valeur jusqu'à l'IHM.

Avant le \`̀delayWhen\`, il est possible de déclencher l'animation avec un \`tap\`. Ensuite, il est possible
de laisser la valeur se propager après le \`(@animation.done)\`.
`;

  constructor() { }
}
