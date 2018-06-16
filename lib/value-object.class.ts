
/**
 * Defines a base value object class.
 *
 * @export
 * @abstract
 * @class ValueObject
 * @template T
 */
export abstract class ValueObject<T> {

    /**
     * Determines whether the two value objects are equal.
     *
     * @abstract
     * @param {T} other
     * @returns {boolean}
     * @memberof ValueObject
     */
    public abstract equals(other: T): boolean;
}
