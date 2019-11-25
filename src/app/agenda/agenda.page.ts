import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss']
})
export class AgendaPage implements OnInit {
  // eventSource = [];
  // private previousUrl = '';
  // private title: string;

  // calendar = {
  //   mode: 'month',
  //   currentDate: new Date()
  // };
  // selectedDate = new Date();

  // documentTypeOptions = {
  //   convenio: 'CONVENIO',
  //   particular: 'PARTICULAR'
  // };
  // dentistaConvenioOptions = {
  //   paulo: 'Dr. Paulo',
  //   renata: 'Dra. Renata'
  // };
  // dentistaParticularOptions = {
  //   mariaEduarda: 'Dra. Maria Eduarda',
  //   diego: 'Dr. Diego'
  // };

  // documentService = {
  //   limpeza: 'LIMPEZA',
  //   estracao: 'ESTRAÇÃO',
  //   pivots: 'PIVÔTS',
  //   fluor: 'FLUOR - SELANTE',
  //   canal: 'TRAT. CANAL'
  // };
  // selectedDocumentType: string;

  constructor() {
    // this.db
    //   .collection(`events`)
    //   .snapshotChanges()
    //   .subscribe(colSnap => {
    //     this.eventSource = [];
    //     colSnap.forEach(snap => {
    //       let event: any = snap.payload.doc.data();
    //       event.id = snap.payload.doc.id;
    //       event.startTime = event.startTime.toDate();
    //       event.endTime = event.endTime.toDate();
    //       console.log(event);
    //       this.eventSource.push(event);
    //     });
    //   });
    //this.setTitle('Agende seu horário');
  }

  ngOnInit() {
    //
  }
  // addNewEvent() {
  //   let start = this.selectedDate;
  //   let end = this.selectedDate;
  //   end.setMinutes(end.getMinutes() + 60);

  //   let event = {
  //     title: 'Event #' + start.getMinutes(),
  //     startTime: start,
  //     endTime: end,
  //     allDay: false
  //   };

  //   this.db.collection(`events`).add(event);
  // }

  // onViewTitleChanged(title) {
  //   console.log(title);
  // }

  // onEventSelected(event) {
  //   console.log(
  //     'Event selected:' +
  //       event.startTime +
  //       '-' +
  //       event.endTime +
  //       ',' +
  //       event.title
  //   );
  // }

  // onTimeSelected(ev) {
  //   console.log(
  //     'Selected time: ' +
  //       ev.selectedTime +
  //       ', hasEvents: ' +
  //       (ev.events !== undefined && ev.events.length !== 0) +
  //       ', disabled: ' +
  //       ev.disabled
  //   );
  //   this.selectedDate = ev.selectedTime;
  // }

  // onCurrentDateChanged(event: Date) {
  //   console.log('current date change: ' + event);
  // }

  // onRangeChanged(ev) {
  //   console.log(
  //     'range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime
  //   );
  // }
  // protected setTitle(title: string) {
  //   this.title = title;
  // }
  // voltar() {
  //   this.navCtrl.back();
  // }
  // public getTitle() {
  //   return this.title;
  // }
  // public getPreviousUrl() {
  //   return this.previousUrl;
  // }
}
