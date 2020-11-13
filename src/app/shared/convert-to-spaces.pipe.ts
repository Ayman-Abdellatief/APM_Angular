import { from, pipe } from 'rxjs';
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
        name : 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string ,charachter:string):string {
         return value.replace(charachter,' ');
    }

}