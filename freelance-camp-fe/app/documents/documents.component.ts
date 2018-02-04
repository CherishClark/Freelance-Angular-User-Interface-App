import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls:['documents.component.css']
})

export class DocumentsComponent{
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "aasdfasdf",
      file_url: 'http://google.com',
      updated_at: '2/2',
      image_url:'https://static.pexels.com/photos/461064/pexels-photo-461064.jpeg'
    },
    {
      title: "My 2nd Doc",
      description: "aasdfasdf",
      file_url: 'http://google.com',
      updated_at: '2/2',
      image_url:'https://static.pexels.com/photos/461064/pexels-photo-461064.jpeg'
    },
    {
      title: "My last Doc",
      description: "aasdfasdf",
      file_url: 'http://google.com',
      updated_at: '2/2',
      image_url:'https://static.pexels.com/photos/461064/pexels-photo-461064.jpeg'
    }
  ]
}