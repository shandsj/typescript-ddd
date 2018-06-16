
/**
 * Defines a base entity class.
 *
 * @export
 * @abstract
 * @class Entity
 * @template TIdentifier The type of the entity's identifier.
 */
export abstract class Entity<TIdentifier> {

    /**
     * Creates an instance of Entity.
     * @param {TIdentifier} id The identifier of the entity.
     * @memberof Entity
     */
    protected constructor(public readonly id: TIdentifier) {
    }

    /**
     * Determines whether the specified entity is the same as the current entity.
     *
     * @param {Entity<TIdentifier>} other the other entity.
     * @returns {boolean}
     * @memberof Entity
     */
    public equals(other: Entity<TIdentifier>): boolean {
        return this.idEquals(other.id);
    }

    /**
     * Determines whether this entity's identifier equals the specified identifier.
     *
     * @protected
     * @abstract
     * @param {TIdentifier} id
     * @returns {boolean}
     * @memberof Entity
     */
    protected abstract idEquals(id: TIdentifier): boolean;
}
