import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  nTel: string;
  numPasseport: string;
  role: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Exemple de données utilisateur (tu peux remplacer par des données dynamiques via service)
  users: User[] = [
    {
      id: 1,
      firstName: 'Ali',
      lastName: 'Ben Salah',
      email: 'ali.ben@example.com',
      password: 'password123',
      nTel: '12345678',
      numPasseport: 'AB123456',
      role: 'ADMIN'
    },
    {
      id: 2,
      firstName: 'Leila',
      lastName: 'Mansour',
      email: 'leila.mansour@example.com',
      password: 'password123',
      nTel: '87654321',
      numPasseport: 'CD789012',
      role: 'GUIDE'
    }
  ];

  constructor(private router: Router) {}

  // Pour afficher ou cacher certains éléments selon la route
  get isUserManagementPage(): boolean {
    return this.router.url.includes('/list-users') || 
           this.router.url.includes('/add-user');
  }
}
