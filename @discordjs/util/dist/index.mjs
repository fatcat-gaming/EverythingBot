var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/functions/lazy.ts
function lazy(cb) {
  let defaultValue;
  return () => defaultValue ??= cb();
}
__name(lazy, "lazy");

// src/functions/range.ts
function* range(range2) {
  let rangeEnd;
  let start = 0;
  let step = 1;
  if (typeof range2 === "number") {
    rangeEnd = range2;
  } else {
    start = range2.start;
    rangeEnd = range2.end;
    step = range2.step ?? 1;
  }
  for (let index = start; index < rangeEnd; index += step) {
    yield index;
  }
}
__name(range, "range");

// src/functions/calculateShardId.ts
function calculateShardId(guildId, shardCount) {
  return Number(BigInt(guildId) >> 22n) % shardCount;
}
__name(calculateShardId, "calculateShardId");

// src/JSONEncodable.ts
function isJSONEncodable(maybeEncodable) {
  return maybeEncodable !== null && typeof maybeEncodable === "object" && "toJSON" in maybeEncodable;
}
__name(isJSONEncodable, "isJSONEncodable");

// src/Equatable.ts
function isEquatable(maybeEquatable) {
  return maybeEquatable !== null && typeof maybeEquatable === "object" && "equals" in maybeEquatable;
}
__name(isEquatable, "isEquatable");
export {
  calculateShardId,
  isEquatable,
  isJSONEncodable,
  lazy,
  range
};
//# sourceMappingURL=index.mjs.map