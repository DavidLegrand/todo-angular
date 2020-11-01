import { element } from 'protractor';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      team: ['', Validators.required],
      skills: this.fb.array([]),
    });
  }

  onSubmit() {
    const newUser = new User(
      this.userForm.value['firstName'],
      this.userForm.value['lastName'],
      this.userForm.value['email'],
      this.userForm.value['team'],
      this.userForm.value['skills']
    );
    this.us.addUser(newUser);
    this.router.navigate(['/users']);
  }

  getSkills() {
    return this.userForm.get('skills') as FormArray;
  }

  onAddSkill() {
    const newSkillControl = this.fb.control('', Validators.required);
    this.getSkills().push(newSkillControl);
  }
  onRemoveSkill() {
    this.getSkills().removeAt(this.getSkills().length - 1);
  }
}
