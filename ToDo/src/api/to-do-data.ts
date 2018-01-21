// We need somewhere to store our data. In this example we will be creating a couple of files for both,
// modeling the data structure and using our test data: to-do.ts and api/to-do-data.ts, as follows:

// Down the road, the api folder can be replaced by a back-end service reference, built with another technology such as Node or Firebase.

import { Todo } from '../app/to-do/to-do';

export const TODO_ITEMS: Todo[] = [
    {
        id: 1,
        name: 'Name',
        notes: 'New Note',
        // due: new Date(new Date().setDate(new Date().getDate() + 4)),
        done: false
    }, {
        id: 2,
        name: 'Name',
        notes: 'New Note',
        // due: new Date(new Date().setDate(new Date().getDate() + 5)),
        done: false
    }, {
        id: 3,
        name: 'Name',
        notes: 'New Note',
        // due: new Date(new Date().setDate(new Date().getDate() - 1)),
        done: true
    }
];