"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines a base entity class.
 *
 * @export
 * @abstract
 * @class Entity
 * @template TIdentifier The type of the entity's identifier.
 */
var Entity = /** @class */ (function () {
    /**
     * Creates an instance of Entity.
     * @param {TIdentifier} id The identifier of the entity.
     * @memberof Entity
     */
    function Entity(id) {
        this.id = id;
    }
    /**
     * Determines whether the specified entity is the same as the current entity.
     *
     * @param {Entity<TIdentifier>} other the other entity.
     * @returns {boolean}
     * @memberof Entity
     */
    Entity.prototype.equals = function (other) {
        return this.idEquals(other.id);
    };
    return Entity;
}());
exports.Entity = Entity;
