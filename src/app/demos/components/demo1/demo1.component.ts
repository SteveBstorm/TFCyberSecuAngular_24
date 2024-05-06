import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})
export class Demo1Component {
  //propriété public par défaut
 myString : string = "toto"
 //public string myString {get; set;}
 private _myNumber! : number

 get myNumber() : number {
  return this._myNumber *1.21
 }

 set myNumber(value : number) {
  this._myNumber = value
 }

 /*les propriétés doivent être initialisées
 au plus tard dans le constructeur
 !!! Vous pouvez utiliser l'opérateur ! pour préciser
 que la propriétés sera initialisée avant son utilisation
 sinon elle est considérée comme undefined
 */

 myDate! : Date
 myBool : boolean = false

 mySuperProp? : string | number = "5"

 myGenericType : any //Permet de stocker n'importe quoi

 constructor(){
  this.myNumber = 5
 }

 //nomDelaFonction(les params : typé) : typeDeRetour {}
 maFonction(nom: string, age : number = 18) : number | null  {
    this.methode()
    return 0
 }

 methode() {
  let x : number = 5;
  this.myNumber = 42
 }
}
