angular
  .module('todo', [])
  .controller('TodoController', TodoController);

function TodoController () {
  this.tasks = ['Walk the dog', 'Hit up Grand Lake Farmers Market', 'Binge watch Game of Thrones reruns'];

  this.createTask = () => {
    this.tasks.push(this.taskName);
    this.taskName = '';
  };

  this.deleteTask = (index) => {
    this.tasks.splice(index,1);
  };
}
