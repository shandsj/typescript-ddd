/**
 * Defines a base value object class.
 *
 * @export
 * @abstract
 * @class ValueObject
 * @template T
 */
export declare abstract class ValueObject<T> {
    /**
     * Determines whether the two value objects are equal.
     *
     * @abstract
     * @param {T} other
     * @returns {boolean}
     * @memberof ValueObject
     */
    abstract equals(other: T): boolean;
}
