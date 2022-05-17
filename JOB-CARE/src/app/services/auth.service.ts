import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ciudades } from '../models/ciudades.model';
import { Provincia } from '../models/Provincia.model';

const BASEURL = environment.base_url +'/resetpassword';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  getProvincias(): Provincia[] {
    const provincias: Provincia[] = [
      { id: '01', name: 'Azuay' },
      { id: '02', name: 'Bolívar' },
      { id: '03', name: 'Cañar' },
      { id: '04', name: 'Carchi' },
      { id: '05', name: 'Chimborazo' },
      { id: '07', name: 'El Oro' },
      { id: '08', name: 'Esmeraldas' },
      { id: '09', name: 'Guayas' },
      { id: '10', name: 'Imbabura' },
      { id: '11', name: 'Loja' },
      { id: '12', name: 'Los Ríos' },
      { id: '13', name: 'Manabí' },
      { id: '14', name: 'Morona-Santiago' },
      { id: '15', name: 'Napo' },
      { id: '16', name: 'Pastaza' },
      { id: '17', name: 'Pichincha' },
      { id: '18', name: 'Tungurahua' },
      { id: '19', name: 'Zamora-Chinchipe' },
      { id: '20', name: 'Galápagos' },
      { id: '21', name: 'Sucumbíos' },
      { id: '22', name: 'Orellana' },
      { id: '23', name: 'Santo Domingo' },
      { id: '24', name: 'Santa Elena' },
    ];

    return provincias;
  }

  getCiudades(): Ciudades[] {
   const ciudades: Ciudades[] = [
    { id:'01',  name:'24 de Mayo'},
    { id:'02',  name: 'Aguarico'},
    { id:'03',  name:' Alausí'},
    { id:'04',  name:' Alfredo Baquerizo'},
    { id:'05',  name:' Ambato         '},
    { id:'05',  name:' Antonio Ante'},
    { id:'07',  name:' Arajuno'},
    { id:'08',  name:' Archidona'},
    { id:'09',  name:' Arenillas'},
    { id:'10',  name:' Atacames'},
    { id:'11',  name:' Atahualpa'},
    { id:'12',  name:' Azogues'},
    { id:'13',  name:' Baba'},
    { id:'14',  name:' Babahoyo'},
    { id:'15',  name:' Balao'},
    { id:'16',  name:' Balsas'},
    { id:'17',  name:' Balzar'},
    { id:'18',  name:' Baños'},
    { id:'19',  name:' Biblián'},
    { id:'20',  name:' Bolívar'},
    { id:'21',  name:' Bolívar'},
    { id:'22',  name:' Buena Fe'},
    { id:'23',  name:' Caluma'},
    { id:'24',  name:' Calvas'},
    { id:'25',  name:' Camilo Ponce Enríquez'},
    { id:'26',  name:' Cañar'},
    { id:'27',  name:' Carlos Julio Arosemena Tola'},
    { id:'28',  name:' Cascales'},
    { id:'29',  name:' Catamayo'},
    { id:'30',  name:' Cayambe'},
    { id:'31',  name:' Celica'},
    { id:'32',  name:' Centinela del Cóndor'},
    { id:'33',  name:' Cevallos'},
    { id:'34',  name:' Chaguarpamba'},
    { id:'35',  name:' Chambo'},
    { id:'36',  name:' Chilla'},
    { id:'37',  name:' Chillanes'},
    { id:'38',  name:' Chimbo'},
    { id:'39',  name:' Chinchipe'},
    { id:'40',  name:' Chone'},
    { id:'41',  name:' Chordeleg'},
    { id:'42',  name:' Chunchi    '},
    { id:'43',  name:' Colimes'},
    { id:'44',  name:' Colta'},
    { id:'45',  name:' Cotacachi'},
    { id:'46',  name:' Cuenca'},
    { id:'47',  name:' Cumandá'},
    { id:'48',  name:' Cuyabeno'},
    { id:'49',  name:' Daule'},
    { id:'50',  name:' Déleg'},
    { id:'51',  name:' Durán'},
    { id:'52', name: '  Echeandía'},
    { id:'53', name: '  El Carmen'},
    { id:'54', name: '  El Chaco'},
    { id:'55', name: '  El Empalme'},
    { id:'56', name: '  El Guabo'},
    { id:'57', name: '  El Pan'},
    { id:'58', name: '  El Pangui'},
    { id:'59', name: '  El Tambo'},
    { id:'60', name: '  El Triunfo'},
    { id:'61', name: '  Eloy Alfaro'},
    { id:'62', name: '  Esmeraldas'},
    { id:'63', name: '  Espejo'},
    { id:'64', name: '  Espíndola'},
    { id:'65', name: '  Flavio Alfaro'},
    { id:'66', name: '  Francisco de Orellana'},
    { id:'67', name: '  General Antonio Elizale'},
    { id:'68', name: '  Girón'},
    { id:'69', name: '  Gonzalo Pizarro'},
    { id:'70', name: '  Gonzanamá'},
    { id:'71', name: '  Guachapala'},
    { id:'72', name: '  Gualaceo'},
    { id:'73', name: '  Gualaquiza'},
    { id:'74', name: '  Guamote'},
    { id:'75', name: '  Guano'},
    { id:'76', name: '  Guaranda'},
    { id:'77', name: '  Guayaquil'},
    { id:'78', name: '  Huaca'},
    { id:'79', name: '  Huamboya'},
    { id:'80', name: '  Huaquillas'},
    { id:'81', name: '  Ibarra'},
    { id:'82', name: '  Isabela'},
    { id:'83', name: '  Isidro Ayora'},
    { id:'84', name: '  Jama'},
    { id:'85', name: '  Jaramijó'},
    { id:'86', name: '  Jipijapa'},
    { id:'87', name: '  Junín'},
    { id:'88', name: '  La Concordia'},
    { id:'89', name: '  La Joya de los Sachas'},
    { id:'90', name: '  La Libertad'},
    { id:'91', name: '  La Maná'},
    { id:'92', name: '  La Troncal'},
    { id:'93', name: '  Lago Agrio'},
    { id:'94', name: '  Las Lajas'},
    { id:'95', name: '  Las Naves'},
    { id:'96', name: '  Latacunga'},
    { id:'97', name: '  Limón Indanza'},
    { id:'98', name: '  Logroño'},
    { id:'99', name: '  Loja'},
    { id:'100', name: '  Lomas de Sargentillo'},
    { id:'101', name: '  Loreto'},
    { id:'102', name: '  Macará'},
    { id:'103', name: '  Machala'},
    { id:'104', name: '  Manta'},
    { id:'105', name: '  Marcabelí'},
    { id:'106', name: '  Marcelino Maridueña'},
    { id:'107', name: '  Mejía'},
    { id:'108', name: '  Mera'},
    { id:'109', name: '  Milagro'},
    { id:'110', name: '  Mira'},
    { id:'111', name: '  Mocache'},
    { id:'112', name: '  Mocha'},
    { id:'113', name: '  Montalvo'},
    { id:'114', name: '  Montecristi'},
    { id:'115', name: '  Montúfar'},
    { id:'116', name: '  Morona'},
    { id:'117', name: '  Muisne'},
    { id:'118', name: '  Nabón'},
    { id:'119', name: '  Nangaritza'},
    { id:'120', name: '  Naranjal'},
    { id:'121', name: '  Naranjito'},
    { id:'122', name: '  Nobol'},
    { id:'123', name: '  Olmedo'},
    { id:'124', name: '  Oña'},
    { id:'125', name: '  Otavalo'},
    { id:'126', name: '  Pablo Sexto'},
    { id:'127', name: '  Paján'},
    { id:'128', name: '  Palana'},
    { id:'129', name: '  Palenque'},
    { id:'130', name: '  Palestina'},
    { id:'131', name: '  Pallatanga'},
    { id:'132', name: '  Palora'},
    { id:'133', name: '  Paltas'},
    { id:'134', name: '  Pangua'},
    { id:'135', name: '  Paquisha'},
    { id:'136', name: '  Pasaje'},
    { id:'137', name: '  Pastaza'},
    { id:'138', name: '  Patate'},
    { id:'139', name: '  Paute'},
    { id:'140', name: '  Pedernales'},
    { id:'141', name: '  Pedro Carbo'},
    { id:'142', name: '  Pedro Moncayo'},
    { id:'143', name: '  Pedro Vicente Maldonado'},
    { id:'144', name: '  Penipe'},
    { id:'145', name: '  Pichincha'},
    { id:'146', name: '  Pimampiro'},
    { id:'147', name: '  Pindal'},
    { id:'148', name: '  Piñas'},
    { id:'149', name: '  Playas'},
    { id:'150', name: '  Portovelo'},
    { id:'151', name: '  Portoviejo'},
    { id:'152', name: '  Pucará'},
    { id:'153', name: '  Puebloviejo'},
    { id:'154', name: '  Puerto López'},
    { id:'155', name: '  Puerto Quito'},
    { id:'156', name: '  Pujilí'},
    { id:'157', name: '  Putumayo'},
    { id:'158', name: '  Puyango'},
    { id:'159', name: '  Quero'},
    { id:'160', name: '  Quevedo'},
    { id:'161', name: '  Quijos'},
    { id:'162', name: '  Quilanga'},
    { id:'163', name: '  Quinindé'},
    { id:'164', name: '  Quinsaloma'},
    { id:'165', name: '  Quito'},
    { id:'166', name: '  Riobamba'},
    { id:'167', name: '  Rioverde'},
    { id:'168', name: '  Rocafuerte'},
    { id:'169', name: '  Rumiñahui'},
    { id:'170', name: '  Salcedo'},
    { id:'171', name: '  Salinas'},
    { id:'172', name: '  Salitre'},
    { id:'173', name: '  Samborondón'},
    { id:'174', name: '  San Cristóbal'},
    { id:'175', name: '  San Fernando'},
    { id:'176', name: '  San Juan Bosco'},
    { id:'177', name: '  San Lorenzo'},
    { id:'178', name: '  San Miguel'},
    { id:'179', name: '  San Miguel de Urcuquí'},
    { id:'180', name: '  San Miguel de los Bancos'},
    { id:'181', name: '  San Pedro de Pelileo'},
    { id:'182', name: '  San Vicente'},
    { id:'183', name: '  Santa Ana'},
    { id:'184', name: '  Santa Clara'},
    { id:'185', name: '  Santa Cruz'},
    { id:'186', name: '  Santa Elena'},
    { id:'187', name: '  Santa Isabel'},
    { id:'188', name: '  Santa Lucía'},
    { id:'189', name: '  Santa Rosa'},
    { id:'190', name: '  Santiago de Méndez'},
    { id:'191', name: '  Santiago de Píllaro'},
    { id:'192', name: '  Santo Domingo'},
    { id:'193', name: '  Saquisilí                  '},
    { id:'194', name: '  Saraguro'},
    { id:'195', name: '  Sevilla de Oro'},
    { id:'196', name: '  Shushufindi'},
    { id:'197', name: '  Sigchos'},
    { id:'198', name: '  Sígsig'},
    { id:'199', name: '  Simón Bolívar'},
    { id:'200', name: '  Sozoranga'},
    { id:'201', name: '  Sucre'},
    { id:'202', name: '  Sucúa'},
    { id:'203', name: '  Sucumbíos'},
    { id:'204', name: '  Suscal'},
    { id:'205', name: '  Taisha'},
    { id:'206', name: '  Tena'},
    { id:'207', name: '  Tisaleo'},
    { id:'208', name: '  Tiwintza'},
    { id:'209', name: '  Tosagua'},
    { id:'210', name: '  Tulcán'},
    { id:'211', name: '  Urdaneta'},
    { id:'212', name: '  Valencia'},
    { id:'213', name: '  Ventanas'},
    { id:'214', name: '  Vinces'},
    { id:'215', name: '  Yacuambi'},
    { id:'216', name: '  Yaguachi'},
    { id:'217', name: '  Yantzaza'},
    { id:'218', name: '  Zamora'},
    { id:'219', name: '  Zapotillo'},
    { id:'220', name: '  Zaruma'},
   ];
return ciudades;
  }

  constructor(private http: HttpClient) { }

  registerUser(body): Observable<any> {
    return this.http.post(`${BASEURL}/register`, body);
  }

  loginUser(body): Observable<any> {
    return this.http.post(`${BASEURL}/login`, body);
  }

  requestReset(body): Observable<any> {
    return this.http.post(`${BASEURL}/req-reset-password`, body);
  }

  newPassword(body): Observable<any> {
    return this.http.post(`${BASEURL}/new-password`, body);
  }

  ValidPasswordToken(body): Observable<any> {
    return this.http.post(`${BASEURL}/valid-password-token`, body);
  }
  }

