import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planning } from '../models/planning.model';
import { Guide } from 'src/app/models/guide.model';
@Injectable({
  providedIn: 'root'
})
export class PlanningService {



  
  



private apiUrl = 'http://localhost:8089/tourisme/Planning/viewPlanning'  ;
  private apiUrl2= 'http://localhost:8089/tourisme/Planning/addPlanning';
  private apiUrl3 = 'http://localhost:8089/tourisme/Planning/updateGuide';
  private apiUrl4 = 'http://localhost:8089/tourisme/Planning/getOne';   constructor(private http: HttpClient) {}
  private apiUrl5= 'http://localhost:8089/tourisme/Planning/deletePlanning';
  getPlanning(): Observable<Planning[]> {
    return this.http.get<Planning[]>(this.apiUrl);
  }
  

  addPlanning(Planning: Planning): Observable<Planning> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Planning>(this.apiUrl2, Planning, { headers });
  }
  
  getPlanningById(id: number): Observable<Planning> {
    return this.http.get<Planning>(`${this.apiUrl4}/${id}`);  // Replace the path with the correct API
  }

  // Update the Planning
  editPlanning(Planning: Planning): Observable<Planning> {
    console.log("Sending PUT request to:", `${this.apiUrl3}/${Planning.id}`, "with data:", Planning);
    return this.http.put<Planning>(`${this.apiUrl3}/${Planning.id}`, Planning, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
    
    // Update the Planning
    deletePlanning(PlanningId: number): Observable<any> {
      const url = `${this.apiUrl5}/${PlanningId}`;
      return this.http.delete(url);  // Use http.delete() for the DELETE request
    }
   
}

