import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Http, Response} from "@angular/http";

import {Image} from "./image";
import {catchError, count, map} from "rxjs/internal/operators";
import {Lead} from "./lead";

@Injectable()
export class PhotoService{

    constructor(private http: HttpClient){ }

    public getImagesByAlbum(album_id) : Observable<Image[]> {
        return this.http.get<Image[]>('http://127.0.0.1/album/' + album_id).pipe(map(data=>{
            let images: Image[] = [];
            for(let i=0; data[i]!=null; i++){
                images.push(data[i]);
            }
            return images;
        }));
    }

    public getAllPhotosGroupedByAlbum(): Observable<Image[]> {
        return this.http.get<Image[]>('http://127.0.0.1/portfolio').pipe(map(data=>{
            let images: Image[] = [];
            for(let i=0; data[i]!=null; i++){
                images.push(data[i]);
            }
            return images;
        }));
    }

    public saveLead(name: string, phone: string, text: string){
        //const params: Lead = new Lead(name,phone,text);
        //console.log(params);
        const headers = {
            'Content-Type':'application/json'
        };
        //console.log(params);
        //return this.http.post('http://127.0.0.1/saveLead', params, {headers});

        const body = new HttpParams()
            .set('name', 'foo')
            .set('phone', 'bar')
            .set('text', 'baz');

        return this.http.post('http://127.0.0.1/saveLead', body,{headers});

    }



}






















