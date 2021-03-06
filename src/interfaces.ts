export interface GanttProject {
    id: string;
    name: string;
    startDate?: Date;
    tasks: Task[];
}

export interface Task {
    id: string;
    treePath: string;
    parentId: string;
    name: string;
    resource?: string;
    start: Date;
    end?: Date;
    percentComplete?: number;
    status?: string;
}

export type TimeScale = Date[];

export interface IGanttOptions {
    scale?: IScale;
    zooming?: string;
}

export interface IScale {
    start?: Date;
    end?: Date;
    auto?: boolean;
}

export interface IBarStyle {
    status: string;
    backgroundColor: string;
    border: string;
    progressBackgroundColor: string;
}

export enum Zooming {
    hours,
    days
}

export interface IDimensions {
    width: number;
    height: number;
}

export type Cell = Date;
