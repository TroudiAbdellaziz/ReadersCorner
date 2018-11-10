import { Component, AfterViewInit } from '@angular/core';
@Component({
	templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
	public books:Array<any>=[{
		title:"The stranger",
		author:'Albert Camus',
		price:15,
		nbSells:50,
		language: ["fr","en"],
		picture: 'thestranger.jpg',
		soldOut: false,
		description:"The title character of The Stranger is Meursault, a Frenchman who lives in Algiers (a pied-noir). The novel is famous for its first lines: “Mother died today. Or maybe it was yesterday, I don’t know.” They capture Meursault’s anomie briefly and brilliantly."
	  },{
		title:"The Metamorphosis",
		author:'Franz Kafka',
		price:19,
		nbSells:100,
		language: ["es","en"],
		picture: 'metamorphosis.jpg',
		soldOut: true,
		description:"The opening sentence of The Metamorphosis has become one of the most famous in Western literature: “As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.”"
		},
		{
			title:"Thus Spoke Zarathustra",
			author:'Frederich Nietzsche',
			price:19,
			nbSells:250,
			language: ["fr","en"],
			picture: 'thus_spoke.jpg',
			soldOut: false,
			description:"A tremendously influential philosophical work of the late nineteenth century, Thus Spake Zarathustra is also a literary masterpiece by one of the most important thinkers of modern times. In it, the ancient Persian religious leader Zarathustra (or Zoroaster)"	
		}
		,{
				title:"The Enchiridion of Epictetus",
				author:'Epictetus',
				price:19,
				nbSells:250,
				language: ["en"],
				picture: 'epictutes.jpg',
				soldOut: false,
				description:"The Enchiridion (Greek for Handbook) of Epictetus is a favourite text of the Stoic school of philosophy. Compiled by Arrian, a former pupil around the time of Epictetus’ death in 135 AD, this enduring text is a compilation of lecture notes based on Epictetus’ lessons."
				},

		{
				title:"Sophie's World",
				author:'Jostein Gaarder',
				price:19,
				nbSells:250,
				language: ["fr","en","es"],
				picture: 'sophie.jpg',
				soldOut: true,
				description:"This long, dense novel, a bestseller in the author's native Norway, offers a summary history of philosophy embedded in a philosophical mystery disguised as a children's book-but only sophisticated young adults would be remotely interested."
		},

		{
			title:"Atlas Shrugged",
			author:'Ayn Rand',
			price:19,
			nbSells:123,
			language: ["es","en"],
			picture: 'ayn.jpg',
			soldOut: false,
			description:"Who is John Galt? When he says that he will stop the motor of the world, is he a destroyer or a liberator? Why does he have to fight his battles not against his enemies but against those who need him most? Why does he fight his hardest battle against the woman he loves?"
}
			
			];
	
			subtitle:string;	
	constructor() {
		this.subtitle = "This is some text within a card block."
	}

	ngAfterViewInit(){}
}