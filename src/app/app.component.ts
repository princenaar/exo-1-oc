import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercice 1 OpenClassrooms';
  posts = [
    {
      title: 'Milan SKRINIAR',
      content: 'Défenseur central slovaque portant le numéro 37. Droitier, grand et solide. 2e meilleur défenseur de série A en 2018',
      loveIts: '10',
      createdAt: new Date()
    }, {
      title: 'Marcelo BROZOVIC',
      content: 'Milieu relayeur croate. Replacé en regista par Spaletti. Le meneur de jeu du club. Grosse activité et' +
        ' une qualité de passe exceptionnelle.',
      loveIts: '10',
      createdAt: new Date()
    }, {
      title: 'Joao MARIO',
      content: 'Milieu de terrain portugais surcoté. A l\'impact physique d\'un poussin asthmatique. Il sera bientot dégagé d\'ailleurs' ,
      loveIts: '-1',
      createdAt: new Date()
    }, {
      title: 'Matias VECINO',
      content: 'Marathonien uruguayen qui joue comme relayeur à Milan. Il reste néanmoins le clutch player de l\'équipe en étant impliqué' +
        'dans tous les buts importants de l\'équipe',
      loveIts: '5',
      createdAt: new Date()
    }
  ];
}
