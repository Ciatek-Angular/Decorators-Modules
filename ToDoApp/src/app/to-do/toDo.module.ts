import { NgModule } from '@angular/core'

import { toDoComponent } from './toDo.component'

@NgModule({
    declarations:[toDoComponent],
    exports: [toDoComponent],
})
export class ToDoModule {}