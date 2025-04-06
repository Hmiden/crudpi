import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private userService: UserService, private router: Router) {}  // Inject Router

  ngOnInit(): void {
    this.loadUsers();
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          // Remove the user from the list (optimistic UI update)
          this.users = this.users.filter(user => user.id !== userId);
          
          // Optionally, navigate to the same route to refresh the page and show the updated list
          this.router.navigateByUrl('/dashboard/listeusers', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/dashboard/listeusers']);
          });
        },
        (error) => {
          // Log the full error for debugging
          console.error('Error deleting user:', error);
          
          // Handle error based on HTTP status code
          if (error.status === 404) {
            this.error = 'User not found.';
          } else if (error.status === 500) {
            this.error = 'There was a problem deleting the user.';
          } else {
            this.error = 'An unknown error occurred.';
          }
        }
      );
    }
  }
  

  loadUsers(): void {
    this.isLoading = true;
    this.error = null;
    
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users. Please try again later.';
        this.isLoading = false;
        console.error('Error loading users:', err);
      }
    });
  }
}
