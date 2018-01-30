import { Component } from '@angular/core';

interface ContactInfo {
  name: string;
  subject: string;
  body: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactForm {

  contactInfo: ContactInfo = {
    name: '',
    subject: '',
    body: '',
  };

  onSubmit() {
    const { name, subject, body } = this.contactInfo;

    window.open(`mailto:ephraim.pei@gmail.com?subject=${name}-${subject}&body=${body}`);
  }

}
