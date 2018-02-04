import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal (99, 'Abc Company', 'http://portfolio.jordanhdugens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
  proposalTwo: Proposal = new Proposal (15, 'Blah Company', 'http://portfolio.jordanhdugens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
  proposalThree: Proposal = new Proposal (20, 'Foo Company', 'http://portfolio.jordanhdugens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')

  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree] 


}