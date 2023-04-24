import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { fromEvent, merge, Observable } from 'rxjs';
import { GenericValidator } from 'src/app/utils/generic.form.validator';
import { Organizador } from './models/organizador';


@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit, AfterViewInit {

@ViewChildren(FormControlName,{read: ElementRef}) formInputElements: ElementRef[];

inscricaoForm : FormGroup;
organizador: Organizador;
validationMessages: {[key: string]: {[key:string]: string } };
genericValidator: GenericValidator;
displayMessage: {[key: string]: string} = {};

constructor(private fb: FormBuilder) {

  this.validationMessages = {
    nome: {
      require: 'O Nome é requirido',
      minlength: 'O Nome precisa ter no mínimo 2 caracteres',
      maxlength: 'O Nome precisa ter no máximo 150 caracteres'
    },
    cpf: {
      require: 'O CPF é requirido',
      minlength: 'O CPF precisa ter no mínimo 2 caracteres',
      maxlength: 'O CPF precisa ter no máximo 150 caracteres'
      //rangeLength: 'O CPF precisa ter no conter 11 caracteres',
    },
    email: {
      require: 'O Email é requirido',
      email: 'Informe o e-mail',
      
    },
    senha: {
      require: 'O Senha é requirido',
      minlength: 'O Senha precisa ter no mínimo 6 caracteres',
     
    },
    senhaConfirmacao: {
      require: 'Informe a senha novamente',
      minlength: 'O Senha precisa ter no mínimo 6 caracteres',
      //equalTo: 'As senhas não conferem'
    },
  }
  this.genericValidator = new GenericValidator(this.validationMessages);
}
 
ngOnInit() {
  this.inscricaoForm = this.fb.group({
   nome: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(150)]],
   cpf: ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
   email:['',[Validators.required,Validators.email]],
   senha: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(50)]],
   senhaConfirmacao:['',[Validators.required,Validators.minLength(6),Validators.maxLength(50)]],

  });
}

ngAfterViewInit() {
 let controlBlurs: Observable<any>[] = this.formInputElements.map((formControl:ElementRef) => fromEvent(formControl.nativeElement,'blur'));

 merge(...controlBlurs).subscribe(value => {
  this.displayMessage =  this.genericValidator.processMessages(this.inscricaoForm);
 });
}

adicionarOrganizador(){
 
   //this.displayMessage = this.genericValidator.processMessages(this.inscricaoForm);
   
  if(this,this.inscricaoForm.valid && this.inscricaoForm.dirty) {

    const org = Object.assign({},this.organizador, this.inscricaoForm.value);
  }

  }
}
