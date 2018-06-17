"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var entity_class_1 = require("./entity.class");
var TestEntity = /** @class */ (function (_super) {
    __extends(TestEntity, _super);
    function TestEntity(id) {
        return _super.call(this, id) || this;
    }
    TestEntity.prototype.idEquals = function (id) {
        return this.id === id;
    };
    return TestEntity;
}(entity_class_1.Entity));
exports.TestEntity = TestEntity;
describe('Entity', function () {
    it('equals entities with the same identifier', function () {
        var entity1 = new TestEntity(1);
        var entity2 = new TestEntity(1);
        expect(entity1.equals(entity2)).toBeTruthy();
    });
});
