import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnotifireService } from 'ngx-snotifire';
import { fromEvent, merge, Observable } from 'rxjs';
import { GenericValidator } from 'src/app/utils/generic.form.validator';
import { Categoria, Endereco, Evento } from '../modls_eventos/evento';


@Component({
  selector: 'app-adicionar-evento',
  templateUrl: './adicionar-evento.component.html',
  styleUrls: []
})
export class AdicionarEventoComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  public eventoForm: FormGroup;
  public errors: any[] = [];
  public evento: Evento;
  public categorias: Categoria;
  public gratuito: Boolean;
  public online: Boolean;

  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  public displayMessage: { [key: string]: string } = {};

  constructor(private fb: FormBuilder, private router: Router, private snotifireService: SnotifireService){
    this.validationMessages = {
      nome: {
        require: 'O Nome é requirido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      dataInicio: {
        require: 'O dataInicio é requirido',
      },
      dataFim: {
        require: 'O dataFim é requirido',
       

      },
      organizadorId: {
        require: 'O organizador é requirido',
      }
    }
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.evento = new Evento();
    this.evento.endereco = new Endereco();
  }
  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

}
