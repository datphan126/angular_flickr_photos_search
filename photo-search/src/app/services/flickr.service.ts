import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  private FLICKR_URL = "https://www.flickr.com/services/rest/";
  private flickrArgs = {
    params: {
      method: 'flickr.photos.search',
      api_key : 'b7f804b89b47a2cf77fd588148b42344',
      sort: "relevance",
      safe_search : '1',
      media: 'photos',
      format : 'json',
      nojsoncallback: '1',
      per_page : '25',
      content_type: '1',
      privacy_filter : '1'
    }
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  searchPhotos (keywords: string){
    this.flickrArgs.params['text'] = keywords;
    return this.httpClient.get(this.FLICKR_URL, this.flickrArgs);
  }

  getPhotoURL(photo: any): string {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  }
}
