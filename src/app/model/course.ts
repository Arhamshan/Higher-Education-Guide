
import {User} from './user';

export class NewCourses{
    
    id: number;
    title: string;
    alstreem: string;
    alresult: string;
    olresult: string;
    courseperiod: string;
    user:User;

    NewCourses(){
        this.id = 0;
        this.title ='';
        this.alstreem = '';
        this.alresult= '';
        this.olresult = '';
        this.courseperiod = '';

        this.user = null;
    }



}