import { Shape, EvilCircle } from "../js/main.js";

QUnit.module("EvilCircle", function () {
  QUnit.test("Make sure evil circle created successfully", function (assert) {
    const circle = new EvilCircle(0, 0);
    assert.ok(circle instanceof EvilCircle, "Evil circle created");
    assert.ok(circle instanceof Shape, "Evil circle is a shape");
  });

  QUnit.test("Make sure evil circle moves", function (assert) {
    const circle = new EvilCircle(0, 0);
    circle.x = 10;
    circle.y = 10;
    assert.equal(circle.x, 10, "Evil circle moved on x-axis");
    assert.equal(circle.y, 10, "Evil circle moved on y-axis");
  });

  QUnit.test("Make sure check bounds works", function (assert) {
    const circle = new EvilCircle(0, 0);
    const width = 100;
    const height = 100;
    circle.x = width + 10;
    circle.y = height + 10;
    circle.checkBounds();
    assert.ok(circle.x > width, "Evil circle is out of bounds on x-axis");
    assert.ok(circle.y > height, "Evil circle is out of bounds on y-axis");

    circle.x = -10;
    circle.y = -10;
    circle.checkBounds();
    assert.ok(circle.x < 0, "Evil circle is out of bounds on x-axis");
    assert.ok(circle.y < 0, "Evil circle is out of bounds on y-axis");

    circle.x = 50;
    circle.y = 50;
    circle.checkBounds();
    assert.ok(circle.x < width, "Evil circle is in bounds on x-axis");
    assert.ok(circle.y < height, "Evil circle is in bounds on y-axis");
  });
});
