// tslint:disable-next-line:import-spacing
import{HttpModule, Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';


export class SearchItem {
    constructor(public name: string,
                public artist: string,
                public link: string,
                public thumbnail: string,
                public artistId: string) {
    }
  }

@Injectable()
// tslint:disable-next-line:class-name
export class searchService {

    rootUrl = 'https://itunes.apple.com/search';
    results: Object[];
    loading: boolean;

    constructor(private http: Http) {
        this.results = [];
        this.loading = false;
    }


    search(term: string) {
        const promise = new Promise((resolve, reject) => {
            const qUrl = `${this.rootUrl}?term=${term}&media=music&limit=200`;
            this.http.get(qUrl)
            .toPromise()
            .then(res => {
                this.results = res.json().results.map(item => {
                    return new SearchItem(
                        item.trackName,
                        item.artistName,
                        item.trackViewUrl,
                        item.artworkUrl100,
                        item.artistId
                    );
                  });
                resolve();
            },
            msg => {
                reject(msg);
            }
            );
        });
        return promise;
    }

}
