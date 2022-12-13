import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  taskList = [];
  taskName: string = "";

  @ViewChild('taskInput') input;

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,) {
  }

  ionViewDidLoad(){
  setTimeout(() => {
      this.input.setFocus();
    },350);
  }

  addTask(){
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = "";
    }
  }

  deleteTask(index){
    let alert = this.alertCtrl.create({
      title: 'คุณต้องการปรับปรุงรายละเอียดงาน?',
      buttons: [
        { text: 'ยกเลิก', role: 'cancel' },
        {
          text: 'ลบรายการ', handler: data => { this.taskList.splice(index, 1); }
        }
     ]
  });
  alert.present();

  }

updateTask(index) {
  let alert = this.alertCtrl.create({
      title: 'คุณต้องการปรับปรุงรายละเอียดงาน?',
      message: 'ป้อนรายละเอียดงานใหม่',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'ยกเลิก', role: 'cancel' },
                { text: 'ปรับปรุง', handler: data => {
                    this.taskList[index] = data.editTask; }
                }
               ]
  });
  alert.present();
}


}
