import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css'],
})
export class AuthorCreateComponent implements OnInit {
  authorForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authorService: AuthorService
  ) {}

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      image: ['', Validators.required],
      birthDate: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  createAuthor(author: Author) {
    this.authorService.createAuthor(author).subscribe({
      next: (author) => {
        console.info('The author was created: ', author);
        this.toastr.success('Confirmation', 'Author created');
        this.authorForm.reset();
      },
      error: (er) => {
        this.toastr.error('Error creating the author', 'Error');
      },
    });
  }

  cancelCreation() {
    this.authorForm.reset();
  }
}