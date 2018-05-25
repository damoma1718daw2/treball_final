import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize"
})
export class CapitalizePipe implements PipeTransform {
  transform(value:string,tipus:String) {
    if(value.indexOf(' ') !== -1){
        var inputPieces,
            i;
  
        value = value.toLowerCase();
        inputPieces = value.split(' ');
  
        for(i = 0; i < inputPieces.length; i++){
          inputPieces[i] = capitalizeString(inputPieces[i]);
        }
  
        return inputPieces.toString().replace(/,/g, ' ');
      }
      else {
        value = value.toLowerCase();
        return capitalizeString(value);
      }
  
      function capitalizeString(inputString){
        return inputString.substring(0,1).toUpperCase() + inputString.substring(1);
      }
  }
}