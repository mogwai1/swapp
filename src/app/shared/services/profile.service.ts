import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public getProfile(): Observable<Profile> {
    // TODO: this will call backend API when implemented. For now just store in localStorage.
    const profileStr = localStorage.getItem('sw_profile');
    const profile = JSON.parse(profileStr) as Profile;
    return of(profile || ({} as Profile));
  }

  public saveProfile(profile: Profile): Observable<Profile> {
    // TODO: this will call backend API when implemented. For now just store in localStorage.
    const profileStr = JSON.stringify(profile);
    localStorage.setItem('sw_profile', profileStr);
    return of(profile);
  }
}
