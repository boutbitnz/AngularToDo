// We need somewhere to store our data. In this example we will be creating a couple of files for both,
// modeling the data structure and using our test data: to-do.ts and api/to-do-data.ts, as follows:

export interface Todo {
    id: number;
    name: string;
    notes: string;
    due: Date;
    done: Boolean;
}