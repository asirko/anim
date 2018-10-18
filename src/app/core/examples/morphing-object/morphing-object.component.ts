import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './morphing-object.component.html',
  styleUrls: ['./morphing-object.component.scss']
})
export class MorphingObjectComponent {

  description = `
### Liste dynamique

Il s'agit d'animer les éléments d'une liste qui est mise à jour dynamiquement.
Cette évolution peut-être le résultat d'un observable changeant le jeu de donné
ou une modification faite directement sur un tableau mutable de manière synchrone.

Les éléments peuvent donc individuellement être ajouté ou retiré au cours du temps.

La liste est affiché avec \`*ngFor="let element of list$ | async"\`.
`;

  coreIdea = `
### Principe général

Angular met à disposition un _état virtuel_&nbsp;: \`void\`.
Cet état peut être vu comme _l'élément n'est pas dans le DOM._

Il est alors possible de créer une \`transition\` sur son ajout et sa suppression du DOM&nbsp;: \`void <=> *\`

**Attention&nbsp;:** dans le cas d'un tableau complexe d'objet, la détection de mise à jour peut ne pas fonctionner
correctement (aucun changement ou la transition se joue sur tous les éléments à chaque fois).
Dans ce cas, une piste de résolution est de prendre le contrôle sur le mécanisme de mise à jour du \`*ngFro\`
(cf: trackBy).
`;

  constructor() { }
}
