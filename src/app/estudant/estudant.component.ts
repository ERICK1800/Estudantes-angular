import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EstudantService } from '../estudant.service';
import { Estudant } from '../estudantes';

@Component({
  selector: 'app-estudant',
  templateUrl: './estudant.component.html',
  styleUrls: ['./estudant.component.css']
})
export class EstudantComponent implements OnInit{

  estudantes: Estudant[] = [];
  formGroupEstudant: FormGroup;
  isEditing: boolean = false;

  constructor(private estudantService: EstudantService, private formBuilder: FormBuilder) {
    this.formGroupEstudant = formBuilder.group({
      id : [''],
      name : [''],
      email : [''],
      contato : [''],
      serie : ['']
    });
  }

  ngOnInit(): void {
    this.LoadEstudant();
  }

  LoadEstudant(){
    this.estudantService.getEstudant().subscribe(
    {
      next: data => this.estudantes = data,
      error: msg => console.log("Erro ao chamar o endpont " + msg)
    });
  }

  save(){
    if(this.isEditing){
      this.estudantService.updateEstudant(this.formGroupEstudant.value).subscribe({
        next: () => {
          this.LoadEstudant();
          this.formGroupEstudant.reset();
          this.isEditing = false;
        }
      })
    } else{
      this.estudantService.saveEstudant(this.formGroupEstudant.value).subscribe({
        next: data => {
          this.estudantes.push(data);
          this.formGroupEstudant.reset();
        }
      })
    }
  }

  remove(estudant: Estudant): void{
    this.estudantService.delEstudant(estudant).subscribe({
      next: () => this.LoadEstudant()
    })
  }

  edit(estudant: Estudant): void{
    this.formGroupEstudant.setValue(estudant);
    this.isEditing = true;
  }

}
