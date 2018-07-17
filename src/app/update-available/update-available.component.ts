import { Component } from '@angular/core';

@Component({
  selector: 'pg-update-available',
  templateUrl: './update-available.component.html',
  styleUrls: ['./update-available.component.scss']
})
export class UpdateAvailableComponent {

  reload() {
    window.location.reload();
  }
}
