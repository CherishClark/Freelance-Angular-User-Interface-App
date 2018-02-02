import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent{
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "aasdfasdf",
      file_url: 'http://google.com',
      updated_at: '2/2',
      image_url:'asdf'
    },
    {
      title: "My 2nd Doc",
      description: "aasdfasdf",
      file_url: 'http://google.com',
      updated_at: '2/2',
      image_url:'asdf'
    },
    {
      title: "My last Doc",
      description: "aasdfasdf",
      file_url: 'http://google.com',
      updated_at: '2/2',
      image_url:'asdf'
    }
  ]
}