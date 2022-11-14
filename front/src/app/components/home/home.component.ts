import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { TaskListService } from 'src/app/services/task-list.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: any;
  tasks: any;
  tasksList: any = [];
  description = '';
  title = '';
  listName = '';
  listDetail: any;
  modalRef: BsModalRef;

  titleModalTask = 'Adicionar Tarefa';
  titleModalList = 'Adicionar Lista';
  editModal = false;
  editModalList = false;
  itemEdit: any;

  constructor(
    private router: Router,
    private service: TaskListService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.loadItems();
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idUser');
    this.router.navigate(['/login']);
  }

  loadItems() {
    this.service.get().then((res) => {
      let i = res.data.filter(
        (f: any) => f.creator == localStorage.getItem('idUser')
      );
      this.items = i;
    });

    this.service.getTasks().then((res) => {
      this.tasks = res;
    });
  }

  getTasksList(items: any) {
    let i = this.tasks.data.filter((f: any) => f.listId == items.id);
    console.log(i);
    return i;
  }

  addTask(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      backdrop: false,
      keyboard: false,
    });
  }

  detail(template: TemplateRef<any>, item: any) {
    this.modalRef = this.modalService.show(template, {
      backdrop: false,
      keyboard: false,
    });
    this.listDetail = item;

    console.log(this.listDetail);

    this.tasksList = this.getTasksList(item);
  }

  saveTask() {
    let body;

    if (!this.editModal) {
      body = {
        title: this.title,
        description: this.description,
        listId: this.listDetail.id,
      };
      this.service
        .addTask(body)
        .then((r) => {
          alert('Tarefa adicionada com sucesso!');
          this.modalService.hide();
          this.loadItems();
        })
        .catch((r) => {
          alert('Erro ao adicionar a tarefa :(');
        });
    } else {
      body = {
        title: this.title,
        description: this.description,
        listId: this.itemEdit.listId,
        id: this.itemEdit.id,
      };
      this.service
        .updateTask(body)
        .then((r) => {
          alert('Tarefa atualizada com sucesso!');
          this.modalService.hide();
          this.loadItems();
        })
        .catch((r) => {
          alert('Erro ao atualizada a tarefa :(');
        });
    }
  }

  editList(template: TemplateRef<any>) {
    this.titleModalTask = 'Editar Lista';
    this.editModalList = true;
    this.listName = this.listDetail.listName;
    this.modalRef = this.modalService.show(template, {
      backdrop: false,
      keyboard: false,
    });
  }

  deleteList() {
    var result = confirm(
      'Deseja excluir a lista ' + this.listDetail.listName + ' ?'
    );

    if (result) {
      this.service
        .deleteList(this.listDetail.id)
        .then((r) => {
          alert('Lista deletada com sucesso!');
          this.modalService.hide();
          this.loadItems();
        })
        .catch((r) => {
          alert('Erro ao deletar a lista :(');
        });
    }
  }

  deleteTask(item: any) {
    var result = confirm('Deseja excluir a tarefa ' + item.title + ' ?');

    if (result) {
      this.service
        .deleteTask(item.id)
        .then((r) => {
          alert('Tarefa deletada com sucesso!');
          this.modalService.hide();
          this.loadItems();
        })
        .catch((r) => {
          alert('Erro ao deletar a tarefa :(');
        });
    }
  }

  addList(template: TemplateRef<any>) {
    this.titleModalTask = 'Adicionar Lista';
    this.editModalList = false;
    this.listName = ''
    this.modalRef = this.modalService.show(template, {
      backdrop: false,
      keyboard: false,
    });
  }

  saveList() {
    let body;

    if (this.editModalList) {
      body = {
        listName: this.listName,
        creator: localStorage.getItem('idUser'),
        id: this.listDetail.id,
      };
      this.service
        .updateList(body)
        .then((r) => {
          alert('Lista atualizada com sucesso!');
          this.modalService.hide();
          this.loadItems();
        })
        .catch((r) => {
          alert('Erro ao atualizar a lista :(');
        });
    } else {
      body = {
        listName: this.listName,
        creator: localStorage.getItem('idUser'),
      };
      this.service
        .addList(body)
        .then((r) => {
          alert('Lista adicionada com sucesso!');
          this.modalService.hide();
          this.loadItems();
        })
        .catch((r) => {
          alert('Erro ao adicionar a lista :(');
        });
    }
  }

  edit(template: TemplateRef<any>, item: any) {
    this.titleModalTask = 'Editar Tarefa';
    this.editModal = true;
    this.title = item.title;
    this.itemEdit = item;
    this.description = item.description;
    this.modalRef = this.modalService.show(template, {
      backdrop: false,
      keyboard: false,
    });
  }
}
