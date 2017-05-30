
import {User} from './user';

export class NewCourses{
    
    id: number;
    institue: string;
    title: string;
    level: string;
    alstreem: string;
    alresult: string;
    olresult: string;
    courseperiod: string;
    coursedetails: string;
    user:User;

    NewCourses(){
        this.id = 0;
        this.institue= '';
        this.title ='';
        this.level = '';
        this.alstreem = '';
        this.alresult= '';
        this.olresult = '';
        this.courseperiod = '';
        this.coursedetails = '';

        this.user = null;
    }



}