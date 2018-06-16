import 'jasmine';
import { Entity } from './entity.class';
export declare class TestEntity extends Entity<number> {
    protected idEquals(id: number): boolean;
    constructor(id: number);
}
