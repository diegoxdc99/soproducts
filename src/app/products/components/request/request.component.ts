import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.sass']
})
export class RequestComponent implements OnInit {
  addressForm = this.fb.group({
    name: [null, Validators.required],
    dateBirth: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    file: [null, Validators.compose([
      Validators.required
    ])]
  });
  productId: string;
  validationMessages = {
    name: [
      { type: 'required', message: 'El nombre es requerido' }
    ],
    dateBirth: [
      { type: 'required', message: 'La fecha de nacimiento debe ser válida'},
    ],
    address: [
      { type: 'required', message: 'La dirección es requerida'},
    ],
    city: [
      { type: 'required', message: 'La ciudad es requerida'},
    ],
    file: [
      { type: 'required', message: 'El archivo es requerido' }
    ]
  };

  cities = [
    'Abejorral',
    'Abriaqu\u00ed',
    'Alejandr\u00eda',
    'Amag\u00e1',
    'Amalfi',
    'Andes',
    'Angel\u00f3polis',
    'Angostura',
    'Anor\u00ed',
    'Anz\u00e1',
    'Apartad\u00f3',
    'Arboletes',
    'Argelia',
    'Armenia',
    'Barbosa',
    'Bello',
    'Belmira',
    'Betania',
    'Betulia',
    'Brice\u00f1o',
    'Buritic\u00e1',
    'C\u00e1ceres',
    'Caicedo',
    'Caldas',
    'Campamento',
    'Ca\u00f1asgordas',
    'Caracol\u00ed',
    'Caramanta',
    'Carepa',
    'Carolina del Pr\u00edncipe',
    'Caucasia',
    'Chigorod\u00f3',
    'Cisneros',
    'Ciudad Bol\u00edvar',
    'Cocorn\u00e1',
    'Concepci\u00f3n',
    'Concordia',
    'Copacabana',
    'Dabeiba',
    'Donmat\u00edas',
    'Eb\u00e9jico',
    'El Bagre',
    'El Carmen de Viboral',
    'El Pe\u00f1ol',
    'El Retiro',
    'El Santuario',
    'Entrerr\u00edos',
    'Envigado',
    'Fredonia',
    'Frontino',
    'Giraldo',
    'Girardota',
    'G\u00f3mez Plata',
    'Granada',
    'Guadalupe',
    'Guarne',
    'Guatap\u00e9',
    'Heliconia',
    'Hispania',
    'Itag\u00fc\u00ed',
    'Ituango',
    'Jard\u00edn',
    'Jeric\u00f3',
    'La Ceja',
    'La Estrella',
    'La Pintada',
    'La Uni\u00f3n',
    'Liborina',
    'Maceo',
    'Marinilla',
    'Medell\u00edn',
    'Montebello',
    'Murind\u00f3',
    'Mutat\u00e1',
    'Nari\u00f1o',
    'Nech\u00ed',
    'Necocl\u00ed',
    'Olaya',
    'Peque',
    'Pueblorrico',
    'Puerto Berr\u00edo',
    'Puerto Nare',
    'Puerto Triunfo',
    'Remedios',
    'Rionegro',
    'Sabanalarga',
    'Sabaneta',
    'Salgar',
    'San Andr\u00e9s de Cuerquia',
    'San Carlos',
    'San Francisco',
    'San Jer\u00f3nimo',
    'San Jos\u00e9 de la Monta\u00f1a',
    'San Juan de Urab\u00e1',
    'San Luis',
    'San Pedro de Urab\u00e1',
    'San Pedro de los Milagros',
    'San Rafael',
    'San Roque',
    'San Vicente',
    'Santa B\u00e1rbara',
    'Santa Fe de Antioquia',
    'Santa Rosa de Osos',
    'Santo Domingo',
    'Segovia',
    'Sons\u00f3n',
    'Sopetr\u00e1n',
    'T\u00e1mesis',
    'Taraz\u00e1',
    'Tarso',
    'Titirib\u00ed',
    'Toledo',
    'Turbo',
    'Uramita',
    'Urrao',
    'Valdivia',
    'Valpara\u00edso',
    'Vegach\u00ed',
    'Venecia',
    'Vig\u00eda del Fuerte',
    'Yal\u00ed',
    'Yarumal',
    'Yolomb\u00f3',
    'Yond\u00f3',
    'Zaragoza'
  ];

  constructor(
    private fb: FormBuilder,
    private ordersService: OrdersService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  createOrder(event: Event) {
    event.preventDefault();
    if (this.addressForm.valid) {
      const newOrder = Object.assign({}, this.addressForm.value);
      this.ordersService.addOrder(newOrder, this.productId);
      this.toastr.success(`Con el Id: ${newOrder.id}`, 'Orden creada', {
        closeButton: true
      });
    }
  }
}
