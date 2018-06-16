import { Entity } from './entity.class';
/**
 * Defines an interface for a repository.
 *
 * @export
 * @interface Repository
 * @template TEntity
 * @template TIdentifier
 */
export interface Repository<TEntity extends Entity<TIdentifier>, TIdentifier> {
    /**
     * Gets the entity with the specified identifier.
     *
     * @param {TIdentifier} id the identifier.
     * @returns {TEntity}
     * @memberof Repository
     */
    get(id: TIdentifier): TEntity;
    /**
     * Gets all the entities in the repository.
     *
     * @returns {TEntity[]}
     * @memberof Repository
     */
    all(): TEntity[];
    /**
     * Gets the number of entities in the repository.
     *
     * @returns {number}
     * @memberof Repository
     */
    count(): number;
    /**
     * Adds an entity to the repository.
     *
     * @param {TEntity} entity
     * @returns {boolean}
     * @memberof Repository
     */
    add(entity: TEntity): boolean;
    /**
     * Removes an entity from the repository.
     *
     * @param {TIdentifier} id
     * @returns {TEntity}
     * @memberof Repository
     */
    remove(id: TIdentifier): TEntity;
    /**
     * Updates the entity in the repository.
     *
     * @param {TEntity} entity
     * @returns {boolean}
     * @memberof Repository
     */
    update(entity: TEntity): boolean;
}
