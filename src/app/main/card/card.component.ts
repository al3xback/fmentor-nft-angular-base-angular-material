import { Component } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
	title = 'Equilibrium #3429';
	description = 'Our Equilibrium collection promotes balance and calm.';
	imageUrl = '/assets/images/equilibrium.jpg';
	ethereumAmount = 0.041;
	remainingTime = 3;
	author = {
		name: 'Jules Wyvern',
		imageUrl: '/assets/images/avatar.png'
	};
}
