import { Component, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class TodoComponent {
  todos = signal<Todo[]>([]);
  newTodoTitle = signal('');
  nextId = signal(1);
  filter = signal<'all' | 'active' | 'completed'>('all');

  get filteredTodos() {
    const allTodos = this.todos();
    switch (this.filter()) {
      case 'active':
        return allTodos.filter(todo => !todo.completed);
      case 'completed':
        return allTodos.filter(todo => todo.completed);
      default:
        return allTodos;
    }
  }

  get completedCount() {
    return this.todos().filter(todo => todo.completed).length;
  }

  get activeCount() {
    return this.todos().length - this.completedCount;
  }

  addTodo() {
    const title = this.newTodoTitle().trim();
    if (title) {
      this.todos.set([
        ...this.todos(),
        {
          id: this.nextId(),
          title,
          completed: false
        }
      ]);
      this.nextId.update(id => id + 1);
      this.newTodoTitle.set('');
    }
  }

  toggleTodo(id: number) {
    this.todos.set(
      this.todos().map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  deleteTodo(id: number) {
    this.todos.set(this.todos().filter(todo => todo.id !== id));
  }

  clearCompleted() {
    this.todos.set(this.todos().filter(todo => !todo.completed));
  }

  handleKeypress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTodo();
    }
  }
}