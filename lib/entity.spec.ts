import 'jasmine';
import { Entity } from './entity.class';

export class TestEntity extends Entity<number> {
    protected idEquals(id: number): boolean {
        return this.id === id;
    }
    constructor(id: number) {
        super(id);
    }
}

describe('Entity', () => {
    it('equals entities with the same identifier', () => {
        const entity1 = new TestEntity(1);
        const entity2 = new TestEntity(1);

        expect(entity1.equals(entity2)).toBeTruthy();
    });

});
