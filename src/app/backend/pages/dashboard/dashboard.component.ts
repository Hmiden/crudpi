import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from 'src/app/services/admin.service'; // Add this import
import { User } from 'src/app/models/user.model'; // Add this import

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email: string | null = null;
  pendingUsers: (Partial<User> & { status?: string })[] = []; // Explicitly include status
  showPendingUsers: boolean = false; // Add this property

  constructor(
    private router: Router, 
    private authService: AuthService,
    private adminService: AdminService // Add this
  ) {}

  ngOnInit() {
    this.email = this.authService.getCurrentUserEmail();
    this.loadPendingUsers(); // Load pending users on init
  }

  get isUserManagementPage(): boolean {
    return this.router.url.includes('/list-users') || 
           this.router.url.includes('/add-user');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // Add these new methods
  togglePendingUsers() {
    this.showPendingUsers = !this.showPendingUsers;
    if (this.showPendingUsers && this.pendingUsers.length === 0) {
      this.loadPendingUsers();
    }
  }

  loadPendingUsers() {
    this.adminService.getPendingUsers().subscribe(
      users => this.pendingUsers = users,
      error => console.error('Error loading pending users', error)
    );
  }

  approveUser(userId: number) {
    this.adminService.approveUser(userId).subscribe(
      () => {
        // Remove the approved user from the list
        this.pendingUsers = this.pendingUsers.filter(user => user.id !== userId);
      },
      error => console.error('Error approving user', error)
    );
  }

  rejectUser(userId: number) {
    this.adminService.rejectUser(userId).subscribe(
      () => {
        // Remove the rejected user from the list
        this.pendingUsers = this.pendingUsers.filter(user => user.id !== userId);
      },
      error => console.error('Error rejecting user', error)
    );
  }
}