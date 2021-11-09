import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
export interface Event {
  _id: string;
  email: string;
  civility: string;
  first_name: string;
  last_name: string;
  company: {
    name: string;
    user_type: string;
  };
  user_status: string;
  count_document: number;
}

@Component({
  selector: 'app-table-index',
  templateUrl: './table-index.component.html',
  styleUrls: ['./table-index.component.css'],
})
export class TableIndexComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  public dataSource: Event[] = [];
  public displayedColumns: String[] = [];

  public tableForm!: FormGroup;

  ngOnInit(): void {
    this.getFieldsFromFile();

    this.displayedColumns = ['name', 'user_type', 'entity', 'status', 'action'];

    this.tableForm = this.formBuilder.group({
      mail: [''],
      civlity: [''],
      first_name: [''],
      last_name: [''],
      entity: [''],
      user_type: [''],
    });
  }

  public getFieldsFromFile() {
    const url = 'assets/data/mentor.json';
    this.http.get<Event[]>(url).subscribe((data) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

  delete(e: Event) {
    console.log(e);
  }
  edit(e: Event) {
    console.log(e);
  }

  onSubmit() {}

  open(mo: any) {
    this.modalService.open(mo, {
      centered: true,
      size: 'lg',
    });
  }
}
